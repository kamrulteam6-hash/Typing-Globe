import type { Metadata } from "next";
import { getPublishedPosts, getFeaturedPost } from "@/lib/blog/queries";
import { SectionLabel } from "@/components/ui/Card";
import { PostCard } from "@/components/blog/PostCard";
import { FeaturedPostCard } from "@/components/blog/FeaturedPostCard";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "Typing tips, product updates, and typing-speed insights from Typing Globe.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage() {
  const [posts, featuredPost] = await Promise.all([getPublishedPosts(), getFeaturedPost()]);
  const gridPosts = featuredPost ? posts.filter((p) => p.id !== featuredPost.id) : posts;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <SectionLabel>Blog</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">Typing Globe Blog</h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          Typing tips, product updates, and speed-and-accuracy insights.
        </p>
      </div>

      {featuredPost && <FeaturedPostCard post={featuredPost} />}

      {posts.length === 0 ? (
        <p className="text-center text-sm text-muted">No posts yet — check back soon.</p>
      ) : gridPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
