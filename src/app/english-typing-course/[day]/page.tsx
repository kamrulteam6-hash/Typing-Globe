import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/Card";
import { CourseLevelDetail } from "@/components/course/CourseLevelDetail";
import { courseLevels, getLevel } from "@/data/course";

export function generateStaticParams() {
  return courseLevels.map((level) => ({ day: String(level.day) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ day: string }>;
}): Promise<Metadata> {
  const { day } = await params;
  const level = getLevel(Number(day));
  if (!level) return {};

  return {
    title: `Day ${level.day}: ${level.title} — English Typing Course`,
    description: `${level.description} Part of Typing Globe's free 30-day English typing course, beginner to pro.`,
    alternates: { canonical: `/english-typing-course/${level.day}` },
  };
}

export default async function CourseLevelPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day } = await params;
  const level = getLevel(Number(day));
  if (!level) notFound();

  const prevDay = level.day > 1 ? level.day - 1 : null;
  const nextDay = level.day < 30 ? level.day + 1 : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between text-xs">
        <Link href="/english-typing-course" className="font-semibold text-muted hover:text-foreground">
          ← Roadmap
        </Link>
        <div className="flex items-center gap-3">
          {prevDay && (
            <Link href={`/english-typing-course/${prevDay}`} className="text-muted hover:text-foreground">
              ← Day {prevDay}
            </Link>
          )}
          {nextDay && (
            <Link href={`/english-typing-course/${nextDay}`} className="text-muted hover:text-foreground">
              Day {nextDay} →
            </Link>
          )}
        </div>
      </div>

      <div className="mb-8">
        <SectionLabel>Day {level.day} of 30</SectionLabel>
        <h1 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">{level.title}</h1>
        <p className="mt-2 text-sm text-muted">{level.description}</p>
      </div>

      <CourseLevelDetail level={level} />
    </div>
  );
}
