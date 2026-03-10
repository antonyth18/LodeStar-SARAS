import { ENV } from './env';
import { normalizeError } from './api-error';

type RequestOptions = RequestInit & {
  params?: Record<string, string>;
};

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { params, headers, ...rest } = options;

  const url = new URL(`${ENV.NEXT_PUBLIC_API_URL}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
  }

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // BetterAuth uses cookies for session management in Next.js.
  // We ensure credentials are included to send cookies with requests.
  const response = await fetch(url.toString(), {
    ...rest,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    credentials: 'include',
  });

  if (!response.ok) {
    if (response.status === 401) {
      // Handle unauthorized (e.g., redirect to login or clear session)
      console.error('Unauthorized request - 401');
    }
    throw await normalizeError(response);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

export const apiClient = {
  get: <T>(path: string, options?: RequestOptions) =>
    request<T>(path, { ...options, method: 'GET' }),

  post: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>(path, { ...options, method: 'POST', body: JSON.stringify(body) }),

  put: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>(path, { ...options, method: 'PUT', body: JSON.stringify(body) }),

  patch: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>(path, { ...options, method: 'PATCH', body: JSON.stringify(body) }),

  delete: <T>(path: string, options?: RequestOptions) =>
    request<T>(path, { ...options, method: 'DELETE' }),
};
