import { Suspense } from "react"
import { ListSkeleton } from "@/components/skeletons/list-skeleton"
import NewsListServer from "@/components/lists/all-news/server-list-renderer"

export async function generateMetadata() {
  return {
    title: "Latest News - The NEWS",
    description: "Latest news from the world",
  }
}
export default async function Page() {
  return (
    <div className="min-h-svh py-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <h1 className="font-heading text-3xl font-semibold">Latest News</h1>
        <Suspense fallback={<ListSkeleton />}>
          <NewsListServer />
        </Suspense>
      </div>
    </div>
  )
}
