import { prisma } from "@/lib/prisma";

const getAllPost = async (
  val: boolean,
  search: string | undefined,
  category: string | undefined,
  page: number
) => {
  try {
    const options: any = {};
    const postPerPage = 6;
    let searhQuery;

    if (!search) {
      searhQuery = "";
    } else {
      searhQuery = search;
    }

    if (val) {
      options.is_trending = val;
    }

    if (category) {
      options.category_name = category;
    }

    const [posts, count] = await Promise.all([
      prisma.post.findMany({
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
        orderBy: {
          created_at: "desc",
        },
        take: postPerPage,
        skip: postPerPage * (Number(page) - 1),
      }),

      prisma.post.count({
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
      }),
    ]);

    if (!posts) throw new Error("Posts not found");

    return { posts, pageCount: Math.ceil(count / postPerPage) };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getAllPost;
