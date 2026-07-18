import Link from "next/link";
import { languages } from "@/data/languages";
import { Flag } from "@/components/ui/Flag";

function chunk<T>(arr: T[], parts: number): T[][] {
  const size = Math.ceil(arr.length / parts);
  return Array.from({ length: parts }, (_, i) => arr.slice(i * size, i * size + size));
}

export function LanguageSitemapGrid() {
  const columns = chunk(languages, 3);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {columns.map((col, i) => (
        <div key={i}>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-2">
            Languages ({col[0]?.name[0]} – {col[col.length - 1]?.name[0]})
          </h3>
          <ul className="flex flex-col gap-2">
            {col.map((lang) => (
              <li key={lang.code}>
                <Link
                  href={`/test/${lang.testSlug}`}
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
                >
                  <Flag lang={lang} className="h-3.5 w-5" />
                  <span>{lang.name} Typing Test</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
