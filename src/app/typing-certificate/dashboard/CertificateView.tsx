"use client";

import { useRef, useState } from "react";
import { CertificateCard } from "@/components/certificate/CertificateCard";
import { ResultActions } from "@/components/result/ResultActions";
import type { CertificateSession } from "@/lib/auth/dal";
import { ExamFlow } from "./ExamFlow";

export function CertificateView({
  session,
  sessionCount,
  qrDataUrl,
  verifyUrl,
}: {
  session: CertificateSession;
  sessionCount: number;
  qrDataUrl: string;
  verifyUrl: string;
}) {
  const [retaking, setRetaking] = useState(false);
  const [copied, setCopied] = useState<"id" | "url" | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  if (retaking) {
    return <ExamFlow displayName={session.display_name} isRetake />;
  }

  const copy = async (text: string, kind: "id" | "url") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard API unavailable — the value is still visible to copy manually.
    }
  };

  return (
    <div className="flex flex-col items-center">
      <CertificateCard ref={cardRef} session={session} qrDataUrl={qrDataUrl} verifyUrl={verifyUrl} />
      <ResultActions
        targetRef={cardRef}
        fileName={`typing-certificate-${session.display_name.replace(/\s+/g, "-").toLowerCase()}`}
      />

      <p className="mt-4 text-xs text-muted-2">
        Based on your best of {sessionCount} completed exam{sessionCount === 1 ? "" : "s"}.
      </p>

      <div className="mt-6 w-full max-w-md rounded-xl border border-border bg-surface-2 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Credential Details</p>
        <p className="mt-2 text-xs text-muted">
          Add these to LinkedIn, Upwork, Fiverr, or any profile that asks for a credential ID and
          verification link.
        </p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="truncate font-mono text-xs text-foreground">{session.id}</span>
          <button
            onClick={() => copy(session.id, "id")}
            className="shrink-0 rounded-md border border-border px-2 py-1 text-xs font-semibold text-muted hover:text-foreground"
          >
            {copied === "id" ? "✓ Copied" : "Copy ID"}
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="truncate text-xs text-foreground">{verifyUrl}</span>
          <button
            onClick={() => copy(verifyUrl, "url")}
            className="shrink-0 rounded-md border border-border px-2 py-1 text-xs font-semibold text-muted hover:text-foreground"
          >
            {copied === "url" ? "✓ Copied" : "Copy Link"}
          </button>
        </div>
      </div>

      <p className="mt-6 max-w-sm text-center text-xs text-muted-2">
        Your name is locked to this certificate. To change it, retake the full exam below — a new
        name can only ever come with a new score.
      </p>
      <button
        onClick={() => setRetaking(true)}
        className="mt-3 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
      >
        Improve WPM / Change Name →
      </button>
    </div>
  );
}
