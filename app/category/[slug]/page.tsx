import Link from "next/link"
import { getNewsByCategory } from "@/lib/news-api"
import { NewsCategory } from "@/types/news"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ slug: NewsCategory }> }) {
    const { slug } = await params
    return {
        title: slug.charAt(0).toUpperCase() + slug.slice(1) + " - The NEWS",
        description: "Latest news in " + slug.charAt(0).toUpperCase() + slug.slice(1) + " category",
    }
}
export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: NewsCategory }>
}) {
    const { slug } = await params
    const news = await getNewsByCategory(slug)
    if (!news) {
        notFound()
    }
    return (
        <div className="min-h-svh py-6">
            <div className="mx-auto flex max-w-5xl flex-col gap-4">
                <h1 className="font-heading text-3xl font-semibold">{slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>

                <ul className="grid gap-3">
                    {news.map((article) => (
                        <li key={article.id} className="rounded-md border p-4">
                            <Link
                                href={`/article/${article.id}`}
                                className="text-lg font-medium hover:underline"
                            >
                                {article.title}
                            </Link>
                            {article.description ? (
                                <p className="mt-1 text-sm text-muted-foreground overflow-hidden line-clamp-2">
                                    {article.description}
                                </p>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
