import Heading from "@/components/global/Heading";
import PostLinkSkeleton from "./PostLinkSkeleton";

const TrendingPostSkeleton = () => {
  const myArray = Array.from({ length: 3 }, (num) => num);

  return (
    <section className='md:px-6'>
      <Heading text='trending posts' />
      <div className='flex gap-6 overflow-x-scroll no-scrollbar w-full'>
        {myArray.map((_, idx) => (
          <PostLinkSkeleton
            key={idx}
            className='sm:min-w-[320px] max-w-[350px] min-w-full hover:scale-90'
          />
        ))}
      </div>
      <div className='p-4 flex justify-end'>
        <div className='w-[10%] h-5 bg-white animate-pulse' />
      </div>
    </section>
  );
};

export default TrendingPostSkeleton;
