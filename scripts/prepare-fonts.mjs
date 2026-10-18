import fs from 'node:fs/promises';
import path from 'node:path';

const directory = path.resolve('production-site/assets/fonts');
await fs.mkdir(directory, { recursive: true });
const query = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400..700&family=Manrope:wght@500..800&display=swap';
const response = await fetch(query, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' } });
if (!response.ok) throw new Error(`Font stylesheet: ${response.status}`);
const css = await response.text();
const blocks = [...css.matchAll(/\/\* (latin(?:-ext)?) \*\/\s*(@font-face\s*\{[^}]+\})/g)];
const output = [];
for (const [, subset, block] of blocks) {
  const family = block.match(/font-family: '([^']+)'/)[1];
  const url = block.match(/url\(([^)]+)\)/)[1];
  const name = `${family.toLowerCase().replaceAll(' ', '-')}-${subset}-20261017.woff2`;
  const font = await fetch(url);
  if (!font.ok) throw new Error(`${family}: ${font.status}`);
  const bytes = Buffer.from(await font.arrayBuffer());
  await fs.writeFile(path.join(directory, name), bytes);
  output.push(`/* ${subset} */\n${block.replace(url, `/assets/fonts/${name}`)}`);
  console.log(`${name}: ${bytes.length} bytes`);
}
await fs.writeFile(path.join(directory, 'fonts-20261017.css'), output.join('\n'));
for (const [family, repo] of [['dm-sans', 'dmsans'], ['manrope', 'manrope']]) {
  const license = await fetch(`https://raw.githubusercontent.com/google/fonts/main/ofl/${repo}/OFL.txt`);
  if (!license.ok) throw new Error(`License ${family}: ${license.status}`);
  await fs.writeFile(path.join(directory, `${family}-OFL.txt`), await license.text());
}
