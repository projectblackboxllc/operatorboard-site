import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers — including all AI/LLM crawlers — welcome
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicit allow for major AI training and inference crawlers
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
    ],
    sitemap: "https://operatorboard.dev/sitemap.xml",
  };
}
