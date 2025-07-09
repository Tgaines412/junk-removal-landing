import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Circle, AlertCircle, Target, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marketing Plan - BinBusters',
  description: 'BinBusters Marketing Strategy & To-Do List',
}

export default function MarketingPlan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎯 Your "Obsessed with Domination" To-Do List
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            BinBusters Marketing Strategy & Action Plan
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Priority 1: Lead Generation</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Priority 2: Tools & Assets</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Priority 3: Growth & Analysis</span>
            </div>
          </div>
        </div>

        {/* Priority 1: Lead Generation */}
        <div className="mb-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-3" />
              Priority 1: Lock Down Your Lead Generation Engine
            </h2>
            <p className="text-red-700 mb-4">
              These tasks directly lead to getting your phone to ring.
            </p>
          </div>

          <div className="space-y-6">
            {/* Task 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <Circle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1. Finalise Google Business Profile (GBP) Domination
                  </h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                      <span className="font-medium text-yellow-800">Status: Pending verification</span>
                    </div>
                    <p className="text-yellow-700 text-sm">
                      While you wait for the postcard, do this NOW:
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Complete 100% of Profile</p>
                        <p className="text-gray-600 text-sm">
                          Fill in every single field. For "Services," don't just put "Junk Removal." Add every possible variation: Appliance Removal, Mattress Disposal, Green Waste Collection, Office Clear-outs, Deceased Estate Cleanout, Couch Removal, E-Waste Recycling, Hoarder Cleanout, Shed Demolition. Be exhaustive.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Upload Initial Photos</p>
                        <p className="text-gray-600 text-sm">
                          You don't need job photos yet. Upload your logo, a clean picture of your truck (even if it's not wrapped yet), and a professional photo of yourself/your team. This builds immediate trust.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Get Your First 5 Reviews</p>
                        <p className="text-gray-600 text-sm">
                          Once verified, your absolute focus is on getting your first 5 reviews.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Task 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <Circle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2. Set Up Your "5-Star Review Funnel"
                  </h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <span className="font-medium text-red-800">Status: Needs to be set up</span>
                    </div>
                    <p className="text-red-700 text-sm">
                      This is a simple, repeatable system.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Get Your Direct Review Link</h4>
                      <p className="text-gray-600 text-sm">
                        Google "Google Review Link Generator" and create a short, direct link that takes customers straight to the "leave a review" pop-up for your business.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">The "Ask" Script</h4>
                      <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                        <p className="text-gray-700 text-sm italic">
                          "Awesome, glad we could help! Would you be open to leaving us a quick Google review? It's the #1 way new customers find us and it would mean the world to our small business."
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">The SMS Follow-Up</h4>
                      <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                        <p className="text-gray-700 text-sm italic">
                          "Hey [Customer Name], thanks again for choosing Bin Busters today! Here's that link for the review if you have a spare 30 seconds. Cheers! [Your Direct Review Link]"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Task 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <Circle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    3. Activate Real-World Networking (Warm Leads)
                  </h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-medium text-green-800">Status: You have connections. Time to leverage them.</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Action (Barfoot & Thompson Friend)</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Don't just ask. Frame it as a professional proposition.
                      </p>
                      <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                        <p className="text-gray-700 text-sm italic">
                          "Hey [Friend's Name], my new business Bin Busters is officially launched. I know you agents constantly need places cleared out fast for sale or settlement. I can offer you a super reliable, same-day quote service to make your job easier. Can I shout you a coffee next week to show you how we work?"
                        </p>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        Go to that meeting with business cards and a clear "finder's fee" offer ($50 Prezzy card for every completed job they send you).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Action (Property Manager Connections)</h4>
                      <p className="text-gray-600 text-sm">
                        Identify 3-5 PMs from your security job. Approach them with the same professional offer. They are goldmines for end-of-tenancy cleanouts. Have business cards ready to hand out on your next shift.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Priority 2: Tools & Marketing Assets */}
        <div className="mb-12">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3" />
              Priority 2: Sharpen Your Tools & Marketing Assets
            </h2>
            <p className="text-green-700 mb-4">
              These tasks make your business look professional and work smarter.
            </p>
          </div>

          <div className="space-y-6">
            {/* Task 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <Circle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    4. Supercharge Website with Local SEO
                  </h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-800">Status: Ready for optimisation</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Target Hyper-Local Keywords</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Create/optimise pages for terms like:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        <li>Rubbish Removal North Shore</li>
                        <li>Junk Collection West Auckland</li>
                        <li>Affordable Rubbish Removal Manukau</li>
                        <li>Same-Day Junk Removal Auckland CBD</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Build Out Service Pages</h4>
                      <p className="text-gray-600 text-sm">
                        Ensure you have a dedicated page for each main service (e.g., a page for "Deceased Estates," a page for "Commercial/Office Clear-outs"). This helps you rank for those specific, high-value terms.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Blog Post "Problem/Solution"</h4>
                      <p className="text-gray-600 text-sm">
                        Write a simple post titled: "What to Do with Old Furniture in Auckland (Besides the Dump)." This captures people looking for solutions, not just services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Task 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <Circle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    5. Order Branded Uniforms
                  </h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                      <span className="font-medium text-yellow-800">Status: Need to order</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Order two high-quality, professional-looking black or grey hoodies</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Front: Small, clean Bin Busters logo on the left chest</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Back: Large logo with your PHONE NUMBER and WEBSITE underneath. Your back is a walking billboard while you're carrying junk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Task 6 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <Circle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    6. Systemise Your Social Media Content
                  </h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-800">Status: Waiting for first jobs</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Content Capture Checklist</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Circle className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">The "Before" Shot: A wide photo of the messy garage, yard, etc.</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Circle className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">The "During" Clip: A 5-10 second video of you loading something onto the truck. Action shot!</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Circle className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">The "After" Shot: A wide photo of the beautifully empty space from the same angle as the "before"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Circle className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">The "Hero" Shot: A quick photo of you/your team smiling in front of the truck</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      You now have everything you need for a killer Reel/TikTok video and a great Facebook/Instagram post. Repeat for every job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Priority 3: Growth & Analysis */}
        <div className="mb-12">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3" />
              Priority 3: Ongoing Growth & Analysis
            </h2>
            <p className="text-purple-700 mb-4">
              This is the "obsession" part. Make this a weekly habit.
            </p>
          </div>

          <div className="space-y-6">
            {/* Task 7 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-start space-x-4">
                <Circle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    7. Implement "How Did You Hear About Us?"
                  </h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-medium text-green-800">Answer: YES. 1000%. This is marketing gold.</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Action</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Make this a mandatory part of your payment process. After they pay, as you're handing them the receipt or just finishing the conversation, ask casually:
                      </p>
                      <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                        <p className="text-gray-700 text-sm italic">
                          "Just one last thing for our records, how did you happen to find us today?"
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Track It</h4>
                      <p className="text-gray-600 text-sm">
                        Use a simple notebook or a Google Sheet. Columns: Date, Customer, Job Value, Source (Google, Facebook, Friend, Saw Truck, etc.). After a month, you will know EXACTLY where your best customers are coming from.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Task 8 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-start space-x-4">
                <Circle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    8. Schedule Competitor Analysis
                  </h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                      <span className="font-medium text-yellow-800">Status: Needs to be done</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Put 30 minutes in your calendar every Friday afternoon for this</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Google your main keywords in an Incognito window. Who is in the top 3? Who is running ads? What do their ads say?</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Look at their GBP. How many reviews do they have? What are their negative reviews about? (e.g., "they were late," "price wasn't clear"). This shows you their weaknesses</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Check their Facebook page. What are they posting? Are people engaging?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Task 9 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-start space-x-4">
                <Circle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    9. Plan Strategic Flyer Drops
                  </h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-800">Status: Added to the list</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Don't just blanket a random suburb. Be a sniper</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Target: Drive through areas with lots of renovations (look for skip bins), new housing developments, or older suburbs known for families downsizing (e.g., Howick, Northcote)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Circle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">The Offer: Make it compelling. "Your Neighbours Just Used Us! 15% Off for [Suburb Name] Residents This Month."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 