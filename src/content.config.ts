import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
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
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
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
