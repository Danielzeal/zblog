import Heading from "../Heading";
import PostLink from "../PostLink";
import Link from "next/link";
import { FC } from "react";
import { Posts } from "@/actions/getHomePosts";

type Props = {
  posts?: Posts[];
};

const TrendingPost: FC<Props> = ({ posts }) => {
  return (
    posts &&
    posts.length > 0 && (
      <section className='md:px-6'>
        <Heading text='trending posts' />
        <div className='flex gap-6 overflow-x-scroll no-scrollbar w-full'>
          {posts.map((post) => (
            <PostLink
              post={post}
              key={post.id}
              className='sm:min-w-[320px] max-w-[350px] min-w-full hover:scale-90'
            />
          ))}
        </div>
        <div className='p-4 flex justify-end'>
          <Link href={"/trends"}>See more</Link>
        </div>
      </section>
    )
  );
};

export default TrendingPost;
