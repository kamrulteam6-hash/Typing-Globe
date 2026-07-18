"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapLink from "@tiptap/extension-link";
import TiptapImage from "@tiptap/extension-image";
import { EditorToolbar } from "./EditorToolbar";
import { PromoPicker } from "./PromoPicker";
import { PromoCard } from "./tiptap/promoCard";
import { uploadBlogImage } from "@/lib/blog/upload";
import { createPost, updatePost, type PostInput } from "@/app/blog/admin/actions";
import { Button } from "@/components/ui/Button";
import { slugify } from "@/lib/blog/utils";
import type { BlogAccent, BlogPost } from "@/lib/blog/queries";

const ACCENTS: { key: BlogAccent; label: string }[] = [
  { key: "primary", label: "Teal" },
  { key: "accent", label: "Cyan" },
  { key: "gold", label: "Gold" },
];

export function PostEditor({ post }: { post?: BlogPost }) {
  const router = useRouter();
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(!!post);
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [authorName, setAuthorName] = useState(post?.author_name ?? "");
  const [category, setCategory] = useState(post?.category ?? "");
  const [coverImageUrl, setCoverImageUrl] = useState(post?.cover_image_url ?? "");
  const [metaTitle, setMetaTitle] = useState(post?.meta_title ?? "");
  const [metaDescription, setMetaDescription] = useState(post?.meta_description ?? "");
  const [noindex, setNoindex] = useState(post?.noindex ?? false);
  const [accent, setAccent] = useState<BlogAccent>(post?.accent ?? "primary");
  const [featured, setFeatured] = useState(post?.featured ?? false);
  const [promoOpen, setPromoOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [uploadingCover, setUploadingCover] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const inlineInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [StarterKit, TiptapLink.configure({ openOnClick: false }), TiptapImage, PromoCard],
    content: post?.content_html ?? "<p></p>",
    immediatelyRender: false,
  });

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  };

  const handleCoverFile = async (file: File) => {
    setUploadingCover(true);
    const { url, error: uploadError } = await uploadBlogImage(file);
    setUploadingCover(false);
    if (uploadError) {
      setError(uploadError);
      return;
    }
    if (url) setCoverImageUrl(url);
  };

  const handleInlineFile = async (file: File) => {
    const { url, error: uploadError } = await uploadBlogImage(file);
    if (uploadError) {
      setError(uploadError);
      return;
    }
    if (url) editor?.chain().focus().setImage({ src: url }).run();
  };

  const save = (status: "draft" | "published") => {
    setError(null);
    const input: PostInput = {
      title,
      slug,
      excerpt,
      contentHtml: editor?.getHTML() ?? "",
      authorName,
      category: category || undefined,
      coverImageUrl: coverImageUrl || undefined,
      status,
      metaTitle: metaTitle || undefined,
      metaDescription: metaDescription || undefined,
      noindex,
      accent,
      featured,
    };
    startTransition(async () => {
      const result = post ? await updatePost(post.id, input) : await createPost(input);
      if (result.error) {
        setError(result.error);
        return;
      }
      router.push("/blog/admin");
      router.refresh();
    });
  };

  return (
    <div className="mx-auto max-w-3xl">
      {error && (
        <p className="mb-4 rounded-lg border border-[color:var(--danger)]/30 bg-[color:var(--danger)]/10 px-3 py-2 text-sm text-[color:var(--danger)]">
          {error}
        </p>
      )}

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Title</label>
          <input
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-lg font-semibold text-foreground outline-none focus:border-primary/50"
            placeholder="Post title"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Slug</label>
          <input
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setSlugTouched(true);
            }}
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 font-mono text-sm text-foreground outline-none focus:border-primary/50"
            placeholder="post-url-slug"
          />
          <p className="mt-1 text-xs text-muted-2">/blog/{slug || "…"} — changing this changes the post&apos;s URL.</p>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
            placeholder="One or two sentences shown on the blog listing"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Author</label>
            <input
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
              Category <span className="normal-case text-muted-2">(optional)</span>
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Cover image</label>
          <div className="flex items-center gap-3">
            {coverImageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={coverImageUrl} alt="" className="h-16 w-24 rounded-lg object-cover" />
            )}
            <button
              type="button"
              onClick={() => coverInputRef.current?.click()}
              disabled={uploadingCover}
              className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-muted hover:text-foreground disabled:opacity-50"
            >
              {uploadingCover ? "Uploading…" : coverImageUrl ? "Replace" : "Upload"}
            </button>
          </div>
          <input
            ref={coverInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleCoverFile(file);
              e.target.value = "";
            }}
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Content</label>
          <div className="overflow-hidden rounded-lg border border-border">
            <EditorToolbar
              editor={editor}
              onInsertImage={() => inlineInputRef.current?.click()}
              onTogglePromo={() => setPromoOpen((v) => !v)}
            />
            {promoOpen && <PromoPicker editor={editor} onClose={() => setPromoOpen(false)} />}
            <EditorContent
              editor={editor}
              className="prose prose-invert min-h-[300px] max-w-none px-4 py-3 focus:outline-none"
            />
          </div>
          <input
            ref={inlineInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleInlineFile(file);
              e.target.value = "";
            }}
          />
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">SEO</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
                Meta Title <span className="normal-case text-muted-2">(optional, falls back to Title)</span>
              </label>
              <input
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
                Meta Description <span className="normal-case text-muted-2">(optional, falls back to Excerpt)</span>
              </label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-foreground">
              <input type="checkbox" checked={noindex} onChange={(e) => setNoindex(e.target.checked)} />
              Hide from search engines (noindex)
            </label>
          </div>
        </div>

        <div className="rounded-lg border border-border p-4">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Decoration</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Accent Color</label>
              <div className="flex gap-2">
                {ACCENTS.map((a) => (
                  <button
                    key={a.key}
                    type="button"
                    onClick={() => setAccent(a.key)}
                    className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                      accent === a.key ? "border-primary bg-primary/10 text-primary" : "border-border text-muted hover:text-foreground"
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm text-foreground">
              <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
              Feature this post as the blog hero
            </label>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button onClick={() => save("draft")} variant="secondary" disabled={isPending}>
            {isPending ? "Saving…" : "Save Draft"}
          </Button>
          <Button onClick={() => save("published")} disabled={isPending}>
            {isPending ? "Publishing…" : "Publish"}
          </Button>
        </div>
      </div>
    </div>
  );
}
