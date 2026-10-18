# Featherbleu SEO and performance audit

Audit performed October 17–18, 2026. The current live design was explicitly retained.

## Source reconciliation

GitHub main originally contained the April Next.js application. Production was a different static site, deployed October 12 to Cloudflare Pages project `featherbleu-industries`, deployment `3bf61eb6-34f3-49c8-91c1-ecb14816c551`. Recovered Sites source commit `c039f213db2d1bc5d87a254238bb54c9fca0e93d` matched all 70 original files after normalizing line endings. Sampled live CSS, JS and image hashes matched exactly. The current source is now recorded in `production-site/`; the historical Next.js code remains separate.

## Findings and fixes

- Removed the blocking Google Fonts CSS import chain. The same DM Sans and Manrope families are served locally as WOFF2 with swap behavior and preloaded Latin subsets; licenses included.
- Generated responsive WebP variants for 23 image sources, with width descriptors and sizes. Preserved original assets for existing URLs and full-size gallery viewing.
- Replaced the 270 KB favicon with a 3.4 KB version.
- Changed four gallery videos from metadata preloading to `preload="none"`, preventing downloads before playback.
- Added Open Graph and Twitter metadata across all 24 indexable routes, using existing titles, descriptions and real photos.
- Corrected four structured-data breadcrumb links that pointed at nonexistent `/resources/`. Retained business facts, service/article schemas, canonicals and existing analytics.
- Added permanent www-to-apex and default Pages-domain redirects; preserved real 404 handling.
- Fixed contrast, footer heading hierarchy, link visibility and the floating contact landmark/name. The mobile menu supports Escape and focus restoration; the native gallery dialog traps focus and restores its trigger on closing.
- Removed redundant runtime content injection after verifying every page already contains the footer and blog link.
- Published asset names are immutable; new CSS, JS, fonts, favicon and responsive images use new versioned or hashed URLs.

## Measurements

Lighthouse 12.8.2, fresh isolated Chrome, default simulated mobile/desktop throttling. Baselines are live measurements; the following after-results are local preview measurements and must not be represented as production results.

| Page/device | Live baseline performance | Local fixed performance | Baseline LCP | Local fixed LCP | Baseline transfer | Local fixed transfer |
|---|---:|---:|---:|---:|---:|---:|
| Home mobile | 70 | 96 | 6.5s | 2.6s | 1,066 KiB | 416 KiB |
| Home desktop | 95 | 100 | 1.2s | 0.6s | 1,504 KiB | 539 KiB |
| Gate mobile | 77 | 99 | 4.6s | 2.3s | 872 KiB | 375 KiB |
| Projects mobile | 75 | 95 | 4.8s | 2.9s | 2,928 KiB | 796 KiB |

All four fixed local runs scored 100 for accessibility, best practices and SEO, with CLS 0. Baseline SEO was already 100; social preview and breadcrumb fixes address issues beyond Lighthouse's SEO score. These synthetic measurements do not establish field Core Web Vitals, rankings, traffic, or qualified leads. Search Console/GA4 reporting was not accessed.

## Validation

- All 24 sitemap routes: unique titles/descriptions, matching canonicals, one H1, valid JSON-LD, valid internal links and social assets; zero audit failures.
- All 24 pages passed automated axe checks with zero violations.
- Mobile/desktop screenshots preserve the existing design and document geometry.
- Menu, gallery focus trapping/restoration, contact targets, image loading, 404 behavior and no horizontal overflow checked; no enquiries sent.
- Zero JS errors and no video requests before playback in interaction checks.
- JavaScript syntax and root development dependency audit pass.

Detailed local evidence is retained in ignored `featherbleu-site/audit-artifacts/`. Run `node scripts/seo-audit.mjs --url https://featherbleu.co.za` for production SEO verification.

## Deployment

Production publication and final live verification are recorded below when complete.
