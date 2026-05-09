
export function SiteFooter() {

    return (
        <footer className="my-7 flex flex-col">
            <span className="border-b border-foreground/70 font-heading text-lg font-semibold tracking-tight md:text-2xl">
                The NEWS
            </span>
            <div className="flex items-center justify-between border-y border-foreground/70 py-2 text-xs text-foreground/80">
                <span className="inline-flex items-center gap-2">
                    <span aria-hidden="true">⊕</span>
                    <span>Tuncay Ekmez</span>
                </span>
            </div>
        </footer>
    )
}
