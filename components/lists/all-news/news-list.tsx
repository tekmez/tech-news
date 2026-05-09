"use client"
import { NewsItemList } from "@/types/news";
import useGetAllNews from "@/hook/useGetAllNews";
import ArticleList from "../shared-list";

export default function NewsList({ news }: { news: NewsItemList[] }) {
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isError,
        refetch,
        isFetching,
    } = useGetAllNews(news);

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