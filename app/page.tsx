import Link from "next/link"
import { getNews } from "@/lib/news-api"

export async function generateMetadata() {
  return {
    title: "Latest News - The NEWS",
    description: "Latest news from the world",
  }
}
export default async function Page() {
  const news = await getNews()
  return (
    <div className="min-h-svh py-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <h1 className="font-heading text-3xl font-semibold">Latest News</h1>

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
