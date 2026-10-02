import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    emoji: z.string().default('🌰'),
    readingMinutes: z.number().default(3),
  }),
});

export const collections = { stories };
