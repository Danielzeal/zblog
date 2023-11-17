import getAllPost from "@/actions/getAllPost";
import getCategories from "@/actions/getCategories";
import BlogPosts from "@/components/blog/BlogPosts";
import Pagination from "@/components/global/Pagination";
import PostLink from "@/components/global/PostLink";
import Search from "@/components/global/Search";
import SelectCategory from "@/components/global/SelectCategory";
import { FC } from "react";

type Props = {
  searchParams: {
    [keys: string]: string | string[] | undefined;
  };
};

const TrendsPage: FC<Props> = async ({ searchParams }) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const category =
    typeof searchParams.category === "string"
      ? searchParams.category
      : undefined;

  const categories = await getCategories();

  return (
    <section className='my-8 h-full'>
      <Search search={search} />
      <SelectCategory category={category} categories={categories} />
      <BlogPosts page={page} category={category} search={search} />
    </section>
  );
};

export default TrendsPage;
