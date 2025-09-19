// scripts/generate-success-results.js
const fs = require("fs");
const path = require("path");

const publicDir = path.join(process.cwd(), "public");
const visaDir = path.join(publicDir, "ppr");
const ieltsDir = path.join(publicDir, "ielts");

function getFiles(dir, category) {
  return fs.readdirSync(dir).map((file, i) => ({
    id: `${category}-${i}`,
    category,
    caption: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
    src: `/${path.basename(dir)}/${file}`,
  }));
}

const visas = getFiles(visaDir, "Visas");
const exams = getFiles(ieltsDir, "IELTS/PTE");

const all = [...visas, ...exams];

const outPath = path.join(process.cwd(), "public", "success-results.json");
fs.writeFileSync(outPath, JSON.stringify(all, null, 2));

console.log(`✅ JSON written to ${outPath}`);
