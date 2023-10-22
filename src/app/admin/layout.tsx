import AdminNav from "@/components/admin/AdminNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Reporting daily event how it is",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <AdminNav />
      <div className='md:w-9/12 lg:w-10/12'>{children}</div>
    </div>
  );
}
