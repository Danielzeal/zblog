import getAllPost from "@/actions/getAllPost";
import PostLink from "@/components/PostLink";
import Search from "@/components/Search";
import { FC } from "react";

type Props = {
  searchParams: {
    [keys: string]: string | string[] | undefined;
  };
};

const TrendsPage: FC<Props> = async ({ searchParams }) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const posts = await getAllPost(true, search);

  return (
    <section className='my-8 h-full'>
      <Search search={search} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts &&
          posts.map((post) => (
            <PostLink post={post} key={post.id} className='hover:scale-105' />
          ))}
      </div>
    </section>
  );
};

export default TrendsPage;
