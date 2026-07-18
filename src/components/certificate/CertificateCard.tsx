import { forwardRef } from "react";
import { getLanguage } from "@/data/languages";
import type { PublicCertificate } from "@/lib/auth/dal";

// Inline hex colors (not Tailwind's CSS-variable/oklch classes) so html-to-image
// can serialize this DOM node into a PNG/PDF reliably across browsers — same
// technique as ResultCard.
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

const STAGE_ROWS: { key: "easy" | "medium" | "hard"; label: string; seconds: number }[] = [
  { key: "easy", label: "Stage 1 · Easy", seconds: 60 },
  { key: "medium", label: "Stage 2 · Medium", seconds: 90 },
  { key: "hard", label: "Stage 3 · Hard", seconds: 120 },
];

/** Deterministic PRNG seeded from a string — same certificate ID always
 * produces the same security pattern, but no two certificates look alike. */
function seededRandom(seedStr: string) {
  let h = 0;
  for (let i = 0; i < seedStr.length; i++) {
    h = (Math.imul(31, h) + seedStr.charCodeAt(i)) | 0;
  }
  let state = h >>> 0 || 1;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

/** A guilloché-style overlapping wave pattern, unique per certificate ID —
 * the kind of fine, hard-to-hand-redraw linework used on real certificates,
 * banknotes, and diplomas to raise the bar against casual visual forgery. */
function buildGuillochePaths(seed: string, width: number, height: number) {
  const rand = seededRandom(seed);
  const paths: { d: string; color: string }[] = [];
  const palette = [COLORS.gold, COLORS.primary, COLORS.accent];
  for (let i = 0; i < 7; i++) {
    const amplitude = 8 + rand() * 22;
    const frequency = 1 + rand() * 2.5;
    const phase = rand() * Math.PI * 2;
    const yBase = (height / 8) * (i + 1);
    let d = `M 0 ${yBase.toFixed(1)}`;
    for (let x = 0; x <= width; x += 16) {
      const y = yBase + Math.sin((x / width) * Math.PI * 2 * frequency + phase) * amplitude;
      d += ` L ${x} ${y.toFixed(1)}`;
    }
    paths.push({ d, color: palette[i % palette.length] });
  }
  return paths;
}

export const CertificateCard = forwardRef<
  HTMLDivElement,
  { session: PublicCertificate; qrDataUrl: string; verifyUrl: string }
>(function CertificateCard({ session, qrDataUrl, verifyUrl }, ref) {
  const lang = getLanguage(session.lang_code);
  const dateStr = new Date(session.issued_at).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const shortId = session.id.slice(0, 8).toUpperCase();
  const CARD_W = 760;
  const CARD_H = 620;
  const guilloche = buildGuillochePaths(session.id, CARD_W, CARD_H);
  const microtext = `TYPINGGLOBE • VERIFIED CERTIFICATE • ${shortId} • `.repeat(10);

  return (
    <div
      ref={ref}
      style={{
        width: CARD_W,
        maxWidth: "100%",
        borderRadius: 20,
        padding: "44px 52px",
        background: `linear-gradient(135deg, ${COLORS.surface} 0%, ${COLORS.bg} 100%)`,
        border: `2px solid ${COLORS.gold}`,
        color: COLORS.foreground,
        fontFamily: "Georgia, 'Times New Roman', serif",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Unique-per-certificate security pattern — deterministically seeded by
          this certificate's own ID, so it can't be reused across certificates
          and is tedious to hand-recreate in a generic design tool. */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${CARD_W} ${CARD_H}`}
        style={{ position: "absolute", inset: 0, opacity: 0.12, pointerEvents: "none" }}
        preserveAspectRatio="none"
      >
        {guilloche.map((p, i) => (
          <path key={i} d={p.d} fill="none" stroke={p.color} strokeWidth={1} />
        ))}
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 10,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 12,
          pointerEvents: "none",
        }}
      />

      {/* Microtext ribbons — repeating fine print naming this exact certificate,
          along the top and bottom inside the border. */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 20,
          right: 20,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 6,
          letterSpacing: 1,
          color: COLORS.gold,
          opacity: 0.55,
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {microtext}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 20,
          right: 20,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 6,
          letterSpacing: 1,
          color: COLORS.gold,
          opacity: 0.55,
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {microtext}
      </div>

      {/* Diagonal watermark of this certificate's own ID — not a generic
          "copy" stamp, but proof the visual originated from this exact record. */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-28deg)",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 6,
          color: COLORS.foreground,
          opacity: 0.045,
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {(shortId + " ").repeat(8)}
      </div>

      <div
        style={{
          position: "absolute",
          top: -70,
          right: -70,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: COLORS.gold,
          opacity: 0.1,
          filter: "blur(10px)",
        }}
      />

      {/* Foil-style seal */}
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 34,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: `conic-gradient(from 0deg, ${COLORS.gold}, ${COLORS.accent}, ${COLORS.primary}, ${COLORS.gold})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 0 2px ${COLORS.bg}, 0 0 0 3px ${COLORS.gold}`,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: COLORS.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 10,
            fontWeight: 700,
            color: COLORS.gold,
          }}
        >
          VERIFIED
        </div>
      </div>

      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
        <span
          style={{
            display: "flex",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            background: COLORS.primary,
            color: "#03150e",
            fontWeight: 700,
            fontSize: 12,
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          TG
        </span>
        <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: COLORS.gold }}>
          Certificate of Achievement
        </span>
      </div>

      <p style={{ position: "relative", marginTop: 28, fontSize: 13, color: COLORS.muted }}>This certifies that</p>
      <p style={{ position: "relative", marginTop: 8, fontSize: 32, fontWeight: 700, color: COLORS.foreground }}>
        {session.display_name}
      </p>
      <p style={{ position: "relative", marginTop: 14, fontSize: 14, color: COLORS.muted, lineHeight: 1.6 }}>
        has completed a 3-stage timed typing exam in{" "}
        <span style={{ color: COLORS.accent, fontWeight: 700 }}>{lang?.name ?? session.lang_code}</span>{" "}
        with an average net speed of
      </p>

      <div style={{ position: "relative", marginTop: 18, display: "flex", alignItems: "baseline", justifyContent: "center", gap: 8 }}>
        <span style={{ fontSize: 68, fontWeight: 800, lineHeight: 1, color: COLORS.gold }}>{session.avg_wpm}</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: COLORS.muted }}>WPM</span>
      </div>
      <p style={{ position: "relative", marginTop: 8, fontSize: 13, color: COLORS.muted }}>
        <span style={{ color: COLORS.foreground, fontWeight: 700 }}>{session.avg_accuracy}%</span> average accuracy
      </p>

      <div
        style={{
          position: "relative",
          marginTop: 26,
          display: "flex",
          justifyContent: "center",
          gap: 0,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: 480 }}>
          <thead>
            <tr>
              <th style={{ fontSize: 10, color: COLORS.muted, fontWeight: 700, textTransform: "uppercase", padding: "4px 10px", textAlign: "left" }}>Stage</th>
              <th style={{ fontSize: 10, color: COLORS.muted, fontWeight: 700, textTransform: "uppercase", padding: "4px 10px" }}>WPM</th>
              <th style={{ fontSize: 10, color: COLORS.muted, fontWeight: 700, textTransform: "uppercase", padding: "4px 10px" }}>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {STAGE_ROWS.map((row) => (
              <tr key={row.key} style={{ borderTop: `1px solid ${COLORS.border}` }}>
                <td style={{ fontSize: 12, color: COLORS.foreground, padding: "6px 10px", textAlign: "left" }}>
                  {row.label} <span style={{ color: COLORS.muted }}>({row.seconds}s)</span>
                </td>
                <td style={{ fontSize: 12, color: COLORS.foreground, padding: "6px 10px", textAlign: "center", fontWeight: 700 }}>
                  {session[`${row.key}_wpm`]}
                </td>
                <td style={{ fontSize: 12, color: COLORS.foreground, padding: "6px 10px", textAlign: "center" }}>
                  {session[`${row.key}_accuracy`]}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          position: "relative",
          marginTop: 30,
          paddingTop: 20,
          borderTop: `1px solid ${COLORS.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "Arial, Helvetica, sans-serif",
          textAlign: "left",
        }}
      >
        <div>
          <p style={{ fontSize: 11, color: COLORS.muted }}>Issued {dateStr}</p>
          <p style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>Credential ID: {shortId}</p>
          <p style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>{verifyUrl.replace(/^https?:\/\//, "")}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qrDataUrl} alt="Verification QR code" width={72} height={72} style={{ borderRadius: 6, background: "#fff", padding: 4 }} />
      </div>
    </div>
  );
});
