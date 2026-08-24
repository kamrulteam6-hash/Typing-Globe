import type { MetadataRoute } from "next";
import { languages } from "@/data/languages";
import { stories } from "@/data/stories";
import { poems } from "@/data/poems";
import { lyrics } from "@/data/lyrics";
import { courseLevels } from "@/data/course";
import { games } from "@/data/games";
import { mockExams } from "@/data/mockExams";
import { getPublishedPosts } from "@/lib/blog/queries";

const BASE_URL = "https://www.typingglobe.com";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/about-typing-speed`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/typing-test-languages`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/typing-practice-hub`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/custom-typing-test`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/aesop-fables-typing-test`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/poetry-typing-test`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/song-lyrics-typing-test`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/typing-games`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/government-exam-typing-test`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/typing-test-extension`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/english-typing-course`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courseLevels.map((level) => ({
    url: `${BASE_URL}/english-typing-course/${level.day}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const testRoutes: MetadataRoute.Sitemap = languages.map((lang) => ({
    url: `${BASE_URL}/test/${lang.testSlug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: lang.hasRealTest ? 0.85 : 0.5,
  }));

  const practiceRoutes: MetadataRoute.Sitemap = languages.map((lang) => ({
    url: `${BASE_URL}/p/${lang.practiceSlug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: lang.hasRealTest ? 0.8 : 0.45,
  }));

  const storyRoutes: MetadataRoute.Sitemap = stories.map((story) => ({
    url: `${BASE_URL}/${story.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const poemRoutes: MetadataRoute.Sitemap = poems.map((poem) => ({
    url: `${BASE_URL}/${poem.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const lyricRoutes: MetadataRoute.Sitemap = lyrics.map((lyric) => ({
    url: `${BASE_URL}/${lyric.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const gameRoutes: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${BASE_URL}/game/${game.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const examRoutes: MetadataRoute.Sitemap = mockExams.map((exam) => ({
    url: `${BASE_URL}/exam/${exam.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const posts = await getPublishedPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...testRoutes,
    ...practiceRoutes,
    ...storyRoutes,
    ...poemRoutes,
    ...lyricRoutes,
    ...courseRoutes,
    ...gameRoutes,
    ...examRoutes,
    ...postRoutes,
  ];
}
