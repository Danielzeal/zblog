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
    <div className='flex flex-col md:flex-row rest'>
      <AdminNav />
      <div className='md:w-[75%] lg:w-[83%] md:left-[25%] lg:left-[17%] h-[200vh]'>
        {children}
      </div>
    </div>
  );
}
