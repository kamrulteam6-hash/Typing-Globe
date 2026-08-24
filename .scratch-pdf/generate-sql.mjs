import fs from "fs";
import { mcqs } from "./mcqs.mjs";
import { cqs, textbookMcqs } from "./cqs.mjs";

const HSC = "00000000-0000-0000-0000-000000000002";
const SUBJECT_ID = "b0000000-0000-0000-0000-000000000001";
const CHAPTER_ID = "b0000000-0000-0000-0000-000000000101";
const NOTE_ID = "b0000000-0000-0000-0000-000000000201";

function esc(s) {
  return s.replace(/'/g, "''");
}

function jsonEsc(obj) {
  return JSON.stringify(obj).replace(/\\/g, "\\\\");
}

function paragraphDoc(text) {
  return { type: "doc", content: [{ type: "paragraph", content: [{ type: "text", text }] }] };
}

const letters = ["A", "B", "C", "D"];
let sql = `-- আত্মচরিত (ঈশ্বরচন্দ্র বিদ্যাসাগর) — HSC Bangla 1st Paper
-- Subject + chapter + note + textbook exercises + new practice questions.

insert into subjects (id, level_id, name, slug, paper, "group", sort_order) values
  ('${SUBJECT_ID}', '${HSC}', 'Bangla 1st Paper', 'bangla-1st-paper', '1st', null, 3)
on conflict (id) do nothing;

insert into chapters (id, subject_id, name, slug, chapter_number, sort_order) values
  ('${CHAPTER_ID}', '${SUBJECT_ID}', 'আত্মচরিত', 'atmacharit', 1, 1)
on conflict (id) do nothing;

insert into notes (id, chapter_id, title, slug, content, sort_order) values (
  '${NOTE_ID}', '${CHAPTER_ID}', 'আত্মচরিত — পাঠ নোট', 'path-note',
  $$${JSON.stringify({
    type: "doc",
    content: [
      { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "সরল ভাষায় সারাংশ" }] },
      { type: "paragraph", content: [{ type: "text", text: "বীরসিংহ গ্রামে জন্ম নেওয়া ঈশ্বরচন্দ্রের বাবা ঠাকুরদাস উপার্জনের আশায় কলকাতায় যান। একদিন প্রচণ্ড ক্ষুধার্ত অবস্থায় পথে এক দরিদ্র বিধবা মুড়িওয়ালীর কাছে জল চাইলে তিনি আপন সন্তানের মতো যত্ন করে তাঁকে খাওয়ান, বিনিময়ে কিছু নেননি — এই ঘটনা শুনেই ঈশ্বরচন্দ্রের মনে নারীজাতির প্রতি গভীর শ্রদ্ধার জন্ম হয়।" }] },
      { type: "paragraph", content: [{ type: "text", text: "এরপর তাঁর নিজের ছেলেবেলার কথা: পিতামহী ও কনিষ্ঠা পিসি রাইমণির অকৃত্রিম স্নেহ, পাঁচ বছর বয়সে গ্রামের পাঠশালায় ভর্তি, জ্বর-প্লীহায় দীর্ঘ অসুস্থতা কাটিয়ে ওঠা, স্পষ্টবাদী ও নির্ভীক পিতামহ রামজয় তর্কভূষণের মৃত্যু, এবং সবশেষে বিখ্যাত মাইলস্টোনের গল্প — কলকাতা যাওয়ার পথে পথের ধারের পাথরে খোদাই সংখ্যা দেখে একদিনেই নিজে নিজে অঙ্ক চিনে ফেলা, যা দেখে সবাই তাঁর অসাধারণ মেধায় মুগ্ধ হন এবং তাঁকে ভালো শিক্ষা দেওয়ার সিদ্ধান্ত নেওয়া হয়।" }] },
    ],
  })}$$::jsonb,
  1
) on conflict (id) do nothing;

`;

let qNum = 0;

// Textbook MCQs (with explanations where we have them, uddipok folded into stem for #3/#4)
for (const m of textbookMcqs) {
  qNum++;
  const stem = m.uddipok ? `${m.uddipok}\n\n${m.q}` : m.q;
  const payload = {
    stem,
    options: m.options.map((text, i) => ({ key: letters[i], text })),
    correct_option: letters[m.correct],
  };
  sql += `insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '${HSC}', null, '${SUBJECT_ID}', '${CHAPTER_ID}', 'mcq', 1, 'পাঠ্যবই MCQ-${qNum}', 'atmacharit-mcq-${String(qNum).padStart(2, "0")}',
  $$${jsonEsc(payload)}$$::jsonb
) on conflict (slug) do nothing;\n\n`;
}

// New practice MCQs
mcqs.forEach((m, i) => {
  qNum++;
  const payload = {
    stem: m.q,
    options: m.options.map((text, j) => ({ key: letters[j], text })),
    correct_option: letters[m.correct],
  };
  sql += `insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '${HSC}', null, '${SUBJECT_ID}', '${CHAPTER_ID}', 'mcq', 1, 'অনুশীলনী MCQ-${i + 1}', 'atmacharit-mcq-${String(qNum).padStart(2, "0")}',
  $$${jsonEsc(payload)}$$::jsonb
) on conflict (slug) do nothing;\n\n`;
});

// CQs
const CQ_LEVELS = ["জ্ঞানমূলক", "অনুধাবনমূলক", "প্রয়োগ", "উচ্চতর দক্ষতা"];
cqs.forEach((cq, i) => {
  const totalMarks = cq.sub_questions.reduce((s, sq) => s + sq.marks, 0);
  const payload = {
    uddipok: paragraphDoc(cq.uddipok),
    sub_questions: cq.sub_questions.map((sq, j) => ({
      level: CQ_LEVELS[j],
      text: sq.text,
      marks: sq.marks,
      answer: paragraphDoc(sq.answer),
    })),
  };
  sql += `insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '${HSC}', null, '${SUBJECT_ID}', '${CHAPTER_ID}', 'cq', ${totalMarks}, '${esc(cq.original_number)}', 'atmacharit-cq-${String(i + 1).padStart(2, "0")}',
  $$${jsonEsc(payload)}$$::jsonb
) on conflict (slug) do nothing;\n\n`;
});

fs.writeFileSync("./atmacharit-insert.sql", sql);
console.log("Wrote atmacharit-insert.sql,", qNum, "MCQs +", cqs.length, "CQs");
