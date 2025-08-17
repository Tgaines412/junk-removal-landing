import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions | Bin Busters Junk Removal Auckland",
  description: "Terms and conditions for Bin Busters junk removal services including cancellation policies and payment terms.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-700">
            Please read these terms carefully before booking our junk removal services.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
          {/* Cancellation Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800 font-semibold mb-2">Important:</p>
              <p className="text-red-700">
                All bookings are subject to a minimum 30% cancellation fee. Jobs canceled within 24 hours of the scheduled time may incur a 50% or higher fee due to time and resources allocated. If significant preparation or work has already been carried out, no refund will be issued.
              </p>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                We understand that circumstances can change, but late cancellations impact our ability to serve other customers and cover our operational costs.
              </p>
              <p>
                <strong>Fee Structure:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>More than 24 hours notice: 30% cancellation fee</li>
                <li>Within 24 hours: 50% cancellation fee</li>
                <li>Same day cancellation: 75% cancellation fee</li>
                <li>After work has commenced: No refund</li>
              </ul>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Payment Processing:</strong> A 30% processing fee applies to all payment processing, including Afterpay transactions and credit card payments.
              </p>
              <p>
                <strong>Payment Methods:</strong> We accept cash, bank transfer, and Afterpay. All payments must be completed before or upon completion of the job.
              </p>
              <p>
                <strong>Afterpay:</strong> Afterpay payments are processed in 4 installments. The first payment (25%) is required to confirm your booking.
              </p>
              <p>
                <strong>Refund Processing:</strong> Where applicable, refunds can take up to 14 business days to process and appear in your account.
              </p>
            </div>
          </section>

          {/* Service Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Terms</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Booking Confirmation:</strong> All jobs must be confirmed with payment or deposit before scheduling.
              </p>
              <p>
                <strong>Access Requirements:</strong> We require clear access to the removal area. If access is restricted, additional fees may apply.
              </p>
              <p>
                <strong>Weather Conditions:</strong> Outdoor jobs may be rescheduled due to adverse weather conditions.
              </p>
              <p>
                <strong>Job Modifications:</strong> Significant changes to the scope of work may result in price adjustments.
              </p>
            </div>
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability & Insurance</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Insurance:</strong> We are fully insured for public liability and property damage during our operations.
              </p>
              <p>
                <strong>Customer Responsibility:</strong> Customers are responsible for ensuring items are disconnected from utilities and properly prepared for removal.
              </p>
              <p>
                <strong>Damage Claims:</strong> Any damage claims must be reported within 24 hours of service completion.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these terms, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:021448097"
                className="inline-block px-5 py-3 rounded-xl bg-red-600 text-white font-semibold text-center hover:bg-red-700"
              >
                Call 021 448 097
              </a>
              <Link
                href="/#home"
                className="inline-block px-5 py-3 rounded-xl border border-red-600 text-red-600 font-semibold text-center hover:bg-red-600 hover:text-white"
              >
                Get Quote
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
