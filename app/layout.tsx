import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FoodShare - Join the Waitlist",
  description:
    "Share your meals, track your calories, and join the foodie revolution. Be the first to know when FoodShare goes live!",
    icons: {
      icon: "/logo.png", //path to favicon
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}
