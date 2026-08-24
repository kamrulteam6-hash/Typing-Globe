import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Latin Typing Test · Latina | WPM & Accuracy",
  seoDescription:
    "Take a free Latin typing test and check WPM and accuracy. Practice Classical Latin spelling, I/V conventions, macrons, punctuation and scholarly transcription.",
  researchedKeywords: [
    "latin typing test",
    "latin typing speed test",
    "classical latin typing",
    "latin WPM test",
    "latin keyboard test",
    "latin macron typing",
    "latin transcription practice",
    "probatio scribendi latine",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Latin typing looks easy because the letters are familiar, but a serious Latin page has to make one choice explicit: which editorial convention is being typed? Classical inscriptions, school texts with macrons, modern scholarly editions, ecclesiastical Latin, and scientific names can all use slightly different letter and punctuation conventions.",
        "Fast and accurate Latin typing is useful in academic study, scholarship, religious contexts, scientific nomenclature, and digital humanities work. Because different editions use different orthographic standards, character accuracy becomes tied to knowing which source convention you are reproducing.",
        "This test measures your Latin typing speed with authentic Latin text in a clearly defined editorial convention, giving you a live WPM and accuracy score you can trust.",
      ],
    },

    { type: "heading", text: "Which Latin Are You Typing?", id: "which-latin" },
    {
      type: "paragraph",
      text: "Modern Latin text comes in several distinct editorial traditions. Classical inscriptions use one convention, Renaissance humanism introduced another, 18th-century scholarly Latin developed its own patterns, and modern critical editions follow yet another. The page should specify which one users will encounter.",
    },

    { type: "heading", text: "The Classical Latin Alphabet Has 23 Letters", id: "classical-alphabet" },
    {
      type: "paragraph",
      text: "The classical Roman alphabet used 23 letters: A, B, C, D, E, F, G, H, I, K, L, M, N, O, P, Q, R, S, T, V, X, Y, Z. Note the absence of J and W (which are modern additions) and the presence of both I and J's sound marked by I.",
    },

    { type: "heading", text: "I vs. J and V vs. U in Different Latin Editions", id: "i-j-u-v" },
    {
      type: "table",
      headers: ["Convention", "Usage", "Practice Example"],
      rows: [
        ["Classical inscription style", "I for all i-sounds, V for all u-vowel and v-consonant sounds", "IVSTINIANVS IMPE RATOR"],
        ["Traditional school Latin", "I and J both used; V and U both used", "Justinianus imperator"],
        ["Allen & Greenough standard", "I for vowel and consonant, J only in Anglicized names; V for consonant, U for vowel", "Cicero, iustitia"],
        ["Modern scholarly edition", "Varies by editor; usually I for vowel, J for consonant before vowel", "See the specific edition"],
      ],
    },

    { type: "heading", text: "Macrons and Apexes: Long Vowel Marks", id: "long-vowels" },
    {
      type: "paragraph",
      text: "Classical Latin distinguished long and short vowels by sound, but written Latin had no standard way to show that distinction until modern editors began using macrons (ā, ē, ī, ō, ū) or apexes (á, é, í, ó, ú). A serious Latin typing test should use one system consistently.",
    },

    { type: "heading", text: "Punctuation and Capitalization Conventions Vary", id: "punctuation-conventions" },
    {
      type: "paragraph",
      text: "Classical inscriptions use no punctuation at all. Medieval manuscripts developed interpuncts and various marks. Modern editions apply sentence capitalization and modern punctuation. A Latin typing test should match one real editorial tradition rather than inventing a hybrid.",
    },

    { type: "heading", text: "How WPM Is Measured in Latin Typing", id: "how-wpm-measured" },
    {
      type: "paragraph",
      text: "Typing Globe uses the standard five-character WPM convention, which treats every five typed characters (including spaces and punctuation) as one 'word.' Latin words are often longer than English ones, so Latin WPM can run lower than English WPM even for comparable hand speed.",
    },

    { type: "heading", text: "Allen & Greenough: The Standard Academic Reference", id: "allen-greenough" },
    {
      type: "paragraph",
      text: "Allen & Greenough's New Latin Grammar is the widely cited standard for classical Latin conventions in American and British academic contexts. It specifies I for i-vowels and i-consonants, U for u-vowels, V for v-consonants, and modern punctuation.",
    },

    { type: "heading", text: "Ecclesiastical Latin Uses Different Conventions", id: "ecclesiastical-latin" },
    {
      type: "paragraph",
      text: "Church Latin developed its own orthographic traditions distinct from classical conventions. A Vatican document or liturgical text uses different spelling and punctuation patterns from Cicero. This page should not mix them.",
    },

    { type: "heading", text: "Scientific Latin Names Follow Linnaean Conventions", id: "scientific-latin" },
    {
      type: "paragraph",
      text: "Biological nomenclature uses Latin roots under the Linnaean naming system. Those names follow specific capitalization and letter rules (binomial nomenclature: Genus species). They are a specialized vocabulary, not general Latin prose.",
    },

    { type: "heading", text: "Domain-Specific Latin Typing Matters", id: "domain-specific" },
    {
      type: "paragraph",
      text: "You might type classical prose (different from inscription conventions), scholarly critical editions, liturgical texts, medical terminology, or scientific names. Each domain has real typing tasks but different accuracy targets. A good page should acknowledge this.",
    },

    { type: "heading", text: "A 6-Week Latin Typing Practice Plan", id: "six-week-plan" },
    { type: "subheading", text: "Weeks 1-2: Learn the Editorial Conventions" },
    {
      type: "paragraph",
      text: "Decide which Latin source or convention you are following. Practice short sentences using consistent I/J and U/V choices and familiar Latin vocabulary.",
    },

    { type: "subheading", text: "Weeks 3-4: Add Macrons or Apexes If Your Text Uses Them" },
    {
      type: "paragraph",
      text: "If your source includes long-vowel marks, practice them inside common words. Keep a short list of recurring punctuation or capitalization errors and drill those patterns.",
    },

    { type: "subheading", text: "Weeks 5-6: Build Sustained Rhythm" },
    {
      type: "paragraph",
      text: "Mix short 30-second checks with 60- and 120-second passages. Longer tests reveal whether accuracy drops after the opening burst.",
    },

    { type: "heading", text: "A Simple 20-Minute Latin Routine", id: "daily-routine" },
    {
      type: "paragraph",
      text: "Warm up with familiar short forms, spend several minutes on the convention detail that tripped you most recently (I vs. J, U vs. V, macron placement, or punctuation), take one normal-speed test, then review errors instead of immediately retaking.",
    },

    { type: "heading", text: "Common Latin Typing Mistakes to Watch", id: "common-mistakes" },
    {
      type: "list",
      items: [
        "Switching between I/J or U/V conventions mid-passage",
        "Dropping macrons or apexes when the source includes them",
        "Using modern English punctuation in place of the source convention",
        "Treating classical inscription (all-caps, no punctuation) as identical to modern scholarly edition",
        "Assuming ecclesiastical and classical Latin share identical spelling rules",
        "Mixing scientific nomenclature conventions with literary Latin",
      ],
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq-section" },
    {
      type: "faq",
      items: [
        {
          question: "How many letters does classical Latin have?",
          answer:
            "The classical Roman alphabet had 23 letters. Modern texts add J and W, but classical inscriptions used I for all i-sounds and V for all u-vowels and v-consonants.",
        },
        {
          question: "What is the difference between I and J in Latin?",
          answer:
            "Classically, there was no J — I represented both vowel and consonant sounds. Modern editions introduced J to distinguish the consonant. Allen & Greenough and many academic sources use I for both.",
        },
        {
          question: "What are macrons in Latin?",
          answer:
            "Macrons (ā, ē, ī, ō, ū) are diacritical marks modern editors use to show long vowels, which classical Latin did not write. Different editions use them differently, so match your source.",
        },
        {
          question: "Do all Latin texts use the same conventions?",
          answer:
            "No. Classical inscriptions, ecclesiastical Latin, school textbooks, scholarly editions, and scientific nomenclature each use different conventions for spelling, capitalization, and punctuation.",
        },
        {
          question: "Which Latin should I learn for this test?",
          answer:
            "Choose a source you actually read or study — Allen & Greenough for classical prose, the Vulgate for ecclesiastical text, Linnaean rules for scientific names, or a scholarly edition you are already using.",
        },
        {
          question: "What is a good Latin typing speed?",
          answer:
            "There is no transparent universal Latin WPM benchmark. Use your first clean result as a personal baseline and compare similar test attempts over time.",
        },
      ],
    },

    {
      type: "cta",
      text: "Test Your Latin Typing Speed Now — Start the Latin Typing Test · Latina above and type at the pace that feels natural today. Check WPM and accuracy when the test ends, then notice which I/J choices, U/V distinctions, macrons, or punctuation marks interrupted your rhythm. Return after a few focused practice sessions with the same source and test again.",
    },
  ],
};

export default content;
