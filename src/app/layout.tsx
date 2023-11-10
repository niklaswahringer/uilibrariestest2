import { cn } from "@/lib/utils"
import "@/app/globals.css"
import React from "react"


export default function RootLayout({ children }: {children:React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        {children}
      </body>
    </html>
  )
}
