"use server";

import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type Data = {
  category: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
};

const newPost = async (data: Data) => {
  const session = await getAuthSession();

  if (!session?.user.is_admin) {
    throw new Error("User is not authorizes");
  }

  const { category, description, tags, image, title } = data;

  try {
    const post = await prisma.post.findFirst({
      where: {
        title,
      },
    });

    if (post) return { message: "Duplicate post not allowed" };

    await prisma.post.create({
      data: {
        title,
        category_name: category,
        description,
        image,
        user_email: session.user.email!,
        tags: {
          connectOrCreate: tags.map((tag) => ({
            where: { name: tag.toLowerCase() },
            create: { name: tag.toLowerCase() },
          })),
        },
      },
    });
    revalidatePath("/");
    return { message: "Post created" };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default newPost;
