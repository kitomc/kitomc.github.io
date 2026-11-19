import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const src = "C:/Users/Usuario/Documents/KMC/Curri/";
const out = "C:/Users/Usuario/Documents/KMC/portfolio/public/img/";

// Single-shot mode: `node scripts/images.mjs <screenshot.png> <output-name> [cropHeight]`
// converts one fresh screenshot (taken after scrolling so reveal animations are visible) and exits.
if (process.argv[2]) {
  const [file, name, crop = "900"] = process.argv.slice(2);
  const img = sharp(file);
  const meta = await img.metadata();
  await img
    .extract({ left: 0, top: 0, width: meta.width, height: Math.min(Number(crop), meta.height) })
    .resize({ width: Math.min(meta.width, 1440) })
    .webp({ quality: 80 })
    .toFile(fileURLToPath(new URL(`../public/img/${name}.webp`, import.meta.url)));
  console.log("ok", name);
  process.exit(0);
}

mkdirSync(out, { recursive: true });

// [source file, output name, crop height from top (null = keep aspect)]
const shots = [
  ["ERP FHG Distribuidora.png", "fhg", 900],
  ["httpsstructure.sandov.ai.png", "structure", 900],
  ["httpsstructure.sandov.ai system.png", "structure-app", null],
  ["httpsestimapro-rd.pages.dev app que conecta presupuesto de ingeniero con ferreterias , escaner de planos con AI y crea cotizacion.png", "estimapro", 900],
  ["httpscooksnap-4kh.pages.dev app de cocina con AI.png", "cooksnap", null],
  ["spatium ERP.png", "spatium", 900],
  ["planixapp.com.do ERP de compras y contrataciones en el sector privado en republica dominicana.png", "planix", 900],
];

for (const [file, name, crop] of shots) {
  let img = sharp(src + file);
  const meta = await img.metadata();
  const width = Math.min(meta.width, 1440);
  if (crop) img = img.extract({ left: 0, top: 0, width: meta.width, height: Math.min(crop, meta.height) });
  await img.resize({ width }).webp({ quality: 80 }).toFile(`${out}${name}.webp`);
  console.log("ok", name);
}

await sharp(src + "asset 2.png").resize({ width: 900 }).webp({ quality: 82 }).toFile(`${out}portrait.webp`);
await sharp(src + "asset.png").resize({ width: 1400 }).webp({ quality: 80 }).toFile(`${out}working.webp`);
await sharp(src + "imagne perfil.png").resize({ width: 320 }).webp({ quality: 85 }).toFile(`${out}avatar.webp`);
console.log("done");
