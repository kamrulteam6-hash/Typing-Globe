export type Game = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  genre: string;
  icon: string;
  seo: {
    intro: string;
    howToPlay: string[][];
    faq: { question: string; answer: string }[];
  };
};

export const games: Game[] = [
  {
    slug: "dash-typing-game",
    title: "Dash Typing Game",
    tagline: "Sprint down a neon track — every correct word is a burst of speed.",
    description:
      "A side-view typing runner. Type the prompted word correctly to surge forward and pull ahead of your rival racer; a mistake costs you your stride.",
    genre: "Runner",
    icon: "🏃",
    seo: {
      intro:
        "Dash Typing Game turns raw typing speed into forward momentum. Instead of watching a countdown timer, you watch your own racer sprint down a glowing track — every correctly typed word bursts you forward, and a rival racer paces just behind you the whole run. It's the same core skill as a formal typing test, but framed as a race you can feel.",
      howToPlay: [
        ["Type the word", "Match the word shown above the track exactly, then press space or continue typing the next word."],
        ["Build speed", "Consecutive correct words increase your combo multiplier and burst speed."],
        ["Avoid mistakes", "A wrong keystroke breaks your combo and briefly slows your racer down."],
        ["Beat the rival", "A ghost racer paces the track — pull ahead and stay there to post your best distance."],
      ],
      faq: [
        {
          question: "Is Dash Typing Game the same as a formal typing test?",
          answer:
            "It measures the same underlying skill (speed and accuracy) but as an arcade race rather than a timed paragraph — your final screen still shows an equivalent WPM and accuracy so you can compare runs.",
        },
        {
          question: "Does my high score save?",
          answer: "Yes — your best distance is saved in your browser (no account needed) and shown each time you play.",
        },
        {
          question: "Can I play in languages other than English?",
          answer: "Not yet — Dash Typing Game currently uses an English word bank. Other languages are planned.",
        },
      ],
    },
  },
  {
    slug: "type-blaster-typing-game",
    title: "Type Blaster",
    tagline: "Type to fire. Clear the wave before the words reach your base.",
    description:
      "A typing shooter. Word-marked ships drift down from the top of the screen — type a word to lock on and fire, destroying it before it reaches your base.",
    genre: "Shooter",
    icon: "🚀",
    seo: {
      intro:
        "Type Blaster is a typing-powered arcade shooter: enemy ships carrying words drift toward your base, and the only weapon you have is your keyboard. Typing a visible word locks your turret onto it and fires — clear the wave, protect your base, and watch the difficulty ramp as the run goes on.",
      howToPlay: [
        ["Lock on", "Start typing any visible word — your turret locks onto the first match and highlights it."],
        ["Fire", "Finish typing the word to fire and destroy that ship."],
        ["Defend your base", "Any ship that reaches the bottom costs you a life."],
        ["Survive the ramp", "Ships spawn faster and drift quicker the longer you survive — chain hits to build your combo multiplier."],
      ],
      faq: [
        {
          question: "What happens if two words start with the same letters?",
          answer:
            "Your turret locks onto whichever matching word you started typing first, and keeps highlighting every ship that still matches your current input until one is uniquely completed.",
        },
        {
          question: "How many lives do I get?",
          answer: "You start with 3 lives. The run ends when your base takes 3 hits — your final score and stats are shown immediately after.",
        },
        {
          question: "Is there a way to slow the game down?",
          answer:
            "Difficulty ramps automatically based on survival time, by design — the challenge is meant to escalate, similar to classic arcade shooters.",
        },
      ],
    },
  },
  {
    slug: "word-fall-typing-game",
    title: "Word Fall",
    tagline: "Words fall. You type. Don't let one hit the ground.",
    description:
      "A classic falling-words arcade game. Words drop down multiple lanes at increasing speed — type them before they reach the bottom, or lose a life.",
    genre: "Arcade",
    icon: "⬇️",
    seo: {
      intro:
        "Word Fall is the classic arcade typing format: words drop down several lanes at once, and you have to clear them with accurate, fast typing before they hit the ground. It's a pure reflex-and-speed test — more words fall, and faster, the longer you survive.",
      howToPlay: [
        ["Watch the lanes", "Multiple words fall at once, each in its own lane, at different speeds."],
        ["Type to clear", "Start typing any falling word — it locks on and highlights, matching Type Blaster's targeting."],
        ["Don't miss", "A word that reaches the bottom of its lane costs you a life."],
        ["Chase the combo", "Clearing words back-to-back without a miss builds your score multiplier."],
      ],
      faq: [
        {
          question: "How many lanes are there?",
          answer: "Five lanes, with word spawn position randomized — multiple words can be falling at once as the game speeds up.",
        },
        {
          question: "What's a good score for a beginner?",
          answer:
            "New players typically clear a few dozen words before losing all their lives; the goal is simply to beat your own saved high score run over run.",
        },
        {
          question: "Does accuracy matter, or just speed?",
          answer:
            "Both — mistyping a word you've locked onto breaks your combo just like a miss, so accuracy directly protects your multiplier and final score.",
        },
      ],
    },
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
