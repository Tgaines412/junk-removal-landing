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
  Leaf,
  Clock as ClockIcon
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Guide to Junk Removal in Auckland: What You Need to Know | Bin Busters',
  description: 'Everything you need to know about professional junk removal services in Auckland. From pricing to eco-friendly disposal methods, this comprehensive guide covers it all.',
  keywords: 'junk removal auckland guide, rubbish removal pricing auckland, waste disposal methods auckland, house clearance auckland, furniture removal auckland, eco-friendly disposal auckland',
  openGraph: {
    title: 'Complete Guide to Junk Removal in Auckland: What You Need to Know',
    description: 'Everything you need to know about professional junk removal services in Auckland. From pricing to eco-friendly disposal methods, this comprehensive guide covers it all.',
    images: ['/junk-removal-action.jpg'],
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
              <Badge className="bg-red-600 text-white">Guides</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                January 20, 2025
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                8 min read
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <User className="w-4 h-4 mr-1" />
                Bin Busters Team
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Guide to Junk Removal in Auckland: What You Need to Know
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Everything you need to know about professional junk removal services in Auckland. 
              From pricing to eco-friendly disposal methods, this comprehensive guide covers it all.
            </p>

            {/* Hero Image */}
            <div className="relative mb-8 rounded-2xl overflow-hidden">
              <Image
                src="/junk-removal-action.jpg"
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
              <h2>What is Professional Junk Removal?</h2>
              <p>
                Professional junk removal is a comprehensive service that helps homeowners and businesses 
                dispose of unwanted items, furniture, appliances, and other waste materials. Unlike 
                traditional skip bin hire, professional junk removal services in Auckland come to your 
                location, load everything onto their trucks, and handle the disposal process responsibly.
              </p>

              <h2>Why Choose Professional Junk Removal in Auckland?</h2>
              <ul>
                <li><strong>Convenience:</strong> No need to transport heavy items yourself</li>
                <li><strong>Eco-friendly:</strong> Professional disposal and recycling methods</li>
                <li><strong>Time-saving:</strong> Quick and efficient service</li>
                <li><strong>Cost-effective:</strong> Competitive pricing with no hidden fees</li>
                <li><strong>Professional:</strong> Trained and insured teams</li>
              </ul>

              <h2>What Items Can Be Removed?</h2>
              <p>
                Professional junk removal services in Auckland can handle virtually any type of waste:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Household Items</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Old furniture and mattresses</li>
                      <li>• Appliances and electronics</li>
                      <li>• Clothing and textiles</li>
                      <li>• Books and documents</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Construction Waste</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Renovation debris</li>
                      <li>• Building materials</li>
                      <li>• Concrete and bricks</li>
                      <li>• Timber and metal</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2>Junk Removal Pricing in Auckland</h2>
              <p>
                Understanding pricing is crucial when choosing a junk removal service. Most companies 
                in Auckland offer transparent pricing based on volume or item type:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-semibold mb-4">Typical Pricing Structure</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Small items (dryers, microwaves)</span>
                    <span className="font-semibold">$30 - $50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Large appliances (fridges, washing machines)</span>
                    <span className="font-semibold">$50 - $80</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Furniture (couches, beds)</span>
                    <span className="font-semibold">$80 - $150</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Full room clearances</span>
                    <span className="font-semibold">$200 - $500</span>
                  </div>
                </div>
              </div>

              <h2>Eco-Friendly Disposal Methods</h2>
              <p>
                Professional junk removal services in Auckland prioritize environmental responsibility:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Leaf className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-green-800">Recycling</h4>
                  <p className="text-sm text-green-600">Metals, plastics, and electronics</p>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-blue-800">Donation</h4>
                  <p className="text-sm text-blue-600">Usable items to charities</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Star className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-purple-800">Repurposing</h4>
                  <p className="text-sm text-purple-600">Creative reuse of materials</p>
                </div>
              </div>

              <h2>How to Prepare for Junk Removal</h2>
              <p>
                Proper preparation ensures a smooth and efficient junk removal process:
              </p>
              
              <ol className="space-y-3 my-6">
                <li><strong>Sort and organize:</strong> Separate items by type and size</li>
                <li><strong>Clear access:</strong> Ensure clear pathways for the removal team</li>
                <li><strong>Identify valuables:</strong> Mark items you want to keep</li>
                <li><strong>Document items:</strong> Take photos for insurance purposes</li>
                <li><strong>Secure pets:</strong> Keep animals away during removal</li>
              </ol>

              <h2>Choosing the Right Junk Removal Service</h2>
              <p>
                Not all junk removal services are created equal. Consider these factors:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Key Selection Criteria</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">✓ What to Look For</h4>
                    <ul className="text-sm space-y-1 text-blue-700">
                      <li>• Licensed and insured</li>
                      <li>• Eco-friendly practices</li>
                      <li>• Transparent pricing</li>
                      <li>• Same-day service</li>
                      <li>• Positive reviews</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">✗ Red Flags</h4>
                    <ul className="text-sm space-y-1 text-blue-700">
                      <li>• Hidden fees</li>
                      <li>• No insurance</li>
                      <li>• Poor communication</li>
                      <li>• Unprofessional behavior</li>
                      <li>• No recycling policy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Service Areas in Auckland</h2>
              <p>
                Professional junk removal services cover all major Auckland areas:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">North Shore</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Takapuna</li>
                    <li>• Devonport</li>
                    <li>• Milford</li>
                    <li>• Browns Bay</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Central Auckland</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Ponsonby</li>
                    <li>• Mount Eden</li>
                    <li>• Newmarket</li>
                    <li>• Remuera</li>
                  </ul>
                </div>
              </div>

              <h2>Frequently Asked Questions</h2>
              
              <div className="space-y-6 my-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">How quickly can you remove my junk?</h3>
                  <p className="text-gray-600">
                    Most professional services offer same-day or next-day removal. For urgent situations, 
                    many companies can accommodate immediate requests.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Do you provide quotes before starting?</h3>
                  <p className="text-gray-600">
                    Yes, reputable companies provide free, no-obligation quotes. Many offer instant 
                    photo quotes for quick pricing estimates.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">What happens to items that can't be recycled?</h3>
                  <p className="text-gray-600">
                    Non-recyclable items are disposed of at licensed waste facilities following 
                    environmental regulations and best practices.
                  </p>
                </div>
              </div>

              <h2>Conclusion</h2>
              <p>
                Professional junk removal services in Auckland offer a convenient, eco-friendly, and 
                cost-effective solution for disposing of unwanted items. By choosing a reputable service, 
                you can ensure responsible disposal while saving time and effort.
              </p>
              
              <p>
                Remember to research companies thoroughly, ask about their environmental practices, 
                and get written quotes before making your decision. With the right service, you can 
                transform your cluttered space into a clean, organized environment.
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
                    waste disposal and eco-friendly practices.
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
                    <h4 className="font-semibold mb-2">How to Choose the Right Junk Removal Service</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Learn the key factors to consider when selecting a reliable junk removal company.
                    </p>
                    <Link href="/blog/choose-right-junk-removal-service-auckland" className="text-red-600 text-sm font-medium">
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
            Ready to Clear Your Space?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Get instant quotes and same-day service from Auckland's most trusted junk removal team
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
