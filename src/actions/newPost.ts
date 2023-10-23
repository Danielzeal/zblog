"use server";

import { getAuthSession } from "@/libs/auth";
import { prisma } from "@/libs/prisma";

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

    if (post) return { message: "Could not" };

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
    return { message: "Post created" };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default newPost;
