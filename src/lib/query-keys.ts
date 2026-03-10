export const queryKeys = {
  auth: {
    session: ['auth', 'session'] as const,
  },
  students: {
    all: ['students'] as const,
    list: () => [...queryKeys.students.all, 'list'] as const,
    detail: (id: string) => [...queryKeys.students.all, 'detail', id] as const,
  },
  roadmap: {
    all: ['roadmap'] as const,
    detail: (id: string) => [...queryKeys.roadmap.all, 'detail', id] as const,
  },
} as const;
