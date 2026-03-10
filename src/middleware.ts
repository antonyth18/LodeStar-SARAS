import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const url = new URL('/api/auth/get-session', request.url);
  const sessionRes = await fetch(url, {
    headers: {
      cookie: request.headers.get('cookie') || '',
    },
  });

  const session = sessionRes.ok ? await sessionRes.json() : null;

  const { pathname } = request.nextUrl;

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const { user } = session;

    // RBAC Redirection Logic
    // If user is accessing base dashboard, redirect to role-specific dashboard
    if (pathname === '/dashboard') {
      const roleRedirects: Record<string, string> = {
        student: '/dashboard/student',
        parent: '/dashboard/parent',
        counselor: '/dashboard/counselor',
        school_admin: '/dashboard/admin',
        super_admin: '/dashboard/super-admin',
      };

      const destination = roleRedirects[user.role] || '/dashboard/student';
      return NextResponse.redirect(new URL(destination, request.url));
    }

    // Role-based Path Protection (Optional: only allow users to access their own role's dashboard)
    const rolePaths: Record<string, string> = {
      student: '/dashboard/student',
      parent: '/dashboard/parent',
      counselor: '/dashboard/counselor',
      school_admin: '/dashboard/admin',
      super_admin: '/dashboard/super-admin',
    };

    const allowedPath = rolePaths[user.role];
    if (allowedPath && !pathname.startsWith(allowedPath)) {
      // Only redirect if they are trying to access a different role's dashboard specifically
      // For now, let's just let them be, but redirect base /dashboard as done above.
    }
  }

  // Redirect authenticated users away from login/signup
  if ((pathname === '/login' || pathname === '/signup') && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
};
