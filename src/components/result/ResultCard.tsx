import { forwardRef } from "react";
import { ShareableResult } from "@/lib/shareResult";

// Inline hex colors (not Tailwind's CSS-variable/oklch classes) so html-to-image
// can serialize this DOM node into a PNG reliably across browsers.
const COLORS = {
  bg: "#05070c",
  surface: "#0b0f18",
  border: "#1c2330",
  foreground: "#e8eaef",
  muted: "#8992a3",
  primary: "#12b981",
  accent: "#22d3ee",
  gold: "#f5b544",
};

export const ResultCard = forwardRef<HTMLDivElement, { result: ShareableResult; label?: string }>(
  function ResultCard({ result, label }, ref) {
    const dateStr = new Date(result.date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return (
      <div
        ref={ref}
        style={{
          width: 640,
          maxWidth: "100%",
          borderRadius: 24,
          padding: 32,
          background: `linear-gradient(135deg, ${COLORS.surface} 0%, ${COLORS.bg} 100%)`,
          border: `1px solid ${COLORS.border}`,
          color: COLORS.foreground,
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: COLORS.primary,
            opacity: 0.18,
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: COLORS.accent,
            opacity: 0.14,
            filter: "blur(10px)",
          }}
        />

        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "flex",
                height: 32,
                width: 32,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                background: COLORS.primary,
                color: "#03150e",
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              TG
            </span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>Typing Globe</span>
          </div>
          <span style={{ fontSize: 11, color: COLORS.muted, letterSpacing: 0.5 }}>WWW.TYPINGGLOBE.COM</span>
        </div>

        <p
          style={{
            position: "relative",
            marginTop: 24,
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: COLORS.primary,
          }}
        >
          {label ?? "Typing Result"}
        </p>
        <p style={{ position: "relative", marginTop: 4, fontSize: 15, color: COLORS.foreground, fontWeight: 600 }}>
          {result.contentLabel}
        </p>

        <div style={{ position: "relative", marginTop: 28, display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontSize: 72, fontWeight: 800, lineHeight: 1, color: COLORS.foreground }}>{result.wpm}</span>
          <span style={{ fontSize: 18, fontWeight: 600, color: COLORS.muted }}>WPM</span>
        </div>

        <div style={{ position: "relative", marginTop: 24, display: "flex", gap: 32 }}>
          <div>
            <p style={{ fontSize: 24, fontWeight: 700, color: COLORS.accent }}>{result.accuracy}%</p>
            <p style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>Accuracy</p>
          </div>
          <div>
            <p style={{ fontSize: 24, fontWeight: 700, color: COLORS.gold }}>{result.correct}</p>
            <p style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>Correct Chars</p>
          </div>
          <div>
            <p style={{ fontSize: 24, fontWeight: 700, color: COLORS.foreground }}>
              {result.mode === "test" ? "Timed" : "Practice"}
            </p>
            <p style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>Mode</p>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            marginTop: 28,
            paddingTop: 16,
            borderTop: `1px solid ${COLORS.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 11, color: COLORS.muted }}>{dateStr}</span>
          <span style={{ fontSize: 11, color: COLORS.muted }}>Free typing tests in 70 languages</span>
        </div>
      </div>
    );
  }
);
