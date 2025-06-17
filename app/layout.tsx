import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from "@/components/layout/navbar"

export const metadata: Metadata = {
  title: 'UAP EEE Department',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
