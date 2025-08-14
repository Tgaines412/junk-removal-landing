"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/bin-busters-monster-logo.jpg"
                alt="Bin Busters Junk Removal Logo"
                width={400}
                height={120}
                className="h-28 w-auto scale-110"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200">
              Home
            </Link>
            <Link href="/#areas" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200">
              Areas We Service
            </Link>
            <Link href="/#about" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200">
              About Us
            </Link>
            <Link href="/#services" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200">
              Services
            </Link>
            <Link href="/what-we-remove" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200">
              What We Remove
            </Link>
            <Link href="/afterpay" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200">
              Afterpay
            </Link>
            <Link href="/#contact" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200">
              Contact Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:021448097"
              className="flex items-center gap-3 px-4 py-2 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-all duration-200 group"
            >
              <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-200 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-normal">Call Now</div>
                <div className="text-sm font-bold">021 448 097</div>
              </div>
            </a>
            <Link
              href="/#home"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-100">
            <nav className="flex flex-col space-y-2 pt-6">
              <Link href="/" onClick={closeMenu} className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200">
                Home
              </Link>
              <Link href="/#areas" onClick={closeMenu} className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200">
                Areas We Service
              </Link>
              <Link href="/#about" onClick={closeMenu} className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200">
                About Us
              </Link>
              <Link href="/#services" onClick={closeMenu} className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200">
                Services
              </Link>
              <Link href="/what-we-remove" onClick={closeMenu} className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200">
                What We Remove
              </Link>
              <Link href="/afterpay" onClick={closeMenu} className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200">
                Afterpay
              </Link>
              <Link href="/#contact" onClick={closeMenu} className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200">
                Contact Us
              </Link>

              <div className="pt-4 mt-4 border-t border-gray-100 space-y-4">
                <a
                  href="tel:021448097"
                  className="flex items-center gap-3 px-4 py-3 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-all duration-200"
                >
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-normal">Call Now</div>
                    <div className="text-sm font-bold">021 448 097</div>
                  </div>
                </a>
                <Link
                  href="/#home"
                  onClick={closeMenu}
                  className="w-full inline-block text-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl font-semibold"
                >
                  Get Free Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


