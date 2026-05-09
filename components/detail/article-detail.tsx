import { getNewsById } from "@/lib/news-api";
import { notFound } from "next/navigation";
import { DetailImage } from "./detail-img";

export default async function ArticleDetailComponent({ articleId }: { articleId: string }) {
    const article = await getNewsById(articleId)
    if (!article) {
        notFound()
    }
    return (
        <div className="flex flex-col py-8">
            {article.image ? <DetailImage src={article.image} alt={article.title} /> : null}
            <h1 className="mt-3 font-heading text-3xl font-semibold">{article.title}</h1>
            {article.author ? (
                <p className="mt-2 text-sm text-muted-foreground">Author: {article.author}</p>
            ) : null}

            <p className="mt-4 leading-7">{article.description}</p>
            <p className="mt-4 text-sm text-muted-foreground">{article.published.split(" ")[0]}</p>
        </div>
    )
}