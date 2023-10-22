import getCategories from "@/actions/getCategories";
import Form from "./Form";

type Cat = {
  name: string;
  id: string;
};

const PostForm = async () => {
  const categories: Cat[] | undefined = await getCategories();
  return (
    <div>
      <h1 className='text-center font-bold text-2xl font-lora uppercase mb-2'>
        Create new post
      </h1>
      <Form categories={categories} />
    </div>
  );
};

export default PostForm;
