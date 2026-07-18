export type LessonContentType = "drill" | "words" | "numbers" | "symbols" | "patterns" | "sentence" | "paragraph";

export type CourseLevel = {
  day: number;
  title: string;
  description: string;
  /** Keys newly introduced on this day (cumulative unlock happens automatically). */
  newKeys: string[];
  contentType: LessonContentType;
  examWpm: number;
  examAccuracy: number;
};

// Key-introduction schedule — standard touch-typing pedagogy: home row first
// (left hand, then right hand), then top row, then bottom row, then capitals,
// numbers, punctuation, and symbols, before moving into real words and sentences.
export const courseLevels: CourseLevel[] = [
  { day: 1, title: "Home Row — Left Hand", description: "Meet A, S, D, F — where your left-hand fingers rest.", newKeys: ["a", "s", "d", "f"], contentType: "drill", examWpm: 0, examAccuracy: 75 },
  { day: 2, title: "Home Row — Right Hand", description: "Meet J, K, L, ; — where your right-hand fingers rest.", newKeys: ["j", "k", "l", ";"], contentType: "drill", examWpm: 0, examAccuracy: 75 },
  { day: 3, title: "Home Row Combined", description: "Both hands together on the home row — the foundation of touch typing.", newKeys: [], contentType: "drill", examWpm: 0, examAccuracy: 76 },
  { day: 4, title: "Index Reaches — G & H", description: "Stretch your index fingers inward to complete the home row.", newKeys: ["g", "h"], contentType: "drill", examWpm: 0, examAccuracy: 76 },
  { day: 5, title: "Top Row — E & I", description: "Reach up to two of the most common letters in English.", newKeys: ["e", "i"], contentType: "drill", examWpm: 0, examAccuracy: 77 },
  { day: 6, title: "Top Row — R & U", description: "Two more top-row reaches, still under your index fingers.", newKeys: ["r", "u"], contentType: "drill", examWpm: 0, examAccuracy: 77 },
  { day: 7, title: "Top Row Complete", description: "Finish the top row: Q, W, T, Y, O, P.", newKeys: ["q", "w", "t", "y", "o", "p"], contentType: "drill", examWpm: 0, examAccuracy: 78 },
  { day: 8, title: "Bottom Row — Inner Keys", description: "Drop down to C, N, V, M — the easier bottom-row reaches.", newKeys: ["c", "n", "v", "m"], contentType: "drill", examWpm: 0, examAccuracy: 78 },
  { day: 9, title: "Bottom Row Complete", description: "The last stretch: X, Z, B, and basic punctuation , . /", newKeys: ["x", "z", "b", ",", ".", "/"], contentType: "drill", examWpm: 0, examAccuracy: 80 },
  { day: 10, title: "Full Alphabet Review", description: "Every letter is unlocked — time to start typing real words.", newKeys: [], contentType: "words", examWpm: 12, examAccuracy: 82 },
  { day: 11, title: "Capital Letters", description: "Bring the Shift key into your rhythm without breaking stride.", newKeys: [], contentType: "words", examWpm: 14, examAccuracy: 83 },
  { day: 12, title: "Capitals in Context", description: "Capitalizing names and sentence starts, the way real writing does.", newKeys: [], contentType: "words", examWpm: 16, examAccuracy: 84 },
  { day: 13, title: "Common Short Words", description: "The short, high-frequency words that make up most everyday typing.", newKeys: [], contentType: "words", examWpm: 18, examAccuracy: 85 },
  { day: 14, title: "Common Longer Words", description: "Stepping up to five- and six-letter words without losing rhythm.", newKeys: [], contentType: "words", examWpm: 20, examAccuracy: 86 },
  { day: 15, title: "Numbers — 1 to 5", description: "Move up to the number row without looking down.", newKeys: ["1", "2", "3", "4", "5"], contentType: "numbers", examWpm: 21, examAccuracy: 87 },
  { day: 16, title: "Numbers — 6 to 0", description: "Finish the number row.", newKeys: ["6", "7", "8", "9", "0"], contentType: "numbers", examWpm: 22, examAccuracy: 88 },
  { day: 17, title: "Punctuation Deep Dive", description: "! ? : ; \" ' — the marks that shape real sentences.", newKeys: ["!", "?", ":", "\"", "'"], contentType: "symbols", examWpm: 23, examAccuracy: 89 },
  { day: 18, title: "Symbols", description: "@ # $ % & * - _ + — the keys office and code work both lean on.", newKeys: ["@", "#", "$", "%", "&", "*", "-", "_"], contentType: "symbols", examWpm: 24, examAccuracy: 90 },
  { day: 19, title: "Numbers & Symbols Mixed", description: "Combine numbers, punctuation, and symbols in the same passage.", newKeys: [], contentType: "symbols", examWpm: 26, examAccuracy: 90 },
  { day: 20, title: "Common Word Patterns", description: "th, sh, ch, ing, tion — the letter clusters that show up everywhere.", newKeys: [], contentType: "patterns", examWpm: 27, examAccuracy: 91 },
  { day: 21, title: "Short Sentences", description: "Your first full sentences — short, simple, and complete.", newKeys: [], contentType: "sentence", examWpm: 29, examAccuracy: 91 },
  { day: 22, title: "Sentences With Punctuation", description: "Commas, questions, and exclamations inside real sentences.", newKeys: [], contentType: "sentence", examWpm: 31, examAccuracy: 92 },
  { day: 23, title: "Medium Sentences", description: "Longer, more natural sentences with varied structure.", newKeys: [], contentType: "sentence", examWpm: 33, examAccuracy: 93 },
  { day: 24, title: "Sentences With Numbers", description: "Real writing mixes words and numbers — so does this level.", newKeys: [], contentType: "sentence", examWpm: 35, examAccuracy: 93 },
  { day: 25, title: "Short Paragraphs", description: "Your first multi-sentence passages, kept short and easy.", newKeys: [], contentType: "paragraph", examWpm: 37, examAccuracy: 94 },
  { day: 26, title: "Medium Paragraphs", description: "Longer passages that keep a steady rhythm going.", newKeys: [], contentType: "paragraph", examWpm: 39, examAccuracy: 95 },
  { day: 27, title: "Longer Paragraphs", description: "Full-length passages, similar to our standard typing tests.", newKeys: [], contentType: "paragraph", examWpm: 41, examAccuracy: 95 },
  { day: 28, title: "Speed Building", description: "Familiar words and structures — now pushing for real speed.", newKeys: [], contentType: "paragraph", examWpm: 43, examAccuracy: 96 },
  { day: 29, title: "Accuracy Under Pressure", description: "Harder vocabulary, same expectation: stay clean at speed.", newKeys: [], contentType: "paragraph", examWpm: 45, examAccuracy: 96 },
  { day: 30, title: "Final Challenge — Pro Level", description: "The graduation exam. Pass this and you've finished the course.", newKeys: [], contentType: "paragraph", examWpm: 48, examAccuracy: 97 },
];

export function getUnlockedKeys(day: number): string[] {
  const keys: string[] = [" "];
  for (const level of courseLevels) {
    if (level.day > day) break;
    keys.push(...level.newKeys);
  }
  return Array.from(new Set(keys));
}

export function getLevel(day: number): CourseLevel | undefined {
  return courseLevels.find((l) => l.day === day);
}

// --- Deterministic drill generator (no Math.random — same output every render) ---

function keyDrillGroup(keys: string[], startIndex: number, length: number): string {
  let group = "";
  for (let i = 0; i < length; i++) {
    group += keys[(startIndex + i) % keys.length];
  }
  return group;
}

export function generateKeyDrill(keys: string[], groupCount: number, groupLength: number): string {
  const usable = keys.filter((k) => k !== " ");
  if (usable.length === 0) return "";
  const groups: string[] = [];
  let cursor = 0;
  for (let i = 0; i < groupCount; i++) {
    groups.push(keyDrillGroup(usable, cursor, Math.min(groupLength, usable.length)));
    cursor = (cursor + 3) % usable.length;
  }
  return groups.join(" ");
}

// --- Common English word bank, used from Day 10 onward ---

const shortWords = [
  "the", "and", "for", "are", "but", "not", "you", "all", "can", "her",
  "was", "one", "our", "out", "day", "get", "has", "him", "his", "how",
  "man", "new", "now", "old", "see", "two", "way", "who", "boy", "did",
  "its", "let", "put", "say", "she", "too", "use", "dad", "mom", "sun",
  "run", "fun", "big", "red", "top", "cup", "map", "pen", "box", "dog",
  "cat", "bag", "hat", "job", "leg", "arm", "eye", "ear", "key", "sky",
];

const mediumWords = [
  "about", "after", "again", "before", "could", "every", "first", "found",
  "great", "house", "little", "never", "other", "people", "right", "school",
  "should", "small", "sound", "still", "their", "there", "these", "thing",
  "think", "three", "under", "water", "where", "which", "world", "would",
  "write", "years", "again", "close", "early", "field", "focus", "green",
  "happy", "learn", "light", "money", "music", "north", "paper", "quiet",
  "reach", "sense", "share", "study", "table", "today", "voice", "watch",
];

const capitalWords = [
  "London", "Paris", "Sarah", "Michael", "January", "Monday", "Friday",
  "America", "Africa", "Europe", "India", "China", "Japan", "Canada",
  "David", "Emma", "Global", "Northern", "Southern", "Eastern", "Western",
];

const digraphWords = [
  "think", "shape", "chair", "sing", "bring", "nation", "action", "wanted",
  "played", "faster", "better", "slowly", "quickly", "thing", "shine",
  "change", "motion", "helped", "walked", "runner", "winner", "quietly",
];

const numberSamples = [
  "12 34 51 23 45", "90 87 65 43 21", "10 20 30 40 50", "2024 2025 2026",
  "5 apples and 3 oranges", "room 42, floor 7", "15% of 200 is 30",
  "the store opens at 9 and closes at 6", "she scored 98 out of 100",
];

const symbolSamples = [
  "email me at name@example.com", "cost: $45.00 (20% off)", "call 555-0134 now",
  "use #hashtags & @mentions", "price: $9.99 + tax", "temp was -5 degrees today",
  '"Are you ready?" she asked.', "It's a beautiful day, isn't it?",
  "Wait — is that really true?", "Stop! Look both ways first.",
];

const sentenceBank = [
  "The sun rose slowly over the quiet hills.",
  "She opened the door and smiled at her friend.",
  "We walked to the store to buy some bread.",
  "The children played happily in the park.",
  "A gentle breeze moved through the open window.",
  "He finished his coffee and picked up his bag.",
  "The train arrived exactly on time this morning.",
  "Bright leaves fell slowly onto the empty street.",
  "She wrote a short letter to her old friend.",
  "The dog ran across the yard chasing a ball.",
  "Rain tapped softly against the kitchen window.",
  "They watched the sunset from the old wooden porch.",
  "He locked the door and walked into the cold night.",
  "The teacher smiled and welcomed the new students warmly.",
  "A quiet library is a wonderful place to think.",
  "The market was busy with vendors calling out prices.",
  "She practiced typing every morning before breakfast.",
  "The mountain trail was steep but the view was worth it.",
  "He fixed the old bicycle in just under an hour.",
  "The bakery smelled of fresh bread and warm cinnamon.",
  "Our flight leaves at seven, so we should hurry.",
  "The museum's newest exhibit opens to the public Friday.",
  "She saved her work before the storm knocked out the power.",
  "A good typist trusts their fingers more than their eyes.",
  "Practice a little every day, and speed follows naturally.",
];

const paragraphBank = [
  "The morning market came alive slowly. Vendors arranged their stalls while the smell of fresh bread drifted through the square. Somewhere a kettle whistled, and a dog barked twice before settling down in the shade.",
  "Learning to type well is less about speed and more about rhythm. Once your fingers trust the keys, the words start to flow on their own, and accuracy quietly improves alongside pace.",
  "The old library stood at the edge of town, its shelves heavy with books nobody had opened in years. Dust drifted in the afternoon light, and the silence felt less empty than peaceful.",
  "Every winter the lake froze solid enough to walk across, and every winter someone forgot and found out the hard way. This year, though, the ice held — thick, clear, and quiet underfoot.",
  "She had rewritten the opening paragraph four times before giving up and starting the whole page over. Somewhere between the third draft and the fourth, she stopped trying to make it perfect and just let it be honest instead.",
  "By the time the storm passed, the street lights were flickering back on one by one, and neighbors were already outside comparing notes on fallen branches and lost power, as if the whole block had been holding its breath together.",
];

function cycle<T>(arr: T[], start: number, count: number): T[] {
  const out: T[] = [];
  for (let i = 0; i < count; i++) {
    out.push(arr[(start + i) % arr.length]);
  }
  return out;
}

export function getLessonTexts(day: number): string[] {
  const level = getLevel(day);
  if (!level) return [];
  const keys = getUnlockedKeys(day);
  const seed = day * 5;

  switch (level.contentType) {
    case "drill": {
      const newKeys = level.newKeys.length > 0 ? level.newKeys : keys.filter((k) => k !== " ");
      return [
        generateKeyDrill(newKeys, 10, Math.min(2, newKeys.length)),
        generateKeyDrill(newKeys, 10, Math.min(3, newKeys.length)),
        generateKeyDrill(keys, 12, 3),
        generateKeyDrill(keys, 14, 4),
        generateKeyDrill(keys, 16, Math.min(5, keys.length - 1)),
      ];
    }
    case "words": {
      const pool = day <= 12 ? [...shortWords, ...capitalWords] : [...shortWords, ...mediumWords];
      return [1, 2, 3, 4, 5].map((n) => cycle(pool, seed + n * 7, 10 + n * 2).join(" "));
    }
    case "numbers":
      return cycle(numberSamples, seed, 5).map((s, i) => `${s} ${cycle(shortWords, seed + i, 4).join(" ")}`);
    case "symbols":
      return cycle(symbolSamples, seed, 5).map((s, i) => `${s} ${cycle(mediumWords, seed + i, 3).join(" ")}`);
    case "patterns":
      return [1, 2, 3, 4, 5].map((n) => cycle(digraphWords, seed + n * 4, 8 + n).join(" "));
    case "sentence":
      return [0, 1, 2, 3, 4].map((i) => cycle(sentenceBank, seed + i * 3, 2 + Math.floor(i / 2)).join(" "));
    case "paragraph":
      return [0, 1, 2, 3, 4].map((i) => paragraphBank[(seed + i) % paragraphBank.length]);
    default:
      return [];
  }
}

export function getExamText(day: number): string {
  const level = getLevel(day);
  if (!level) return "";
  const lessons = getLessonTexts(day);
  if (level.contentType === "paragraph") {
    return cycle(paragraphBank, day, 2).join(" ");
  }
  if (level.contentType === "sentence") {
    return cycle(sentenceBank, day, 5).join(" ");
  }
  return lessons.slice(0, 3).join(" ");
}
