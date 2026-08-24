import { PDFDocument } from "pdf-lib";
import fs from "fs";

const SRC = "C:\\Users\\Google 11\\Downloads\\সাহিত্য পাঠ(একাদশ-দ্বাদশ শ্রেণি-2026 _compressed (1).pdf";
const OUT_DIR = "C:\\Users\\Google 11\\Documents\\Typing Globe\\.scratch-pdf";

const bytes = fs.readFileSync(SRC);
const src = await PDFDocument.load(bytes, { updateMetadata: false });
const total = src.getPageCount();
console.log("Total pages:", total);

const chunkSize = 200;
for (let start = 0; start < total; start += chunkSize) {
  const end = Math.min(start + chunkSize, total);
  const doc = await PDFDocument.create();
  const indices = Array.from({ length: end - start }, (_, i) => start + i);
  const pages = await doc.copyPages(src, indices);
  pages.forEach((p) => doc.addPage(p));
  const outBytes = await doc.save();
  const fname = `${OUT_DIR}\\chunk_${String(start + 1).padStart(4, "0")}-${String(end).padStart(4, "0")}.pdf`;
  fs.writeFileSync(fname, outBytes);
  console.log("Wrote", fname, (outBytes.length / 1024 / 1024).toFixed(1), "MB");
}
