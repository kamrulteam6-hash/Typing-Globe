export type ShareableResult = {
  wpm: number;
  accuracy: number;
  correct: number;
  contentLabel: string;
  langCode?: string;
  mode: "test" | "practice" | "exam";
  date: string;
};

export type DuelResult = {
  challenger: ShareableResult;
  challenged: ShareableResult;
};

function toBase64(json: string): string {
  if (typeof window === "undefined") return "";
  return window.btoa(unescape(encodeURIComponent(json)));
}

function fromBase64(encoded: string): string {
  return decodeURIComponent(escape(window.atob(encoded)));
}

export function encodeResult(result: ShareableResult): string {
  return toBase64(JSON.stringify(result));
}

export function decodeResult(encoded: string): ShareableResult | null {
  try {
    const parsed = JSON.parse(fromBase64(encoded));
    if (typeof parsed.wpm !== "number" || typeof parsed.accuracy !== "number") return null;
    return parsed as ShareableResult;
  } catch {
    return null;
  }
}

export function encodeDuel(duel: DuelResult): string {
  return toBase64(JSON.stringify(duel));
}

export function decodeDuel(encoded: string): DuelResult | null {
  try {
    const parsed = JSON.parse(fromBase64(encoded));
    if (!parsed.challenger || !parsed.challenged) return null;
    return parsed as DuelResult;
  } catch {
    return null;
  }
}

export function buildShareUrl(result: ShareableResult): string {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("share", encodeResult(result));
  return url.toString();
}

export function buildChallengeUrl(result: ShareableResult): string {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("challenge", encodeResult(result));
  return url.toString();
}

export function buildDuelUrl(duel: DuelResult): string {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("duel", encodeDuel(duel));
  return url.toString();
}
