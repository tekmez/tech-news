
import { fetchArticleById } from "@/lib/news-api"
import { BackButton } from "@/components/back-button"
import ArticleDetailComponent from "@/components/detail/article-detail"
import { Suspense } from "react"
import { DetailSkeleton } from "@/components/skeletons/detail-skeleton"
import { buildPageMetadata } from "@/lib/metadata-helpers"

export async function generateMetadata({ params }: { params: Promise<{ articleId: string }> }) {
  const { articleId } = await params
  const article = await fetchArticleById(articleId)
  if (!article) {
    return {
      title: "Article not found",
      description: "This article could not be found.",
      robots: { index: false, follow: true },
    }
  }
  return buildPageMetadata({
    title: article.title,
    description: article.description,
    pathname: `/article/${articleId}`,
    ogImage: article.image,
    ogType: "article",
    publishedTime: article.published,
  })
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