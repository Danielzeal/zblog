"use client";

import addComment from "@/actions/addComment";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { toast } from "react-toastify";

const Form = ({ id }: { id: string }) => {
  const { status } = useSession();
  const [comment, setComment] = useState("");

  if (status === "unauthenticated") {
    return (
      <div className='mt-3'>
        <Link href={"/login"} className='text-blue-500 font-bold'>
          Login
        </Link>{" "}
        to add comment
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await addComment(id, comment);
    console.log(comment, id);
    toast(res?.message);
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
      <Button type='submit' variant={"secondary"}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
