import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatPostDate } from "@/lib/blog/utils";
import type { BlogPost } from "@/lib/blog/queries";

export function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card hover className="mb-10 grid gap-0 overflow-hidden !p-0 sm:grid-cols-2">
        {post.cover_image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.cover_image_url} alt="" className="h-56 w-full object-cover sm:h-full" />
        )}
        <div className="flex flex-col justify-center p-8">
          <Badge tone={post.accent} className="mb-3 w-fit">
            Featured{post.category ? ` · ${post.category}` : ""}
          </Badge>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{post.title}</h2>
          <p className="mt-3 text-base text-muted">{post.excerpt}</p>
          <p className="mt-5 text-xs text-muted-2">
            {post.author_name} · {post.published_at ? formatPostDate(post.published_at) : ""} · {post.reading_time_minutes} min read
          </p>
          <span className="mt-4 text-sm font-semibold text-primary">Read More →</span>
        </div>
      </Card>
    </Link>
  );
}
