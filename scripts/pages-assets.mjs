// Upload authorization is a short-lived, project-scoped ticket from the connected
// Cloudflare API. Read it once from hidden stdin; never persist or print it.
import fs from 'node:fs/promises';

process.stdout.write('Ready for Pages upload JSON on hidden stdin.\n');
if (process.stdin.isTTY) process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');
const input = await new Promise(resolve => {
  let value = '';
  process.stdin.on('data', chunk => {
    value += chunk;
    if (/[\r\n]/.test(value)) {
      process.stdin.pause();
      resolve(value.trim());
    }
  });
});
if (process.stdin.isTTY) process.stdin.setRawMode(false);
const { ticket, payloadPath, action = 'check' } = JSON.parse(input);
if (typeof ticket !== 'string' || !ticket) throw new Error('Missing upload ticket');
const routes = { check: 'check-missing', upload: 'upload', register: 'upsert-hashes' };
if (!routes[action]) throw new Error('Invalid upload action');
const payload = payloadPath ? JSON.parse(await fs.readFile(payloadPath, 'utf8')) : { hashes: [] };
const response = await fetch(`https://api.cloudflare.com/client/v4/pages/assets/${routes[action]}`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${ticket}`, 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});
const result = await response.json();
console.log(JSON.stringify({ status: response.status, success: result.success, errors: result.errors, result: action === 'check' ? result.result : undefined }));
if (!response.ok || !result.success) process.exitCode = 1;
