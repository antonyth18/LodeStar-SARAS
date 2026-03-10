import { apiClient } from '@/lib/api-client';
import { Roadmap } from '@/types/api';

export const roadmapService = {
  getRoadmaps: async () => {
    return apiClient.get<Roadmap[]>('/roadmap');
  },

  getRoadmapById: async (id: string) => {
    return apiClient.get<Roadmap>(`/roadmap/${id}`);
  },

  getRoadmapByStudentId: async (studentId: string) => {
    return apiClient.get<Roadmap>(`/roadmap/student/${studentId}`);
  },

  updateRoadmap: async (id: string, data: Partial<Roadmap>) => {
    return apiClient.patch<Roadmap>(`/roadmap/${id}`, data);
  },
};
