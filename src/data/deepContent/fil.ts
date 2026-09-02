import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Filipino Typing Test · Filipino | WPM & Accuracy",
  seoDescription:
    "Take a free Filipino typing test and check WPM and accuracy. Practice ng and mga markers, glottal stops, and real Filipino/Tagalog text.",
  researchedKeywords: [
    "Filipino typing speed test",
    "Tagalog typing test",
    "Filipino WPM test",
    "Filipino keyboard test",
    "pagsusulit sa bilis ng pagta-type",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Filipino, standardized primarily from Tagalog, is written with the ordinary Latin alphabet and needs no special keyboard layout — but its grammatical marker words ng and mga, and its glottal stops that aren't always visibly marked in writing, create real spelling challenges that don't come from unfamiliar characters at all.",
        "This test measures how quickly and accurately you can type real Filipino sentences on a standard keyboard.",
      ],
    },

    { type: "heading", text: "Filipino Uses the Standard Latin Alphabet", id: "alphabet" },
    {
      type: "paragraph",
      text: "The modern Filipino alphabet (alpabetong Filipino) uses the same 26 Latin letters as English, plus ñ, inherited from Spanish colonial influence, and the historical ng digraph is sometimes still counted as its own alphabet unit in teaching contexts. No accented vowels or other diacritics are needed for ordinary modern Filipino writing, so a standard QWERTY keyboard is fully sufficient.",
    },

    { type: "heading", text: "Ng and Mga Are Separate Grammatical Words", id: "ng-mga" },
    {
      type: "paragraph",
      text: "Ng (a linking particle, pronounced roughly like 'nang') and mga (a plural marker, pronounced roughly like 'manga' without the final syllable) are extremely common short words that must be typed with a space before and after them, exactly like any other word — a fast typist can accidentally fuse them onto an adjacent word, which is a real spelling error rather than a stylistic shortcut. Practicing phrases like mga bata (children) and bahay ng lola (grandmother's house) builds the habit of treating them as independent words.",
    },

    { type: "heading", text: "Glottal Stops Aren't Always Written", id: "glottal-stops" },
    {
      type: "paragraph",
      text: "Filipino pronunciation includes glottal stops that standard spelling often doesn't mark explicitly, relying instead on context and, in more careful or academic writing, an inserted hyphen before a suffix (as in mag-aral, to study) to show the break. Because everyday informal writing and careful formal writing can differ in how consistently these hyphens appear, a typing test should reproduce exactly what the source shows rather than adding or removing hyphens based on assumed pronunciation.",
    },

    { type: "heading", text: "Loanword Spelling Reflects Filipino Phonetics", id: "loanwords" },
    {
      type: "paragraph",
      text: "Filipino frequently respells loanwords, especially from Spanish and English, according to Filipino phonetic conventions rather than keeping the original spelling — kompyuter (computer), telebisyon (television), or bangko (bank, from Spanish banco). These respelled forms are the correct standard spelling in Filipino text, not informal or incorrect variants, and should be typed exactly as shown even when the English-derived word looks more familiar.",
    },

    { type: "heading", text: "What Is a Good Filipino Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Filipino typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Does Filipino need a special keyboard?",
          answer:
            "No. Modern Filipino uses the standard Latin alphabet plus ñ, so an ordinary QWERTY keyboard is fully sufficient for everyday writing.",
        },
        {
          question: "What are ng and mga?",
          answer:
            "Ng is a common linking particle and mga is a plural marker — both are separate grammatical words that must be typed with spaces around them, not fused onto neighboring words.",
        },
        {
          question: "Are loanwords spelled the same as in English?",
          answer:
            "Usually not. Filipino often respells loanwords phonetically, such as kompyuter (computer) or telebisyon (television), and these respelled forms are the correct standard spelling.",
        },
        {
          question: "What is a good Filipino typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Piliin ang iyong oras, simulan ang pag-type, at agad na makita ang iyong bilis at katumpakan.",
    },
  ],
};

export default content;
