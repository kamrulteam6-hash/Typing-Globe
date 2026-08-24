import fs from "fs";
import puppeteer from "puppeteer-core";
import { mcqs } from "./mcqs.mjs";

const letters = ["ক", "খ", "গ", "ঘ"];

const mcqHtml = mcqs
  .map((m, i) => {
    const opts = m.options
      .map((o, j) => `<div>${letters[j]}. ${o}</div>`)
      .join("");
    return `<div class="mcq"><div class="q">${i + 1}. ${m.q}</div><div class="options">${opts}</div></div>`;
  })
  .join("\n");

const answerKeyHtml = mcqs
  .map((m, i) => `<div>${i + 1}. ${letters[m.correct]}</div>`)
  .join("\n");

let html = fs.readFileSync("./note.html", "utf-8");
html = html.replace("MCQ_PLACEHOLDER", mcqHtml);
html = html.replace("ANSWER_KEY_PLACEHOLDER", answerKeyHtml);
fs.writeFileSync("./note-final.html", html);

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});
const page = await browser.newPage();
await page.goto("file://" + process.cwd().replace(/\\/g, "/") + "/note-final.html", {
  waitUntil: "networkidle0",
});

await page.pdf({
  path: "./atmacharit-note.pdf",
  format: "A4",
  printBackground: true,
  displayHeaderFooter: true,
  margin: { top: "70px", bottom: "50px", left: "36px", right: "36px" },
  headerTemplate: `
    <div style="font-family:'Nirmala UI',sans-serif; font-size:9px; width:100%; padding:0 36px; display:flex; justify-content:space-between; align-items:center; color:#146c43; border-bottom:2px solid #146c43; padding-bottom:4px;">
      <span style="font-weight:700;">SSC HSC HUB</span>
      <span>আত্মচরিত &middot; বাংলা ১ম পত্র &middot; HSC</span>
    </div>`,
  footerTemplate: `
    <div style="font-family:'Nirmala UI',sans-serif; font-size:8.5px; width:100%; padding:0 36px; display:flex; justify-content:space-between; color:#4f6355;">
      <span>SSC HSC Hub &mdash; প্রশ্নব্যাংক, নোট ও সাজেশন</span>
      <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
    </div>`,
});

await browser.close();
console.log("PDF written.");
