"use server";

import { getAuthSession } from "@/libs/auth";
import { prisma } from "@/libs/prisma";

const newCategory = async (name: string) => {
  const session = await getAuthSession();
  console.log(session);
  if (!session?.user.email) {
    throw new Error("User is not authorizes");
  }

  try {
    const category = await prisma.category.findFirst({
      where: {
        name,
      },
    });
    if (category) return { message: "Could not" };

    await prisma.category.create({
      data: {
        name,
        user_email: session.user.email!,
      },
    });
    return { message: "Category created" };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default newCategory;
