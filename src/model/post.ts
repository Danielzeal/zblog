import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(30, "Minimun of 30 character."),
  description: z.string().min(120, "Minimun of 120 character."),
  tags: z
    .string()
    .array()
    .min(1, "Minimun of one (1) tags.")
    .max(3, "Max of three (3) tags."),
  category: z.string(),
  image: z.string(),
});
