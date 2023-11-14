import Heading from "../Heading";
import Link from "next/link";
import PostLink from "../PostLink";
import { FC } from "react";
import { Posts } from "@/actions/getHomePosts";

type Props = {
  posts?: Posts[];
};

const Posts: FC<Props> = ({ posts }) => {
  return (
    posts && (
      <section className='md:px-6'>
        <Heading text='latest post' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {posts.map((post) => (
            <PostLink post={post} key={post.id} className='hover:scale-105' />
          ))}
        </div>
        <div className='p-4 flex justify-end'>
          <Link href={"/blogs"}>See more</Link>
        </div>
      </section>
    )
  );
};

export default Posts;
