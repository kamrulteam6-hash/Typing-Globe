import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*?*", "/api/", "/typing-certificate/dashboard", "/typing-certificate/login", "/blog/admin"],
      },
    ],
    sitemap: "https://www.typingglobe.com/sitemap.xml",
  };
}
