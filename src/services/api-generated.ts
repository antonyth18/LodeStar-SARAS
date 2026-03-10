import { OpenAPI } from './generated/core/OpenAPI';
import { ENV } from '@/lib/env';

/**
 * Configure the auto-generated API client with environment variables
 * and default settings.
 */
export function configureApi() {
  OpenAPI.BASE = ENV.NEXT_PUBLIC_API_URL;
  OpenAPI.WITH_CREDENTIALS = true; // For BetterAuth cookies

  // You can also add dynamic tokens or custom headers here
  // OpenAPI.TOKEN = async () => '...';
}

// Automatically configure on import if in browser
if (typeof window !== 'undefined') {
  configureApi();
}

export * from './generated';
