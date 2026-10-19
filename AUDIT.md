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

Published to Cloudflare Pages production on October 18, 2026. The current live design is preserved. Implementation commit: `a8a175d167d723ef1de240fc5f008d77d4d199e5`, pushed to GitHub main. Initial release deployment: `8fb5ef75-92bf-430f-9726-63d4445c1f9d`. Sites source was also pushed as `5f099a06c78374f93dab1eeecfa02fae3fb4a43c` and saved as version 12.

Final live Lighthouse measurements (same settings as baseline):

| Page/device | Baseline performance | Live fixed performance | Baseline LCP | Live fixed LCP | Live fixed transfer |
|---|---:|---:|---:|---:|---:|
| Home mobile | 70 | 78 | 6.5s | 4.9s | 389 KiB |
| Home desktop | 95 | 100 | 1.2s | 0.6s | 513 KiB |
| Gate mobile | 77 | 86 | 4.6s | 3.8s | 349 KiB |
| Projects mobile | 75 | 99 | 4.8s | 1.9s | 768 KiB |

All four live runs scored 100 for SEO, accessibility and best practices, with CLS 0. Home mobile transfer fell approximately 64%. Home mobile LCP remains above the good threshold in this simulated run; local preview results must not be substituted for live results. Existing GA4 analytics is preserved and remains a significant third-party request. Lab results vary with network and machine conditions.

All 24 live routes passed the SEO audit with zero failures. Versioned assets return immutable cache headers. Both www and the default Pages hostname return 301 to the apex, preserving paths and query strings. Host matching requires Cloudflare Bulk Redirects, rather than Pages `_redirects`: list `featherbleu_canonical_hosts` (`0965dbaad9334dbb8b18cfd40659d40c`), rule `5313909bd3bf451ba8c12841dfd2cca3`. Existing unrelated redirect rules were preserved.

## October 19, 2026: MyInstaller and comparison guides

Published the homepage MyInstaller profile card and five comparison guides to the existing Cloudflare Pages production project `featherbleu-industries` using the connected Cloudflare API. Deployment: `d52532da-1caf-476a-8925-03c6d236f878`; production branch: `main`. This direct upload includes the local working-tree changes, which remain uncommitted.

Cloudflare reported a successful production deployment. All 29 live sitemap routes passed the SEO audit with zero failures. The homepage, all five comparison pages, two new stylesheets and MyInstaller logo returned HTTP 200 and matched local SHA-256 hashes. Existing headers and redirect configuration were included. Comparison layouts were checked locally at 320, 390, 768 and 1440 pixels with no page overflow.

## October 19, 2026: Mobile homepage speed follow-up

Kept the current design, MyInstaller card, comparison guides and GA4 property. Inlined the homepage's three existing stylesheets in their original cascade order, removing three blocking requests. Other pages retain their cached external stylesheets. The homepage queues analytics configuration immediately and loads the GA4 library at low fetch priority after the load event, two animation frames and an idle callback (1.5-second maximum idle wait, with a timer fallback). This preserves queued events while prioritizing the initial render; very short visits that leave before the library loads may not be recorded.

Re-run `node scripts/optimize-homepage.mjs` after changing homepage stylesheet sources. It regenerates the embedded styles without duplicating the analytics loader.

| Production homepage metric | Before this follow-up | After |
|---|---:|---:|
| Mobile Lighthouse performance | 85 | 90 median (93, 90, 86) |
| Mobile LCP | 4.1s | 3.1s median (3.0, 3.1, 3.1s) |
| Mobile TBT | See baseline report | 110ms median (70, 110, 230ms) |
| Mobile CLS | 0 | 0 in all three runs |
| Desktop performance | Prior release: 100 | 99 |
| Desktop LCP | Prior release: 0.6s | 0.8s |

Measured with Lighthouse 12.8.2 and default simulated throttling on the real production URL. The local candidate scored 97, but the production numbers above are the release results. The 90 target was reached on the median; it is not a guarantee for every run. Mobile LCP still exceeds 2.5 seconds.

All live homepage runs retained 100 SEO, accessibility and best practices. All 29 live sitemap routes passed the SEO audit. Live menu and gallery focus behavior passed; the four checked routes had no axe violations, horizontal overflow or JavaScript errors. Before/after full-page screenshots retained the same dimensions and computed style values; desktop text rasterization varied between captures. The analytics loader was checked to load once and retain the original page-view configuration queue.

Implementation commit: `457bd7e`. Successful production deployment: `6c1274af-3e55-488a-809a-3a99ef3dc395`. Prior published but uncommitted MyInstaller/comparison changes were recorded separately before the speed commit. Evidence: `.release/mobile-before.json`, `.release/mobile-live-{1,2,3}.json`, `.release/desktop-live-speed.json`, `.release/seo-live-speed.json` and `.release/interactions-live.json` (local ignored artifacts).
