import getPost from "@/actions/getPost";
import { formatDate } from "@/functions";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import parser from "html-react-parser";
import getRelatedPosts from "@/actions/getRelatedPost";
import { Tag } from "@prisma/client";
import Comment from "@/components/comment/Comment";

type Props = {
  params: {
    id: string;
  };
};

type Tags = {
  tags: Tag;
};

const page: FC<Props> = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  const posts = await getRelatedPosts(post?.tags, id);

  return (
    post && (
      <section className='my-10 min-h-screen flex flex-col md:flex-row gap-12 md:px-6'>
        <div className='flex flex-col md:w-2/3'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold md:text-3xl text-2xl text-center capitalize font-lora'>
              {post?.title}
            </h1>
            <div className='flex items-center flex-col gap-2'>
              <div className='w-8 h-8 relative'>
                <Image
                  src={post?.user.image!}
                  alt={post?.title!}
                  fill
                  className='object-contain rounded-full'
                />
              </div>
              <p className='font-bold capitalize'>{post?.user.name}</p>
            </div>
          </div>
          <div className='w-full md:h-[500px] h-[300px] relative mt-4 mb-1'>
            {post?.image && (
              <Image
                src={post.image}
                alt=''
                fill
                sizes='(min-width: 1480px) 847px, (min-width: 780px) calc(60.88vw - 42px), calc(100vw - 32px)'
                className='object-cover'
              />
            )}
          </div>
          <p className='text-[10px]'>{formatDate(post?.created_at)}</p>
          <article className='mt-4 tip text-justify'>
            {parser(post?.description)}
          </article>
          <div className='mt-8 flex gap-2'>
            <p>Tags:</p>
            <div className='flex gap-4 flex-wrap'>
              {post.tags.map((tag) => (
                <Link key={tag.id} href={`/tag/${tag.id}`}>
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='md:w-1/3 flex gap-6 flex-col bg-primary p-4 rounded-lg h-fit'>
          <Comment id={id} />
          <div className='flex flex-col gap-2'>
            {posts?.relatedPost && posts?.relatedPost?.length > 0 && (
              <>
                <h2 className='font-semibold font-serif text-xl'>
                  Related Post
                </h2>
                <div className='flex flex-col gap-6'>
                  {posts?.relatedPost?.map((post) => (
                    <Link
                      href={post.id}
                      key={post.id}
                      className='bg-white shadow-md'
                    >
                      <div className='w-full h-[200px] relative'>
                        {post.image && (
                          <Image
                            src={post.image}
                            alt={post.title}
                            sizes='(min-width: 1480px) 393px, (min-width: 780px) calc(30.29vw - 49px), calc(100vw - 64px)'
                            fill
                            className='object-cover'
                          />
                        )}
                      </div>
                      <h1 className='p-2'>{post.title}</h1>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            {posts?.trendingPost && posts?.trendingPost?.length > 0 && (
              <>
                <h2 className='font-semibold font-serif text-xl'>
                  Trending Post
                </h2>
                <div className='flex flex-col gap-6'>
                  {posts?.trendingPost?.map((post) => (
                    <Link
                      href={post.id}
                      key={post.id}
                      className='bg-white shadow-md'
                    >
                      <div className='w-full h-[200px] relative'>
                        {post.image && (
                          <Image
                            src={post.image}
                            alt={post.title}
                            sizes='(min-width: 1480px) 393px, (min-width: 780px) calc(30.29vw - 49px), calc(100vw - 64px)'
                            fill
                            className='object-cover'
                          />
                        )}
                      </div>
                      <h1 className='p-2'>{post.title}</h1>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default page;
