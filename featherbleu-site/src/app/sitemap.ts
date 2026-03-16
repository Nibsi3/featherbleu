import type { MetadataRoute } from "next";

function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_URL;

  if (!envUrl) return "http://localhost:3000";

  if (envUrl.startsWith("http://") || envUrl.startsWith("https://")) {
    return envUrl;
  }

  return `https://${envUrl}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl().replace(/\/$/, "");
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/access-control",
    "/services/cctv",
    "/services/garage-doors",
    "/services/gate-automation",
    "/services/smart-home-automation",
    "/projects",
    "/contact",
    "/resources/security-tips",
    "/resources/installation-guides",
    "/resources/maintenance-advice",
    "/resources/industry-news",
    "/blog",
  ];

  const blogSlugs = [
    "essential-security-tips",
    "smart-home-automation-guide",
    "garage-door-maintenance",
    "cctv-systems-guide",
    "future-of-home-security",
    "gate-automation-benefits",
    "securing-garden-route-property",
    "smart-home-technology-2026",
    "access-control-small-businesses",
  ];

  const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`);

  const routes = [...staticRoutes, ...blogRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changefreq: route.startsWith("/blog/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/contact" ? 0.8 : 0.7,
  }));
}
