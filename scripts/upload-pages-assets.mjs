import { spawn } from 'node:child_process';
import path from 'node:path';

const wrangler = path.resolve(process.argv[2] || 'node_modules/wrangler/bin/wrangler.js');
console.log('Ready for scoped Pages ticket on hidden stdin.');
if (process.stdin.isTTY) process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', chunk => {
  input += chunk;
  if (!/[\r\n]/.test(input)) return;
  process.stdin.pause();
  if (process.stdin.isTTY) process.stdin.setRawMode(false);
  const { ticket } = JSON.parse(input.trim());
  input = '';
  if (typeof ticket !== 'string' || !ticket) throw new Error('Missing project ticket');
  const child = spawn(process.execPath, [wrangler, 'pages', 'project', 'upload', 'production-site', '--output-manifest-path', '.release/pages-manifest.json'], {
    cwd: process.cwd(),
    env: { ...process.env, CF_PAGES_UPLOAD_JWT: ticket, CLOUDFLARE_ACCOUNT_ID: 'e02c769a6506c70f402644285cd691b8', WRANGLER_SEND_METRICS: 'false' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  for (const stream of [child.stdout, child.stderr]) stream.on('data', data => process.stdout.write(data.toString().replaceAll(ticket, '[redacted]')));
  child.on('error', () => { console.error('Asset uploader could not start'); process.exit(1); });
  child.on('exit', code => process.exit(code ?? 1));
});
