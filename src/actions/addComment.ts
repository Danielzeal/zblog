"use server";

import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const addComment = async (id: string, comment: string) => {
  const session = await getAuthSession();

  if (!session?.user.is_admin) {
    throw new Error("User is not authorizes");
  }

  try {
    const post = await prisma.post.findFirst({
      where: {
        id,
      },
    });

    if (!post) return { message: "Post does not exist" };

    await prisma.comment.create({
      data: {
        post_id: id,
        comment,
        user_email: session.user.email!,
      },
    });
    revalidatePath(`/post/${id}`);
    return { message: "Comment added" };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default addComment;
