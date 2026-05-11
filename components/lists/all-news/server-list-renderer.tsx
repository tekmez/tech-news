// news-list-server.tsx
import { getAllNews } from "@/lib/news-api"
import NewsList from "./news-list"

export default async function NewsListServer() {
    const news = await getAllNews(0)

    return <NewsList news={news} />
}