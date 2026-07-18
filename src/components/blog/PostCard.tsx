import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatPostDate } from "@/lib/blog/utils";
import type { BlogPost } from "@/lib/blog/queries";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card hover className="flex h-full flex-col overflow-hidden !p-0">
        {post.cover_image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.cover_image_url} alt="" className="h-40 w-full object-cover" />
        )}
        <div className="flex flex-1 flex-col p-5">
          {post.category && (
            <Badge tone={post.accent} className="mb-2 w-fit">
              {post.category}
            </Badge>
          )}
          <h2 className="text-lg font-bold text-foreground">{post.title}</h2>
          <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
          <p className="mt-4 text-xs text-muted-2">
            {post.author_name} · {post.published_at ? formatPostDate(post.published_at) : ""} · {post.reading_time_minutes} min read
          </p>
        </div>
      </Card>
    </Link>
  );
}
