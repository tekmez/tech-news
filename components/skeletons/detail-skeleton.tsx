
import { Skeleton } from "@/components/ui/skeleton"

export function DetailSkeleton() {
    return (
        <div className="flex flex-col gap-4 pt-8">
            <Skeleton className="w-full h-64 rounded-md" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
        </div>
    )
}
