
const ArticleDetail = async ({ params }: { params: Promise<{ articleId: string }> }) => {
    const { articleId } = await params
    return (
        <div>
            <h1>ArticleDetail</h1>
            <p>ArticleId: {articleId}</p>
        </div>
    )
}

export default ArticleDetail