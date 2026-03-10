import { apiClient } from '@/lib/api-client';
import { Student } from '@/types/api';

export const studentsService = {
  getStudents: async () => {
    return apiClient.get<Student[]>('/students');
  },

  getStudentById: async (id: string) => {
    return apiClient.get<Student>(`/students/${id}`);
  },

  createStudent: async (data: Partial<Student>) => {
    return apiClient.post<Student>('/students', data);
  },

  updateStudent: async (id: string, data: Partial<Student>) => {
    return apiClient.patch<Student>(`/students/${id}`, data);
  },

  deleteStudent: async (id: string) => {
    return apiClient.delete(`/students/${id}`);
  },
};
