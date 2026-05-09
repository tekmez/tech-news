import type { NewsApiResponse, NewsApiResultItem, NewsCategory } from "@/types/news"
import { toNewsItem } from "@/lib/utils"
import { API_BASE_URL, API_KEY, NEWS_REVALIDATE_SECONDS } from "@/constants"

const DEFAULT_PARAMS = {
  apikey: API_KEY,
  language: "en",
  image: "1",
}
export async function getNews() {
  if (!API_KEY) {
    throw new Error("API key is not defined.")
  }
  try {

    await new Promise((resolve) => setTimeout(resolve, 3000));
    const params = new URLSearchParams({ ...DEFAULT_PARAMS })
    const url = `${API_BASE_URL}/latest?${params.toString()}`

    const response = await fetch(url, {
      method: "GET",
      next: { revalidate: NEWS_REVALIDATE_SECONDS },
    })

    if (!response.ok) {
      throw new Error(`News could not be fetched. Status: ${response.status}`)
    }

    const data = (await response.json()) as NewsApiResponse

    if (data.status !== "success") {
      throw new Error("API response is not successful.")
    }
    const news = (data.results ?? []).map(toNewsItem)
    return news
  } catch {
    throw new Error("Failed to fetch news.")
  }
}

export async function getNewsById(articleId: string) {
  if (!API_KEY) {
    throw new Error("API key is not defined.")
  }
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const params = new URLSearchParams({
      apikey: API_KEY,
      id: articleId,
    })

    const url = `${API_BASE_URL}/latest?${params.toString()}`

    const response = await fetch(url, {
      method: "GET",
      next: { revalidate: NEWS_REVALIDATE_SECONDS },
    })

    if (!response.ok) {
      throw new Error(`News detail could not be fetched. Status: ${response.status}`)
    }

    const data = (await response.json()) as NewsApiResponse
    if (data.status !== "success") {
      throw new Error("API response is not successful.")
    }
    const news = toNewsItem(data.results?.[0] ?? {} as NewsApiResultItem)
    return news
  } catch {
    throw new Error("Failed to fetch news detail.")
  }
}

export async function getNewsByCategory(category: NewsCategory) {
  if (!API_KEY) {
    throw new Error("API key is not defined.")
  }
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const params = new URLSearchParams({ ...DEFAULT_PARAMS, category })
    const url = `${API_BASE_URL}/latest?${params.toString()}`
    const response = await fetch(url, {
      method: "GET",
      next: { revalidate: NEWS_REVALIDATE_SECONDS },
    })
    if (!response.ok) {
      throw new Error(`News by category could not be fetched. Status: ${response.status}`)
    }
    const data = (await response.json()) as NewsApiResponse
    if (data.status !== "success") {
      throw new Error("API response is not successful.")
    }
    const news = (data.results ?? []).map(toNewsItem)
    return news
  } catch {
    throw new Error("Failed to fetch news by category.")
  }
}