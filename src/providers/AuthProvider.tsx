'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useSession } from '@/features/auth/hooks/useSession';
import { User, Role } from '@/types/user';

interface AuthContextType {
  user: User | null;
  role: Role | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  isAuthenticated: false,
  isLoading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, isPending } = useSession();

  const value: AuthContextType = {
    user: user || null,
    role: (user?.role as Role) || null,
    isAuthenticated: !!user,
    isLoading: isPending,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
