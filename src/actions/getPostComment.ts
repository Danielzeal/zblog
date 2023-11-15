import { prisma } from "@/lib/prisma";

const getPostComment = async (id: string) => {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        post_id: id,
      },
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
      take: 5,
    });

    if (!comments) throw new Error("Posts not found");
    return comments;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getPostComment;
