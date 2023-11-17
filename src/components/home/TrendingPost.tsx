import Heading from "../global/Heading";
import PostLink from "../global/PostLink";
import Link from "next/link";
import { FC } from "react";
import { Posts } from "@/actions/getHomePosts";
import { Button } from "../ui/button";

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
        <Button variant='link' className='w-full'>
          <Link className='text-end text-black w-full' href={"/trends"}>
            See more
          </Link>
        </Button>
      </section>
    )
  );
};

export default TrendingPost;
