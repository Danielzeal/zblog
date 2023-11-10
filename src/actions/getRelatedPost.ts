import { prisma } from "@/libs/prisma";
import { Tag } from "@prisma/client";

const getRelatedPosts = async (tags: Tag[] | undefined, id: string) => {
  try {
    if (Array.isArray(tags)) {
      const relatedTags: string[] = tags.map((tag) => tag.name);

      const [relatedPost, trendingPost] = await Promise.all([
        prisma.post.findMany({
          where: {
            tags: {
              some: {
                name: {
                  in: relatedTags,
                },
              },
            },
            NOT: {
              id: id,
            },
          },
          take: 5,
          orderBy: {
            views: "desc",
          },
        }),

        prisma.post.findMany({
          where: {
            is_trending: true,
            NOT: {
              id: id,
            },
          },
        }),
      ]);
      return { relatedPost, trendingPost };
    }
  } catch (error) {
    console.log(error);
  }
};

export default getRelatedPosts;
