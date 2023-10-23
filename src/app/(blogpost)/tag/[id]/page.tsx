import getTagPosts from "@/actions/getTagsPost";
import PostLink from "@/components/PostLink";
import { FC } from "react";

type Props = {
  params: {
    id: string;
  };
};

const TagsPage: FC<Props> = async ({ params }) => {
  const { id } = params;

  const tag = await getTagPosts(id);

  return (
    <section className='my-8 h-full'>
      {tag && tag.posts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-0'>
          {tag.posts.map((post) => (
            <PostLink post={post} key={post.id} className='hover:scale-105' />
          ))}
        </div>
      ) : (
        <div className='text-center mt-8 text-2xl capitalize'>
          Oops! no blog post found.
        </div>
      )}
    </section>
  );
};

export default TagsPage;
