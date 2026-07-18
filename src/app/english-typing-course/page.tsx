import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";
import { CourseRoadmap } from "@/components/course/CourseRoadmap";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export const metadata: Metadata = {
  title: "English Typing Course — 30 Days, Beginner to Pro",
  description:
    "A free, structured 30-day English typing course. Each day is a level with 5 lessons and a gated exam — pass to unlock the next day. Beginner to pro.",
  alternates: { canonical: "/english-typing-course" },
};

const faqItems = [
  {
    question: "Do I have to complete the course in 30 actual calendar days?",
    answer:
      "No — \"30 days\" describes the number of levels, not a deadline. Go at your own pace; a level stays unlocked once you reach it, and there's no time limit on any lesson or exam.",
  },
  {
    question: "What happens if I fail a level's exam?",
    answer:
      "Nothing bad — you just retake it. There's no penalty and no limit on attempts. The next day stays locked until you clear the WPM and accuracy threshold, which is the whole point: each level should actually be mastered before you move on.",
  },
  {
    question: "Is my progress saved if I close the browser?",
    answer:
      "Yes, progress is saved automatically in your browser. Note that it's tied to this browser/device — clearing your browser data or switching devices will reset it, since the course doesn't require an account yet.",
  },
  {
    question: "I already know how to type. Can I skip ahead?",
    answer:
      "Not yet — levels unlock sequentially by passing each exam. If you're already fast, the early exams should take you seconds to clear, so you'll move through the beginner levels quickly rather than being stuck on them.",
  },
];

export default function CoursePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <SectionLabel>Beginner to Pro</SectionLabel>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          English Typing Course
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-balance text-muted">
          30 days, 30 levels. Each day has 5 short lessons and a gated exam — pass it to unlock the next
          day. Start at Day 1, whatever your current typing level.
        </p>
      </div>

      <CourseRoadmap />

      <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="how-the-course-works">How the Course Works</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Each of the 30 days is a self-contained level: a short set of 5 lessons, followed by an
            exam. Lessons introduce new keys, words, or sentence patterns one step at a time; the exam
            at the end of the day checks that you can actually type that day&apos;s material at a
            rising WPM and accuracy threshold. Pass the exam and the next day unlocks. Fail it, and you
            simply try again — there&apos;s no limit on attempts and no penalty for retrying.
          </p>
        </div>

        <div>
          <SeoHeading id="course-arc">The 30-Day Arc</SeoHeading>
          <div className="mt-4">
            <DataTable
              headers={["Days", "Focus", "What You'll Type"]}
              rows={[
                ["1–9", "Key placement", "Home row, top row, bottom row — one key group at a time"],
                ["10–14", "Real words", "Full alphabet, capital letters, common short and long words"],
                ["15–20", "Numbers & symbols", "Number row, punctuation, symbols, and word patterns"],
                ["21–24", "Sentences", "Short to medium full sentences with real punctuation"],
                ["25–30", "Paragraphs", "Multi-sentence passages, finishing with a pro-level exam"],
              ]}
            />
          </div>
        </div>

        <div>
          <SeoHeading id="course-faq">Frequently Asked Questions</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
