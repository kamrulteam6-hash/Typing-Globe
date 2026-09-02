import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Sinhala Typing Test · සිංහල | WPM & Accuracy",
  seoDescription:
    "Take a free Sinhala typing test and check WPM and accuracy. Practice vowel signs, conjuncts, and Sinhala Wijesekara or phonetic keyboard input.",
  researchedKeywords: [
    "Sinhala typing speed test",
    "Sinhala WPM test",
    "Sinhala keyboard test",
    "Wijesekara keyboard typing",
    "සිංහල ටයිපින් පරීක්ෂණය",
    "සිංහල ටයිප් කිරීමේ වේගය",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Sinhala is written in its own rounded Brahmi-derived script, with a large character set that distinguishes short and long vowels and includes a wide range of vowel signs and conjunct forms. Its curved letterforms, like those of several other South and Southeast Asian scripts, are often linked historically to writing on palm leaves.",
        "This test measures how quickly and accurately you can type real Sinhala text, including its vowel-length distinctions and combining marks.",
      ],
    },

    { type: "heading", text: "Sinhala Distinguishes Short and Long Vowels", id: "vowel-length" },
    {
      type: "paragraph",
      text: "Sinhala has separate letters and vowel signs for short and long versions of the same vowel sound — for example, short a versus long ā, or short i versus long ī. This distinction is meaningful and can change a word's meaning entirely, so it is not a detail to skip at speed. Practicing minimal pairs that differ only in vowel length is one of the most efficient ways to build accurate Sinhala typing.",
    },

    { type: "heading", text: "Vowel Signs Attach in Multiple Positions", id: "vowel-signs" },
    {
      type: "paragraph",
      text: "Like other Indic-family scripts, Sinhala dependent vowel signs attach around their base consonant — before, after, above, or below — depending on which vowel is represented. The correct typing sequence follows the logical order defined by the input method, not necessarily the order the marks appear visually, so learning that sequence rather than guessing from the final glyph position is the key typing skill.",
    },

    { type: "heading", text: "Sinhala Conjunct Consonants", id: "conjuncts" },
    {
      type: "paragraph",
      text: "Sinhala forms conjunct consonant clusters through a virama-based mechanism similar to other Brahmi-derived scripts, producing stacked or joined shapes for sequences like ක්‍ර or ත්‍ර. A typing test should score the underlying character sequence rather than assume every visible conjunct is a single character, since the same conjunct can be built from several Unicode code points.",
    },

    { type: "heading", text: "Wijesekara and Phonetic Keyboards", id: "keyboard" },
    {
      type: "paragraph",
      text: "The traditional Sinhala typewriter-derived layout, commonly called Wijesekara, remains widely used and is available as a Windows keyboard layout. Phonetic input tools are also popular, letting users type Sinhala sounds using Latin letters and select the correct Sinhala candidate. These are different physical tasks, so keep practice and progress tracking tied to one input method rather than comparing scores across both.",
    },

    { type: "heading", text: "What Is a Good Sinhala Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Sinhala typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Why does vowel length matter in Sinhala?",
          answer:
            "Short and long vowels are distinct letters or signs in Sinhala and can change a word's meaning. Typing the wrong length is a genuine spelling error, not a minor variation.",
        },
        {
          question: "What keyboard layout is used for Sinhala?",
          answer:
            "The Wijesekara layout, derived from earlier typewriter conventions, is widely used and available as a Windows keyboard. Phonetic transliteration tools are also common.",
        },
        {
          question: "Are Sinhala conjunct letters single characters?",
          answer:
            "Not necessarily. A visible conjunct can be built from several underlying Unicode characters combined through a virama-based mechanism, even though it displays as one joined shape.",
        },
        {
          question: "What is a good Sinhala typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "ඔබේ කාලය තෝරන්න, ටයිප් කිරීම ආරම්භ කරන්න, සහ ඔබේ WPM සහ නිරවද්‍යතාවය වහාම බලන්න.",
    },
  ],
};

export default content;
