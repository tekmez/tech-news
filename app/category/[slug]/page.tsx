
import { NewsCategory } from "@/types/news"
import { Suspense } from "react"
import { ListSkeleton } from "@/components/skeletons/list-skeleton"
import CategoryList from "@/components/lists/category/category-list"

export async function generateMetadata({ params }: { params: Promise<{ slug: NewsCategory }> }) {
    const { slug } = await params
    return {
        title: slug.charAt(0).toUpperCase() + slug.slice(1) + " - The NEWS",
        description: "Latest news in " + slug.charAt(0).toUpperCase() + slug.slice(1) + " category",
    }
}
export default async function CategoryPage({ params }: { params: Promise<{ slug: NewsCategory }> }) {
    const { slug } = await params
    return (
        <div className="min-h-svh py-6">
            <div className="mx-auto flex max-w-5xl flex-col gap-4">
                <h1 className="font-heading text-3xl font-semibold">{slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>
                <Suspense fallback={<ListSkeleton />}>
                    <CategoryList category={slug} />
                </Suspense>
            </div>
        </div>
    )
}
