import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/admin";
import { getAllPostsForAdmin } from "@/lib/blog/queries";
import { Card, SectionLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AdminPostRow } from "@/components/blog/AdminPostRow";

export const metadata: Metadata = {
  title: "Blog Admin",
  robots: { index: false },
};

export default async function BlogAdminPage() {
  await requireAdmin("/blog/admin");
  const posts = await getAllPostsForAdmin();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <SectionLabel>Blog Admin</SectionLabel>
        <Button href="/blog/admin/new" size="sm">
          New Post →
        </Button>
      </div>

      <Card>
        {posts.length === 0 ? (
          <p className="text-sm text-muted">No posts yet — create your first one.</p>
        ) : (
          posts.map((post) => <AdminPostRow key={post.id} post={post} />)
        )}
      </Card>
    </div>
  );
}
