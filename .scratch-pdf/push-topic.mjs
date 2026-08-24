// Reusable per-topic pusher: takes the same shape of data used for আত্মচরিত
// (subject/chapter/note/mcqs/cqs) and inserts it directly via the Supabase
// REST API using the service_role key — no SQL Editor step needed.
//
// Usage: import { pushTopic } from "./push-topic.mjs" and call it from a
// topic-specific script (see push-atmacharit-example.mjs shape below), or
// adapt generate-sql.mjs's data files (mcqs.mjs/cqs.mjs) as the input.

import fs from "fs";

// Reuse the same credentials already in the app's .env.local rather than
// duplicating them into a second file here.
const ENV_PATH = "C:\\Users\\Google 11\\Documents\\SSC HSC Hub\\.env.local";
const envText = fs.readFileSync(ENV_PATH, "utf-8");
const env = Object.fromEntries(
  envText.split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#") && l.includes("=")).map((l) => {
    const i = l.indexOf("=");
    return [l.slice(0, i), l.slice(i + 1)];
  }),
);

const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  throw new Error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (e.g. via a .env file next to this script, or export them in the shell) before running.");
}

async function rest(method, table, body, query = "") {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}${query}`, {
    method,
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation,resolution=merge-duplicates",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${method} ${table} failed: ${res.status} ${text}`);
  }
  return res.json();
}

function paragraphDoc(text) {
  return { type: "doc", content: [{ type: "paragraph", content: [{ type: "text", text }] }] };
}

const CQ_LEVELS = ["জ্ঞানমূলক", "অনুধাবনমূলক", "প্রয়োগ", "উচ্চতর দক্ষতা"];
const LETTERS = ["A", "B", "C", "D"];

/**
 * @param {object} topic
 * @param {string} topic.levelId
 * @param {{id, level_id, name, slug, paper, group, sort_order}} topic.subject  - upserted by id
 * @param {{id, subject_id, name, slug, chapter_number, sort_order}} topic.chapter - upserted by id
 * @param {{id, chapter_id, title, slug, sections: [{heading, paragraphs: string[]}], sort_order}} topic.note
 * @param {{original_number, slug, uddipok?, options?, correct?, marks?, subQuestions?}[]} topic.mcqs - simple MCQs (uddipok optional prefix text)
 * @param {{original_number, slug, uddipok: string, subQuestions: {text, marks, answer}[]}[]} topic.cqs
 */
export async function pushTopic(topic) {
  await rest("POST", "subjects", topic.subject, "?on_conflict=id");
  await rest("POST", "chapters", topic.chapter, "?on_conflict=id");

  if (topic.note) {
    const content = {
      type: "doc",
      content: topic.note.sections.flatMap((s) => [
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: s.heading }] },
        ...s.paragraphs.map((p) => ({ type: "paragraph", content: [{ type: "text", text: p }] })),
      ]),
    };
    await rest("POST", "notes", {
      id: topic.note.id,
      chapter_id: topic.note.chapter_id,
      title: topic.note.title,
      slug: topic.note.slug,
      content,
      sort_order: topic.note.sort_order ?? 1,
    }, "?on_conflict=id");
  }

  for (const m of topic.mcqs ?? []) {
    const stem = m.uddipok ? `${m.uddipok}\n\n${m.stem}` : m.stem;
    await rest("POST", "questions", {
      level_id: topic.levelId,
      board_id: m.board_id ?? null,
      subject_id: topic.subject.id,
      chapter_id: topic.chapter.id,
      question_type: "mcq",
      marks: m.marks ?? 1,
      original_number: m.original_number,
      slug: m.slug,
      payload: {
        stem,
        options: m.options.map((text, i) => ({ key: LETTERS[i], text })),
        correct_option: LETTERS[m.correct],
        explanation: m.explanation ?? null,
      },
    }, "?on_conflict=slug");
  }

  for (const cq of topic.cqs ?? []) {
    const totalMarks = cq.subQuestions.reduce((s, sq) => s + sq.marks, 0);
    await rest("POST", "questions", {
      level_id: topic.levelId,
      board_id: cq.board_id ?? null,
      subject_id: topic.subject.id,
      chapter_id: topic.chapter.id,
      question_type: "cq",
      marks: totalMarks,
      original_number: cq.original_number,
      slug: cq.slug,
      payload: {
        uddipok: paragraphDoc(cq.uddipok),
        sub_questions: cq.subQuestions.map((sq, i) => ({
          level: CQ_LEVELS[i],
          text: sq.text,
          marks: sq.marks,
          answer: paragraphDoc(sq.answer),
        })),
      },
    }, "?on_conflict=slug");
  }

  console.log(`Pushed topic "${topic.chapter.name}": ${(topic.mcqs ?? []).length} MCQs, ${(topic.cqs ?? []).length} CQs, note: ${topic.note ? "yes" : "no"}`);
}
