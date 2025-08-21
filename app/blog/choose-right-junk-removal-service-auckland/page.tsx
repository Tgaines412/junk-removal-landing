import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Phone, 
  CheckCircle,
  Star,
  MapPin,
  Shield,
  Clock as ClockIcon,
  DollarSign,
  Leaf,
  Truck
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Choose the Right Junk Removal Service in Auckland | Expert Guide | Bin Busters',
  description: 'Learn the key factors to consider when choosing a reliable junk removal service in Auckland. Expert tips on pricing, licensing, eco-friendly practices, and customer reviews.',
  keywords: 'choose junk removal service auckland, reliable rubbish removal, licensed waste disposal, eco-friendly junk removal, junk removal reviews auckland',
  openGraph: {
    title: 'How to Choose the Right Junk Removal Service in Auckland | Expert Guide',
    description: 'Learn the key factors to consider when choosing a reliable junk removal service in Auckland. Expert tips on pricing, licensing, eco-friendly practices, and customer reviews.',
    images: ['/before-after-1.jpg'],
  },
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category and Meta */}
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-blue-600 text-white">Tips</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                January 18, 2025
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                6 min read
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <User className="w-4 h-4 mr-1" />
                Bin Busters Team
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How to Choose the Right Junk Removal Service in Auckland
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Not all junk removal services are created equal. Learn the key factors to consider when choosing a reliable and professional junk removal company in Auckland.
            </p>

            {/* Hero Image */}
            <div className="relative mb-8 rounded-2xl overflow-hidden">
              <Image
                src="/before-after-1.jpg"
                alt="Professional junk removal service in Auckland"
                width={800}
                height={400}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Share and CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Share this article:</span>
                <button className="p-2 hover:bg-white rounded-lg transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">
                <Phone className="w-4 h-4 mr-2" />
                Get Free Quote
              </Button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2>Why Choosing the Right Junk Removal Service Matters</h2>
              <p>
                Selecting the right junk removal service in Auckland can make the difference between a smooth, 
                stress-free experience and a nightmare scenario. With so many options available, it's crucial 
                to know what to look for to ensure you get professional, reliable, and eco-friendly service.
              </p>

              <h2>Essential Factors to Consider</h2>
              
              <h3>1. Licensing and Insurance</h3>
              <p>
                Always verify that your chosen junk removal service is properly licensed and insured. This protects 
                you from liability and ensures the company operates legally:
              </p>
              <ul>
                <li><strong>Business License:</strong> Verify they have a valid Auckland business license</li>
                <li><strong>Public Liability Insurance:</strong> Protects against property damage</li>
                <li><strong>Workers' Compensation:</strong> Covers employee injuries on your property</li>
                <li><strong>Vehicle Insurance:</strong> Covers their trucks and equipment</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-xl my-8">
                <h4 className="text-xl font-semibold mb-4 text-blue-800">Pro Tip</h4>
                <p className="text-blue-700">
                  Ask to see copies of their insurance certificates and verify the coverage amounts. 
                  A reputable company will be happy to provide this information.
                </p>
              </div>

              <h3>2. Experience and Reputation</h3>
              <p>
                Experience matters in the junk removal industry. Look for companies with:
              </p>
              <ul>
                <li><strong>Years in Business:</strong> At least 3-5 years of operation</li>
                <li><strong>Local Knowledge:</strong> Familiarity with Auckland's waste disposal regulations</li>
                <li><strong>Customer Reviews:</strong> Positive feedback on Google, Facebook, and other platforms</li>
                <li><strong>References:</strong> Willingness to provide customer references</li>
              </ul>

              <h3>3. Eco-Friendly Practices</h3>
              <p>
                Environmental responsibility is crucial. Choose a company that prioritizes:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Leaf className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-green-800">Recycling</h4>
                  <p className="text-sm text-green-600">Separates recyclable materials</p>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800">Donation</h4>
                  <p className="text-sm text-blue-600">Donates usable items to charities</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Shield className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-purple-800">Proper Disposal</h4>
                  <p className="text-sm text-purple-600">Uses licensed waste facilities</p>
                </div>
              </div>

              <h3>4. Pricing Transparency</h3>
              <p>
                Avoid hidden fees and unexpected charges by choosing a company with transparent pricing:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <h4 className="text-xl font-semibold mb-4">What to Ask About Pricing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Base service fee</span>
                    <span className="font-semibold">✓ Included</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fuel surcharge</span>
                    <span className="font-semibold">✓ Transparent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Disposal fees</span>
                    <span className="font-semibold">✓ Itemized</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Weekend/holiday rates</span>
                    <span className="font-semibold">✓ Clear</span>
                  </div>
                </div>
              </div>

              <h3>5. Service Availability and Response Time</h3>
              <p>
                When you need junk removed, you need it done quickly. Consider:
              </p>
              <ul>
                <li><strong>Same-Day Service:</strong> Available for urgent situations</li>
                <li><strong>Response Time:</strong> How quickly they respond to inquiries</li>
                <li><strong>Flexible Scheduling:</strong> Weekend and after-hours availability</li>
                <li><strong>Emergency Services:</strong> 24/7 availability for urgent cases</li>
              </ul>

              <h3>6. Equipment and Capabilities</h3>
              <p>
                Ensure the company has the right equipment for your specific needs:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Truck className="w-5 h-5 mr-2 text-red-600" />
                      Vehicles & Equipment
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Appropriate truck sizes</li>
                      <li>• Loading equipment (dollies, ramps)</li>
                      <li>• Safety gear and tools</li>
                      <li>• Specialized equipment for heavy items</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-red-600" />
                      Safety & Training
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Trained and certified staff</li>
                      <li>• Safety protocols and procedures</li>
                      <li>• Protective equipment</li>
                      <li>• Emergency response plans</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2>Red Flags to Watch Out For</h2>
              
              <div className="bg-red-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Warning Signs</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-700">🚨 Avoid These Companies</h4>
                    <ul className="text-sm space-y-1 text-red-600">
                      <li>• No written quotes or contracts</li>
                      <li>• Cash-only payments</li>
                      <li>• Unmarked vehicles</li>
                      <li>• Pressure tactics or urgency</li>
                      <li>• No insurance documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-700">🚨 Suspicious Practices</h4>
                    <ul className="text-sm space-y-1 text-red-600">
                      <li>• Extremely low prices</li>
                      <li>• No physical address</li>
                      <li>• Unprofessional communication</li>
                      <li>• Refusal to provide references</li>
                      <li>• Vague service descriptions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Questions to Ask Potential Companies</h2>
              
              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-semibold mb-4">Essential Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">📋 Business & Licensing</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• How long have you been in business?</li>
                      <li>• Can you provide proof of licensing and insurance?</li>
                      <li>• What areas of Auckland do you service?</li>
                      <li>• Do you have references from recent customers?</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">💰 Pricing & Services</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• What's included in your quote?</li>
                      <li>• Are there any additional fees?</li>
                      <li>• Do you offer same-day service?</li>
                      <li>• What's your cancellation policy?</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">♻️ Environmental Practices</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• How do you handle recyclable materials?</li>
                      <li>• Do you donate usable items?</li>
                      <li>• Where do you dispose of waste?</li>
                      <li>• What's your recycling percentage?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Comparing Multiple Quotes</h2>
              <p>
                Get quotes from at least 3 different companies to ensure you're getting the best value:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Quote Comparison Checklist</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Service Details</h4>
                    <ul className="text-sm space-y-1 text-blue-700">
                      <li>• Scope of work included</li>
                      <li>• Equipment and manpower</li>
                      <li>• Estimated completion time</li>
                      <li>• Cleanup and disposal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cost Breakdown</h4>
                    <ul className="text-sm space-y-1 text-blue-700">
                      <li>• Base service fee</li>
                      <li>• Additional charges</li>
                      <li>• Payment terms</li>
                      <li>• Cancellation fees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Making Your Final Decision</h2>
              <p>
                After gathering all the information, consider these factors in order of importance:
              </p>
              
              <div className="space-y-4 my-8">
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold">Safety & Compliance</h4>
                    <p className="text-gray-600">Licensing, insurance, and safety records</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold">Reputation & Reviews</h4>
                    <p className="text-gray-600">Customer feedback and company history</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold">Environmental Responsibility</h4>
                    <p className="text-gray-600">Recycling and disposal practices</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold">Price & Value</h4>
                    <p className="text-gray-600">Cost relative to service quality</p>
                  </div>
                </div>
              </div>

              <h2>Conclusion</h2>
              <p>
                Choosing the right junk removal service in Auckland requires careful research and consideration. 
                By focusing on licensing, reputation, environmental practices, and transparent pricing, you can 
                ensure a positive experience and responsible waste disposal.
              </p>
              
              <p>
                Remember, the cheapest option isn't always the best choice. Invest in a reputable company that 
                values safety, environmental responsibility, and customer satisfaction. Your peace of mind and 
                the environment will thank you.
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">BB</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Bin Busters Team</h3>
                  <p className="text-gray-600">
                    Auckland's #1 rated junk removal service with years of experience in professional 
                    waste disposal and eco-friendly practices. We're committed to transparency, safety, and environmental responsibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Complete Guide to Junk Removal in Auckland</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Everything you need to know about professional junk removal services in Auckland.
                    </p>
                    <Link href="/blog/complete-guide-junk-removal-auckland" className="text-red-600 text-sm font-medium">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Eco-Friendly Waste Disposal Methods</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Discover how professional services ensure environmentally responsible disposal.
                    </p>
                    <Link href="/blog/eco-friendly-waste-disposal-methods-auckland" className="text-red-600 text-sm font-medium">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Preparing for a House Clearance</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Step-by-step guide to prepare efficiently for a smooth junk removal process.
                    </p>
                    <Link href="/blog/preparing-house-clearance-step-guide-auckland" className="text-red-600 text-sm font-medium">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Choose Bin Busters?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience Auckland's most trusted junk removal service with transparent pricing, eco-friendly practices, and same-day service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:021448097"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call Now: 021 448 097
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
