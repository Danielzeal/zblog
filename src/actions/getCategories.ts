import { prisma } from "@/lib/prisma";

const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        name: true,
        id: true,
      },
    });

    if (!categories) return { message: "Add categories to your database" };

    return categories;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getCategories;
