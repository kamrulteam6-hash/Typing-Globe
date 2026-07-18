import { Language } from "@/data/languages";

export function Flag({ lang, className = "" }: { lang: Pick<Language, "flagCode" | "flagEmoji" | "name">; className?: string }) {
  if (!lang.flagCode) {
    return <span className={className}>{lang.flagEmoji}</span>;
  }
  return (
    <span
      className={`fi fi-${lang.flagCode} rounded-[3px] ${className}`}
      style={{ backgroundSize: "cover" }}
      role="img"
      aria-label={`${lang.name} flag`}
    />
  );
}
