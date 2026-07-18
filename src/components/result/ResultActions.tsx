"use client";

import { RefObject, useState } from "react";

export function ResultActions({
  targetRef,
  fileName,
  shareUrl,
  challengeUrl,
  shareLabel = "Copy Share Link",
}: {
  targetRef: RefObject<HTMLDivElement | null>;
  fileName: string;
  shareUrl?: string;
  challengeUrl?: string;
  shareLabel?: string;
}) {
  const [copied, setCopied] = useState<"share" | "challenge" | null>(null);
  const [busy, setBusy] = useState<"png" | "pdf" | null>(null);

  const downloadPng = async () => {
    if (!targetRef.current) return;
    setBusy("png");
    try {
      const { toPng } = await import("html-to-image");
      const dataUrl = await toPng(targetRef.current, { pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `${fileName}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setBusy(null);
    }
  };

  const downloadPdf = async () => {
    if (!targetRef.current) return;
    setBusy("pdf");
    try {
      const [{ toPng }, { jsPDF }] = await Promise.all([import("html-to-image"), import("jspdf")]);
      const dataUrl = await toPng(targetRef.current, { pixelRatio: 2 });
      const img = new Image();
      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.src = dataUrl;
      });
      const pdf = new jsPDF({
        orientation: img.width > img.height ? "landscape" : "portrait",
        unit: "px",
        format: [img.width, img.height],
      });
      pdf.addImage(dataUrl, "PNG", 0, 0, img.width, img.height);
      pdf.save(`${fileName}.pdf`);
    } finally {
      setBusy(null);
    }
  };

  const copy = async (url: string, kind: "share" | "challenge") => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(kind);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard API unavailable — fall back silently, URL is still visible in browser if needed.
    }
  };

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={downloadPng}
        disabled={busy !== null}
        className="rounded-lg border border-border bg-surface-2 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 disabled:opacity-50"
      >
        {busy === "png" ? "Preparing…" : "⬇ PNG"}
      </button>
      <button
        onClick={downloadPdf}
        disabled={busy !== null}
        className="rounded-lg border border-border bg-surface-2 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 disabled:opacity-50"
      >
        {busy === "pdf" ? "Preparing…" : "⬇ PDF"}
      </button>
      {shareUrl && (
        <button
          onClick={() => copy(shareUrl, "share")}
          className="rounded-lg border border-border bg-surface-2 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40"
        >
          {copied === "share" ? "✓ Link Copied" : `🔗 ${shareLabel}`}
        </button>
      )}
      {challengeUrl && (
        <button
          onClick={() => copy(challengeUrl, "challenge")}
          className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          {copied === "challenge" ? "✓ Challenge Link Copied" : "⚔ Challenge a Friend"}
        </button>
      )}
    </div>
  );
}
