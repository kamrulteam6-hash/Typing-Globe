import { LanguageDeepContent } from "@/data/deepContent/types";
import { SeoHeading, SeoSubheading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export function DeepContentRenderer({ content }: { content: LanguageDeepContent }) {
  return (
    <section className="mt-20 flex flex-col gap-8 border-t border-border pt-12">
      {content.blocks.map((block, i) => {
        switch (block.type) {
          case "hero":
            return (
              <div key={i} className="flex flex-col gap-4">
                {block.narrative.map((p, j) => (
                  <p key={j} className="leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            );
          case "heading":
            return (
              <SeoHeading key={i} id={block.id}>
                {block.text}
              </SeoHeading>
            );
          case "subheading":
            return <SeoSubheading key={i}>{block.text}</SeoSubheading>;
          case "paragraph":
            return (
              <p key={i} className="leading-relaxed text-muted">
                {block.text}
              </p>
            );
          case "list":
            return block.ordered ? (
              <ol key={i} className="flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                      {j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="flex flex-col gap-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-0.5 text-primary">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i}>
                <DataTable headers={block.headers} rows={block.rows} />
              </div>
            );
          case "callout":
            return (
              <Callout key={i} icon={block.icon} title={block.title}>
                {block.text}
              </Callout>
            );
          case "faq":
            return (
              <div key={i}>
                <SeoFaqBlock items={block.items} />
              </div>
            );
          case "cta":
            return (
              <p key={i} className="rounded-2xl border border-primary/25 bg-primary/10 p-5 text-center text-sm font-medium text-primary">
                {block.text}
              </p>
            );
          default:
            return null;
        }
      })}
    </section>
  );
}
