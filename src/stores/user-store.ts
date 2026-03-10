import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User, Role } from '@/types/user';

interface UserState {
  user: User | null;
  role: Role | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setRole: (role: Role | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      role: null,
      isAuthenticated: false,
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
          role: user?.role || null,
        }),
      setRole: (role) => set({ role }),
      clearUser: () => set({ user: null, role: null, isAuthenticated: false }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
