export type ApiErrorData = {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
};

export class ApiError extends Error {
  status: number;
  code?: string;
  details?: Record<string, unknown>;

  constructor(status: number, data: ApiErrorData) {
    super(data.message);
    this.name = 'ApiError';
    this.status = status;
    this.code = data.code;
    this.details = data.details;
  }
}

export async function normalizeError(response: Response): Promise<ApiError> {
  let data: ApiErrorData;

  try {
    data = await response.json();
  } catch {
    data = { message: response.statusText || 'An unexpected error occurred' };
  }

  return new ApiError(response.status, data);
}
