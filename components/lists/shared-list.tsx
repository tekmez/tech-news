import { NewsItemList } from "@/types/news";
import { ArticleCard } from "../card/article-card";
import { Loader } from "lucide-react";
import { type InfiniteData } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";


type ArticleListProps = {
    data: InfiniteData<NewsItemList[], unknown>
    isFetchingNextPage: boolean,
    hasNextPage: boolean,
    isError: boolean
    fetchNextPage: () => void
    refetch: () => void
    isFetching: boolean
}

export default function ArticleList({ data, isFetchingNextPage, hasNextPage, isError, fetchNextPage, refetch, isFetching }: ArticleListProps) {
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage && !isError) {
            fetchNextPage();
        }
    }, [
        inView,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isError
    ]);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                {data?.pages?.flat().map((article: NewsItemList) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
            {isError ? (
                <div
                    className="mt-6 flex flex-col gap-3 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                    role="alert"
                >
                    <p className="text-sm text-destructive">
                        Could not load more articles. Check your connection and try again.
                    </p>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => refetch()}
                        disabled={isFetching}
                        className="shrink-0 border-destructive/50"
                    >
                        Try again
                    </Button>
                </div>
            ) : null}
            <div className="py-12">
                {isFetchingNextPage && hasNextPage && (
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Loader className="w-6 h-6 text-primary animate-spin" />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">
                            Loading more news...
                        </p>
                    </div>
                )}
            </div>

            <div ref={ref} className="h-24" />
        </>
    )
}