import getPost from "@/actions/getPost";
import { formatDate } from "@/functions";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  params: {
    id: string;
  };
};

const page: FC<Props> = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);

  return (
    post && (
      <section className='container my-10 px-6 sm:px-0 min-h-screen'>
        <div className='flex flex-col'>
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
              <Image src={post.image} alt='' fill className='object-cover' />
            )}
          </div>
          <p className='text-[10px]'>{formatDate(post?.created_at)}</p>
          <article className='mt-4'>{post?.description}</article>
          <div className='mt-8 flex gap-2'>
            <p>Tags:</p>
            <div className='flex gap-6'>
              {post.tags.map((tag) => (
                <Link key={tag.id} href={`/tag/${tag.id}`}>
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default page;
