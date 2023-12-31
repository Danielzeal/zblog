import PostsSkeleton from "./PostsSkeleton";
import TopPostsSkeleton from "./TopPostSkeleton";
import TrendingPostSkeleton from "./TrendingPostSkeleton";

const HomeSkeleton = () => {
  return (
    <div className='flex-1 container'>
      <TopPostsSkeleton />
      <TrendingPostSkeleton />
      <PostsSkeleton />
    </div>
  );
};

export default HomeSkeleton;
