import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LocalBusinessSchema } from '@/components/local-business-schema'
import { PerformanceOptimizer } from '@/components/performance-optimizer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Junk Removal Auckland - Same Day Service | Bin Busters #1 Rated',
  description: 'Auckland\'s #1 junk removal service. Same-day pickup, instant photo quotes, eco-friendly disposal. Remove furniture, appliances, garden waste. Call 021 448 097 for immediate service. Serving all Auckland areas.',
  keywords: 'junk removal auckland, rubbish removal auckland, waste disposal auckland, same day junk removal, furniture removal auckland, appliance removal auckland, garden waste removal, tenancy clean up auckland, e-waste disposal auckland, house clearance auckland, office junk removal, commercial waste collection auckland, skip bin alternative auckland, hoarding cleanup auckland, deceased estate clearance auckland',
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
    title: 'Junk Removal Auckland - Same Day Service | Bin Busters #1 Rated',
    description: 'Auckland\'s #1 junk removal service. Same-day pickup, instant photo quotes, eco-friendly disposal. Remove furniture, appliances, garden waste. Call 021 448 097 for immediate service.',
    url: 'https://binbusters.co.nz',
    siteName: 'Bin Busters',
    images: [
      {
        url: '/bin-busters-logo.png',
        width: 1200,
        height: 630,
        alt: 'Bin Busters Junk Removal Auckland - Same Day Service',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal Auckland - Same Day Service | Bin Busters #1 Rated',
    description: 'Auckland\'s #1 junk removal service. Same-day pickup, instant photo quotes, eco-friendly disposal.',
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
  other: {
    'geo.region': 'NZ-AUK',
    'geo.placename': 'Auckland',
    'geo.position': '-36.8485;174.7633',
    'ICBM': '-36.8485, 174.7633',
    'DC.title': 'Junk Removal Auckland - Same Day Service | Bin Busters',
    'DC.description': 'Auckland\'s #1 junk removal service. Same-day pickup, instant photo quotes, eco-friendly disposal.',
    'DC.subject': 'junk removal, rubbish removal, waste disposal, Auckland',
    'DC.creator': 'Bin Busters',
    'DC.publisher': 'Bin Busters',
    'DC.coverage': 'Auckland, New Zealand',
    'DC.language': 'en',
  },
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
        
        <LocalBusinessSchema />
        <PerformanceOptimizer />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
