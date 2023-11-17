import AdminNav from "@/components/admin/AdminNav";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
  description: "Reporting daily event how it is",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session?.user.is_admin) {
    redirect("/");
  }
  return (
    <div className='flex flex-col md:flex-row'>
      <AdminNav />
      <div className='md:w-[75%] w-full lg:w-[83%] md:left-[25%] lg:left-[17%] md:min-h-screen h-[calc(100vh-80px)]'>
        {children}
      </div>
    </div>
  );
}
