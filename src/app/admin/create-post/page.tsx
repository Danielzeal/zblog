import PostForm from "@/components/admin/create-post/PostForm";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin | Create - Post",
  description: "Create new post",
};

const CreatePage = async () => {
  const session = await getServerSession();

  if (session?.user.is_admin) {
    return redirect("/");
  }

  return (
    <section className='w-full h-full p-4'>
      <PostForm />
    </section>
  );
};

export default CreatePage;
