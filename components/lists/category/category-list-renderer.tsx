"use client"
import { NewsCategory, NewsItemList } from "@/types/news";
import ArticleList from "../shared-list";
import useGetNewsByCategory from "@/hook/useGetNewsByCategory";
import { useParams } from "next/navigation";

type RendererListProps = {
    news: NewsItemList[],
}

export default function CategoryListRenderer({ news }: RendererListProps) {
    const { slug: category } = useParams<{ slug: NewsCategory }>()
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isError,
        refetch,
        isFetching,
    } = useGetNewsByCategory(news, category);

    return (
        <ArticleList
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isError={isError}
            isFetchingNextPage={isFetchingNextPage}
            refetch={refetch}
            isFetching={isFetching}
        />
    );
}