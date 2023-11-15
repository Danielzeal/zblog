import getPostComment from "@/actions/getPostComment";
import Image from "next/image";
import Form from "./Form";

const Comment = async ({ id }: { id: string }) => {
  const comments = await getPostComment(id);

  return (
    comments && (
      <div>
        <div className='flex flex-col gap-2'>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment.id}
                className='bg-primary-foreground rounded-md p-2 flex gap-3 items-center'
              >
                <div className='w-8 h-8 relative'>
                  <Image
                    src={comment?.user.image!}
                    alt={comment?.comment}
                    fill
                    className='object-contain rounded-full'
                  />
                </div>
                <div>
                  <p className='text-sm'>{comment.comment}</p>
                  <p className='text-xs font-lora font-semibold'>
                    {comment.user.name}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className='text-sm'>No comment added yet!</div>
          )}
        </div>
        <Form id={id} />
      </div>
    )
  );
};

export default Comment;
