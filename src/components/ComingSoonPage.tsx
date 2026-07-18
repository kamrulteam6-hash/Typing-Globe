import Link from "next/link";
import { SectionLabel } from "@/components/ui/Card";

export function ComingSoonPage({
  label,
  title,
  description,
  bullets,
}: {
  label: string;
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-balance leading-relaxed text-muted">{description}</p>

      <ul className="mx-auto mt-8 flex max-w-md flex-col gap-2 text-left">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-muted">
            <span className="mt-0.5 text-primary">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary inline-block">
        On our build queue — coming soon
      </p>

      <div className="mt-8">
        <Link
          href="/typing-test-languages"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
        >
          Try a Live Typing Test Instead →
        </Link>
      </div>
    </div>
  );
}
