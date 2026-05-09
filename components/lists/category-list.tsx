import { NewsCategory, NewsItem } from "@/types/news"
import { getNewsByCategory } from "@/lib/news-api"
import { notFound } from "next/navigation"
import { ArticleCard } from "@/components/card/article-card"

export default async function CategoryList({
    category,
}: {
    category: NewsCategory
}) {
    const news = await getNewsByCategory(category)
    if (!news) {
        notFound()
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {news.map((article: NewsItem) => <ArticleCard key={article.id} article={article} />)}
        </div>
    )
}