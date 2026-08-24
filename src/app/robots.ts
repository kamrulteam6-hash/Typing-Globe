import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*?*", "/api/", "/blog/admin"],
      },
    ],
    sitemap: "https://www.typingglobe.com/sitemap.xml",
  };
}
