import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, ArrowLeft, Share2, Phone, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Costs in Auckland: What to Expect | Bin Busters',
  description: 'Understanding junk removal costs in Auckland. Get insights into pricing factors, quotes, and value for money from Auckland\'s #1 rated service.',
  keywords: 'junk removal costs auckland, rubbish removal pricing, waste disposal costs, house clearance prices, junk removal quotes auckland',
  openGraph: {
    title: 'Junk Removal Costs in Auckland: What to Expect',
    description: 'Understanding junk removal costs in Auckland. Get insights into pricing factors, quotes, and value for money from Auckland\'s #1 rated service.',
    images: ['/junk-removal-action.jpg'],
  },
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors">
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
              <Badge className="bg-green-600 text-white">Pricing Guide</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                January 5, 2025
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
              Junk Removal Costs in Auckland: What to Expect
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Understanding the factors that influence junk removal costs in Auckland can help you budget 
              effectively. Get insights into pricing, quotes, and value for money from Auckland's #1 rated service.
            </p>

            {/* Hero Image */}
            <div className="relative mb-8 rounded-2xl overflow-hidden">
              <Image
                src="/junk-removal-action.jpg"
                alt="Professional junk removal service in Auckland showing cost-effective waste disposal"
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
              <h2>Understanding Junk Removal Pricing in Auckland</h2>
              <p>
                Junk removal costs in Auckland can vary significantly based on several factors. Understanding 
                these variables helps you budget effectively and choose the right service for your needs. 
                Professional junk removal services offer transparent pricing and value that goes beyond 
                just removing your waste.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Key Cost Factors
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                  <div>
                    <p className="font-semibold">• Volume & Weight:</p>
                    <p className="text-sm">Amount of junk determines truck capacity needed</p>
                  </div>
                  <div>
                    <p className="font-semibold">• Service Type:</p>
                    <p className="text-sm">Different services have varying complexity</p>
                  </div>
                  <div>
                    <p className="font-semibold">• Location & Access:</p>
                    <p className="text-sm">Distance and accessibility affect costs</p>
                  </div>
                  <div>
                    <p className="font-semibold">• Urgency:</p>
                    <p className="text-sm">Same-day service may have premium pricing</p>
                  </div>
                </div>
              </div>

              <h2>Volume-Based Pricing Structure</h2>
              
              <h3>1. Small Loads (1-2 cubic meters)</h3>
              <p>Perfect for apartment cleanouts or small household projects:</p>
              <ul>
                <li>Small truck service with 2-person crew</li>
                <li>Basic equipment and standard disposal</li>
                <li>1-2 hour service time</li>
                <li><strong>Typical Cost: $150 - $300</strong></li>
              </ul>

              <h3>2. Medium Loads (3-6 cubic meters)</h3>
              <p>Ideal for house cleanouts and renovation projects:</p>
              <ul>
                <li>Medium truck with 2-3 person crew</li>
                <li>Heavy lifting equipment and extended service</li>
                <li>Advanced sorting and disposal</li>
                <li><strong>Typical Cost: $300 - $900</strong></li>
              </ul>

              <h3>3. Large Loads (7+ cubic meters)</h3>
              <p>For major cleanouts and commercial projects:</p>
              <ul>
                <li>Large truck with 3-4 person crew</li>
                <li>Specialized equipment and full-day service</li>
                <li>Complex disposal and documentation</li>
                <li><strong>Typical Cost: $800 - $1,500+</strong></li>
              </ul>

              <h2>Service-Specific Pricing</h2>
              
              <h3>Household Junk Removal</h3>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Basic Cleanout</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Single room: $150 - $300</li>
                      <li>• Garage: $200 - $400</li>
                      <li>• Basement: $250 - $500</li>
                      <li>• Attic: $200 - $350</li>
                      <li>• Shed: $150 - $300</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">Full House</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 2-bedroom: $500 - $800</li>
                      <li>• 3-bedroom: $700 - $1,200</li>
                      <li>• 4+ bedroom: $900 - $1,500</li>
                      <li>• With basement: +$200</li>
                      <li>• With garage: +$150</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3>Commercial Junk Removal</h3>
              <ul>
                <li>Small office: $300 - $600</li>
                <li>Medium office: $500 - $1,000</li>
                <li>Large office: $800 - $1,500</li>
                <li>Store renovation: $400 - $800</li>
                <li>Restaurant equipment: $300 - $600</li>
              </ul>

              <h2>Location and Access Factors</h2>
              
              <h3>Distance Charges</h3>
              <ul>
                <li>Central Auckland: Base pricing</li>
                <li>North Shore: +$50 - $100 (bridge crossing)</li>
                <li>South Auckland: +$75 - $150 (extended travel)</li>
                <li>West Auckland: +$50 - $125 (hilly terrain)</li>
              </ul>

              <h3>Access Challenges</h3>
              <ul>
                <li>Narrow streets: +$25 - $50</li>
                <li>Limited parking: +$30 - $75</li>
                <li>Stairs only: +$50 - $100</li>
                <li>Elevator required: +$75 - $150</li>
                <li>Off-road access: +$100 - $200</li>
              </ul>

              <h2>Additional Service Charges</h2>
              
              <h3>Common Extras</h3>
              <ul>
                <li>Same-day service: +$100 - $150</li>
                <li>Weekend service: +$50 - $100</li>
                <li>After hours: +$100 - $200</li>
                <li>Holiday rates: +$150 - $250</li>
                <li>Emergency callout: +$200</li>
              </ul>

              <h3>Disposal Fees</h3>
              <ul>
                <li>Hazardous waste: +$100 - $300</li>
                <li>Electronic waste: +$50 - $150</li>
                <li>Mattress disposal: +$25 - $50</li>
                <li>Paint disposal: +$25 - $75</li>
                <li>Special materials: +$100 - $500</li>
              </ul>

              <h2>Getting Accurate Quotes</h2>
              
              <h3>What to Provide</h3>
              <ul>
                <li>Type and amount of junk</li>
                <li>Access to property</li>
                <li>Preferred timing</li>
                <li>Special requirements</li>
                <li>Exact location</li>
              </ul>

              <h3>Quote Types</h3>
              <ul>
                <li>Phone estimate: 70-80% accuracy</li>
                <li>Site visit: 90-95% accuracy</li>
                <li>Video call: 80-90% accuracy</li>
              </ul>

              <h2>Payment Options</h2>
              
              <h3>Available Methods</h3>
              <ul>
                <li>Cash, bank transfer, credit/debit cards</li>
                <li>Online banking and mobile payments</li>
                <li>AfterPay - 4 interest-free installments</li>
                <li>Business invoicing available</li>
              </ul>

              <h2>Tips for Best Value</h2>
              
              <h3>Cost-Saving Strategies</h3>
              <ul>
                <li>Book in advance to avoid rush fees</li>
                <li>Combine multiple cleanouts for volume discounts</li>
                <li>Choose mid-week or off-season timing</li>
                <li>Prepare your space to reduce labor time</li>
                <li>Ask about package deals and promotions</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Understanding junk removal costs in Auckland helps you make informed decisions and budget 
                effectively for your projects. While price is important, remember that professional 
                services offer value beyond just removing waste - they provide safety, compliance, 
                environmental responsibility, and peace of mind.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Ready to Get Started?</h3>
                <p className="text-blue-700">
                  Contact Bin Busters for a free, no-obligation quote on your junk removal project. 
                  Our transparent pricing and professional service ensure you get the best value 
                  for your money.
                </p>
              </div>
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
                    Auckland's #1 rated junk removal service with transparent pricing and exceptional 
                    value. We're committed to providing fair, competitive rates while delivering 
                    professional service you can trust.
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
                    <h4 className="font-semibold mb-2">How to Choose the Right Junk Removal Service</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Learn the key factors to consider when choosing a reliable junk removal company.
                    </p>
                    <Link href="/blog/how-to-choose-right-junk-removal-service-auckland" className="text-red-600 text-sm font-medium">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Preparing for a House Clearance</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      A comprehensive step-by-step guide to prepare for your house clearance project.
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
            Need a Quote for Your Junk Removal?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote from Auckland's #1 rated junk removal service
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
