'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
    error,
}: {
    error: Error & { digest?: string };
}) {

    return (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
            <h2>Something went wrong!</h2>
            <p>{error.message || "An unexpected error occurred."}</p>
            <Button asChild variant="destructive">
                <Link href="/">
                    Go to back news
                </Link>
            </Button>
        </div>
    );
}