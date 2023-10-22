import Heading from "../Heading";
import Image from "next/image";
import { excerpt } from "@/functions";
import type { Post } from "@prisma/client";
import { FC } from "react";
import Link from "next/link";
import { post } from "@/model/post";

type Props = {
  posts?: Post[];
};

const TopPost: FC<Props> = ({ posts }) => {
  const date = new Intl.DateTimeFormat("en-us", {
    timeStyle: "short",
    dateStyle: "full",
  });

  return (
    posts && (
      <section className='my-8 text-gray-500 px-6 sm:px-0'>
        <Heading text='top posts' />
        <div className='flex flex-col md:flex-row gap-6 h-full'>
          <Link
            href={`/post/${posts[0].id}`}
            className='md:w-1/2 sm:h-[600px] h-[400px] p-3 flex flex-col gap-3 bg-gray-950 rounded-md hover:bg-gray-900 hover:scale-[1.02] hover:shadow-lg transition-all duration-200 ease-in-out'
          >
            <div className='relative sm:h-[70%] h-[60%] w-full'>
              {posts[0].image && (
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className='object-cover rounded-t-md'
                />
              )}
            </div>
            <div className='sm:h-[30%] flex flex-col justify-between h-[40%]'>
              <div className='flex flex-col gap-1 mb-4'>
                <h1 className='sm:text-2xl text-lg font-bold font-lora capitalize text-white'>
                  {excerpt(posts[0].title!, 45)}
                </h1>
                <p>{excerpt(posts[0].description!, 60)}</p>
              </div>
              <div className='text-xs'>
                <p className=''>
                  Published by:{" "}
                  <span className='font-semibold capitalize'>
                    {posts[0].user?.name}
                  </span>
                </p>
                <span className=''>{date.format(posts[0].created_at)}</span>
              </div>
            </div>
          </Link>
          <section className='md:w-1/2 flex flex-col gap-6 h-[600px]'>
            {posts &&
              posts.slice(1).map((post) => (
                <Link
                  href={`/post/${post.id}`}
                  key={post.id}
                  className='flex p-3 h-1/3 bg-gray-950 gap-3 rounded-md hover:bg-gray-900 hover:translate-y-2 hover:shadow-lg transition-all duration-200 ease-in-out'
                >
                  <div className='relative h-full w-2/5'>
                    <Image
                      src={post.image!}
                      alt={post.title}
                      fill
                      className='object-cover rounded-md'
                    />
                  </div>
                  <div className='flex flex-col justify-between w-3/5'>
                    <div className='flex flex-col gap-1'>
                      <h1 className='md:text-lg font-bold font-lora capitalize text-white'>
                        {excerpt(post.title, 50)}
                      </h1>
                      <p className='text-sm'>
                        {excerpt(posts[0].description, 60)}
                      </p>
                    </div>
                    <div className='text-xs'>
                      <p className=''>
                        Published by:{" "}
                        <span className='font-semibold capitalize'>
                          {post.user?.name}
                        </span>
                      </p>
                      <span className='text-[10px]'>
                        {date.format(post.created_at)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </section>
        </div>
      </section>
    )
  );
};

export default TopPost;
