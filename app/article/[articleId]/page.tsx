
import { getNewsById } from "@/lib/news-api"
import { BackButton } from "@/components/back-button"
import ArticleDetailComponent from "@/components/detail/article-detail"
import { Suspense } from "react"
import { DetailSkeleton } from "@/components/skeletons/detail-skeleton"
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
  return (
    <article className="py-8">
      <BackButton />
      <Suspense fallback={<DetailSkeleton />}>
        <ArticleDetailComponent articleId={articleId} />
      </Suspense>
    </article>
  )
}

export default ArticleDetail