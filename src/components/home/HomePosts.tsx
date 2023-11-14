import getHomePosts from "@/actions/getHomePosts";
import TopPost from "./TopPost";
import TrendingPost from "./TrendingPost";
import Posts from "./Posts";

const HomePosts = async () => {
  const posts = await getHomePosts();

  return (
    <div className='flex-1 container'>
      {!posts?.message ? (
        <>
          <TopPost posts={posts?.topPosts} />
          <TrendingPost posts={posts?.trendingPosts} />
          <Posts posts={posts?.posts} />
        </>
      ) : (
        <>
          <h1 className='mt-24 text-center font-semibold text-4xl capitalize h-full'>
            {posts.message}
          </h1>
        </>
      )}
    </div>
  );
};

export default HomePosts;
