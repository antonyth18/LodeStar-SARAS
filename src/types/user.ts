export type Role = 'student' | 'parent' | 'counselor' | 'school_admin' | 'super_admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  image?: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  user: User;
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    userAgent?: string;
    ipAddress?: string;
  };
}
