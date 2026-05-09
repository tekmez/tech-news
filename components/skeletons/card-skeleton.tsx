import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <Card className="w-full pt-0">
            <CardHeader className="p-0">
                <Skeleton className="w-full h-48 object-cover rounded-md" />
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            </CardContent>
        </Card>
    )
}
