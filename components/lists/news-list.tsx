import { getNews } from "@/lib/news-api";
import { NewsItem } from "@/types/news";
import { ArticleCard } from "@/components/card/article-card";

export default async function NewsList() {
    const news = await getNews();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {news.map((article: NewsItem) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}