import { defineCollection, z } from "astro:content";

const products = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string().optional(),
    category: z.string(),
    description: z.string().optional(),
    ingredients: z.array(z.string()).optional(),
    price: z.number(),
    image: z.string().optional(),
    available: z.boolean().default(true),
    body: z.string().optional(),
  }),
});

const drinks = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    price: z.number(),
    image: z.string().optional(),
    available: z.boolean().default(true),
    body: z.string().optional(),
  }),
});

const categories = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  products,
  drinks,
  categories,
};
