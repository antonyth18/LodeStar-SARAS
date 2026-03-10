'use client';

import { useUserStore, useUIStore, useThemeStore, useVoiceStore } from '@/stores';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Sun, Sidebar, User as UserIcon, Mic } from 'lucide-react';

export default function StoreExample() {
  // Use selectors for performance - only re-render if the specific value changes
  const user = useUserStore((state) => state.user);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const isListening = useVoiceStore((state) => state.isListening);
  const transcript = useVoiceStore((state) => state.transcript);
  const startListening = useVoiceStore((state) => state.startListening);
  const stopListening = useVoiceStore((state) => state.stopListening);

  const handleMockLogin = () => {
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'student',
      emailVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Zustand Store Examples</h1>
        <p className="text-muted-foreground">
          Demonstrating global state management across multiple stores.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* User Store */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" /> User Store
              </CardTitle>
              <div
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${isAuthenticated ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
              >
                {isAuthenticated ? 'Authenticated' : 'Guest'}
              </div>
            </div>
            <CardDescription>Persisted session management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {user ? (
              <div className="space-y-1">
                <p className="font-medium">{user.name}</p>
                <p className="text-muted-foreground text-sm">{user.email}</p>
                <p className="bg-muted mt-2 rounded p-1 font-mono text-xs">{user.role}</p>
              </div>
            ) : (
              <p className="text-muted-foreground text-sm italic">No user logged in.</p>
            )}
            <div className="flex gap-2 pt-2">
              <Button size="sm" onClick={handleMockLogin} disabled={isAuthenticated}>
                Mock Login
              </Button>
              <Button size="sm" variant="outline" onClick={clearUser} disabled={!isAuthenticated}>
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Theme Store */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              Theme Store
            </CardTitle>
            <CardDescription>Persisted appearance settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium capitalize">Current: {theme}</span>
              <Button variant="outline" size="icon" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
            <p className="text-muted-foreground text-xs">
              Refresh the page to see persistence in action.
            </p>
          </CardContent>
        </Card>

        {/* UI Store */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sidebar className="h-5 w-5" /> UI Store
            </CardTitle>
            <CardDescription>Global layout and interface state</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                Sidebar is {isSidebarOpen ? 'Expanded' : 'Collapsed'}
              </span>
              <Button variant="ghost" size="sm" onClick={toggleSidebar}>
                Toggle
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Voice Store */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="h-5 w-5" /> Voice Store
            </CardTitle>
            <CardDescription>AI interaction state management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${isListening ? 'animate-pulse bg-red-500' : 'bg-muted'}`}
                />
                <span className="text-sm font-medium">
                  {isListening ? 'Listening...' : 'Inactive'}
                </span>
              </div>
              <Button
                variant={isListening ? 'destructive' : 'default'}
                size="sm"
                onClick={isListening ? stopListening : startListening}
              >
                {isListening ? 'Stop' : 'Start'}
              </Button>
            </div>
            <div className="bg-border h-px w-full" />
            <div className="bg-muted/50 min-h-[60px] rounded-md p-3">
              <p className="text-muted-foreground mb-1 text-xs font-semibold uppercase">
                Transcript
              </p>
              <p className="text-sm italic">{transcript || 'Say something...'}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
