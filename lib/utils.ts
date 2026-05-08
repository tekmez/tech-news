import { DUMMY_DESCRIPTION } from "@/constants"
import { NewsApiResultItem, NewsItem } from "@/types/news"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toNewsItem(item: NewsApiResultItem): NewsItem {
  return {
    id: item.article_id,
    title: item.title,
    description: item.description ?? DUMMY_DESCRIPTION,
    url: item.link,
    image: item.image_url ?? null,
    author: item.creator?.[0] ?? null,
    language: item.language,
    category: item.category,
    published: item.pubDate,
  }
}
