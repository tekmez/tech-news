import Link from "next/link"
import { NewsItem } from "@/types/news"
import { NewsImage } from "./card-image"
export const ArticleCard = ({ article }: { article: NewsItem }) => {
    return (
        <Link key={article.id} href={`/article/${article.id}`} className="rounded-md border w-full hover:bg-muted hover:underline">
            {article.image ? <NewsImage src={article.image} alt={article.title} /> : null}
            <div className="flex flex-col gap-2 p-4">
                <span
                    className="text-lg font-medium line-clamp-2"
                    title={article.title}
                >
                    {article.title}
                </span>
                <p className="mt-1 text-sm text-muted-foreground overflow-hidden line-clamp-2">
                    {article.description}
                </p>
            </div>
        </Link>
    )
}