export const ENV = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
} as const;

// Validate that required env vars are present in development
if (process.env.NODE_ENV === 'development') {
  Object.entries(ENV).forEach(([key, value]) => {
    if (!value) {
      console.warn(`⚠️ Environment variable ${key} is missing!`);
    }
  });
}
