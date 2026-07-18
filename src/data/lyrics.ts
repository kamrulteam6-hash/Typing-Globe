export type Lyric = {
  slug: string;
  title: string;
  genre: string;
  summary: string;
  source: string;
  difficulty: "easy" | "medium" | "hard";
  text: string;
};

function wordCount(text: string): number {
  return text.trim().split(/\s+/).length;
}

// Original song-style lyrics written for Typing Globe. These are not real songs and
// are not attributed to any artist — actual song lyrics are copyrighted and cannot
// be reproduced here.
const rawLyrics: Omit<Lyric, "slug">[] = [
  {
    title: "Neon and Gasoline",
    genre: "Pop Anthem",
    summary: "An upbeat, sing-along pop anthem about a late-night drive and chasing the horizon.",
    source: "Original lyrics, written for Typing Globe",
    difficulty: "easy",
    text: `Verse 1
Windows down, the city's humming low,
Radio static, but we let it go.
Streetlights flicker like a heartbeat overhead,
Nowhere to be, so we drive instead.

Chorus
Running on neon and gasoline,
Chasing a feeling we've never seen.
Nothing behind us, the road stretched clean,
Living on neon and gasoline.

Verse 2
You said the stars look closer out of town,
So we killed the engine and just laid down.
Every mile tonight feels like it's ours,
Counting our future in falling stars.

Chorus
Running on neon and gasoline,
Chasing a feeling we've never seen.
Nothing behind us, the road stretched clean,
Living on neon and gasoline.

Bridge
Maybe we don't know where this is going,
Maybe that's exactly why it's working.
Keep the engine on, keep the windows down,
We'll figure out the rest when we hit the next town.`,
  },
  {
    title: "Porch Light",
    genre: "Acoustic Folk",
    summary: "A gentle, slow-strum folk ballad about coming home and the people who wait for you.",
    source: "Original lyrics, written for Typing Globe",
    difficulty: "easy",
    text: `Verse 1
The gravel road remembers every step I've made,
Every summer I left, every fall I stayed.
And there's a porch light burning soft and low,
Right where I left it, years ago.

Chorus
So I'm coming home, coming home,
Down the same old road I've always known.
Nothing's changed, and everything's changed too,
But that porch light's still burning, waiting there for you.

Verse 2
My mother's hands still smell like bread and rain,
My father hums the same old tune again.
Some things get lost the longer that you roam,
But this house still remembers how to call me home.

Chorus
So I'm coming home, coming home,
Down the same old road I've always known.
Nothing's changed, and everything's changed too,
But that porch light's still burning, waiting there for you.

Outro
Turn the engine off, let the dust settle down,
I've been gone too long from this old town.`,
  },
  {
    title: "Concrete Constellations",
    genre: "Hip-Hop / Rhythmic Verse",
    summary: "A rhythmic, rap-cadence verse about ambition, hustle, and finding light in a hard city.",
    source: "Original lyrics, written for Typing Globe",
    difficulty: "medium",
    text: `Verse 1
Started in the basement, now I'm building something taller,
Every no I heard just made the yes get louder.
City never sleeps and honestly, neither did I,
Counting up the hours till the numbers multiply.

Concrete all around me, but I still see the stars,
Found my own direction underneath the scars.
They said slow it down, said it can't be done,
But I never learned to quit what I already won.

Chorus
Concrete constellations, lighting up the dark,
Every corner of this city got a piece of my heart.
Started with nothing, built it brick by brick,
Concrete constellations, watch me shine through it.

Verse 2
Every setback taught me something I could use,
Every closed door taught me how to choose.
Now the same streets that once counted me out
Are the ones that hear my name and know what it's about.

Chorus
Concrete constellations, lighting up the dark,
Every corner of this city got a piece of my heart.
Started with nothing, built it brick by brick,
Concrete constellations, watch me shine through it.`,
  },
  {
    title: "Slow Tide",
    genre: "R&B Ballad",
    summary: "A smooth, slow-tempo R&B ballad about patience and letting a relationship find its own pace.",
    source: "Original lyrics, written for Typing Globe",
    difficulty: "medium",
    text: `Verse 1
No need to rush this, baby, let it breathe,
Some things worth having take their time to leave
An echo that lasts longer than a spark,
So let's take it slow and learn each other's heart.

Pre-Chorus
No countdown, no clock, no reason to hide,
Just you and me moving with the slow tide.

Chorus
Like a slow tide, pulling me in,
Steady and patient, right where I've been.
No need to hurry, no need to decide,
Just let it happen like a slow tide.

Verse 2
I used to rush through every good thing that I found,
Missed half the beauty just by looking down.
But you taught me different, taught me how to stay,
Present in the moment, come what may.

Chorus
Like a slow tide, pulling me in,
Steady and patient, right where I've been.
No need to hurry, no need to decide,
Just let it happen like a slow tide.`,
  },
  {
    title: "Paper Boats",
    genre: "Dance Pop",
    summary: "A bright, danceable pop track about letting go of worry and floating through the good days.",
    source: "Original lyrics, written for Typing Globe",
    difficulty: "easy",
    text: `Verse 1
Fold it up, let it go, watch it drift away,
Every little worry on a paper boat today.
Down the gutter, down the stream, wherever it may roam,
Lighter now, lighter now, finally feels like home.

Chorus
We're sending out paper boats,
Watching all our troubles float.
Dancing while the current flows,
Nothing here but paper boats.

Verse 2
Yesterday's a river now, already washed downstream,
Today's the only current pulling on this dream.
Fold another worry up, let it join the rest,
Every paper boat we send is one more weight off our chest.

Chorus
We're sending out paper boats,
Watching all our troubles float.
Dancing while the current flows,
Nothing here but paper boats.`,
  },
  {
    title: "Little Light",
    genre: "Lullaby",
    summary: "A soft, quiet lullaby about a small light that keeps watch through the night.",
    source: "Original lyrics, written for Typing Globe",
    difficulty: "easy",
    text: `Verse 1
Hush now, little one, the day is finally done,
The moon has taken over watch from the sun.
Close your eyes, let the quiet settle in,
There's a little light that's watching over you again.

Chorus
Little light, little light, burning soft and low,
Little light, little light, everywhere you go.
Sleep now, sleep now, nothing here to fear,
Little light will keep on watching, little light is near.

Verse 2
The stars are only porch lights hung up in the dark,
Each one keeping watch on someone's sleeping heart.
So drift along the quiet, let the night be kind,
There's a little light that's holding you in mind.

Chorus
Little light, little light, burning soft and low,
Little light, little light, everywhere you go.
Sleep now, sleep now, nothing here to fear,
Little light will keep on watching, little light is near.`,
  },
];

export const lyrics: Lyric[] = rawLyrics.map((l) => ({
  ...l,
  slug: `${l.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}-typing-speed-test`,
}));

export function getLyricBySlug(slug: string): Lyric | undefined {
  return lyrics.find((l) => l.slug === slug);
}

export function getLyricWordCount(lyric: Lyric): number {
  return wordCount(lyric.text);
}
