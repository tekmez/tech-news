import { Geist_Mono, Inter, Roboto_Slab } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import ReactQueryProvider from "@/components/react-query";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const robotoSlabHeading = Roboto_Slab({ subsets: ['latin'], variable: '--font-heading' });

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, robotoSlabHeading.variable)}
    >
      <body>
        <ReactQueryProvider>
          <ThemeProvider>
            <div className="px-4 md:px-6 lg:px-[150px]">
              <SiteHeader />
              <main>{children}</main>
              <SiteFooter />
            </div>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
