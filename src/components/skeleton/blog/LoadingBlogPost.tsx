import PostLinkSkeleton from "../PostLinkSkeleton";

const LoadingBlogPost = () => {
  const myArray = Array.from({ length: 6 }, (num) => num);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-6'>
      {myArray.map((_, idx) => (
        <PostLinkSkeleton key={idx} className='hover:scale-105' />
      ))}
    </div>
  );
};

export default LoadingBlogPost;
