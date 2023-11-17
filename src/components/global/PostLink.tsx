import Link from "next/link";
import Card from "./Card";
import { Posts } from "@/actions/getHomePosts";

type Props = {
  post: Posts;
  className: string;
};

const PostLink = ({ post, className }: Props) => {
  return (
    <Link
      href={`/post/${post.id}`}
      className={`bg-white rounded-md w-full p-4 ${className} hover:bg-[#fbf6f6] hover:shadow-lg transition-all duration-200 ease-in-out`}
    >
      <Card post={post} />
    </Link>
  );
};

export default PostLink;
