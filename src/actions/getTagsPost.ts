import { prisma } from "@/lib/prisma";

const getTagPosts = async (id: string) => {
  try {
    const posts = await prisma.tag.findUnique({
      where: {
        id,
      },
      include: {
        posts: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
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

export default getTagPosts;
