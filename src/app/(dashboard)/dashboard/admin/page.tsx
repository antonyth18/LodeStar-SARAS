import { StudentList } from '@/features/students/components/StudentList';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">School Admin Dashboard</h2>
        <p className="text-muted-foreground">
          Administrative portal for managing school operations, staff, and overall performance.
        </p>
      </div>
      <StudentList />
    </div>
  );
}
