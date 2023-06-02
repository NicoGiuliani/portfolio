import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Developer Portfolio for Nico Julian',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
   }
   window.addEventListener('resize', documentHeight)
   documentHeight()

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
