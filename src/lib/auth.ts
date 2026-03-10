import { betterAuth } from 'better-auth';

export const auth = betterAuth({
  database: {
    provider: 'sqlite',
    url: process.env.DATABASE_URL || ':memory:',
  },
  emailAndPassword: {
    enabled: true,
  },
});
