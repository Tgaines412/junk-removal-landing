import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Afterpay Junk Removal Auckland | Bin Busters – Pay in 4, 0% Interest",
  description:
    "Spread the cost of your rubbish removal over 4 interest-free payments with Afterpay. Official partner. Fast, friendly junk removal across Auckland.",
  openGraph: {
    title: "Afterpay Junk Removal Auckland | Bin Busters",
    description:
      "Pay for junk removal in 4 interest-free payments with Afterpay. Same-day pickups across Auckland.",
    images: [
      { url: "/bin-busters-logo.png", width: 1200, height: 630, alt: "Bin Busters Junk Removal Auckland" },
    ],
    type: "article",
  },
  alternates: { canonical: "/afterpay" },
}

export default function AfterpayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <span className="inline-block mb-3 text-xs font-semibold tracking-wide uppercase text-red-600">
              Official Afterpay Partner
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Making life easier with Afterpay
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We’ve partnered with Afterpay so you can split your Auckland rubbish removal into 4
              simple payments—every two weeks, 0% interest. Clear the clutter today and pay over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#home"
                className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold text-center hover:bg-red-700"
              >
                Book Now
              </Link>
              <a
                href="tel:021448097"
                className="px-6 py-3 rounded-xl border border-red-600 text-red-600 font-semibold text-center hover:bg-red-600 hover:text-white"
              >
                Call for Instant Help
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <Image
              src="/after-pay-rubbish-removal-auckland.webp"
              alt="Afterpay for rubbish removal in Auckland"
              width={900}
              height={600}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        <section className="mt-14 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">How does it work?</h3>
            <p className="text-gray-700">
              After you accept your quote, we send a secure Afterpay payment link by text or email. Pay the first 25%
              to confirm your booking. The remaining 3 payments are charged automatically every two weeks — 0% interest.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Is there any interest?</h3>
            <p className="text-gray-700">
              No—there’s 0% interest with Afterpay when you pay on time. It’s a smart way to spread the cost
              without paying more.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Does it cost to register?</h3>
            <p className="text-gray-700">
              No—signing up to Afterpay is free. Manage your schedule and payments anytime in the Afterpay app.
            </p>
          </div>
        </section>

        <section className="mt-14 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How do I get started?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-gray-700">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Send photos or call us for a fast, no‑obligation quote.</li>
                  <li>We text/email you a secure Afterpay payment link.</li>
                  <li>Pay the first 25% to confirm your booking.</li>
                  <li>We collect your junk — the next 3 payments run automatically every two weeks.</li>
                </ol>
                <p className="mt-4">Our friendly team covers homes, garages, gardens, offices, tenancies and more. We tidy up after every job.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <Link
                  href="/#home"
                  className="inline-block self-start px-3 py-2 rounded-md bg-red-600 text-white font-semibold text-center text-sm hover:bg-red-700"
                >
                  Get My Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Professional & Respectful</h4>
              <p className="text-gray-700">Uniformed team, careful removals, we sweep up afterwards.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Eco‑Responsible Disposal</h4>
              <p className="text-gray-700">We recycle and donate where possible to minimise landfill.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Auckland‑Wide, Same‑Day</h4>
              <p className="text-gray-700">Fast response across the city—book in minutes.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


