import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://olly-styles.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }));
}
