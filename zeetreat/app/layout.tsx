import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Zeetreat | Premium Herbal Hair Care',
  description:
    'Discover Zeetreat, a premium nature-inspired hair-care oil designed for your everyday hair-care routine.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/zeetreat-logo.jpg', type: 'image/jpeg' }],
    apple: [{ url: '/zeetreat-logo.jpg' }],
    shortcut: ['/zeetreat-logo.jpg'],
  },
  openGraph: {
    title: 'Zeetreat | Premium Herbal Hair Care',
    description:
      'Discover Zeetreat, a premium nature-inspired hair-care oil designed for your everyday hair-care routine.',
    images: ['/zeetreat-product.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#241608',
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
