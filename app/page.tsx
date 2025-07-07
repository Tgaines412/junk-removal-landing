"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { sendQuoteEmail } from "@/lib/send-email"
import {
  Upload,
  Star,
  Clock,
  Leaf,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle,
  ChevronDown,
  Menu,
  X,
  Home,
  Users,
  Building,
  TreePine,
  Monitor,
  Package,
  AlertCircle,
} from "lucide-react"



// Success Message Component
function SuccessMessage({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-in zoom-in-95 duration-300 relative">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{message}</p>
        <div className="bg-blue-50 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center space-x-2 text-blue-700">
            <Clock className="w-5 h-5" />
                              <span className="font-semibold">We'll get back to you instantly!</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200"
        >
          Got it!
        </button>
      </div>
    </div>
  )
}

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Ponsonby",
      text: "Amazing service! They came the same day and cleared out my garage completely. Professional and affordable.",
      rating: 5,
    },
    {
      name: "Mike T.",
      location: "Mount Eden",
      text: "Got a quote within 30 minutes of uploading photos. The team was punctual and did a fantastic job.",
      rating: 5,
    },
    {
      name: "Lisa K.",
      location: "Newmarket",
      text: "Best junk removal service in Auckland! They handled everything from furniture to garden waste.",
      rating: 5,
    },
    {
      name: "David R.",
      location: "Remuera",
      text: "Incredible team! They removed all our old furniture and appliances in under 2 hours. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emma W.",
      location: "Takapuna",
      text: "Fast, efficient, and eco-friendly. They even donated items that were still in good condition.",
      rating: 5,
    },
    {
      name: "James L.",
      location: "Henderson",
      text: "Called them for an urgent cleanout and they were there within 3 hours. Outstanding service!",
      rating: 5,
    },
    {
      name: "Rachel P.",
      location: "Epsom",
      text: "Professional crew, fair pricing, and they cleaned up perfectly after themselves. Will use again!",
      rating: 5,
    },
    {
      name: "Tom S.",
      location: "Albany",
      text: "Bin Busters made our house move so much easier. They handled all the junk we couldn't take.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {visibleTestimonials.map((testimonial, index) => (
          <Card
            key={`${currentIndex}-${index}`}
            className="bg-white border-l-4 border-l-red-500 transform transition-all duration-500 hover:scale-105"
          >
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="font-semibold text-gray-900">
                {testimonial.name}
                <span className="text-gray-500 font-normal"> - {testimonial.location}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-red-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function JunkRemovalLanding() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  })
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitError, setSubmitError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files)
      setUploadedFiles(files)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)

    try {
      // Create FormData object
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("address", formData.address)
      formDataToSend.append("message", formData.message)

      if (uploadedFiles.length > 0) {
        uploadedFiles.forEach((file, index) => {
          formDataToSend.append(`photo${index}`, file)
        })
      }

      console.log("Submitting form data...")

      // Try server action first
      let result
      try {
        result = await sendQuoteEmail(formDataToSend)
        console.log("Server action result:", result)
      } catch (serverActionError) {
        console.log("Server action failed, trying API route...", serverActionError)

        // Fallback to API route
        const response = await fetch("/api/send-quote", {
          method: "POST",
          body: formDataToSend,
        })

        result = await response.json()
        console.log("API route result:", result)
      }

      if (result.success) {
        // Show success message
        setShowSuccess(true)
        
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        })
        setUploadedFiles([])
      } else {
        setSubmitError(true)
        setSubmitMessage(result.message)
        setTimeout(() => {
          setSubmitError(false)
          setSubmitMessage("")
        }, 8000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError(true)
      setSubmitMessage("Sorry, there was an error sending your request. Please call us directly at 021 448 097.")
      setTimeout(() => {
        setSubmitError(false)
        setSubmitMessage("")
      }, 8000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  // Handle scroll for floating button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowFloatingButton(scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: "Household Junk", icon: Home, description: "Furniture, appliances, general household items" },
    { name: "Office Junk", icon: Building, description: "Office furniture, equipment, commercial cleanouts" },
    { name: "Green Waste", icon: TreePine, description: "Garden waste, branches, lawn clippings" },
    { name: "Tenancy Clean Ups", icon: Users, description: "End of lease cleanouts, property clearing" },
    { name: "E-waste", icon: Monitor, description: "Electronics, computers, old appliances" },
    { name: "Anything Else", icon: Package, description: "Custom jobs, miscellaneous items, special requests" },
  ]

  const beforeAfterImages = [
    {
      before: "/before-after-1.jpg",
      after: "/before-after-1.jpg",
      title: "Complete Room Cleanout - Auckland",
      description: "Extreme hoarding cleanup transformed into livable space",
    },
    {
      before: "/before-after-2.jpg",
      after: "/before-after-2.jpg",
      title: "Yard Waste Removal - Residential",
      description: "Large cardboard and material pile completely cleared",
    },
    {
      before: "/before-after-3.jpg",
      after: "/before-after-3.jpg",
      title: "Appliance & Furniture Removal",
      description: "Old appliances and large items professionally removed",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <Image
                src="/bin-busters-new-logo.png"
                alt="Bin Busters Logo"
                width={400}
                height={120}
                className="h-24 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection("home")}
                className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("areas")}
                className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200"
              >
                Areas We Service
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200"
              >
                About Us
              </button>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200"
                >
                  Services
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          scrollToSection("services")
                          setIsServicesOpen(false)
                        }}
                        className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center space-x-4 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                      >
                        <div className="bg-red-100 p-2 rounded-lg">
                          <service.icon className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200"
              >
                Contact Us
              </button>
            </nav>

            {/* Phone Number & CTA */}
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
              <Button
                onClick={() => scrollToSection("home")}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-gray-100">
              <nav className="flex flex-col space-y-2 pt-6">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("areas")}
                  className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200"
                >
                  Areas We Service
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium rounded-lg transition-all duration-200"
                >
                  Contact Us
                </button>

                {/* Mobile Contact Section */}
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
                  <Button
                    onClick={() => scrollToSection("home")}
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl font-semibold"
                  >
                    Get Free Quote
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Integrated Form */}
      <section id="home" className="relative py-20 overflow-hidden min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/junk-removal-action.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}
            <div className="text-center lg:text-left">
                              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  Auckland's Fastest Junk Removal –<span className="text-red-400"> Same-Day Pickup, Free Instant Quote</span>
                </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed drop-shadow-md">
                Upload a photo of your junk, and we'll get back to you fast – no waiting, no hassle.
              </p>

              {/* Scarcity Alert */}
              <div className="bg-red-600/90 backdrop-blur-sm rounded-2xl p-4 mb-8 border border-red-400/50 shadow-lg">
                <div className="flex items-center justify-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-white animate-pulse" />
                  <span className="text-white font-semibold text-lg">
                    ⚠️ Limited Slots Available Today – Book Now Before 4PM for Same-Day Pickup!
                  </span>
                </div>
              </div>

              {/* Google Reviews */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-white">
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-gray-200 ml-1">(247 Google Reviews)</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Badge
                  variant="secondary"
                  className="bg-red-600/90 text-white px-4 py-2 text-sm font-semibold backdrop-blur-sm"
                >
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  #1 Rated in Auckland
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-black/80 text-white px-4 py-2 text-sm font-semibold backdrop-blur-sm"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Same-Day Service Guaranteed
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-800/80 text-white px-4 py-2 text-sm font-semibold backdrop-blur-sm"
                >
                  <Leaf className="w-4 h-4 mr-2" />
                  Eco-Friendly Disposal
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto max-w-xs sm:max-w-none"
                  onClick={() => window.open("tel:021448097")}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="hidden sm:inline">Call Now: </span>
                  <span className="sm:hidden">Call: </span>
                  021 448 097
                </Button>
              </div>
            </div>

            {/* Right Side - Quote Form */}
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-red-50 to-red-100 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-200/50">
                  <div className="text-center">
                    <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-800 mb-3">Thanks!</h3>
                    <p className="text-red-700 text-lg">{submitMessage}</p>
                  </div>
                </div>
              ) : submitError ? (
                <div className="bg-gradient-to-br from-red-50 to-red-100 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-200/50">
                  <div className="text-center">
                    <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <AlertCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-800 mb-3">Oops!</h3>
                    <p className="text-red-700 text-lg">{submitMessage}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                  {/* Form Header */}
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Quote</h3>
                    <p className="text-red-100">Upload a photo and we'll respond instantly!</p>
                  </div>

                  {/* Form Content */}
                  <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Photo Upload */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Upload Photos of Your Junk *
                        </label>
                        <div className="relative group">
                          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-4 text-center hover:border-red-400 hover:bg-red-50/50 transition-all duration-300 group-hover:scale-[1.02]">
                            <input
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={handleFileUpload}
                              className="hidden"
                              id="file-upload"
                              required
                            />
                            <label htmlFor="file-upload" className="cursor-pointer">
                              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-200 transition-colors">
                                <Upload className="w-6 h-6 text-red-600" />
                              </div>
                              {uploadedFiles.length > 0 ? (
                                <div className="space-y-2">
                                  <p className="text-red-600 font-semibold">
                                    {uploadedFiles.length} photo{uploadedFiles.length > 1 ? 's' : ''} selected
                                  </p>
                                  <p className="text-xs text-gray-500">Click to change photos</p>
                                </div>
                              ) : (
                                <div className="space-y-2">
                                  <p className="text-gray-700 font-semibold">Click to upload or drag and drop</p>
                                  <p className="text-gray-500 text-sm">PNG, JPG up to 5MB each (multiple files allowed)</p>
                                </div>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200 bg-gray-50/50 focus:bg-white"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Phone *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200 bg-gray-50/50 focus:bg-white"
                            placeholder="021 xxx xxx"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200 bg-gray-50/50 focus:bg-white"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">Address *</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Auckland address for pickup"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200 bg-gray-50/50 focus:bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Additional Details (Optional)
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your junk removal needs..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-200 bg-gray-50/50 focus:bg-white resize-none"
                          rows={2}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:ring-4 focus:ring-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? "Sending Quote Request..." : "Submit for Instant Quote"}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional junk removal services with eco-friendly disposal methods. No job too big or small.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-red-50 hover:to-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <CardContent className="p-6 relative text-center">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Something Else?</h3>
              <p className="text-gray-600 mb-6 text-lg">
                We handle all types of junk removal projects. From single items to complete property cleanouts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold"
                  onClick={() => window.open("tel:021448097")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Custom Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-semibold bg-transparent"
                  onClick={() => scrollToSection("home")}
                >
                  Upload Photos for Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Before & After</h2>
            <p className="text-gray-600">See the incredible transformations we bring to Auckland properties</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {beforeAfterImages.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.before || "/placeholder.svg"}
                      alt={`Before and After - ${item.title}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm">
                      BEFORE
                    </div>
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                      AFTER
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    <div className="mt-4 flex items-center text-red-600 text-sm font-semibold">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completed Successfully
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Clear Your Space?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't let junk take over your property. Get same-day service with Auckland's most trusted removal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("home")}
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold bg-transparent"
              onClick={() => window.open("tel:021448097")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 021 448 097
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Bin Busters</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're Auckland's premier junk removal service, dedicated to helping families and businesses reclaim their
                space. With years of experience and a commitment to eco-friendly disposal, we've become the #1 rated
                service in the region.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-white to-gray-50 hover:from-red-50 hover:to-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="bg-gradient-to-br from-red-100 to-red-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Same-Day Service</h3>
                <p className="text-gray-600 leading-relaxed">Quick response times with same-day pickup available</p>
              </div>
              
              <div className="group bg-gradient-to-br from-white to-gray-50 hover:from-red-50 hover:to-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
                <p className="text-gray-600 leading-relaxed">Responsible disposal with recycling and donation programs</p>
              </div>
              
              <div className="group bg-gradient-to-br from-white to-gray-50 hover:from-red-50 hover:to-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">#1 Rated</h3>
                <p className="text-gray-600 leading-relaxed">Highest customer satisfaction ratings in Auckland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Trusted by hundreds of Auckland families and businesses</p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Service Area Section */}
      <section id="areas" className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Auckland Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide fast, reliable junk removal services across Auckland and surrounding areas
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Map Container */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Our Coverage Area</h3>
                <p className="text-red-100">Auckland, New Zealand</p>
              </div>

              <div className="p-8">
                {/* Google Maps of Auckland */}
                <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102934.85168635894!2d174.6919284!3d-36.8484597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Auckland Service Area Map"
                    className="w-full h-96"
                  />
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Coverage</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  We service all of Auckland and surrounding areas. Call us to confirm coverage for your specific
                  location.
                </p>
                <div className="flex justify-center">
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg w-full sm:w-auto max-w-sm"
                    onClick={() => window.open("tel:021448097")}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="hidden sm:inline">Call to Confirm: </span>
                    <span className="sm:hidden">Call: </span>
                    021 448 097
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-gray-400 mb-4">
                Auckland's #1 rated junk removal service. Same-day pickup guaranteed.
              </p>

              {/* Map placeholder */}
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
                  <button onClick={() => scrollToSection("home")} className="hover:text-white">
                    Home
                  </button>
                </div>
                <div>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white">
                    Services
                  </button>
                </div>
                <div>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white">
                    About Us
                  </button>
                </div>
                <div>
                  <button onClick={() => scrollToSection("areas")} className="hover:text-white">
                    Areas We Service
                  </button>
                </div>
                <div>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 mb-6">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>

              <div className="bg-red-600 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Emergency Cleanouts?</h4>
                <p className="text-sm text-red-100 mb-3">Call us 24/7 for urgent junk removal</p>
                <Button
                  size="sm"
                  className="bg-white text-red-600 hover:bg-gray-100 w-full"
                  onClick={() => window.open("tel:021448097")}
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bin Busters. All rights reserved. | Licensed & Insured Junk Removal Service</p>
          </div>
        </div>
      </footer>

      {/* Success Message */}
      {showSuccess && (
        <SuccessMessage
          message="Thank you! We have received your junk removal request. Our team will review your photos and details, and get back to you instantly with a quote."
          onClose={() => setShowSuccess(false)}
        />
      )}

      {/* Floating Quote Button */}
      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-300">
          <Button
            onClick={() => scrollToSection("home")}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Get Free Quote</span>
            <span className="sm:hidden">Quote</span>
          </Button>
        </div>
      )}
    </div>
  )
}
