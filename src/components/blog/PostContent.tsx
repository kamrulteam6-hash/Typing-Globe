/** Renders admin-authored HTML — safe because only admin_users (checked via RLS) can ever write blog_posts.content_html. */
export function PostContent({ html }: { html: string }) {
  return (
    <div
      className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-primary/40 prose-blockquote:text-muted"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
