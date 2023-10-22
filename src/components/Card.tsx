import { excerpt, formatDate } from "@/functions";
import Image from "next/image";
import type { Post } from "@prisma/client";

type Props = {
  post: Post;
};

const Card = ({ post }: Props) => {
  return (
    <>
      <div className='w-full h-[250px] relative'>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-cover rounded-t-md'
          />
        )}
        <span className='absolute top-3 bg-white text-gray-950 rounded-md py-1 px-4 right-3 text-xs capitalize font-semibold italic'>
          {post.category_name}
        </span>
      </div>
      <div className='flex flex-col mt-4 justify-between'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-base font-bold font-lora capitalize text-white'>
            {excerpt(post.title, 30)}
          </h1>
          <p className='text-sm'>{excerpt(post.description, 50)}</p>
        </div>
        <div className='text-xs'>
          <p className=''>
            Published by:{" "}
            <span className='font-semibold capitalize'>{post.user?.name}</span>
          </p>
          <span className='text-[10px]'>{formatDate(post.created_at)}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
