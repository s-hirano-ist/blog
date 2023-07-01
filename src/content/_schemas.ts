import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    title: z.string(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional(),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
