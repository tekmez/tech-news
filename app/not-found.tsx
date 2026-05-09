import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="py-20">
            <div className="text-center">
                <p className="text-base font-semibold text-pink-600">404</p>
                <h1 className="mt-4 text-3xl font-bold text-foreground-900 sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-6 text-base text-foreground-600">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-6">
                    <Button asChild variant={'default'}>
                        <Link
                            href="/"
                        >
                            Go back home
                        </Link>
                    </Button>
                    <Button asChild variant={'secondary'}>
                        <Link href="/">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </Button>

                </div>
            </div>
        </div>
    );
}