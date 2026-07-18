"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/auth/admin";
import { createClient } from "@/lib/supabase/server";
import { estimateReadingTime } from "@/lib/blog/utils";

const postSchema = z.object({
  title: z.string().trim().min(3, "Title is too short.").max(160),
  slug: z
    .string()
    .trim()
    .toLowerCase()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Slug can only contain lowercase letters, numbers, and hyphens.")
    .min(3, "Slug is too short.")
    .max(200),
  excerpt: z.string().trim().min(10, "Write a short excerpt.").max(300),
  contentHtml: z.string().trim().min(20, "Post content is too short."),
  authorName: z.string().trim().min(2, "Enter an author name.").max(80),
  category: z.string().trim().max(60).optional(),
  coverImageUrl: z.union([z.string().trim().url(), z.literal("")]).optional(),
  status: z.enum(["draft", "published"]),
  metaTitle: z.union([z.string().trim().max(160), z.literal("")]).optional(),
  metaDescription: z.union([z.string().trim().max(300), z.literal("")]).optional(),
  noindex: z.boolean(),
  accent: z.enum(["primary", "accent", "gold"]),
  featured: z.boolean(),
});

export type PostInput = z.infer<typeof postSchema>;
export type PostActionState = { error: string | null; id?: string };

type SupabaseServerClient = Awaited<ReturnType<typeof createClient>>;

async function uniqueSlug(base: string, supabase: SupabaseServerClient, excludeId?: string) {
  const root = base || "post";
  let slug = root;
  let attempt = 0;
  for (;;) {
    let query = supabase.from("blog_posts").select("id").eq("slug", slug);
    if (excludeId) query = query.neq("id", excludeId);
    const { data } = await query.maybeSingle();
    if (!data) return slug;
    attempt++;
    slug = `${root}-${attempt + 1}`;
  }
}

export async function createPost(input: PostInput): Promise<PostActionState> {
  await requireAdmin("/blog/admin");
  const parsed = postSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid post." };
  }

  const supabase = await createClient();
  const slug = await uniqueSlug(parsed.data.slug, supabase);
  const readingTime = estimateReadingTime(parsed.data.contentHtml);

  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      slug,
      title: parsed.data.title,
      excerpt: parsed.data.excerpt,
      content_html: parsed.data.contentHtml,
      cover_image_url: parsed.data.coverImageUrl || null,
      author_name: parsed.data.authorName,
      category: parsed.data.category || null,
      status: parsed.data.status,
      reading_time_minutes: readingTime,
      published_at: parsed.data.status === "published" ? new Date().toISOString() : null,
      meta_title: parsed.data.metaTitle || null,
      meta_description: parsed.data.metaDescription || null,
      noindex: parsed.data.noindex,
      accent: parsed.data.accent,
      featured: parsed.data.featured,
    })
    .select("id")
    .single();

  if (error) return { error: error.message };

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  return { error: null, id: data.id };
}

export async function updatePost(id: string, input: PostInput): Promise<PostActionState> {
  await requireAdmin("/blog/admin");
  const parsed = postSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid post." };
  }

  const supabase = await createClient();
  const existing = await supabase
    .from("blog_posts")
    .select("slug, status, published_at")
    .eq("id", id)
    .maybeSingle();
  if (!existing.data) return { error: "Post not found." };

  const newSlug = await uniqueSlug(parsed.data.slug, supabase, id);
  const readingTime = estimateReadingTime(parsed.data.contentHtml);
  const nowPublishing = parsed.data.status === "published";

  const { error } = await supabase
    .from("blog_posts")
    .update({
      slug: newSlug,
      title: parsed.data.title,
      excerpt: parsed.data.excerpt,
      content_html: parsed.data.contentHtml,
      cover_image_url: parsed.data.coverImageUrl || null,
      author_name: parsed.data.authorName,
      category: parsed.data.category || null,
      status: parsed.data.status,
      reading_time_minutes: readingTime,
      published_at: nowPublishing ? (existing.data.published_at ?? new Date().toISOString()) : existing.data.published_at,
      updated_at: new Date().toISOString(),
      meta_title: parsed.data.metaTitle || null,
      meta_description: parsed.data.metaDescription || null,
      noindex: parsed.data.noindex,
      accent: parsed.data.accent,
      featured: parsed.data.featured,
    })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/blog");
  revalidatePath(`/blog/${existing.data.slug}`);
  if (newSlug !== existing.data.slug) revalidatePath(`/blog/${newSlug}`);
  return { error: null, id };
}

export async function deletePost(id: string): Promise<{ error: string | null }> {
  await requireAdmin("/blog/admin");
  const supabase = await createClient();
  const existing = await supabase.from("blog_posts").select("slug").eq("id", id).maybeSingle();

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/blog");
  if (existing.data) revalidatePath(`/blog/${existing.data.slug}`);
  return { error: null };
}

export async function togglePublish(
  id: string,
  status: "draft" | "published"
): Promise<{ error: string | null }> {
  await requireAdmin("/blog/admin");
  const supabase = await createClient();
  const existing = await supabase
    .from("blog_posts")
    .select("slug, published_at")
    .eq("id", id)
    .maybeSingle();
  if (!existing.data) return { error: "Post not found." };

  const { error } = await supabase
    .from("blog_posts")
    .update({
      status,
      published_at: status === "published" ? (existing.data.published_at ?? new Date().toISOString()) : existing.data.published_at,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/blog");
  revalidatePath(`/blog/${existing.data.slug}`);
  return { error: null };
}
