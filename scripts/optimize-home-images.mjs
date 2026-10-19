import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

let html = await fs.readFile('production-site/index.html', 'utf8');
for (const [source, prefix] of [['project-smart.webp', '00a4ff9de9c2'], ['project-coastal.jpeg', 'fb0929e94c38']]) {
  const input = await fs.readFile('production-site/assets/' + source);
  const hash = createHash('sha256').update(input).update('avif-55-v1').digest('hex').slice(0, 12);
  const variants = [];
  for (const width of [256, 480, 768, 1024, 1440, 1600]) {
    const name = `/assets/optimized/${hash}-${width}.avif`;
    const output = await sharp(input).rotate().resize({ width }).avif({ quality: 55, effort: 6 }).toBuffer();
    await fs.writeFile('production-site' + name, output);
    variants.push(`${name} ${width}w`);
    if (width === 768) console.log(`${source}: mobile AVIF ${output.length} bytes`);
  }
  if (!html.includes(`/assets/optimized/${hash}-`)) {
    html = html.replace(new RegExp(`<img\\b[^>]*src="/assets/optimized/${prefix}-[^>]+>`, 'g'), img => {
      const sizes = img.match(/sizes="([^"]+)"/)[1];
      return `<picture><source type="image/avif" srcset="${variants.join(', ')}" sizes="${sizes}">${img}</picture>`;
    });
  }
}
const input = await fs.readFile('production-site/assets/myinstaller-logo-20261019.png');
const hash = createHash('sha256').update(input).update('webp-lossless-v1').digest('hex').slice(0, 12);
const logoVariants = [];
for (const width of [140, 280, 420]) {
  const name = `/assets/optimized/${hash}-${width}.webp`;
  const output = await sharp(input).resize({ width }).webp({ lossless: true, effort: 6 }).toBuffer();
  await fs.writeFile('production-site' + name, output);
  logoVariants.push(`${name} ${width}w`);
  console.log(`MyInstaller ${width}px: ${output.length} bytes`);
}
html = html.replace('src="/assets/myinstaller-logo-20261019.png"', `src="/assets/optimized/${hash}-280.webp" srcset="${logoVariants.join(', ')}" sizes="(max-width: 360px) 140px, (max-width: 650px) 101px, 137px"`);
await fs.writeFile('production-site/index.html', html);
