export type Script =
  | "Latin"
  | "Arabic"
  | "Devanagari"
  | "Bengali"
  | "Cyrillic"
  | "Hangul"
  | "CJK"
  | "Other";

export type Language = {
  code: string;
  name: string;
  nativeName: string;
  /** ISO 3166-1 alpha-2 country code used for the flag-icons sprite, or null for constructed/classical languages with no flag. */
  flagCode: string | null;
  /** Fallback glyph shown when flagCode is null. */
  flagEmoji: string;
  script: Script;
  rtl: boolean;
  region: string;
  hasRealTest: boolean;
  /** Keyword-rich slug for /test/{testSlug}, e.g. "bengali-typing-speed-test". */
  testSlug: string;
  /** Keyword-rich slug for /p/{practiceSlug}, e.g. "bengali-typing-practice". */
  practiceSlug: string;
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const raw: Omit<Language, "hasRealTest" | "testSlug" | "practiceSlug">[] = [
  { code: "af", name: "Afrikaans", nativeName: "Afrikaans", flagCode: "za", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Africa" },
  { code: "am", name: "Amharic", nativeName: "አማርኛ", flagCode: "et", flagEmoji: "🏳️", script: "Other", rtl: false, region: "Africa" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flagCode: "sa", flagEmoji: "🏳️", script: "Arabic", rtl: true, region: "Middle East" },
  { code: "hy", name: "Armenian", nativeName: "Հայերեն", flagCode: "am", flagEmoji: "🏳️", script: "Other", rtl: false, region: "Caucasus" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flagCode: "bd", flagEmoji: "🏳️", script: "Bengali", rtl: false, region: "South Asia" },
  { code: "bg", name: "Bulgarian", nativeName: "Български", flagCode: "bg", flagEmoji: "🏳️", script: "Cyrillic", rtl: false, region: "Europe" },
  { code: "my", name: "Burmese", nativeName: "မြန်မာ", flagCode: "mm", flagEmoji: "🏳️", script: "Other", rtl: false, region: "Southeast Asia" },
  { code: "ca", name: "Catalan", nativeName: "Català", flagCode: "es", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "zh", name: "Chinese", nativeName: "中文", flagCode: "cn", flagEmoji: "🏳️", script: "CJK", rtl: false, region: "East Asia" },
  { code: "hr", name: "Croatian", nativeName: "Hrvatski", flagCode: "hr", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "cs", name: "Czech", nativeName: "Čeština", flagCode: "cz", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "da", name: "Danish", nativeName: "Dansk", flagCode: "dk", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flagCode: "nl", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "en", name: "English", nativeName: "English", flagCode: "gb", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Global" },
  { code: "eo", name: "Esperanto", nativeName: "Esperanto", flagCode: null, flagEmoji: "🌍", script: "Latin", rtl: false, region: "Constructed" },
  { code: "et", name: "Estonian", nativeName: "Eesti", flagCode: "ee", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "fil", name: "Filipino", nativeName: "Filipino", flagCode: "ph", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Southeast Asia" },
  { code: "fi", name: "Finnish", nativeName: "Suomi", flagCode: "fi", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "fr", name: "French", nativeName: "Français", flagCode: "fr", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "ka", name: "Georgian", nativeName: "ქართული", flagCode: "ge", flagEmoji: "🏳️", script: "Other", rtl: false, region: "Caucasus" },
  { code: "de", name: "German", nativeName: "Deutsch", flagCode: "de", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "el", name: "Greek", nativeName: "Ελληνικά", flagCode: "gr", flagEmoji: "🏳️", script: "Other", rtl: false, region: "Europe" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flagCode: "in", flagEmoji: "🏳️", script: "Other", rtl: false, region: "South Asia" },
  { code: "ha", name: "Hausa", nativeName: "Hausa", flagCode: "ng", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Africa" },
  { code: "he", name: "Hebrew", nativeName: "עברית", flagCode: "il", flagEmoji: "🏳️", script: "Other", rtl: true, region: "Middle East" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flagCode: "in", flagEmoji: "🏳️", script: "Devanagari", rtl: false, region: "South Asia" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar", flagCode: "hu", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "is", name: "Icelandic", nativeName: "Íslenska", flagCode: "is", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "ig", name: "Igbo", nativeName: "Igbo", flagCode: "ng", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Africa" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flagCode: "id", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Southeast Asia" },
  { code: "it", name: "Italian", nativeName: "Italiano", flagCode: "it", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flagCode: "jp", flagEmoji: "🏳️", script: "CJK", rtl: false, region: "East Asia" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flagCode: "in", flagEmoji: "🏳️", script: "Other", rtl: false, region: "South Asia" },
  { code: "kk", name: "Kazakh", nativeName: "Қазақша", flagCode: "kz", flagEmoji: "🏳️", script: "Cyrillic", rtl: false, region: "Central Asia" },
  { code: "km", name: "Khmer", nativeName: "ខ្មែរ", flagCode: "kh", flagEmoji: "🏳️", script: "Other", rtl: false, region: "Southeast Asia" },
  { code: "ko", name: "Korean", nativeName: "한국어", flagCode: "kr", flagEmoji: "🏳️", script: "Hangul", rtl: false, region: "East Asia" },
  { code: "lo", name: "Lao", nativeName: "ລາວ", flagCode: "la", flagEmoji: "🏳️", script: "Other", rtl: false, region: "Southeast Asia" },
  { code: "la", name: "Latin", nativeName: "Latina", flagCode: null, flagEmoji: "🏛️", script: "Latin", rtl: false, region: "Classical" },
  { code: "lv", name: "Latvian", nativeName: "Latviešu", flagCode: "lv", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "lt", name: "Lithuanian", nativeName: "Lietuvių", flagCode: "lt", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", flagCode: "my", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Southeast Asia" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", flagCode: "in", flagEmoji: "🏳️", script: "Other", rtl: false, region: "South Asia" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flagCode: "in", flagEmoji: "🏳️", script: "Devanagari", rtl: false, region: "South Asia" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली", flagCode: "np", flagEmoji: "🏳️", script: "Devanagari", rtl: false, region: "South Asia" },
  { code: "no", name: "Norwegian", nativeName: "Norsk", flagCode: "no", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ", flagCode: "in", flagEmoji: "🏳️", script: "Other", rtl: false, region: "South Asia" },
  { code: "ps", name: "Pashto", nativeName: "پښتو", flagCode: "af", flagEmoji: "🏳️", script: "Arabic", rtl: true, region: "Central Asia" },
  { code: "fa", name: "Persian", nativeName: "فارسی", flagCode: "ir", flagEmoji: "🏳️", script: "Arabic", rtl: true, region: "Middle East" },
  { code: "pl", name: "Polish", nativeName: "Polski", flagCode: "pl", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flagCode: "pt", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flagCode: "in", flagEmoji: "🏳️", script: "Other", rtl: false, region: "South Asia" },
  { code: "ro", name: "Romanian", nativeName: "Română", flagCode: "ro", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "ru", name: "Russian", nativeName: "Русский", flagCode: "ru", flagEmoji: "🏳️", script: "Cyrillic", rtl: false, region: "Europe" },
  { code: "sr", name: "Serbian", nativeName: "Српски", flagCode: "rs", flagEmoji: "🏳️", script: "Cyrillic", rtl: false, region: "Europe" },
  { code: "sd", name: "Sindhi", nativeName: "سنڌي", flagCode: "pk", flagEmoji: "🏳️", script: "Arabic", rtl: true, region: "South Asia" },
  { code: "si", name: "Sinhala", nativeName: "සිංහල", flagCode: "lk", flagEmoji: "🏳️", script: "Other", rtl: false, region: "South Asia" },
  { code: "sk", name: "Slovak", nativeName: "Slovenčina", flagCode: "sk", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "sl", name: "Slovenian", nativeName: "Slovenščina", flagCode: "si", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "es", name: "Spanish", nativeName: "Español", flagCode: "es", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Global" },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", flagCode: "ke", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Africa" },
  { code: "sv", name: "Swedish", nativeName: "Svenska", flagCode: "se", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flagCode: "in", flagEmoji: "🏳️", script: "Other", rtl: false, region: "South Asia" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", flagCode: "in", flagEmoji: "🏳️", script: "Other", rtl: false, region: "South Asia" },
  { code: "th", name: "Thai", nativeName: "ไทย", flagCode: "th", flagEmoji: "🏳️", script: "Other", rtl: false, region: "Southeast Asia" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flagCode: "tr", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Europe" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", flagCode: "ua", flagEmoji: "🏳️", script: "Cyrillic", rtl: false, region: "Europe" },
  { code: "ur", name: "Urdu", nativeName: "اردو", flagCode: "pk", flagEmoji: "🏳️", script: "Arabic", rtl: true, region: "South Asia" },
  { code: "uz", name: "Uzbek", nativeName: "Oʻzbekcha", flagCode: "uz", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Central Asia" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flagCode: "vn", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Southeast Asia" },
  { code: "yo", name: "Yoruba", nativeName: "Yorùbá", flagCode: "ng", flagEmoji: "🏳️", script: "Latin", rtl: false, region: "Africa" },
];

export const REAL_TEST_CODES = new Set([
  "en", "bn", "es", "hi", "ar",
  "fr", "de", "pt", "ru", "zh", "ja", "ko", "it", "tr", "vi", "id", "ur", "fa", "ta", "uk",
  "nl", "pl",
  "af", "am", "hy", "bg", "my", "ca", "hr", "cs", "da", "eo",
  "et", "fil", "fi", "ka", "el", "gu", "ha", "he", "hu", "is",
  "ig", "kn", "kk", "km", "lo", "la", "lv", "lt", "ms", "ml",
  "mr", "ne", "no", "or", "ps", "pa", "ro", "sr", "sd", "si",
  "sk", "sl", "sw", "sv", "te", "th", "uz", "yo",
]);

/**
 * Per-language keyword-research overrides for the auto-generated testSlug, where real
 * local-language search volume data points to a shorter/different canonical URL than
 * "{name}-typing-speed-test". Old auto-generated slugs for these codes 301-redirect to
 * the override in next.config.ts.
 */
const testSlugOverrides: Record<string, string> = {
  bn: "bengali-typing-test",
  hi: "hindi-typing-test",
  en: "english-typing-test",
  fr: "french-typing-test",
  de: "german-typing-test",
  pt: "portuguese-typing-test",
  ar: "arabic-typing-test",
  ru: "russian-typing-test",
  ja: "japanese-typing-test",
  zh: "chinese-typing-test",
  ko: "korean-typing-test",
  it: "italian-typing-test",
  tr: "turkish-typing-test",
  vi: "vietnamese-typing-test",
  nl: "dutch-typing-test",
  pl: "polish-typing-test",
};

export const languages: Language[] = raw
  .map((l) => ({
    ...l,
    hasRealTest: REAL_TEST_CODES.has(l.code),
    testSlug: testSlugOverrides[l.code] ?? `${slugify(l.name)}-typing-speed-test`,
    practiceSlug: `${slugify(l.name)}-typing-practice`,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export function getLanguage(code: string): Language | undefined {
  return languages.find((l) => l.code === code);
}

export function getLanguageByTestSlug(slug: string): Language | undefined {
  return languages.find((l) => l.testSlug === slug);
}

export function getLanguageByPracticeSlug(slug: string): Language | undefined {
  return languages.find((l) => l.practiceSlug === slug);
}

export const scriptGroups: { script: Script; label: string; description: string }[] = [
  { script: "Latin", label: "Latin Script", description: "English, French, German, Spanish, Italian, Portuguese, Polish, Turkish, Vietnamese, and dozens more sharing the QWERTY-friendly Latin alphabet." },
  { script: "Arabic", label: "Arabic Script (RTL)", description: "Arabic, Urdu, Persian, Pashto — with full right-to-left rendering and native accent assembly offsets." },
  { script: "Devanagari", label: "Devanagari", description: "Hindi, Marathi, Nepali — with full matra overlay handling and half-character conjunct ligatures." },
  { script: "Bengali", label: "Bengali Script", description: "Bengali — with native juktakkhor (conjunct-consonant) keystroke tracking." },
  { script: "Cyrillic", label: "Cyrillic", description: "Russian, Ukrainian, Bulgarian, Serbian, Kazakh." },
  { script: "Hangul", label: "Hangul", description: "Korean — with Unicode standard layout, ensuring true structural syllable block assembly in client memory." },
  { script: "CJK", label: "CJK / Han", description: "Chinese (Pinyin input systems), Japanese (Hiragana/Katakana, Romaji/Kana)." },
  { script: "Other", label: "Other Scripts", description: "Greek, Hebrew, Tamil, Malayalam, Thai, and more." },
];
