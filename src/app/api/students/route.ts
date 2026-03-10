import { NextResponse } from 'next/server';
import { Student } from '@/types/api';

// This is a temporary sample API route to provide data for the frontend
// In a real application, you would fetch this from your database
export async function GET() {
  const students: Student[] = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'student',
      grade: '10th',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob@example.com',
      role: 'student',
      grade: '12th',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      role: 'student',
      grade: '11th',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  return NextResponse.json(students);
}
