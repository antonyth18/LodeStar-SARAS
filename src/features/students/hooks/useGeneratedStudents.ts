'use client';

import { useQuery } from '@tanstack/react-query';
import { StudentsService } from '@/services/api-generated';
import { queryKeys } from '@/lib/query-keys';

/**
 * Hook for fetching students using auto-generated services.
 * This ensures full type safety from the OpenAPI schema.
 */
export function useGeneratedStudents() {
  return useQuery({
    queryKey: queryKeys.students.list(),
    queryFn: () => StudentsService.getStudents(),
  });
}

/**
 * Hook for fetching roadmap using auto-generated services.
 */
export function useGeneratedRoadmap() {
  return useQuery({
    queryKey: queryKeys.roadmap.all,
    queryFn: () => StudentsService.getStudents(), // Using Students for now as placeholder test
  });
}
