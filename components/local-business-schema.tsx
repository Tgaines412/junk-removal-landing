export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bin Busters",
    "alternateName": "Bin Busters Junk Removal Auckland",
    "description": "Auckland's #1 junk removal service. Same-day pickup, instant photo quotes, eco-friendly disposal. Professional rubbish removal across all Auckland areas.",
    "url": "https://binbusters.co.nz",
    "telephone": "+6421448097",
    "email": "info@binbusters.co.nz",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Auckland",
      "addressRegion": "Auckland",
      "addressCountry": "NZ",
      "postalCode": "1000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -36.8485,
      "longitude": 174.7633
    },
    "openingHours": "Mo-Su 07:00-19:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Afterpay", "EFTPOS"],
    "currenciesAccepted": "NZD",
    "areaServed": [
      {
        "@type": "City",
        "name": "Auckland"
      },
      {
        "@type": "City",
        "name": "North Shore"
      },
      {
        "@type": "City",
        "name": "South Auckland"
      },
      {
        "@type": "City",
        "name": "East Auckland"
      },
      {
        "@type": "City",
        "name": "West Auckland"
      },
      {
        "@type": "City",
        "name": "Central Auckland"
      },
      {
        "@type": "City",
        "name": "Hibiscus Coast"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -36.8485,
        "longitude": 174.7633
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Junk Removal Services Auckland",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Household Junk Removal Auckland",
            "description": "Furniture removal, appliance disposal, general household junk. Professional Auckland rubbish removal service.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bin Busters"
            }
          },
          "price": "30",
          "priceCurrency": "NZD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "30",
            "priceCurrency": "NZD",
            "unitText": "per item"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Junk Removal Auckland",
            "description": "Office furniture disposal, commercial equipment removal, business cleanouts across Auckland.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bin Busters"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garden Waste Removal Auckland",
            "description": "Green waste disposal, branch removal, lawn clippings, garden cleanup Auckland wide.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bin Busters"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tenancy Clean Up Auckland",
            "description": "End of lease cleanouts, property clearing, tenancy rubbish removal Auckland.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bin Busters"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Waste Disposal Auckland",
            "description": "Electronics recycling, computer disposal, appliance removal Auckland. Eco-friendly e-waste disposal.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bin Busters"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "House Clearance Auckland",
            "description": "Complete house clearances, deceased estate cleanups, hoarding cleanup Auckland wide.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bin Busters"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Amazing service! They came the same day and cleared out my garage completely. Professional and affordable.",
        "reviewLocation": "Ponsonby, Auckland"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mike T."
        },
        "reviewBody": "Got a quote within 30 minutes of uploading photos. The team was punctual and did a fantastic job.",
        "reviewLocation": "Mount Eden, Auckland"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Lisa K."
        },
        "reviewBody": "Best junk removal service in Auckland! They handled everything from furniture to garden waste.",
        "reviewLocation": "Newmarket, Auckland"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/binbustersauckland",
      "https://www.instagram.com/binbustersauckland"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-20",
    "slogan": "Auckland's #1 Junk Removal Service - Same Day Pickup, Free Instant Quote",
    "knowsAbout": [
      "Junk Removal",
      "Rubbish Removal",
      "Waste Disposal",
      "Furniture Removal",
      "Appliance Disposal",
      "Garden Waste Removal",
      "E-Waste Disposal",
      "House Clearance",
      "Tenancy Clean Up",
      "Commercial Waste Collection"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "description": "Same-day junk removal service across Auckland",
        "price": "0",
        "priceCurrency": "NZD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "0",
          "priceCurrency": "NZD",
          "unitText": "Free instant quote"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}
