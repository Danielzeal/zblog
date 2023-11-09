"use server";

import { getAuthSession } from "@/libs/auth";
import { prisma } from "@/libs/prisma";
import { revalidatePath } from "next/cache";

const newCategory = async (name: string) => {
  const session = await getAuthSession();

  if (!session?.user.is_admin) {
    throw new Error("User is not authorizes");
  }

  try {
    const category = await prisma.category.findFirst({
      where: {
        name,
      },
    });

    if (category) return { message: "Category already exist" };

    await prisma.category.create({
      data: {
        name,
        user_email: session.user.email!,
      },
    });
    revalidatePath("/admin/categories");
    return { message: "Category created" };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default newCategory;
