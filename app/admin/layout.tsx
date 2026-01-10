import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      <AdminSidebar />
      <div className="ml-64 flex-1 p-8">{children}</div>
    </div>
  );
}
