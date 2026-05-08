
import { notFound } from "next/navigation"
import { getNewsById } from "@/lib/news-api"
import { BackButton } from "@/components/back-button"

export async function generateMetadata({ params }: { params: Promise<{ articleId: string }> }) {
  const { articleId } = await params
  const article = await getNewsById(articleId)
  if (!article) {
    return {
      title: "Article not found",
    }
  }
  return {
    title: article.title,
    description: article.description,
  }
}

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
      <BackButton />
      <h1 className="mt-3 font-heading text-3xl font-semibold">{article.title}</h1>
      {article.author ? (
        <p className="mt-2 text-sm text-muted-foreground">Yazar: {article.author}</p>
      ) : null}

      <p className="mt-4 leading-7">{article.description}</p>
    </article>
  )
}

export default ArticleDetail