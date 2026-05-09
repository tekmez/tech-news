import type { MetadataRoute } from "next"
import { SITE_URL } from "@/constants"
import { NewsCategory } from "@/types/news"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "hourly",
      priority: 1,
    },
    ...Object.values(NewsCategory)
      .filter((slug) => slug !== NewsCategory.ALL)
      .map((slug) => ({
        url: `${SITE_URL}/category/${slug}`,
        lastModified: now,
        changeFrequency: "hourly" as const,
        priority: 0.8,
      })),
  ]
  return entries
}
