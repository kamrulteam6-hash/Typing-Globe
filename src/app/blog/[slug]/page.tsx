import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedPostBySlug, getRelatedPosts } from "@/lib/blog/queries";
import { Badge } from "@/components/ui/Badge";
import { PostContent } from "@/components/blog/PostContent";
import { formatPostDate } from "@/lib/blog/utils";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) return {};

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      images: post.cover_image_url ? [post.cover_image_url] : undefined,
    },
    robots: post.noindex ? { index: false, follow: true } : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.category, post.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.cover_image_url ?? undefined,
    author: { "@type": "Person", name: post.author_name },
    datePublished: post.published_at ?? undefined,
    dateModified: post.updated_at,
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mb-8 text-center">
        {post.category && (
          <Badge tone={post.accent}>
            <Link href={`/blog?category=${encodeURIComponent(post.category)}`}>{post.category}</Link>
          </Badge>
        )}
        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-muted-2">
          {post.author_name} · {post.published_at ? formatPostDate(post.published_at) : ""} · {post.reading_time_minutes} min read
        </p>
      </div>

      {post.cover_image_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.cover_image_url} alt="" className="mb-10 w-full rounded-2xl object-cover" />
      )}

      <PostContent html={post.content_html} />

      {related.length > 0 && (
        <div className="mt-16 border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-2">More Like This</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary/40 hover:text-primary"
              >
                {r.title}
              </Link>
            ))}
          </div>
          <Link href="/blog" className="mt-4 inline-block text-xs font-semibold text-primary hover:underline">
            All Posts →
          </Link>
        </div>
      )}
    </div>
  );
}
