import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Telugu Typing Test · తెలుగు | WPM & Accuracy",
  seoDescription:
    "Take a free Telugu typing test and check WPM and accuracy. Practice vowel signs, virama, conjuncts, and Telugu INSCRIPT or phonetic keyboard input.",
  researchedKeywords: [
    "Telugu typing speed test",
    "Telugu WPM test",
    "Telugu keyboard test",
    "Telugu INSCRIPT typing",
    "తెలుగు టైపింగ్ టెస్ట్",
    "తెలుగు టైపింగ్ స్పీడ్",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Telugu is written in its own Brahmi-derived abugida, closely related to Kannada in structure, with rounded letterforms and a rich system of vowel signs and conjunct consonants. Like other Indic scripts, one visible Telugu syllable can be built from several underlying Unicode characters, so the input sequence and the final visual shape are not always the same thing.",
        "This test measures how quickly and accurately you can type real Telugu text, including vowel signs, virama-based conjuncts, and nasalization marks.",
      ],
    },

    { type: "heading", text: "Telugu Vowel Signs Combine Around Consonants", id: "vowel-signs" },
    {
      type: "paragraph",
      text: "Telugu consonants carry an inherent vowel by default, and dependent vowel signs attach around the consonant to change that vowel — some above, some below, some to the side. The typing sequence follows a logical order defined by the input method, not necessarily the order the marks appear visually on screen. Practicing common syllable patterns such as క, కా, కి, కీ, కు, కూ, కె, కే, కొ, కో builds the habit of producing the right sequence automatically.",
    },

    { type: "heading", text: "Virama Builds Telugu Conjuncts", id: "virama-conjuncts" },
    {
      type: "paragraph",
      text: "Telugu uses a virama sign to suppress a consonant's inherent vowel, allowing consonants to combine into conjunct clusters — for example, క్ష (ksha) or జ్ఞ (jnya). These conjuncts frequently render as visually fused or stacked shapes rather than two separate letters, but the underlying character sequence still matters for accurate typing, searching, and text that behaves correctly when copied or shared.",
    },

    { type: "heading", text: "Anusvara and Other Combining Marks", id: "anusvara" },
    {
      type: "paragraph",
      text: "Telugu text regularly uses anusvara, a nasal mark placed above a consonant, in words such as సంగీతం (music) or బంగారం (gold). It is a real character in the encoded text, not a stylistic flourish, and dropping it changes the written word even when every surrounding consonant is correct. Because it's easy to miss at speed, it deserves deliberate practice inside real vocabulary rather than isolated drilling.",
    },

    { type: "heading", text: "Telugu INSCRIPT and Phonetic Input", id: "keyboard" },
    {
      type: "paragraph",
      text: "Windows installs Telugu with the INSCRIPT keyboard by default, which maps Telugu letters and vowel signs to fixed key positions. A phonetic input method is also commonly used, where you type a Latin transliteration and select the correct Telugu candidate from suggestions. These are genuinely different physical tasks — INSCRIPT is direct key-position recall, while phonetic typing adds a candidate-selection step — so keep your practice and any speed comparison tied to one method.",
    },

    { type: "heading", text: "What Is a Good Telugu Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Telugu typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule instead of a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Why do Telugu vowel signs appear in different positions?",
          answer:
            "Telugu dependent vowel signs attach around the consonant in different visual positions depending on the vowel. The correct typing order follows the input method's logical sequence, not the final visual layout.",
        },
        {
          question: "What does virama do in Telugu?",
          answer:
            "Virama suppresses a consonant's inherent vowel, allowing it to combine with the next consonant into a conjunct cluster such as క్ష or జ్ఞ.",
        },
        {
          question: "Is Telugu phonetic typing the same as INSCRIPT?",
          answer:
            "No. INSCRIPT uses fixed Telugu key positions, while phonetic typing converts a Latin transliteration into candidate Telugu words that you select. They are different workflows and shouldn't be compared as identical.",
        },
        {
          question: "What is a good Telugu typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "మీ సమయాన్ని ఎంచుకోండి, టైప్ చేయడం ప్రారంభించండి, మరియు మీ WPM మరియు ఖచ్చితత్వాన్ని వెంటనే చూడండి.",
    },
  ],
};

export default content;
