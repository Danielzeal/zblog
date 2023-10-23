import { prisma } from "@/libs/prisma";

const getAllPost = async (
  val: boolean,
  search: string | undefined,
  category: string | undefined
) => {
  try {
    const options: any = {};
    let searhQuery;

    if (!search) {
      searhQuery = "";
    } else {
      searhQuery = search;
    }

    if (val) {
      options.is_trending = true;
    }

    if (category) {
      options.category_name = category;
    }

    const posts = await prisma.post.findMany({
      where: {
        ...options,
        OR: [
          {
            title: {
              contains: searhQuery,
              mode: "insensitive",
            },
            description: {
              contains: searhQuery,
              mode: "insensitive",
            },
          },
        ],
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!posts) throw new Error("Posts not found");

    return posts;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getAllPost;
