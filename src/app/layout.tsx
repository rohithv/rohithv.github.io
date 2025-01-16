import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rohith Vishnumolakala',
  description: 'Personal space where technology meets entrepreneurial aspirations. Join me on my journey through computer science research, software engineering, and startup adventures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
} 