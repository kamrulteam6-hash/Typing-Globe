export type Story = {
  slug: string;
  title: string;
  summary: string;
  source: string;
  difficulty: "easy" | "medium" | "hard";
  text: string;
};

function wordCount(text: string): number {
  return text.trim().split(/\s+/).length;
}

const rawStories: Omit<Story, "slug">[] = [
  {
    title: "The Tortoise and the Hare",
    summary: "A boastful hare challenges a slow tortoise to a race, and learns that steady effort beats a head start.",
    source: "Traditional fable, retold",
    difficulty: "easy",
    text: `A hare was always laughing at a tortoise for being so slow. "Do you ever get anywhere?" the hare would ask, grinning. One day the tortoise had heard enough. "I'll race you," he said, "and I'll win." The hare laughed so hard he nearly fell over, but he agreed at once.

They lined up at the starting oak, and a fox counted them off. The hare shot forward in a blur of dust, and within a minute the tortoise was nowhere in sight behind him. Certain of victory, the hare decided he had time to spare. He found a soft patch of grass under a tree and lay down. "I'll just rest my eyes a moment," he thought. "That tortoise won't pass me for hours."

But the tortoise never stopped. He plodded past the sleeping hare without a sound, one slow step after another, never hurrying, never resting. The sun rose higher, and still the hare slept on, dreaming of easy victory.

When the hare finally woke, the shadows had grown long. He stretched, yawned, and set off again at full speed — only to see the tortoise crossing the finish line just ahead of him. The animals who had gathered to watch cheered. The hare hung his head, and the tortoise said nothing at all. He simply smiled and rested his tired feet, having proven that slow and steady wins the race.`,
  },
  {
    title: "The Fox and the Grapes",
    summary: "A hungry fox decides the grapes he cannot reach were never worth wanting in the first place.",
    source: "Traditional fable, retold",
    difficulty: "easy",
    text: `A fox had not eaten since morning, and as the afternoon wore on his stomach began to ache with hunger. Wandering through an orchard, he came upon a vine heavy with ripe, purple grapes hanging just above his head. His mouth watered at the sight of them.

He crouched low and sprang upward, snapping his jaws at the lowest bunch, but it swung just out of reach. He backed up, ran, and leapt again, higher this time, but his teeth closed on nothing but air. Again and again he tried, circling the vine, eyeing the fruit from every angle, but no matter how he jumped he could not reach it.

At last, exhausted and out of breath, the fox sat down in the dirt and looked up at the grapes one final time. "They're probably sour anyway," he muttered, brushing the dust from his coat. "Not worth the trouble." And with his nose in the air, he turned and trotted off into the woods, telling himself he had never wanted them at all.`,
  },
  {
    title: "The Boy Who Cried Wolf",
    summary: "A shepherd boy discovers that lying for attention comes at a heavy cost when the danger finally becomes real.",
    source: "Traditional fable, retold",
    difficulty: "medium",
    text: `A shepherd boy was given the job of watching his village's flock on the hill above the town. The days were long and quiet, and before long he grew bored of sitting alone with only sheep for company. One afternoon, just to see what would happen, he cupped his hands and shouted, "Wolf! Wolf! A wolf is attacking the sheep!"

The villagers below dropped their tools and came running, sticks and stones in hand, ready to fight off the beast. But when they reached the hill, they found nothing — only the boy, laughing at how easily he had fooled them. Annoyed, they returned to their work, and the boy thought it was the funniest thing he had ever done.

A few days later, feeling bored again, he played the same trick, and once more the villagers rushed up the hill for nothing. This time they were angrier, and a few muttered that they wouldn't be so quick to believe him next time.

Then, one evening as the sun was setting, a real wolf crept out of the trees and began stalking toward the flock. Terrified, the boy screamed with all his strength, "Wolf! Wolf! Please, a wolf is really here this time!" But down in the village, no one moved. "He's just playing his little game again," they said, shaking their heads, and they went on with their supper.

The wolf scattered the flock and slipped back into the forest before anyone came, and the boy learned, far too late, that a liar is not believed even when he speaks the truth.`,
  },
  {
    title: "The Ant and the Grasshopper",
    summary: "While an ant labors all summer to prepare for winter, a carefree grasshopper sings the season away.",
    source: "Traditional fable, retold",
    difficulty: "easy",
    text: `All through the warm summer months, an ant worked without rest, hauling grains of wheat one by one back to her nest, storing away food for the winter ahead. In the field beside her, a grasshopper spent his days fiddling and singing in the sun, watching her pass back and forth. "Why not stop and enjoy the weather with me?" he called out. "Summer is for singing, not for all this hauling and worrying."

The ant barely paused. "Winter always comes," she said, "whether we're ready for it or not," and she went back to her work, leaving the grasshopper to his music.

The weeks passed, the days grew shorter, and eventually the first frost arrived, turning the green field brown and bare. The grasshopper, who had not stored a single seed, found himself cold and hungry with nothing left to eat and nowhere warm to shelter. Shivering, he made his way to the ant's snug nest and knocked, asking if she might spare a little food.

The ant looked out at him from her warm doorway, surrounded by the food she had gathered all summer long. "You sang through the summer," she said gently. "Now you may dance through the winter." Though she shared what little she could, the grasshopper never forgot the lesson that a season of ease is often paid for later.`,
  },
  {
    title: "The Lion and the Mouse",
    summary: "A mighty lion spares a tiny mouse's life, and later discovers that even the smallest creature can return a great favor.",
    source: "Traditional fable, retold",
    difficulty: "medium",
    text: `A lion lay sleeping in the shade of a tree when a small mouse, hurrying past, accidentally ran across his paw. The lion woke with a growl and pinned the trembling mouse beneath one enormous claw, ready to end the little creature's life in a single bite.

"Please," squeaked the mouse, "let me go, and I promise I will repay your kindness one day." The lion tipped back his great head and roared with laughter at the idea that such a small thing could ever help a lion. Still, amused rather than angry, he lifted his paw and let the mouse scurry free.

Not long after, the lion was caught in a hunter's net, its ropes tangled tightly around his legs and mane. He roared and thrashed, but the harder he struggled, the tighter the net became, until at last he could only lie still and roar in frustration. The little mouse, hearing the commotion from nearby, recognized the lion's voice and came running.

Without a moment's hesitation, the mouse began gnawing through the thick ropes with his sharp little teeth, one strand after another, until finally the net fell away and the lion was free. "You laughed when I promised to help you," said the mouse. The lion, humbled, said nothing at all — he simply nodded, having learned that no act of kindness, however small, is ever wasted.`,
  },
  {
    title: "The Crow and the Pitcher",
    summary: "A thirsty crow uses patience and clever thinking to reach water that seemed impossible to drink.",
    source: "Traditional fable, retold",
    difficulty: "medium",
    text: `After a long, dry summer, a crow flying over a garden spotted a tall pitcher standing beneath a tree. Desperate for water, he swooped down and peered inside, delighted to see a little water shimmering at the bottom. But when he dipped in his beak, he found the water was too low to reach — no matter how far he stretched his neck, his beak came up dry.

He tried tipping the pitcher over, but it was far too heavy for him to move. He tried breaking it, pecking hard at the clay sides, but they would not crack. For a while he simply sat on the rim, exhausted and thirsty, wondering if he would have to give up and search elsewhere.

Then his eye fell on a scattering of small pebbles lying in the dirt nearby, and an idea came to him. One by one, he picked up the pebbles in his beak and dropped them into the pitcher, watching the water rise, ever so slightly, with each one. He kept at it patiently, pebble after pebble, until at last the water had risen high enough for him to reach.

The crow drank deeply, satisfied at last, and flew off with the quiet knowledge that patience and clever thinking will often succeed where brute strength cannot.`,
  },
];

export const stories: Story[] = rawStories.map((s) => ({
  ...s,
  slug: `${s.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}-typing-speed-test`,
}));

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getStoryWordCount(story: Story): number {
  return wordCount(story.text);
}
