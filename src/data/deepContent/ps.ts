import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Pashto Typing Test · پښتو | WPM & Accuracy",
  seoDescription:
    "Take a free Pashto typing test and check WPM and accuracy. Practice Pashto-specific letters, right-to-left script, and the Windows Pashto keyboard.",
  researchedKeywords: [
    "Pashto typing speed test",
    "Pashto WPM test",
    "Pashto keyboard test",
    "پښتو ټایپنګ ازموینه",
    "پښتو د لیکلو چټکتیا",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Pashto is written right to left in a modified Perso-Arabic script, extending the standard Arabic and Persian letter set with several characters unique to Pashto sounds. Because embedded numbers and Latin text still run left to right, Pashto typing regularly involves the same bidirectional text handling seen in other RTL scripts.",
        "This test measures how quickly and accurately you can type real Pashto text, including its extra consonant letters and correct right-to-left punctuation.",
      ],
    },

    { type: "heading", text: "Pashto Adds Letters Beyond Standard Arabic and Persian", id: "extra-letters" },
    {
      type: "paragraph",
      text: "Pashto's alphabet builds on the Perso-Arabic base and adds letters for sounds not present in Arabic or Persian, including retroflex consonants such as ټ, ډ, ړ, ڼ, and the distinctive ږ, ښ. These are not decorative variants of similar-looking Arabic letters — they represent genuinely different Pashto sounds, and substituting a visually similar Arabic or Persian letter changes the written word.",
    },

    { type: "heading", text: "Right-to-Left Text with Embedded Numbers", id: "rtl-numbers" },
    {
      type: "paragraph",
      text: "Pashto script runs right to left, but numerals, and any embedded Latin text such as a brand name or URL, display left to right within the line. This mixed-direction behavior is handled automatically by the Unicode Bidirectional Algorithm, and it's normal — not a sign of a typing error — when a number or English word appears to interrupt the visual flow of an otherwise right-to-left sentence.",
    },

    { type: "heading", text: "The Windows Pashto Keyboard", id: "keyboard" },
    {
      type: "paragraph",
      text: "Windows provides a dedicated Pashto keyboard layout, giving direct access to both the shared Perso-Arabic letters and Pashto's additional consonants without relying on Character Map or copy-paste. Setting the correct input language before starting a timed test matters — an unintended Arabic or Persian layout will make Pashto-specific letters difficult or impossible to reach cleanly.",
    },

    { type: "heading", text: "Pashto Punctuation Follows Its Own Conventions", id: "punctuation" },
    {
      type: "paragraph",
      text: "Much Pashto punctuation is shared with Arabic and Persian, including the reversed comma (،) and question mark (؟) used in RTL text. Reproducing the source exactly — rather than substituting a plain English comma or question mark from habit — keeps a typing test measuring real Pashto text rather than a Latin-punctuation approximation of it.",
    },

    { type: "heading", text: "What Is a Good Pashto Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Pashto typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Does Pashto have letters that Arabic doesn't?",
          answer:
            "Yes. Pashto adds retroflex and other Pashto-specific consonants such as ټ, ډ, ړ, ږ, ښ, and ڼ, representing sounds that don't exist in standard Arabic or Persian.",
        },
        {
          question: "Why do numbers appear left to right in Pashto text?",
          answer:
            "Pashto script is right to left, but numerals and embedded Latin text display left to right within the same line. This is normal Unicode bidirectional behavior, not an error.",
        },
        {
          question: "Does Windows have a Pashto keyboard?",
          answer:
            "Yes, Windows provides a dedicated Pashto keyboard layout with direct access to both shared Perso-Arabic letters and Pashto-specific consonants.",
        },
        {
          question: "What is a good Pashto typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "خپل وخت وټاکئ، ليکل پيل کړئ، او خپل WPM او دقت سمدستي وګورئ.",
    },
  ],
};

export default content;
