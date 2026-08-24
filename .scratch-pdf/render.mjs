import { createCanvas } from "@napi-rs/canvas";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import fs from "fs";

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");
    return { canvas, context };
  }
  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }
  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
}

const [, , pdfPath, startArg, endArg, outDir] = process.argv;
const startPage = parseInt(startArg, 10);
const endPage = parseInt(endArg, 10);

fs.mkdirSync(outDir, { recursive: true });

const data = new Uint8Array(fs.readFileSync(pdfPath));
const loadingTask = pdfjsLib.getDocument({ data, disableFontFace: true });
const pdfDocument = await loadingTask.promise;
console.log("Loaded, pages:", pdfDocument.numPages);

const canvasFactory = new NodeCanvasFactory();

for (let pageNum = startPage; pageNum <= endPage; pageNum++) {
  const page = await pdfDocument.getPage(pageNum);
  const viewport = page.getViewport({ scale: 2.0 });
  const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);
  const renderContext = {
    canvasContext: canvasAndContext.context,
    viewport,
    canvasFactory,
  };
  await page.render(renderContext).promise;
  const image = canvasAndContext.canvas.toBuffer("image/png");
  const outPath = `${outDir}/page_${String(pageNum).padStart(4, "0")}.png`;
  fs.writeFileSync(outPath, image);
  console.log("Rendered", outPath);
  canvasFactory.destroy(canvasAndContext);
}
