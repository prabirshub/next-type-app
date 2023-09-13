import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import ScrollToTop from '@/components/common/ScrollToTop'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Confident Speakers Academy',
  description: 'Helping You Monetise Your Public Speaking Skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${playfair.variable} font-primary dark:bg-black`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
