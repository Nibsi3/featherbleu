/**
 * Read-only SEO checks for the static production site.
 *   node scripts/seo-audit.mjs
 *   node scripts/seo-audit.mjs --url https://featherbleu.co.za
 * JSON output is suitable for saving with the deployment audit evidence.
 */
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteRoot = fileURLToPath(new URL("../production-site/", import.meta.url));
const canonicalOrigin = "https://featherbleu.co.za";
const urlIndex = process.argv.indexOf("--url");
const remoteOrigin = urlIndex === -1 ? null : process.argv[urlIndex + 1];
if (urlIndex !== -1 && !remoteOrigin) throw new Error("Provide a URL after --url");
if (remoteOrigin && !/^https?:\/\//.test(remoteOrigin)) throw new Error("Use an HTTP(S) URL");

const failures = [];
const pages = [];
const imagePaths = new Set();
const decode = (value) => value
  .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)]
    .map((m) => [m[1].toLowerCase(), decode(m[2] ?? m[3])]),
);
const assert = (condition, location, message) => {
  if (!condition) failures.push({ location, message });
};

async function readRoute(route, { allowMissing = false } = {}) {
  if (remoteOrigin) {
    const response = await fetch(new URL(route, remoteOrigin), { signal: AbortSignal.timeout(30000) });
    const text = await response.text();
    if (!allowMissing) assert(response.status === 200, route, `HTTP ${response.status}`);
    return { text, status: response.status, contentType: response.headers.get("content-type") };
  }
  const pathname = decodeURIComponent(new URL(route, canonicalOrigin).pathname);
  const file = path.join(siteRoot, pathname.endsWith("/") ? `${pathname}index.html` : pathname);
  try {
    return { text: await readFile(file, "utf8"), status: 200 };
  } catch (error) {
    if (allowMissing && error.code === "ENOENT") return { text: "", status: 404 };
    throw error;
  }
}

const { text: sitemap } = await readRoute("/sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decode(match[1]));
const routes = new Set(urls.map((url) => new URL(url).pathname));
assert(urls.length === new Set(urls).size, "/sitemap.xml", "Duplicate sitemap URL");
assert(urls.length > 0, "/sitemap.xml", "Sitemap contains no URLs");

for (let offset = 0; offset < urls.length; offset += 6) {
  const results = await Promise.all(urls.slice(offset, offset + 6).map(async (url) => {
    const location = new URL(url).pathname;
    assert(url.startsWith(`${canonicalOrigin}/`), location, "Sitemap has a noncanonical host");
    const { text: html, status, contentType } = await readRoute(location);
    if (remoteOrigin) assert(contentType?.includes("text/html"), location, "Page is not served as HTML");
    const titleTags = [...html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)];
    const title = decode(titleTags[0]?.[1] ?? "");
    const metaTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attributes(match[0]));
    const meta = Object.fromEntries(metaTags.map((tag) => [tag.name ?? tag.property, tag.content]));
    const links = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attributes(match[0]));
    const canonicals = links.filter((link) => link.rel === "canonical");
    const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
    assert(titleTags.length === 1 && title.length > 0, location, "Expected one nonempty title");
    assert(metaTags.filter((tag) => tag.name === "description").length === 1 && meta.description, location, "Expected one nonempty description");
    assert(canonicals.length === 1 && canonicals[0].href === url, location, "Canonical does not match sitemap URL");
    assert(h1s.length === 1, location, `Expected one H1; found ${h1s.length}`);
    assert(/<html\b[^>]*\blang=["']en(?:-ZA)?["']/i.test(html), location, "Missing English document language");
    assert(!/noindex|nofollow/i.test(meta.robots ?? ""), location, "Indexable route has restrictive robots metadata");
    assert(meta["og:title"] === title && meta["twitter:title"] === title, location, "Social titles differ from page title");
    assert(meta["og:description"] === meta.description && meta["twitter:description"] === meta.description, location, "Social descriptions differ from page description");
    assert(meta["og:url"] === url, location, "Open Graph URL differs from canonical");
    assert(meta["og:site_name"] === "Featherbleu Industries" && meta["og:locale"] === "en_ZA", location, "Missing social site name/locale");
    assert(["summary", "summary_large_image"].includes(meta["twitter:card"]), location, "Missing Twitter card type");
    assert(Boolean(meta["og:image:alt"] && meta["twitter:image:alt"]), location, "Missing social image text alternative");
    assert(meta["twitter:image"] === meta["og:image"], location, "Social image URLs differ");
    if (meta["og:image"]) {
      assert(meta["og:image"].startsWith(`${canonicalOrigin}/assets/`), location, "Social image is not a canonical local asset");
      imagePaths.add(new URL(meta["og:image"]).pathname);
    } else assert(false, location, "Missing social image");

    const graph = [];
    for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
      try {
        const data = JSON.parse(match[1]);
        assert(data["@context"] === "https://schema.org", location, "Unexpected JSON-LD context");
        graph.push(...(data["@graph"] ?? [data]));
      } catch (error) {
        assert(false, location, `Invalid JSON-LD: ${error.message}`);
      }
    }
    const webpage = graph.find((item) => ["WebPage", "AboutPage", "ContactPage"].includes(item["@type"]));
    assert(webpage?.url === url, location, "Missing matching WebPage structured data");
    assert(graph.some((item) => item["@type"] === "LocalBusiness"), location, "Missing business structured data");
    for (const breadcrumb of graph.filter((item) => item["@type"] === "BreadcrumbList")) {
      breadcrumb.itemListElement.forEach((item, index) => {
        assert(item.position === index + 1, location, "Breadcrumb positions are not sequential");
        assert(routes.has(new URL(item.item).pathname), location, `Breadcrumb points outside sitemap: ${item.item}`);
      });
      assert(breadcrumb.itemListElement.at(-1).item === url, location, "Breadcrumb does not end at current page");
      assert(webpage?.breadcrumb?.["@id"] === breadcrumb["@id"], location, "WebPage does not reference its breadcrumb");
    }
    const article = graph.find((item) => item["@type"] === "BlogPosting");
    assert(meta["og:type"] === (article ? "article" : "website"), location, "Wrong Open Graph page type");
    if (article) {
      const heading = decode(h1s[0]?.[1].replace(/<[^>]*>/g, "").trim() ?? "");
      assert(article.headline === heading, location, "Article headline differs from visible heading");
      assert(meta["article:published_time"] === article.datePublished && meta["article:modified_time"] === article.dateModified, location, "Article dates differ between metadata formats");
      assert(article.mainEntityOfPage?.["@id"] === webpage?.["@id"], location, "Article page association is incorrect");
    }

    for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
      assert(Object.hasOwn(attributes(match[0]), "alt"), location, "Image missing alt attribute");
    }
    for (const match of html.matchAll(/<a\b[^>]*>/gi)) {
      const href = attributes(match[0]).href;
      if (!href?.startsWith("/") || href.startsWith("/cdn-cgi/")) continue;
      const target = new URL(href, canonicalOrigin);
      if (!target.pathname.includes(".")) assert(routes.has(target.pathname), location, `Internal link missing from sitemap: ${href}`);
    }
    return { route: location, status, title, description: meta.description, h1Count: h1s.length, schemaTypes: graph.map((item) => item["@type"]) };
  }));
  pages.push(...results);
}

for (const field of ["title", "description"]) {
  const values = new Map();
  for (const page of pages) {
    assert(!values.has(page[field]), page.route, `Duplicate ${field} also used by ${values.get(page[field])}`);
    values.set(page[field], page.route);
  }
}

for (const image of imagePaths) {
  if (remoteOrigin) {
    const response = await fetch(new URL(image, remoteOrigin), { method: "HEAD", signal: AbortSignal.timeout(30000) });
    assert(response.status === 200 && response.headers.get("content-type")?.startsWith("image/"), image, "Social image is not accessible as an image");
  } else {
    try { assert((await stat(path.join(siteRoot, image))).size > 0, image, "Social image is empty"); }
    catch { assert(false, image, "Social image file does not exist"); }
  }
}

const { text: robots } = await readRoute("/robots.txt");
assert(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`), "/robots.txt", "Missing canonical sitemap declaration");
assert(!/^Disallow:\s*\/$/m.test(robots), "/robots.txt", "Site-wide crawl restriction");
const notFoundRoute = remoteOrigin ? "/seo-audit-page-that-does-not-exist-20261017/" : "/404.html";
const notFound = await readRoute(notFoundRoute, { allowMissing: true });
assert(/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(notFound.text), notFoundRoute, "Missing noindex on 404 page");
if (remoteOrigin) assert(notFound.status === 404, notFoundRoute, `Expected HTTP 404; received ${notFound.status}`);

if (!remoteOrigin) {
  async function checkCoverage(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const full = path.join(directory, entry.name);
      if (entry.isDirectory()) await checkCoverage(full);
      else if (entry.name === "index.html") {
        const relative = path.relative(siteRoot, full).replaceAll(path.sep, "/");
        const route = `/${relative.slice(0, -"index.html".length)}`;
        assert(routes.has(route), route, "HTML route omitted from sitemap");
      }
    }
  }
  await checkCoverage(siteRoot);
}

console.log(JSON.stringify({
  source: remoteOrigin ?? "production-site",
  checkedAt: new Date().toISOString(),
  pageCount: pages.length,
  socialImageCount: imagePaths.size,
  failureCount: failures.length,
  failures,
  pages,
}, null, 2));
process.exitCode = failures.length ? 1 : 0;
