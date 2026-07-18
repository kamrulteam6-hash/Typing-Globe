import { forwardRef } from "react";
import { DuelResult } from "@/lib/shareResult";

const COLORS = {
  bg: "#05070c",
  surface: "#0b0f18",
  border: "#1c2330",
  foreground: "#e8eaef",
  muted: "#8992a3",
  primary: "#12b981",
  accent: "#22d3ee",
  gold: "#f5b544",
  danger: "#f0576c",
};

function Side({ title, wpm, accuracy, winner }: { title: string; wpm: number; accuracy: number; winner: boolean }) {
  return (
    <div
      style={{
        flex: 1,
        borderRadius: 16,
        padding: 20,
        background: winner ? "rgba(18,185,129,0.12)" : "transparent",
        border: `1px solid ${winner ? COLORS.primary : COLORS.border}`,
        textAlign: "center",
      }}
    >
      {winner && (
        <p style={{ fontSize: 10, fontWeight: 700, color: COLORS.primary, textTransform: "uppercase", letterSpacing: 1 }}>
          🏆 Winner
        </p>
      )}
      <p style={{ marginTop: winner ? 4 : 14, fontSize: 12, color: COLORS.muted, fontWeight: 600 }}>{title}</p>
      <p style={{ marginTop: 8, fontSize: 44, fontWeight: 800, lineHeight: 1, color: COLORS.foreground }}>{wpm}</p>
      <p style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>WPM</p>
      <p style={{ marginTop: 10, fontSize: 16, fontWeight: 700, color: COLORS.accent }}>{accuracy}%</p>
      <p style={{ fontSize: 10, color: COLORS.muted }}>Accuracy</p>
    </div>
  );
}

export const ComparisonCard = forwardRef<HTMLDivElement, { duel: DuelResult }>(function ComparisonCard(
  { duel },
  ref
) {
  const challengerWins = duel.challenger.wpm >= duel.challenged.wpm;
  const tie = duel.challenger.wpm === duel.challenged.wpm;

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
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
          marginTop: 20,
          textAlign: "center",
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color: COLORS.gold,
        }}
      >
        ⚔️ Typing Challenge
      </p>
      <p style={{ marginTop: 4, textAlign: "center", fontSize: 14, color: COLORS.muted }}>
        {duel.challenger.contentLabel}
      </p>

      <div style={{ marginTop: 20, display: "flex", gap: 16, alignItems: "center" }}>
        <Side title="Challenger" wpm={duel.challenger.wpm} accuracy={duel.challenger.accuracy} winner={!tie && challengerWins} />
        <span style={{ fontSize: 20, fontWeight: 800, color: COLORS.muted }}>VS</span>
        <Side title="You" wpm={duel.challenged.wpm} accuracy={duel.challenged.accuracy} winner={!tie && !challengerWins} />
      </div>

      {tie && (
        <p style={{ marginTop: 16, textAlign: "center", fontSize: 13, fontWeight: 700, color: COLORS.gold }}>
          🤝 It&apos;s a tie!
        </p>
      )}

      <div
        style={{
          marginTop: 24,
          paddingTop: 16,
          borderTop: `1px solid ${COLORS.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 11, color: COLORS.muted }}>Free typing tests in 70 languages · typingglobe.com</span>
      </div>
    </div>
  );
});
