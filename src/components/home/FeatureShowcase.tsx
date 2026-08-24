"use client";

import Link from "next/link";
import { motion, Variants } from "motion/react";

const features = [
  { icon: "🌐", title: "Typing Tests", description: "70 languages, live WPM & accuracy.", href: "/typing-test-languages" },
  { icon: "📈", title: "Practice Course", description: "Beginner to pro in 30 days.", href: "/english-typing-course" },
  { icon: "✍️", title: "Custom Test", description: "Paste your own text to type.", href: "/custom-typing-test" },
  { icon: "📖", title: "Aesop Stories", description: "Classic fables, retold.", href: "/aesop-fables-typing-test" },
  { icon: "🎭", title: "Poetry", description: "Original verse, real rhythm.", href: "/poetry-typing-test" },
  { icon: "🎵", title: "Song Lyrics", description: "Verse & chorus typing.", href: "/song-lyrics-typing-test" },
  { icon: "🎮", title: "Arcade Games", description: "Fourteen typing game modes.", href: "/typing-games" },
  { icon: "🏛️", title: "Exam Hall", description: "Government exam simulations.", href: "/government-exam-typing-test" },
  { icon: "🧩", title: "Extension", description: "Test from any browser tab.", href: "/typing-test-extension" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function FeatureShowcase() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
    >
      {features.map((f) => (
        <motion.div key={f.href} variants={item} whileHover={{ y: -4, scale: 1.02 }}>
          <Link
            href={f.href}
            className="flex h-full flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-5 text-center transition-colors hover:border-primary/40"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-xl">
              {f.icon}
            </span>
            <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
            <p className="text-xs leading-relaxed text-muted">{f.description}</p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
