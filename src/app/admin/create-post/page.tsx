import PostForm from "@/components/admin/create-post/PostForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Create - Post",
  description: "Create new post",
};

const CreatePage = async () => {
  return (
    <section className='w-full h-full p-4'>
      <PostForm />
    </section>
  );
};

export default CreatePage;
