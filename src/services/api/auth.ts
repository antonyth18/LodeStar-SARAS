import { authClient } from '@/lib/auth-client';
import { Role } from '@/types/user';

export const authService = {
  login: async (email: string, password: string) => {
    return await authClient.signIn.email({
      email,
      password,
    });
  },

  signup: async (email: string, password: string, name: string, role: Role = 'student') => {
    return await authClient.signUp.email({
      email,
      password,
      name,
      role,
    } as unknown as { email: string; name: string; password: string }); // Casting to unknown then expected fields
  },

  logout: async () => {
    return await authClient.signOut();
  },

  getSession: async () => {
    return await authClient.getSession();
  },
};
