import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Bulgarian Typing Test · Български | WPM & Accuracy",
  seoDescription:
    "Take a free Bulgarian typing test and check WPM and accuracy. Practice the БДС keyboard, the letter ъ, and real Bulgarian Cyrillic text.",
  researchedKeywords: [
    "Bulgarian typing speed test",
    "Bulgarian WPM test",
    "Bulgarian keyboard test",
    "тест за скорост на писане",
    "упражнения за писане",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Bulgarian uses a 30-letter Cyrillic alphabet on the БДС (Bulgarian State Standard) keyboard layout, which is arranged quite differently from the JCUKEN layout used for Russian — a Russian-trained Cyrillic typist doesn't automatically have Bulgarian muscle memory. Bulgarian's letter ъ also functions as a genuine vowel, unlike its silent hard-sign role in Russian.",
        "This test measures how quickly and accurately you can type real Bulgarian text on the standard БДС keyboard.",
      ],
    },

    { type: "heading", text: "БДС Keyboard Differs from Russian JCUKEN", id: "keyboard" },
    {
      type: "paragraph",
      text: "БДС is the standard Bulgarian keyboard layout, and its letter arrangement is genuinely different from the JCUKEN layout used for Russian, even though both are Cyrillic. Assuming Russian Cyrillic typing skill transfers directly to Bulgarian is a common mistake — the two layouts require separately learned key positions, and confirming the correct layout is active before a timed test avoids confusing a layout mismatch with a language error.",
    },

    { type: "heading", text: "Ъ Functions as a Real Vowel in Bulgarian", id: "yer-vowel" },
    {
      type: "paragraph",
      text: "Unlike Russian, where ъ (hard sign) is a silent modifier that doesn't represent its own sound, Bulgarian's ъ is a genuine vowel sound, appearing in common words such as българия being spelled with it right after the б. This is a meaningful structural difference between the two languages' otherwise similar-looking alphabets, and treating Bulgarian ъ as if it were the silent Russian hard sign is a real misunderstanding, not just a typing habit.",
    },

    { type: "heading", text: "A 30-Letter Alphabet Without Ы, Э, or Ъ's Russian Role", id: "alphabet-differences" },
    {
      type: "paragraph",
      text: "Bulgarian's Cyrillic alphabet has 30 letters and doesn't include ы or э, both used in Russian, reflecting genuinely different phonological histories between the two languages despite sharing the same script family. Learning Bulgarian Cyrillic specifically, rather than assuming general Cyrillic-script familiarity is enough, produces more accurate typing.",
    },

    { type: "heading", text: "Bulgarian Word Stress Isn't Marked in Ordinary Writing", id: "stress-unmarked" },
    {
      type: "paragraph",
      text: "Bulgarian has variable word stress that can distinguish otherwise identical-looking words, but standard everyday writing doesn't mark stress explicitly (unlike, say, Spanish's accent marks), relying entirely on context and vocabulary knowledge. This means Bulgarian typing accuracy depends on correct letter sequences rather than any additional stress-marking system to worry about.",
    },

    { type: "heading", text: "What Is a Good Bulgarian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Bulgarian typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Is the Bulgarian keyboard the same as the Russian one?",
          answer:
            "No. Bulgarian uses the БДС layout, which is arranged differently from Russian's JCUKEN layout, even though both use Cyrillic script. The two require separately learned key positions.",
        },
        {
          question: "Does ъ work the same way in Bulgarian and Russian?",
          answer:
            "No. In Bulgarian, ъ is a genuine vowel sound, while in Russian it's a silent modifier (hard sign) that doesn't represent its own sound. This is a real structural difference, not a stylistic one.",
        },
        {
          question: "Does Bulgarian mark word stress in writing?",
          answer:
            "No, standard everyday Bulgarian writing doesn't mark stress explicitly, relying on context, unlike languages such as Spanish that use accent marks for this purpose.",
        },
        {
          question: "What is a good Bulgarian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Изберете своето време, започнете да пишете и веднага вижте своята скорост и точност.",
    },
  ],
};

export default content;
