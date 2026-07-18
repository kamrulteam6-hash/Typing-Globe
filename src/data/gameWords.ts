export type WordTier = "short" | "medium" | "long";

/** Curated common-English word bank for arcade games, tiered by length/difficulty. English-only for this pass. */
export const gameWords: Record<WordTier, string[]> = {
  short: [
    "the", "and", "you", "cat", "dog", "run", "sun", "fun", "big", "red",
    "top", "map", "car", "bus", "hat", "sit", "win", "jump", "play", "fast",
    "slow", "code", "type", "keys", "star", "moon", "fire", "wind", "rain", "snow",
    "leaf", "tree", "rock", "sand", "wave", "gold", "blue", "pink", "gray", "loud",
    "soft", "hard", "cool", "warm", "long", "wide", "deep", "high", "open", "shut",
  ],
  medium: [
    "typing", "letter", "keyboard", "monitor", "window", "system", "signal", "energy",
    "planet", "galaxy", "rocket", "engine", "castle", "dragon", "wizard", "knight",
    "forest", "canyon", "island", "bridge", "tunnel", "mirror", "shadow", "thunder",
    "lantern", "compass", "journey", "victory", "mission", "puzzle", "riddle", "secret",
    "circuit", "battery", "gravity", "orbit", "meteor", "asteroid", "capture", "defend",
    "attack", "escape", "rescue", "danger", "safety", "target", "impact", "cannon",
  ],
  long: [
    "adventure", "champion", "explosion", "spaceship", "waterfall", "mountain",
    "telescope", "microphone", "carnivore", "dimension", "hurricane", "labyrinth",
    "phenomenon", "revolution", "wilderness", "atmosphere", "civilization", "expedition",
    "technology", "concentration", "achievement", "masterpiece", "opportunity",
    "performance", "possibility", "responsibility", "sophisticated", "unbelievable",
    "extraordinary", "determination", "imagination", "constellation", "acceleration",
  ],
};

export function pickRandomWord(tier: WordTier, exclude: Set<string> = new Set()): string {
  const pool = gameWords[tier].filter((w) => !exclude.has(w));
  const list = pool.length > 0 ? pool : gameWords[tier];
  return list[Math.floor(Math.random() * list.length)];
}
