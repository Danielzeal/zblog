import getAllPost from "@/actions/getAllPost";
import getCategories from "@/actions/getCategories";
import BlogPosts from "@/components/blog/BlogPosts";
import Pagination from "@/components/global/Pagination";
import PostLink from "@/components/global/PostLink";
import Search from "@/components/global/Search";
import SelectCategory from "@/components/global/SelectCategory";
import LoadingBlogPost from "@/components/skeleton/blog/LoadingBlogPost";
import { FC, Suspense } from "react";

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

  return (
    <section className='my-8 h-full'>
      <Search search={search} />
      <SelectCategory category={category} categories={categories} />
      <Suspense fallback={<LoadingBlogPost />}>
        <BlogPosts
          page={page}
          category={category}
          search={search}
          trend={true}
        />
      </Suspense>
    </section>
  );
};

export default BlogPage;
