import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string(),
    categoria: z.string(),
    imagem: z.string().url(),
    canonical: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    artigosRelacionados: z.array(
      z.object({
        titulo: z.string(),
        resumo: z.string(),
        imagem: z.string().url(),
        data: z.string(),
        author: z.string(),
        categoria: z.string(),
        slug: z.string(),
      })
    ).optional(),
    geo: z.object({
      region: z.string(),
      placename: z.string(),
      position: z.string(),
      icbm: z.string()
    }).optional(),
    openGraph: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().url()
    }),
    twitterCard: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().url()
    }),
    localBusiness: z.object({
      name: z.string(),
      address: z.string(),
      phone: z.string(),
      openingHours: z.string(),
      paymentAccepted: z.string(),
      areaServed: z.string()
    })
  }),
});

export const collections = {
  posts: postsCollection,
};
