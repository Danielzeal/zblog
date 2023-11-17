import CardSkeleton from "./CardSkeleton";

type Props = {
  className: string;
};

const PostLinkSkeleton = ({ className }: Props) => {
  return (
    <div className={`bg-white rounded-md w-full p-5`}>
      <CardSkeleton />
    </div>
  );
};

export default PostLinkSkeleton;
