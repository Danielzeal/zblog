import { excerpt, formatDate } from "@/functions";
import Image from "next/image";
import type { Post } from "@prisma/client";
import parser from "html-react-parser";

interface PostCard extends Post {
  user: {
    name: string | null;
  };
}

type Props = {
  post: PostCard;
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
            sizes='(min-width: 1480px) 392px, (min-width: 1040px) calc(28.57vw - 25px), (min-width: 780px) calc(50vw - 84px), (min-width: 640px) calc(50vw - 60px), calc(100vw - 64px)'
            className='object-cover rounded-t-md'
          />
        )}
        <span className='absolute top-3 bg-white rounded-md py-1 px-4 right-3 text-xs capitalize font-semibold italic'>
          {post.category_name}
        </span>
      </div>
      <div className='flex flex-col mt-4 justify-between'>
        <div className='flex flex-col gap-2 mb-4'>
          <h1 className='text-base font-bold font-lora capitalize'>
            {excerpt(post.title, 50)}
          </h1>
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
