import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    comments: z.boolean().default(false),
    image: z.object({
      feature: z.string().optional(),
      credit: z.string().optional(),
      creditlink: z.string().optional()
    }).optional()
  })
});

export const collections = {
  blog: blogCollection
};
