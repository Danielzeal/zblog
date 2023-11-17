import getAllPost from "@/actions/getAllPost";
import Pagination from "../global/Pagination";
import PostLink from "../global/PostLink";

const BlogPosts = async ({
  page,
  search,
  category,
}: {
  page: number;
  search?: string;
  category?: string;
}) => {
  const allPosts = await getAllPost(false, search, category, page);
  return allPosts && allPosts.posts.length > 0 ? (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-6'>
        {allPosts.posts.map((post) => (
          <PostLink post={post} key={post.id} className='hover:scale-105' />
        ))}
      </div>
      <Pagination
        page={page}
        pageCount={allPosts.pageCount}
        search={search && search}
        category={category && category}
      />
    </>
  ) : (
    <div className='text-center mt-8 text-2xl capitalize'>
      Oops! no blog post found.
    </div>
  );
};

export default BlogPosts;
