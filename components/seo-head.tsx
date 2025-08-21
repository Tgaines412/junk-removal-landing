import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
}

export function SEOHead({
  title = "Junk Removal Auckland - Same Day Service | Bin Busters #1 Rated",
  description = "Auckland's #1 junk removal service. Same-day pickup, instant photo quotes, eco-friendly disposal. Remove furniture, appliances, garden waste. Call 021 448 097 for immediate service. Serving all Auckland areas.",
  keywords = "junk removal auckland, rubbish removal auckland, waste disposal auckland, same day junk removal, furniture removal auckland, appliance removal auckland, garden waste removal, tenancy clean up auckland, e-waste disposal auckland, house clearance auckland, office junk removal, commercial waste collection auckland, skip bin alternative auckland, hoarding cleanup auckland, deceased estate clearance auckland",
  canonical = "https://binbusters.co.nz",
  ogImage = "/bin-busters-logo.png",
  ogType = "website",
  twitterCard = "summary_large_image"
}: SEOHeadProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Bin Busters" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Bin Busters" />
      <meta property="og:locale" content="en_NZ" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#dc2626" />
      <meta name="msapplication-TileColor" content="#dc2626" />
      
      {/* Local Business Schema */}
      <meta name="geo.region" content="NZ-AUK" />
      <meta name="geo.placename" content="Auckland" />
      <meta name="geo.position" content="-36.8485;174.7633" />
      <meta name="ICBM" content="-36.8485, 174.7633" />
      
      {/* Dublin Core */}
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.subject" content="junk removal, rubbish removal, waste disposal, Auckland" />
      <meta name="DC.creator" content="Bin Busters" />
      <meta name="DC.publisher" content="Bin Busters" />
      <meta name="DC.coverage" content="Auckland, New Zealand" />
      <meta name="DC.language" content="en" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Auckland, New Zealand" />
      <meta name="business:contact_data:locality" content="Auckland" />
      <meta name="business:contact_data:region" content="Auckland" />
      <meta name="business:contact_data:postal_code" content="1000" />
      <meta name="business:contact_data:country_name" content="New Zealand" />
      <meta name="business:contact_data:phone_number" content="+6421448097" />
      
      {/* Service Information */}
      <meta name="service:type" content="Junk Removal" />
      <meta name="service:area" content="Auckland" />
      <meta name="service:availability" content="Same Day" />
      <meta name="service:price_range" content="$$" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  )
}
