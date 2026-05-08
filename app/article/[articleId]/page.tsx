import Link from "next/link"
import { notFound } from "next/navigation"
import { getNewsById } from "@/lib/news-api"

const ArticleDetail = async ({
  params,
}: {
  params: Promise<{ articleId: string }>
}) => {
  const { articleId } = await params
  const article = await getNewsById(articleId)

  if (!article) {
    notFound()
  }

  return (
    <article className="py-8">
      <Link href="/" className="text-sm text-muted-foreground hover:underline">
        Haberlere geri don
      </Link>

      <h1 className="mt-3 font-heading text-3xl font-semibold">{article.title}</h1>
      {article.author ? (
        <p className="mt-2 text-sm text-muted-foreground">Yazar: {article.author}</p>
      ) : null}

      {article.description ? <p className="mt-4 leading-7">{article.description}</p> : null}
    </article>
  )
}

export default ArticleDetail