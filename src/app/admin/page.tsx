import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await getServerSession();

  if (!session?.user.is_admin) {
    return redirect("/");
  }
  return <section className='w-full h-full'>admin page</section>;
};

export default AdminPage;
