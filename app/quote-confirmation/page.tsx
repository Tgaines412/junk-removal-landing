"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ArrowLeft,
  Download,
  Share2,
} from "lucide-react"

// Declare gtag function type
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: {
        event_category?: string
        event_label?: string
        value?: number
      }
    ) => void
  }
}

function QuoteConfirmationContent() {
  const searchParams = useSearchParams()
  const name = searchParams.get("name") || "there"

  useEffect(() => {
    // Track the conversion in Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "quote_request_submitted", {
        event_category: "conversion",
        event_label: "quote_form",
        value: 1,
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/bin-busters-logo.png"
                alt="Bin Busters Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Bin Busters</h1>
                <p className="text-sm text-gray-600">Auckland's #1 Junk Removal</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Card */}
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Success Icon */}
              <div className="text-center mb-8">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Quote Request Received!
                </h1>
                <p className="text-gray-600 text-lg">
                  Thanks {name}! We've got your junk removal request and will get back to you instantly.
                </p>
              </div>

              {/* What Happens Next */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  What Happens Next?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Instant Review</h3>
                      <p className="text-gray-600 text-sm">
                        Our team will review your photos and details within minutes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quick Quote</h3>
                      <p className="text-gray-600 text-sm">
                        You'll receive a detailed quote via phone call or email
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Same-Day Service</h3>
                      <p className="text-gray-600 text-sm">
                        We can often complete your junk removal the same day
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Need to Contact Us?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Call us directly</p>
                      <a
                        href="tel:021448097"
                        className="text-lg font-bold text-red-600 hover:text-red-700"
                      >
                        021 448 097
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email us</p>
                      <a
                        href="mailto:binbustersnz@gmail.com"
                        className="text-lg font-bold text-red-600 hover:text-red-700"
                      >
                        binbustersnz@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={() => window.open("tel:021448097")}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 text-lg font-semibold rounded-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now for Immediate Response
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = "/"}
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://www.google.com/maps/search/junk+removal+auckland")}
                    className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Trusted Service</h3>
              <p className="text-sm text-gray-600">Licensed & Insured</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Same Day</h3>
              <p className="text-sm text-gray-600">Quick Response</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">Responsible Disposal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function QuoteConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <QuoteConfirmationContent />
    </Suspense>
  )
} 