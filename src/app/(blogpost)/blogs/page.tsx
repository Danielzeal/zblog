import getAllPost from "@/actions/getAllPost";
import getCategories from "@/actions/getCategories";
import Pagination from "@/components/Pagination";
import PostLink from "@/components/PostLink";
import Search from "@/components/Search";
import SelectCategory from "@/components/SelectCategory";
import { FC } from "react";

type Props = {
  searchParams: {
    [keys: string]: string | string[] | undefined;
  };
};

const BlogPage: FC<Props> = async ({ searchParams }) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const category =
    typeof searchParams.category === "string"
      ? searchParams.category
      : undefined;

  const categories = await getCategories();

  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const allPosts = await getAllPost(false, search, category, page);

  return (
    <section className='my-8 h-full'>
      <Search search={search} />
      <SelectCategory category={category} categories={categories} />
      {allPosts && allPosts.posts.length > 0 ? (
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
      )}
    </section>
  );
};

export default BlogPage;
