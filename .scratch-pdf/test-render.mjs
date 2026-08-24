import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--run-all-compositor-stages-before-draw"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1000, height: 1400 });
await page.setContent(`<html><body style="font-size:40px;">
  <p>ASCII: Hello World 123</p>
  <p>default: আত্মচরিত পরীক্ষা</p>
</body></html>`, { waitUntil: "networkidle0" });
await page.emulateMediaType("screen");
await new Promise((r) => setTimeout(r, 500));
await page.pdf({ path: "test2.pdf", printBackground: true, preferCSSPageSize: false });
await browser.close();
console.log("done");
