import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth/admin";
import { getPostById } from "@/lib/blog/queries";
import { SectionLabel } from "@/components/ui/Card";
import { PostEditor } from "@/components/blog/PostEditor";

export const metadata: Metadata = {
  title: "Edit Post — Blog Admin",
  robots: { index: false },
};

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireAdmin(`/blog/admin/${id}/edit`);
  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6">
        <SectionLabel>Edit Post</SectionLabel>
      </div>
      <PostEditor post={post} />
    </div>
  );
}
