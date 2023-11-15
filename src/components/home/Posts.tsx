import Heading from "../Heading";
import Link from "next/link";
import PostLink from "../PostLink";
import { FC } from "react";
import { Posts } from "@/actions/getHomePosts";
import { Button } from "../ui/button";

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
        <Button variant='link' className='w-full'>
          <Link className='text-end text-black w-full' href={"/blogs"}>
            See more
          </Link>
        </Button>
      </section>
    )
  );
};

export default Posts;
