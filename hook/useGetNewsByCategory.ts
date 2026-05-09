import { getNewsByCategory } from "@/lib/news-api";
import { NewsCategory, NewsItemList } from "@/types/news";
import { useInfiniteQuery } from "@tanstack/react-query";

const INITIAL_CURSOR = 1778295246086823235;

export default function useGetNewsByCategory(initialData: NewsItemList[], category: NewsCategory) {
    return useInfiniteQuery<NewsItemList[], Error>({
        queryKey: ["category-news"],
        initialPageParam: INITIAL_CURSOR,
        initialData: { pages: [initialData], pageParams: [INITIAL_CURSOR] },
        queryFn: async ({ pageParam }) => {
            return getNewsByCategory(category, pageParam as number);
        },
        getNextPageParam: (lastPage) => {
            if (!lastPage.length) {
                return undefined;
            }

            const lastItem = lastPage[lastPage.length - 1];

            return lastItem.nextPage;
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 2
    });
}