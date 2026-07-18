export type Poem = {
  slug: string;
  title: string;
  author: string;
  year: string;
  summary: string;
  source: string;
  difficulty: "easy" | "medium" | "hard";
  text: string;
};

function wordCount(text: string): number {
  return text.trim().split(/\s+/).length;
}

const rawPoems: Omit<Poem, "slug">[] = [
  {
    title: "How Do I Love Thee? (Sonnet 43)",
    author: "Elizabeth Barrett Browning",
    year: "1850",
    summary: "A Petrarchan sonnet counting the many ways love fills a life, from everyday quiet need to a love that outlasts death.",
    source: "Sonnets from the Portuguese, 1850 — public domain",
    difficulty: "easy",
    text: `How do I love thee? Let me count the ways.
I love thee to the depth and breadth and height
My soul can reach, when feeling out of sight
For the ends of being and ideal grace.

I love thee to the level of every day's
Most quiet need, by sun and candle-light.
I love thee freely, as men strive for right.
I love thee purely, as they turn from praise.

I love thee with the passion put to use
In my old griefs, and with my childhood's faith.
I love thee with a love I seemed to lose
With my lost saints. I love thee with the breath,

Smiles, tears, of all my life; and, if God choose,
I shall but love thee better after death.`,
  },
  {
    title: "Sonnet 18",
    author: "William Shakespeare",
    year: "1609",
    summary: "One of Shakespeare's most famous sonnets, comparing a beloved's beauty to a summer's day — and finding the summer wanting.",
    source: "Shakespeare's Sonnets, 1609 — public domain",
    difficulty: "medium",
    text: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date:

Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;

But thy eternal summer shall not fade
Nor lose possession of that fair thou owest;
Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou growest:

So long as men can breathe or eyes can see,
So long lives this and this gives life to thee.`,
  },
  {
    title: "The Tyger",
    author: "William Blake",
    year: "1794",
    summary: "A series of burning questions to a tiger about the terrifying, mysterious force that could have created it.",
    source: "Songs of Experience, 1794 — public domain",
    difficulty: "medium",
    text: `Tyger Tyger, burning bright,
In the forests of the night,
What immortal hand or eye,
Could frame thy fearful symmetry?

In what distant deeps or skies,
Burnt the fire of thine eyes?
On what wings dare he aspire?
What the hand, dare seize the fire?

And what shoulder, & what art,
Could twist the sinews of thy heart?
And when thy heart began to beat,
What dread hand? & what dread feet?

What the hammer? what the chain?
In what furnace was thy brain?
What the anvil? what dread grasp
Dare its deadly terrors clasp?

When the stars threw down their spears,
And water'd heaven with their tears,
Did he smile his work to see?
Did he who made the Lamb make thee?

Tyger Tyger, burning bright,
In the forests of the night,
What immortal hand or eye,
Dare frame thy fearful symmetry?`,
  },
  {
    title: "I Wandered Lonely as a Cloud",
    author: "William Wordsworth",
    year: "1807",
    summary: "A solitary walk becomes unforgettable at the sight of a vast field of daffodils dancing in the breeze.",
    source: "Poems, in Two Volumes, 1807 (revised 1815) — public domain",
    difficulty: "easy",
    text: `I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed—and gazed—but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`,
  },
  {
    title: "Ozymandias",
    author: "Percy Bysshe Shelley",
    year: "1818",
    summary: "A traveler describes a shattered statue in the desert, and the boastful inscription time has made ironic.",
    source: "The Examiner, 11 January 1818 — public domain",
    difficulty: "medium",
    text: `I met a traveller from an antique land
Who said: Two vast and trunkless legs of stone
Stand in the desert. Near them, on the sand,
Half sunk, a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them and the heart that fed:

And on the pedestal these words appear:
"My name is Ozymandias, king of kings:
Look on my works, ye Mighty, and despair!"
Nothing beside remains. Round the decay
Of that colossal wreck, boundless and bare
The lone and level sands stretch far away.`,
  },
  {
    title: "Invictus",
    author: "William Ernest Henley",
    year: "1888",
    summary: "A short, defiant declaration of self-mastery in the face of pain and darkness — 'I am the captain of my soul.'",
    source: "A Book of Verses, 1888 — public domain",
    difficulty: "easy",
    text: `Out of the night that covers me,
Black as the Pit from pole to pole,
I thank whatever gods may be
For my unconquerable soul.

In the fell clutch of circumstance
I have not winced nor cried aloud.
Under the bludgeonings of chance
My head is bloody, but unbowed.

Beyond this place of wrath and tears
Looms but the Horror of the shade,
And yet the menace of the years
Finds, and shall find, me unafraid.

It matters not how strait the gate,
How charged with punishments the scroll,
I am the master of my fate:
I am the captain of my soul.`,
  },
  {
    title: "Because I Could Not Stop for Death",
    author: "Emily Dickinson",
    year: "1890",
    summary: "Death arrives as a courteous carriage driver, and the speaker's final ride becomes a quiet meditation on eternity.",
    source: "Poems: Series 1, 1890 (posthumous) — public domain",
    difficulty: "medium",
    text: `Because I could not stop for Death—
He kindly stopped for me—
The Carriage held but just Ourselves—
And Immortality.

We slowly drove—He knew no haste
And I had put away
My labor and my leisure too,
For His Civility—

We passed the School, where Children strove
At Recess—in the Ring—
We passed the Fields of Gazing Grain—
We passed the Setting Sun—

Or rather—He passed us—
The Dews drew quivering and chill—
For only Gossamer, my Gown—
My Tippet—only Tulle—

We paused before a House that seemed
A Swelling of the Ground—
The Roof was scarcely visible—
The Cornice—in the Ground—

Since then—'tis Centuries—and yet
Feels shorter than the Day
I first surmised the Horses' Heads
Were toward Eternity—`,
  },
  {
    title: "The Road Not Taken",
    author: "Robert Frost",
    year: "1916",
    summary: "A traveler chooses between two forking paths in a yellow wood — and looks back on that choice years later.",
    source: "Mountain Interval, 1916 — public domain",
    difficulty: "easy",
    text: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.`,
  },
  {
    title: "If—",
    author: "Rudyard Kipling",
    year: "1910",
    summary: "A father's advice to his son on keeping composure, integrity, and resolve through triumph, disaster, and everything between.",
    source: "Rewards and Fairies, 1910 — public domain",
    difficulty: "hard",
    text: `If you can keep your head when all about you
Are losing theirs and blaming it on you;
If you can trust yourself when all men doubt you,
But make allowance for their doubting too;
If you can wait and not be tired by waiting,
Or, being lied about, don't deal in lies,
Or, being hated, don't give way to hating,
And yet don't look too good, nor talk too wise;

If you can dream—and not make dreams your master;
If you can think—and not make thoughts your aim;
If you can meet with triumph and disaster
And treat those two impostors just the same;
If you can bear to hear the truth you've spoken
Twisted by knaves to make a trap for fools,
Or watch the things you gave your life to broken,
And stoop and build 'em up with worn-out tools;

If you can make one heap of all your winnings
And risk it on one turn of pitch-and-toss,
And lose, and start again at your beginnings
And never breathe a word about your loss;
If you can force your heart and nerve and sinew
To serve your turn long after they are gone,
And so hold on when there is nothing in you
Except the Will which says to them: "Hold on!"

If you can talk with crowds and keep your virtue,
Or walk with Kings—nor lose the common touch,
If neither foes nor loving friends can hurt you,
If all men count with you, but none too much;
If you can fill the unforgiving minute
With sixty seconds' worth of distance run,
Yours is the Earth and everything that's in it,
And—which is more—you'll be a Man, my son!`,
  },
  {
    title: "Stopping by Woods on a Snowy Evening",
    author: "Robert Frost",
    year: "1923",
    summary: "A traveler pauses by a stranger's woods on the darkest evening of the year, tempted to linger before the long road ahead.",
    source: "New Hampshire, 1923 — public domain",
    difficulty: "easy",
    text: `Whose woods these are I think I know.
His house is in the village though;
He will not see me stopping here
To watch his woods fill up with snow.

My little horse must think it queer
To stop without a farmhouse near
Between the woods and frozen lake
The darkest evening of the year.

He gives his harness bells a shake
To ask if there is some mistake.
The only other sound's the sweep
Of easy wind and downy flake.

The woods are lovely, dark and deep.
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.`,
  },
];

export const poems: Poem[] = rawPoems.map((p) => ({
  ...p,
  slug: `${p.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}-typing-speed-test`,
}));

export function getPoemBySlug(slug: string): Poem | undefined {
  return poems.find((p) => p.slug === slug);
}

export function getPoemWordCount(poem: Poem): number {
  return wordCount(poem.text);
}
