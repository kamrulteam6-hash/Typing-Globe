import { Language, Script } from "@/data/languages";

// Longer, standalone versions of the script descriptions used elsewhere in the app —
// written for the per-language SEO section, one level more detailed than the short
// summaries in scriptGroups.
const scriptParagraphs: Record<Script, string> = {
  Latin:
    "uses the Latin alphabet, the same base 26 letters as English, usually extended with accents, umlauts, or other diacritical marks. Most Latin-script languages type on a QWERTY-family keyboard layout with small regional variations (AZERTY in France and Belgium, QWERTZ in Germany and Austria), and accented characters are typically entered with dead keys or an extended layout rather than a separate keyboard.",
  Arabic:
    "is written right-to-left in the Arabic script, which changes not just reading direction but how letters connect — most Arabic-script letters change shape depending on whether they sit at the start, middle, or end of a word. A typing test in this script has to mirror the whole interface, track cursor position from right to left, and still score every keystroke exactly like a left-to-right test would.",
  Devanagari:
    "is written in the Devanagari script, recognizable by the horizontal line (shirorekha) connecting most letters. Typing it involves matras (vowel signs that attach above, below, or beside a consonant) and conjunct consonants, where two or more consonants combine into a single visual cluster — both of which take real practice to type fluently, even for native readers.",
  Bengali:
    "is written in the Bengali script, a relative of Devanagari with its own distinctive curved letterforms and a similarly complex system of conjunct consonants, known locally as juktakkhor. A single juktakkhor can represent a cluster of two or three consonants in one visual block, so accurate typing depends on knowing the underlying letter sequence, not just recognizing the shape on screen.",
  Cyrillic:
    "is written in the Cyrillic alphabet. Most Cyrillic-script languages type using a dedicated national keyboard layout (Russian's ЙЦУКЕН/JCUKEN layout is the most widely used base), which maps Cyrillic letters to physical key positions in a way that has nothing to do with their Latin-alphabet neighbors — so touch-typing skill on a QWERTY keyboard doesn't transfer directly.",
  Hangul:
    "is written in Hangul, a script designed in the 15th century specifically to be easy to learn and fast to write. Individual letters (jamo) combine into syllable blocks, and the standard Dubeolsik keyboard layout splits consonants and vowels across the two halves of the keyboard, so touch-typing Hangul has a distinct rhythm from typing an alphabetic script.",
  CJK:
    "is typically entered using an input method editor (IME) rather than a one-key-per-character layout, since the script has far more characters than any keyboard could hold. Typists type a romanized or phonetic representation of the word, and the IME converts it into the correct characters — which means typing speed depends as much on picking the right on-screen suggestion as on raw keystrokes.",
  Other:
    "uses its own dedicated script and keyboard layout, distinct from the Latin alphabet most typing tests are built around. Typing it accurately depends on your operating system's native input method for the language, which handles the script's specific letterforms and any special positioning rules.",
};

// One paragraph per region, written to be genuinely about who's typing and why —
// not a generic filler block reused word-for-word with only the language name swapped.
const regionParagraphs: Record<string, (langName: string) => string> = {
  "South Asia": (name) =>
    `${name} typists on Typing Globe are often preparing for something specific: a government exam typing round, a data-entry job requirement, or simply keeping up correspondence in a script that isn't well supported by most mainstream typing tools. South Asian government exams frequently include a timed typing component, and English-first typing platforms rarely offer real practice text in the region's own languages — which is exactly the gap this test is built to close.`,
  Europe: (name) =>
    `${name} is spoken across a region where multilingual typing is the norm rather than the exception — many typists here move between ${name} and English (or a second European language) within the same working day. A dedicated ${name} test matters because accent marks, punctuation conventions, and even keyboard layout can differ meaningfully from a plain English QWERTY setup.`,
  "Middle East": (name) =>
    `${name} typing brings right-to-left script handling into the picture, which most Western typing tools were never built to support properly. Whether you're a student, an office professional, or preparing for a language-proficiency benchmark, practicing on a test that actually renders and scores right-to-left text correctly — rather than awkwardly bolting RTL support onto a left-to-right interface — makes a real difference.`,
  "East Asia": (name) =>
    `${name} typing relies on an input method editor to convert what you type into the correct characters, which makes speed measurement fundamentally different from a Latin-alphabet test. A meaningful ${name} WPM score has to account for that conversion step, not just raw keystrokes — which is why a dedicated test, rather than a generic one, is the only way to get an honest number.`,
  "Southeast Asia": (name) =>
    `${name} is used across a linguistically diverse region where digital typing tools have historically prioritized English and a handful of larger regional languages first. A proper ${name} typing test — with real sample text, not machine-translated filler — is still surprisingly hard to find, which is part of why we built one.`,
  Africa: (name) =>
    `${name} is spoken by communities both across the African continent and increasingly within a global diaspora, and typing tools built specifically for it are rare compared to the major world languages. This test exists so ${name} speakers get the same quality of practice — real sample text, live WPM and accuracy tracking — that's long been available for English.`,
  Caucasus: (name) =>
    `${name} uses a script and keyboard layout that most mainstream typing platforms simply don't support, despite a long literary and administrative history in the language. This test is built specifically around ${name}'s own script rather than treating it as an afterthought.`,
  "Central Asia": (name) =>
    `${name} typists often move between multiple scripts or keyboard conventions depending on context — historical, administrative, and generational differences in script use are common across Central Asia. A dedicated ${name} test gives you a consistent, modern baseline to measure your own typing against.`,
  Global: (name) =>
    `${name} is one of the most widely typed languages in the world, which also means it's one of the most benchmarked — there's real value in knowing exactly how your ${name} WPM and accuracy compare to a global standard, whether you're applying for a job, prepping for an exam, or just curious.`,
  Constructed: (name) =>
    `${name} was deliberately designed to be simple, regular, and easy to learn — which makes it a genuinely pleasant language to type, with none of the irregular spelling quirks that slow typists down in many natural languages.`,
  Classical: (name) =>
    `${name} is no longer anyone's native language, but it's still actively read, studied, and written by students, scholars, and enthusiasts worldwide. Typing practice in ${name} is less about workplace speed and more about deepening familiarity with texts many people spend years studying.`,
};

// Keyboard-layout facts for languages where the standard layout is well established and
// well known. Languages not listed here get an honest, generic fallback rather than a
// fabricated specific layout name.
const keyboardNotes: Record<string, string> = {
  bn: "Most Bengali typists use either the Avro Phonetic layout (which maps Bengali sounds onto their closest English-letter equivalents) or the traditional Unijoy/National layout. Both are supported automatically through your operating system's Bengali input method — Typing Globe doesn't require any separate software.",
  hi: "Hindi typing in India is standardized around the InScript keyboard layout, though many typists — especially those who learned informally — use phonetic transliteration tools instead. Either input method works fine here; Typing Globe just checks the Devanagari characters that land on screen.",
  mr: "Marathi shares the InScript keyboard standard with Hindi, since both use the Devanagari script, though a phonetic transliteration input method is just as common in practice.",
  ne: "Nepali typically uses the same InScript-based Devanagari layout as Hindi, alongside popular phonetic transliteration tools for typists who find the native layout unfamiliar.",
  ar: "Arabic typing uses the standard Arabic (101/102) keyboard layout, available as a built-in input method on every major operating system. Letters are positioned for right-to-left typing, with the Latin alphabet and numerals still accessible via a language switch.",
  ur: "Urdu is most often typed with the Urdu Phonetic keyboard, which maps Urdu letters to visually or phonetically similar Latin-keyboard keys, making it easier to learn for typists already familiar with a QWERTY layout.",
  fa: "Persian (Farsi) uses the standard Iranian keyboard layout (ISIRI 9147), available as a built-in input method on Windows, macOS, and most mobile devices.",
  ps: "Pashto typically uses an extended Arabic-script keyboard layout that includes the extra letters unique to Pashto beyond the base Arabic alphabet.",
  he: "Hebrew uses the standard Israeli keyboard layout, with Hebrew letters positioned for right-to-left typing and Latin characters still accessible via a language switch.",
  ru: "Russian typing uses the ЙЦУКЕН (JCUKEN) keyboard layout, the Cyrillic-script standard that most Russian, Belarusian, and several other Cyrillic-alphabet keyboards are based on.",
  uk: "Ukrainian uses its own Cyrillic keyboard layout, closely related to but distinct from the Russian ЙЦУКЕН layout, with a few letters repositioned for Ukrainian-specific characters.",
  bg: "Bulgarian typing most commonly uses the BDS (phonetic) keyboard layout, which maps Cyrillic letters to their closest-sounding Latin-keyboard position.",
  ja: "Japanese is almost always typed by entering Romaji (Roman letters) on a standard QWERTY keyboard, which an input method editor (IME) converts into hiragana, katakana, or kanji as you type — full kana keyboards exist but are rarely used outside Japan.",
  ko: "Korean uses the Dubeolsik (2-set) keyboard layout as the near-universal standard, splitting consonants onto the left half of the keyboard and vowels onto the right.",
  zh: "Chinese is typically typed using the Pinyin input method — you type the romanized pronunciation of each character on a standard QWERTY keyboard, and an input method editor (IME) presents matching characters to choose from.",
  th: "Thai typing uses the Kedmanee keyboard layout, the long-standing national standard, available as a built-in input method on every major operating system.",
  vi: "Vietnamese is usually typed on a standard QWERTY keyboard using the Telex or VNI input methods, which use extra keystrokes or number combinations to add Vietnamese's tone marks and accented vowels.",
  el: "Greek typing uses the standard Greek keyboard layout, which maps Greek letters onto roughly phonetically similar QWERTY key positions (e.g., Greek Α sits under the Latin A key).",
  hy: "Armenian typing uses a standard national keyboard layout, available as a built-in input method on major operating systems, with separate Eastern and Western Armenian layout variants in some regions.",
  ka: "Georgian typing uses its own standard national keyboard layout, built into major operating systems as a selectable input method.",
  fr: "French keyboards use the AZERTY layout rather than QWERTY, with accented characters (é, è, ç, à) placed on dedicated keys rather than requiring a dead-key combination.",
  de: "German keyboards use the QWERTZ layout — the Y and Z keys are swapped relative to QWERTY — with umlauts (ä, ö, ü) and ß on dedicated keys.",
};

const defaultKeyboardNote =
  "Typing uses your operating system's native input method for this language — no separate software or plugin is required. If your keyboard doesn't have dedicated keys for this script, your OS's built-in language input settings will handle it.";

export type LanguageSeoContent = {
  intro: string;
  scriptParagraph: string;
  regionParagraph: string;
  keyboardNote: string;
  faq: { question: string; answer: string }[];
};

export function getLanguageSeoContent(lang: Language): LanguageSeoContent {
  const regionFn = regionParagraphs[lang.region];
  const regionParagraph = regionFn
    ? regionFn(lang.name)
    : `${lang.name} typists come to Typing Globe for the same reason typists everywhere do: to measure real, honest typing speed in their own language, not just English.`;

  const intro = lang.hasRealTest
    ? `${lang.name} (${lang.nativeName}) ${scriptParagraphs[lang.script]}`
    : `${lang.name} (${lang.nativeName}) ${scriptParagraphs[lang.script]} A full ${lang.name} typing test with live scoring is on our build queue — you can preview the language here now, and jump into a working test in another language in the meantime.`;

  const faq = [
    {
      question: `What is a good WPM for ${lang.name} typing?`,
      answer: lang.script === "Latin"
        ? `A comfortable ${lang.name} typing speed for everyday use is 30–40 WPM, with 50+ WPM considered fast. Because ${lang.name} uses the Latin alphabet, WPM benchmarks are broadly comparable to English typing speed.`
        : `${lang.name} typing speed is usually measured a little differently from Latin-script languages, since ${lang.script === "CJK" ? "character input via an IME adds a conversion step" : "the script itself has different keystroke patterns"}. Treat your first few tests as a baseline, then track your own improvement over time rather than comparing directly to English WPM figures.`,
    },
    {
      question: `Do I need special software to type in ${lang.name}?`,
      answer: `No. ${lang.name} typing on Typing Globe works with your device's built-in language input method — the same one you'd use to type ${lang.name} in any app. If you haven't added it yet, your operating system's language and keyboard settings will let you enable it in a couple of minutes.`,
    },
    {
      question: `Is the ${lang.name} typing test free?`,
      answer: `Yes. Every typing test on Typing Globe, including ${lang.name}, is free with no signup, no credit card, and no usage limit.`,
    },
    {
      question: `Is the sample text real ${lang.name}, or translated from English?`,
      answer: lang.hasRealTest
        ? `The sample text is written directly in ${lang.name}, not machine-translated from an English source — which matters, because translated text often reads unnaturally and doesn't reflect how the language is actually written.`
        : `Once this test is fully built, the sample text will be written directly in ${lang.name}, not translated from English — matching the standard we already use for our working tests.`,
    },
  ];

  return {
    intro,
    scriptParagraph: scriptParagraphs[lang.script],
    regionParagraph,
    keyboardNote: keyboardNotes[lang.code] ?? defaultKeyboardNote,
    faq,
  };
}
