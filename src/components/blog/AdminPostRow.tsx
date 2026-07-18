"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { deletePost, togglePublish } from "@/app/blog/admin/actions";
import type { BlogPost } from "@/lib/blog/queries";
import { formatPostDate } from "@/lib/blog/utils";

export function AdminPostRow({ post }: { post: BlogPost }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    startTransition(async () => {
      await togglePublish(post.id, post.status === "published" ? "draft" : "published");
      router.refresh();
    });
  };

  const handleDelete = () => {
    if (!window.confirm(`Delete "${post.title}"? This can't be undone.`)) return;
    startTransition(async () => {
      await deletePost(post.id);
      router.refresh();
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-3 last:border-0">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <Badge tone={post.status === "published" ? "primary" : "muted"}>{post.status}</Badge>
          <p className="truncate font-semibold text-foreground">{post.title}</p>
        </div>
        <p className="mt-1 text-xs text-muted">
          {formatPostDate(post.updated_at)} · {post.reading_time_minutes} min read
          {post.category ? ` · ${post.category}` : ""}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/blog/admin/${post.id}/edit`}
          className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted hover:text-foreground"
        >
          Edit
        </Link>
        <button
          onClick={handleToggle}
          disabled={isPending}
          className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted hover:text-foreground disabled:opacity-50"
        >
          {post.status === "published" ? "Unpublish" : "Publish"}
        </button>
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="rounded-md border border-[color:var(--danger)]/30 px-3 py-1.5 text-xs font-semibold text-[color:var(--danger)] hover:bg-[color:var(--danger)]/10 disabled:opacity-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
