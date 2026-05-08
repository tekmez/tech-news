import { ThemeToggle } from "@/components/theme-toggle"

const NAV_ITEMS = [
  "World News",
  "Politics",
  "Business",
  "Technology",
  "Health",
  "Sports",
  "Culture",
  "Podcast",
]

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
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a className="transition-opacity hover:opacity-70" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
