import { prisma } from "@/libs/prisma";

const getPost = async (id: string) => {
  try {
    const [post, updatePost] = await Promise.all([
      prisma.post.findUnique({
        where: {
          id,
        },
        include: {
          user: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      }),

      prisma.post.update({
        where: {
          id,
        },
        data: {
          views: { increment: 1 },
        },
      }),
    ]);

    if (!post) throw new Error("Posts not found");

    return post;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getPost;
