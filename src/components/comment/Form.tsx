"use client";

import addComment from "@/actions/addComment";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

const Form = ({ id }: { id: string }) => {
  const { status } = useSession();
  const [comment, setComment] = useState("");

  if (status === "unauthenticated") {
    return <div>Login to add comment</div>;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await addComment(id, comment);
    alert(res?.message);
    setComment("");
  };

  return (
    <form className='my-3' onSubmit={handleSubmit}>
      <h2 className='font-semibold font-serif text-xl mb-3'>Comments</h2>
      <textarea
        name=''
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className='w-full bg-primary-foreground h-[120px] rounded-md outline-none p-3'
      ></textarea>
    </form>
  );
};

export default Form;
