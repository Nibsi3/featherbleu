import fs from 'node:fs/promises';

const filename = 'production-site/index.html';
let html = await fs.readFile(filename, 'utf8');
// Keep the exact cascade, including the current profile and comparison cards.
const cssPaths = [...html.matchAll(/<link rel="stylesheet" href="(\/assets\/[^\"]+)">/g)].map(match => match[1]);
if (cssPaths.length) {
  const css = (await Promise.all(cssPaths.map(file => fs.readFile('production-site' + file, 'utf8')))).join('\n');
  html = html.replace(/<link rel="stylesheet" href="\/assets\/[^\"]+">/g, '');
  html = html.replace('</head>', `<style id="homepage-styles">${css}</style></head>`);
}
const analytics = '<script async src="https://www.googletagmanager.com/gtag/js?id=G-L8ZP0V3364"></script>';
if (html.includes(analytics)) {
  html = html.replace(analytics, `<script>
// Queue page views and contact events immediately; load the library after paint.
(() => {
  const loadAnalytics = () => {
    const script = document.createElement('script');
    script.async = true;
    script.fetchPriority = 'low';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-L8ZP0V3364';
    document.head.appendChild(script);
  };
  const scheduleAnalytics = () => {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if ('requestIdleCallback' in window) requestIdleCallback(loadAnalytics, { timeout: 1500 });
      else setTimeout(loadAnalytics, 0);
    }));
  };
  if (document.readyState === 'complete') scheduleAnalytics();
  else window.addEventListener('load', scheduleAnalytics, { once: true });
})();
</script>`);
}
await fs.writeFile(filename, html);
console.log('Homepage styles inlined; analytics scheduled after initial rendering.');
