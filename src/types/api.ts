export type ApiResponse<T> = {
  data: T;
  message?: string;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  role: 'student';
  grade?: string;
  schoolId?: string;
  createdAt: string;
  updatedAt: string;
};

export type Roadmap = {
  id: string;
  title: string;
  description: string;
  studentId: string;
  steps: RoadmapStep[];
  createdAt: string;
  updatedAt: string;
};

export type RoadmapStep = {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'completed';
  order: number;
};
