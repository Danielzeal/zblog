import { z } from "zod";

export const post = z.object({
  title: z.string().min(40, ""),
  description: z.string().min(120, ""),
  tags: z.string().array().min(1).max(3),
  category: z.string(),
  image: z.string(),
});
