import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const root = path.resolve('production-site');
const output = path.join(root, 'assets/optimized');
await fs.mkdir(output, { recursive: true });
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name)))).flat();
}
const files = (await walk(root)).filter(p => p.endsWith('.html'));
const images = new Map();
for (const file of files) {
  const html = await fs.readFile(file, 'utf8');
  for (const match of html.matchAll(/<img\b[^>]*\bsrc="(\/assets\/(?!optimized\/)[^"]+)"[^>]*>/g)) images.set(match[1], null);
}
for (const src of images.keys()) {
  const bytes = await fs.readFile(path.join(root, src));
  const metadata = await sharp(bytes).metadata();
  const hash = createHash('sha256').update(bytes).update('webp-78-v1').digest('hex').slice(0, 12);
  const widths = [...new Set([64, 128, 256, 480, 768, 1024, 1440].filter(w => w < metadata.width).concat(Math.min(metadata.width, 1600)))].sort((a, b) => a - b);
  const variants = [];
  for (const width of widths) {
    const name = `${hash}-${width}.webp`;
    const result = await sharp(bytes).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toBuffer({ resolveWithObject: true });
    await fs.writeFile(path.join(output, name), result.data);
    variants.push({ width: result.info.width, src: `/assets/optimized/${name}`, bytes: result.data.length });
  }
  images.set(src, { width: metadata.width, height: metadata.height, variants });
}
for (const file of files) {
  let html = await fs.readFile(file, 'utf8');
  html = html.replace(/<img\b[^>]*\bsrc="(\/assets\/(?!optimized\/)[^"]+)"[^>]*>/g, (tag, src) => {
    const data = images.get(src);
    if (!data) return tag;
    const isLogo = /logo/.test(src);
    const variants = data.variants.filter(v => v.width >= (isLogo ? 64 : 256));
    const fallback = variants.find(v => v.width >= (isLogo ? 128 : 768)) || variants.at(-1);
    const sizes = isLogo ? '44px' : '(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 50vw, 620px';
    return tag.replace(/\s+(?:srcset|sizes)="[^"]*"/g, '').replace(`src="${src}"`, `src="${fallback.src}" srcset="${variants.map(v => `${v.src} ${v.width}w`).join(', ')}" sizes="${sizes}"`);
  });
  await fs.writeFile(file, html);
}
const favicon = await sharp(path.join(root, 'assets/logo.png')).resize(48, 48, { fit: 'contain', background: '#ffffff' }).png().toBuffer();
await fs.writeFile(path.join(root, 'assets/favicon-20261017.png'), favicon);
for (const file of files) {
  const html = await fs.readFile(file, 'utf8');
  await fs.writeFile(file, html.replace('<link rel="icon" href="/assets/logo.png">', '<link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-20261017.png">'));
}
console.log(`Optimized ${images.size} source images across ${files.length} HTML pages; favicon ${favicon.length} bytes.`);
