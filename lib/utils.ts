import { DUMMY_DESCRIPTION } from "@/constants"
import { NewsApiResultItem, NewsItemList, NewsItemSingle } from "@/types/news"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stripNewsHtml(html: string) {
  return html
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

export function formatNewsPublishedDate(published: string) {
  const d = new Date(published)
  if (!Number.isNaN(d.getTime())) {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(d)
  }
  return published.split(" ")[0] ?? published
}

export function toNewsListItem(
  item: NewsApiResultItem,
  nextPage: number
): NewsItemList {
  const cleanText = item.description
    ? stripNewsHtml(item.description)
    : undefined
  return {
    id: item.article_id,
    title: item.title,
    description: cleanText || DUMMY_DESCRIPTION,
    url: item.link,
    image: item.image_url ?? null,
    author: item.creator?.[0] ?? null,
    language: item.language,
    category: item.category,
    published: item.pubDate,
    nextPage: nextPage
  }
}

export function toNewsItem(
  item: NewsApiResultItem
): NewsItemSingle {
  const cleanText = item.description
    ? stripNewsHtml(item.description)
    : undefined
  return {
    id: item.article_id,
    title: item.title,
    description: cleanText || DUMMY_DESCRIPTION,
    url: item.link,
    image: item.image_url ?? null,
    author: item.creator?.[0] ?? null,
    language: item.language,
    category: item.category,
    published: item.pubDate,
  }
}