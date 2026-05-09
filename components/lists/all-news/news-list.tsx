"use client"
import { NewsItemList } from "@/types/news";
import { ArticleCard } from "@/components/card/article-card";
import useGetAllNews from "@/hook/useGetAllNews";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Loader } from "lucide-react";

export default function NewsList({ news }: { news: NewsItemList[] }) {
    const { ref, inView } = useInView();
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
        useGetAllNews(news);

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [
        inView,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    ]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                {data?.pages?.flat().map((article: NewsItemList) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
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
    );
}