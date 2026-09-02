import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Bengali Typing Test · বাংলা | WPM & Accuracy",
  seoDescription:
    "Take a free Bengali typing test and check WPM and accuracy. Practice juktakkhor conjuncts, vowel signs, and Avro or Bijoy keyboard input.",
  researchedKeywords: [
    "Bengali typing speed test",
    "Bangla WPM test",
    "Bengali keyboard test",
    "Avro keyboard typing",
    "বাংলা টাইপিং টেস্ট",
    "বাংলা টাইপিং স্পিড",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Bengali is written in its own script, closely related to the Assamese script and part of the broader Brahmi family, with a particularly rich and complex system of conjunct consonants — called juktakkhor — that can combine two, three, or even more consonants into a single visually fused character. This makes conjunct handling one of the central skills in accurate Bengali typing.",
        "This test measures how quickly and accurately you can type real Bengali text, including its vowel signs and conjunct consonant clusters.",
      ],
    },

    { type: "heading", text: "Juktakkhor: Bengali's Complex Conjuncts", id: "juktakkhor" },
    {
      type: "paragraph",
      text: "Bengali conjunct consonants, called juktakkhor, combine multiple consonants into visually fused shapes that often look quite different from their individual component letters — ক্ষ (combining ক and ষ) and স্ত্র (combining স, ত, and র) are common examples. These aren't simply two letters placed side by side; the combined shape is often a genuinely new visual form, but the underlying character sequence still matters for accurate typing and text that behaves correctly when searched or copied.",
    },

    { type: "heading", text: "Vowel Signs Attach in Multiple Positions", id: "vowel-signs" },
    {
      type: "paragraph",
      text: "Like other Brahmi-derived scripts, Bengali dependent vowel signs attach before, after, above, or below their consonant depending on the specific vowel — the short-i equivalent sign is typed before the consonant even though other signs follow it, because Unicode stores the text in logical rather than purely visual order. Learning this input sequence, not guessing from the final glyph position, is fundamental to accurate Bengali typing.",
    },

    { type: "heading", text: "Avro and Bijoy: Two Different Typing Traditions", id: "avro-bijoy" },
    {
      type: "paragraph",
      text: "Avro is a widely used free phonetic typing tool, especially popular in Bangladesh, that converts Latin-letter phonetic input into Bengali Unicode text automatically. Bijoy, an older commercial system with deep historical roots in Bengali desktop publishing, traditionally used its own fixed key-position layout and, in some of its legacy forms, a non-Unicode font encoding rather than standard Unicode Bengali — meaning older Bijoy-encoded text may not display correctly outside of Bijoy-compatible software until it's properly converted.",
    },

    { type: "heading", text: "Unicode vs. Legacy Font Encoding", id: "unicode-vs-legacy" },
    {
      type: "paragraph",
      text: "For modern web and document use, genuine Unicode Bengali text is essential — it's what allows correct search, copying, and cross-platform rendering. Older Bengali documents relying on legacy, non-Unicode font encodings can display readable Bengali only when the exact matching font is installed, which creates real compatibility problems that a typing test built on authentic Unicode source text avoids entirely.",
    },

    { type: "heading", text: "What Is a Good Bengali Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Bengali typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is juktakkhor?",
          answer:
            "Bengali's system of conjunct consonants, where two or more consonants combine into a single visually fused character, often looking quite different from the individual component letters.",
        },
        {
          question: "What is the difference between Avro and Bijoy?",
          answer:
            "Avro is a widely used free phonetic tool that converts Latin-letter input into Bengali Unicode text. Bijoy is an older system, historically important in Bengali publishing, which in some legacy forms used a non-Unicode font encoding rather than standard Unicode.",
        },
        {
          question: "Why does Unicode matter for Bengali typing?",
          answer:
            "Unicode text ensures correct search, copying, and cross-platform display. Older legacy font-encoded Bengali text only displays correctly when the exact matching font is installed.",
        },
        {
          question: "What is a good Bengali typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "আপনার সময় বেছে নিন, টাইপ করা শুরু করুন, এবং সাথে সাথে আপনার গতি ও সঠিকতা দেখুন।",
    },
  ],
};

export default content;
