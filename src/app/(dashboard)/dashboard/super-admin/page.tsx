import { StudentList } from '@/features/students/components/StudentList';

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Super Admin Dashboard</h2>
        <p className="text-muted-foreground">
          Full system control and analytics for the Saras platform across all schools.
        </p>
      </div>
      <StudentList />
    </div>
  );
}
