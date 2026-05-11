export type NewsItemList = {
  id: string
  title: string
  description: string
  url: string
  image?: string | null
  author?: string | null
  language?: string
  category?: string[]
  published: string
  nextPage: string | null
}
export type NewsItemSingle = {
  id: string
  title: string
  description: string
  url: string
  image?: string | null
  author?: string | null
  language?: string
  category?: string[]
  published: string
}
export type NewsApiResultItem = {
  article_id: string
  title: string
  description?: string | null
  content?: string | null
  link: string
  image_url?: string | null
  creator?: string[] | null
  language?: string
  category?: string[]
  pubDate: string
}

export type NewsApiResponse = {
  status: "success" | "error" | string
  totalResults?: number
  results?: NewsApiResultItem[]
  nextPage?: string | null
}

export enum NewsCategory {
  ALL = "all",
  WORLD = "world",
  POLITICS = "politics",
  BUSINESS = "business",
  TECHNOLOGY = "technology",
  HEALTH = "health",
  SPORTS = "sports",
  ENTERTAINMENT = "entertainment",
}