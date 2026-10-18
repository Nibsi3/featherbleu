# Featherbleu Industries

Production website: https://featherbleu.co.za

`production-site/` is the current, buildless static website. It preserves the live October 2026 design and is deployed to the existing Cloudflare Pages project **featherbleu-industries**. The older Next.js application in `featherbleu-site/` is retained for history and is not the source for the current public domain.

## Preview and validate

```sh
npm ci
npm run preview
npm run audit:seo
node --check production-site/assets/site-20261017.js
node scripts/seo-audit.mjs --url https://featherbleu.co.za
```

Preview runs at http://127.0.0.1:4173. The production site has no runtime npm dependencies or server-side build. The root `sharp` development dependency is only used to prepare responsive images.

## Editing and deployment

Edit the static HTML/CSS/JS directly. Deploy the contents of `production-site/`, including `_headers` and `_redirects`, to the existing Pages project. Use `main` for production. Keep the root `404.html` so unknown paths return a real 404.

Assets have a one-year immutable cache. Never overwrite an already published asset URL with different bytes; use a new versioned or content-hashed name and update its HTML references. HTML retains Pages' normal revalidation behavior. The image preparation script creates responsive WebP variants with content-hashed filenames. Font files include their original OFL licenses.

The existing Sites source is `appgprj_6ab66c98b5348191a7057413e5e9f4e3`. Its `dist/` corresponds to this repository's `production-site/`. Its separate ChatGPT Site URL is not the public domain's hosting origin. Do not replace the Cloudflare custom-domain configuration or publish the legacy Next.js app over this design.

## October 17, 2026 audit

See [AUDIT.md](AUDIT.md) for measured findings, changes, verification and deployment evidence. Tests use synthetic lab measurements; they do not establish real-user Core Web Vitals or search ranking improvements.
