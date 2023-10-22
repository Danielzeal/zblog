import { prisma } from "@/libs/prisma";
import type { Post } from "@prisma/client";

interface Posts extends Post {
  user: {
    name: string | null;
  };
}

type HomePosts = {
  trendingPosts?: Posts[];
  posts?: Posts[];
  topPosts?: Posts[];
  message?: string;
};

const getHomePosts = async (): Promise<HomePosts | undefined> => {
  try {
    const [trendingPosts, posts, topPosts] = await Promise.all([
      prisma.post.findMany({
        where: {
          is_trending: true,
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
        take: 5,
      }),
      prisma.post.findMany({
        orderBy: {
          created_at: "desc",
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
        take: 6,
      }),
      prisma.post.findMany({
        orderBy: {
          views: "desc",
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
        take: 4,
      }),
    ]);

    if (
      !trendingPosts ||
      !posts ||
      !topPosts ||
      (!trendingPosts.length && !posts.length && !topPosts.length)
    ) {
      return { message: "Oops! no post found in our system" };
    }

    return { trendingPosts, posts, topPosts };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getHomePosts;
