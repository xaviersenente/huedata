import { defineCollection, z } from 'astro:content';

const references = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    location: z.string(),
    year: z.string(),
    domain: z.enum(['festival', 'salle', 'musee', 'sport', 'collectivite', 'association']),
    featured: z.boolean().default(false),
    logo: z.string().optional(),
    cover: z.string().optional(),
    stats: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    services: z.array(z.string()).optional(),
    testimonial: z.object({
      author: z.string(),
      role: z.string(),
      quote: z.string(),
    }).optional(),
  }),
});

const expertises = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
    color: z.string(),
    description: z.string(),
    methods: z.array(z.string()).optional(),
  }),
});

const temoignages = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    role: z.string(),
    organization: z.string(),
    logo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { references, expertises, temoignages };
