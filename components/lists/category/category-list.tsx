import { NewsCategory } from "@/types/news"
import { getNewsByCategory } from "@/lib/news-api"
import { notFound } from "next/navigation"
import CategoryListRenderer from "./category-list-renderer"

export default async function CategoryList({
    category,
}: {
    category: NewsCategory
}) {
    const news = await getNewsByCategory(category, 0)
    if (!news) {
        notFound()
    }
    return (
        <CategoryListRenderer news={news} />
    )
}