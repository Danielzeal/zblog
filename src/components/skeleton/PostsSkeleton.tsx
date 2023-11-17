import Heading from "@/components/global/Heading";
import PostLinkSkeleton from "./PostLinkSkeleton";

const PostsSkeleton = () => {
  const myArray = Array.from({ length: 3 }, (num) => num);
  return (
    <section className='md:px-6'>
      <Heading text='latest post' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        {myArray.map((_, idx) => (
          <PostLinkSkeleton key={idx} className='hover:scale-105' />
        ))}
      </div>
      <div className='p-4 flex justify-end'>
        <div className='w-[10%] h-5 bg-white' />
      </div>
    </section>
  );
};

export default PostsSkeleton;
