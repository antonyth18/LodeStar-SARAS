'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Optional: You can create a full AuthProvider if you want to wrap a lot of logic.
// Often with BetterAuth you just use the client hooks directly, but here is a wrapper if needed.

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is where you would normally call your auth check logic
    // const checkAuth = async () => {
    //     const { data, error } = await authClient.getSession();
    //     if (data) setIsAuthenticated(true);
    //     setIsLoading(false);
    // };
    // checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
