import { prisma } from "@/libs/prisma";

const getAllPost = async (val: boolean, search: string | undefined) => {
  try {
    const options: any = {};

    if (search) {
      if (val) {
        options.where = {
          is_trending: true,
          title: {
            contains: search,
            mode: "insensitive",
          },
        };
      } else {
        options.where = {
          title: {
            contains: search,
            mode: "insensitive",
          },
        };
      }
    } else {
      if (val) {
        options.where = {
          is_trending: true,
        };
      } else {
        options.where = {};
      }
    }

    const posts = await prisma.post.findMany(options);

    if (!posts) throw new Error("Posts not found");

    return posts;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getAllPost;
