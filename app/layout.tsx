import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Bin Busters - Auckland\'s #1 Junk Removal Service',
  description: 'Same-day junk removal in Auckland. Upload photos for instant quotes. Eco-friendly disposal. Call 021 448 097 for immediate service.',
  keywords: 'junk removal, Auckland, rubbish removal, waste disposal, eco-friendly, same-day service',
  authors: [{ name: 'Bin Busters' }],
  creator: 'Bin Busters',
  publisher: 'Bin Busters',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://binbusters.co.nz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bin Busters - Auckland\'s #1 Junk Removal Service',
    description: 'Same-day junk removal in Auckland. Upload photos for instant quotes. Eco-friendly disposal. Call 021 448 097 for immediate service.',
    url: 'https://binbusters.co.nz',
    siteName: 'Bin Busters',
    images: [
      {
        url: '/bin-busters-logo.png',
        width: 1200,
        height: 630,
        alt: 'Bin Busters Junk Removal Auckland',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bin Busters - Auckland\'s #1 Junk Removal Service',
    description: 'Same-day junk removal in Auckland. Upload photos for instant quotes. Eco-friendly disposal.',
    images: ['/bin-busters-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SRGDEKHS4E"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SRGDEKHS4E');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
