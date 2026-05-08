import { ThemeToggle } from "@/components/theme-toggle"
import { NewsCategory } from "@/types/news"
import Link from "next/link"

function formatHeaderDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

export function SiteHeader() {
  const formattedDate = formatHeaderDate(new Date())

  return (
    <header className="mt-5">
      <div className="flex items-center justify-between border-y border-foreground/35 py-2 text-xs text-foreground/80">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true">⊕</span>
          <span>{formattedDate}</span>
        </span>
        <ThemeToggle />
      </div>

      <div className="border-b border-foreground/35 py-6 text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">
          The NEWS
        </h1>
      </div>

      <nav
        aria-label="Primary"
        className="border-b border-foreground/35 py-3"
      >
        <span className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          {Object.values(NewsCategory).map((item) => (
            <Link key={item} className="transition-opacity hover:opacity-70" href={item === NewsCategory.ALL ? "/" : `/category/${item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </span>
      </nav>
    </header>
  )
}
