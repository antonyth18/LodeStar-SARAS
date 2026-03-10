import { betterAuth } from 'better-auth';
import { Role } from '@/types/user';
import Database from 'better-sqlite3';

export const auth = betterAuth({
  database: new Database('dev.db'),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: 'string',
        defaultValue: 'student' as Role,
      },
    },
  },
});
