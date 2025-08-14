import type { Metadata } from "next"
import Link from "next/link"
import { XCircle, Home, Building2, Recycle, Package, Truck, Warehouse, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Rubbish Items We Remove | Bin Busters Auckland",
  description:
    "Trusted, affordable junk removal across Auckland. Household, garage, garden and commercial rubbish cleared fast. Eco‑friendly disposal and respectful service.",
  alternates: { canonical: "/what-we-remove" },
}

const helpItems = [
  { icon: Home, label: "Household junk & general clutter" },
  { icon: Package, label: "Furniture, mattresses & bulky items" },
  { icon: Package, label: "Whiteware & small appliances (disconnected)" },
  { icon: Warehouse, label: "Garage & shed cleanouts" },
  { icon: Recycle, label: "Recycling & donations where possible" },
  { icon: Building2, label: "Rental clean ups & end‑of‑tenancy" },
  { icon: Truck, label: "Office/shop junk & commercial loads" },
  { icon: Wrench, label: "Pre‑sale tidies & estate clearances" },
  { icon: Package, label: "Boxes, e‑waste, small renovation offcuts" },
]

const cannotTake = [
  "Asbestos or suspected asbestos",
  "Hazardous chemicals, oils, fuel, gas cylinders",
  "Biohazard/medical waste",
  "Wet concrete, soil or rocks in bulk quantities",
]

export default function WhatWeRemovePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="mb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block mb-3 text-xs font-semibold tracking-wide uppercase text-red-600">
                  Rubbish Items We Can Remove
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                  Professional junk removal for homes and businesses
                </h1>
                <p className="text-gray-700">
                  We clear Auckland’s junk quickly and responsibly. From household clutter to office cleanouts,
                  we’ll help you reclaim space and keep things tidy.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Why choose Bin Busters?</h2>
                <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-red-600" />Same‑day options</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-red-600" />Up‑front pricing</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-red-600" />Eco‑responsible disposal</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-red-600" />Friendly, uniformed team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What we remove grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What we remove</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpItems.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 h-full">
                <div className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-red-600 mt-0.5" />
                  <p className="text-gray-800 font-medium leading-6">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What we don't take */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What we don’t take</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {cannotTake.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">Not sure about your items? Contact us and we’ll advise fast.</p>
          </div>
        </section>

        {/* CTAs */}
        <section className="flex flex-col sm:flex-row gap-3 items-start">
          <Link
            href="/#home"
            className="inline-block px-5 py-3 rounded-xl bg-red-600 text-white font-semibold text-center hover:bg-red-700"
          >
            Get My Free Quote
          </Link>
          <a
            href="tel:021448097"
            className="inline-block px-5 py-3 rounded-xl border border-red-600 text-red-600 font-semibold text-center hover:bg-red-600 hover:text-white"
          >
            Call 021 448 097
          </a>
        </section>
      </main>
    </div>
  )
}


