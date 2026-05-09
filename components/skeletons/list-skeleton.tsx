import { SkeletonCard } from "./card-skeleton";

export function ListSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {Array.from({ length: 6 }).map((_, index: number) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    )
}