'use client';

import { authClient } from '@/lib/auth-client';
import { useUserStore } from '@/stores/useUserStore';
import { useEffect } from 'react';
import { User, Role } from '@/types/user';

export const useSession = () => {
  const { data: session, isPending, error, refetch } = authClient.useSession();
  const { setUser } = useUserStore();

  useEffect(() => {
    if (session?.user) {
      setUser(session.user as unknown as User);
    } else if (!isPending) {
      setUser(null);
    }
  }, [session, isPending, setUser]);

  return {
    session,
    user: session?.user as unknown as User | undefined,
    role: (session?.user as unknown as User)?.role as Role | undefined,
    isPending,
    error,
    refetch,
  };
};

export const useUser = () => {
  const { user } = useSession();
  return user;
};

export const useRole = () => {
  const { role } = useSession();
  return role;
};
