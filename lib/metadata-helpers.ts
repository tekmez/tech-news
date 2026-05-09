import { SITE_NAME, SITE_URL } from "@/constants"
import type { Metadata } from "next"

export function truncateMetaDescription(text: string, max = 160): string {
  const t = text.replace(/\s+/g, " ").trim()
  if (t.length <= max) return t
  return t.slice(0, max - 1).trimEnd() + "\u2026"
}

export function absoluteSiteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  const p = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${p}`
}

type BuildPageMetaParams = {
  title: string
  description: string
  pathname: string
  ogImage?: string | null
  ogType?: "website" | "article"
  publishedTime?: string
}

export function buildPageMetadata({
  title,
  description,
  pathname,
  ogImage,
  ogType = "website",
  publishedTime,
}: BuildPageMetaParams): Metadata {
  const desc = truncateMetaDescription(description)
  const url = absoluteSiteUrl(pathname)
  const images = ogImage
    ? [{ url: ogImage }]
    : undefined

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE_NAME,
      type: ogType,
      locale: "en_US",
      ...(images?.length ? { images } : {}),
      ...(ogType === "article" && publishedTime
        ? { publishedTime: new Date(publishedTime).toISOString() }
        : {}),
    },
    twitter: {
      card: images?.length ? "summary_large_image" : "summary",
      title,
      description: desc,
      ...(images?.length ? { images: images.map((i) => i.url) } : {}),
    },
  }
}
