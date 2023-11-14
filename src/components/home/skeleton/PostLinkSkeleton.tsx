import CardSkeleton from "./CardSkeleton";

type Props = {
  className: string;
};

const PostLinkSkeleton = ({ className }: Props) => {
  return (
    <div
      className={`bg-white rounded-md w-full p-4 ${className} hover:bg-[#fbf6f6] hover:shadow-lg transition-all duration-200 ease-in-out`}
    >
      <CardSkeleton />
    </div>
  );
};

export default PostLinkSkeleton;
