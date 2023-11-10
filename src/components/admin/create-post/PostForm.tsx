import getCategories from "@/actions/getCategories";
import Form from "./Form";

const PostForm = async () => {
  const categories = await getCategories();
  return (
    <div>
      <h1 className='text-center font-bold text-2xl font-lora uppercase mb-2'>
        Create new post
      </h1>
      {Array.isArray(categories) && <Form categories={categories} />}
    </div>
  );
};

export default PostForm;
