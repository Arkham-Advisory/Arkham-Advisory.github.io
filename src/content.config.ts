import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    intro: z.string(),
    useCases: z.array(z.string()),
    outcomes: z.array(z.string()),
    order: z.number(),
  }),
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    publishedAt: z.date(),
    readTime: z.string().optional(),
    featured: z.boolean().default(false),
    externalUrl: z.string().url(),
    image: z.string().optional(),
  }),
});

export const collections = {
  services,
  writing,
};
