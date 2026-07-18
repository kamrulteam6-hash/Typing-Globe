import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth/admin";
import { SectionLabel } from "@/components/ui/Card";
import { PostEditor } from "@/components/blog/PostEditor";

export const metadata: Metadata = {
  title: "New Post — Blog Admin",
  robots: { index: false },
};

export default async function NewPostPage() {
  await requireAdmin("/blog/admin/new");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6">
        <SectionLabel>New Post</SectionLabel>
      </div>
      <PostEditor />
    </div>
  );
}
