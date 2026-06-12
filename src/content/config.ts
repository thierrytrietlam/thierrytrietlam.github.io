import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Projects are real work, anonymized and told as data stories.
// Each project is one markdown file with its own detail page at /projects/<slug>.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    // `key` is the shared URL identifier across languages. Do not name this
    // `slug`: the glob loader treats a `slug` field as the entry id, which would
    // make the EN and FR files collide on one id.
    key: z.string(),
    lang: z.enum(["en", "fr"]).default("en"),
    title: z.string(),
    summary: z.string(),
    question: z.string(),
    dataset: z.string(),
    goal: z.string(),
    outcome: z.string().optional(),
    stack: z.array(z.string()),
    cover: z.string(),
    date: z.string(),
    featured: z.boolean().default(false),
    synthetic: z.boolean().default(true),
    order: z.number().default(0),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

export const collections = { projects };
