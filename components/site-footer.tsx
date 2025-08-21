import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <p className="text-gray-400 mb-4">
              Auckland's #1 rated junk removal service. Same-day pickup guaranteed.
            </p>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold">Our Location</span>
              </div>
              <div className="rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102934.85168635894!2d174.6919284!3d-36.8484597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="128"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Auckland Location Map"
                  className="w-full h-32"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:021448097" className="hover:text-white">
                  021 448 097
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:binbustersnz@gmail.com" className="hover:text-white">
                  binbustersnz@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Auckland, New Zealand</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-400">
              <div>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </div>
              <div>
                <Link href="/afterpay" className="hover:text-white">
                  Afterpay
                </Link>
              </div>
              <div>
                <Link href="/what-we-remove" className="hover:text-white">
                  What We Remove
                </Link>
              </div>
              <div>
                <Link href="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </div>
              <div>
                <Link href="/#services" className="hover:text-white">
                  Services
                </Link>
              </div>
              <div>
                <Link href="/#about" className="hover:text-white">
                  About Us
                </Link>
              </div>
              <div>
                <Link href="/#areas" className="hover:text-white">
                  Areas We Service
                </Link>
              </div>
              <div>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </div>
              <div>
                <Link href="/#contact" className="hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Need Help Fast?</h3>
            <div className="bg-red-600 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Emergency Cleanouts?</h4>
              <p className="text-sm text-red-100 mb-3">Call us 24/7 for urgent junk removal</p>
              <a
                className="inline-block text-center w-full bg-white text-red-600 hover:bg-gray-100 px-4 py-2 rounded"
                href="tel:021448097"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bin Busters. All rights reserved. | Licensed & Insured Junk Removal Service</p>
        </div>
      </div>
    </footer>
  )
}


