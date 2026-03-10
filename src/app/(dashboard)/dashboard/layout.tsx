'use client';

import { useAuth } from '@/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import { authService } from '@/services/api/auth';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await authService.logout();
    router.push('/login');
  };

  if (isLoading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-xl font-bold">Saras Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="text-right text-sm">
            <p className="font-medium">{user?.name}</p>
            <p className="text-muted-foreground capitalize">{user?.role}</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>
      <main className="bg-muted/20 flex-1 p-6">{children}</main>
    </div>
  );
}
