import { ShareableResult } from "@/lib/shareResult";

export function ChallengeBanner({ challenger }: { challenger: ShareableResult }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4 rounded-xl border border-gold/25 bg-gold/10 px-5 py-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-gold">⚔ You&apos;ve Been Challenged</p>
        <p className="mt-1 text-sm text-muted">
          Beat <span className="font-semibold text-foreground">{challenger.wpm} WPM</span> at{" "}
          <span className="font-semibold text-foreground">{challenger.accuracy}%</span> accuracy to win.
        </p>
      </div>
      <span className="shrink-0 rounded-full border border-gold/30 bg-surface px-3 py-1.5 text-xs font-semibold text-gold">
        {challenger.wpm} WPM
      </span>
    </div>
  );
}
