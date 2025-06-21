"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  // Scroll lock functionality
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY

      // Apply scroll lock styles
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"

      return () => {
        // Restore scroll position and remove styles
        document.body.style.overflow = ""
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.width = ""
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blogs", label: "Blog" },
  ]

  const serviceLinks = [
    { href: "/services", label: "All Services" },
    { href: "/services/business", label: "Business Websites" },
    { href: "/services/restaurant", label: "Restaurant Websites" },
    { href: "/services/pos", label: "POS UI Systems" },
    { href: "/services/portfolio", label: "Portfolio Websites" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent z-50 relative"
          >
            Codexura
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white hover:text-blue-400 transition-colors ${
                  pathname === link.href ? "text-blue-400" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Desktop Services Dropdown */}
            <div className="relative group">
              <button
                className={`text-white hover:text-blue-400 transition-colors flex items-center ${
                  pathname.startsWith("/services") ? "text-blue-400" : ""
                }`}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 text-white hover:bg-slate-800 hover:text-blue-400 transition-colors ${
                        pathname === link.href ? "text-blue-400 bg-slate-800" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
            >
              <Link href="/get-quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-slate-900 z-40">
          {/* Header spacer */}
          <div className="h-20 bg-black/95 backdrop-blur-md border-b border-slate-800"></div>

          <div className="flex flex-col h-[calc(100vh-5rem)] bg-slate-900">
            {/* Scrollable Navigation Area */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-2">
                {/* Mobile Navigation Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`block py-4 px-4 rounded-lg text-white hover:bg-slate-800 hover:text-blue-400 transition-colors text-lg font-medium ${
                      pathname === link.href ? "text-blue-400 bg-slate-800" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Services Dropdown */}
                <div className="border border-slate-700 rounded-lg overflow-hidden">
                  <button
                    onClick={toggleServices}
                    className={`w-full flex items-center justify-between py-4 px-4 text-white hover:bg-slate-800 hover:text-blue-400 transition-colors text-lg font-medium ${
                      pathname.startsWith("/services") ? "text-blue-400 bg-slate-800" : ""
                    }`}
                  >
                    Services
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-90" : ""}`}
                    />
                  </button>

                  {/* Services Submenu - Always rendered but with conditional height */}
                  <div
                    className={`bg-slate-800 transition-all duration-300 ease-in-out ${
                      isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="py-2">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMenu}
                          className={`block py-3 px-6 text-slate-300 hover:bg-slate-700 hover:text-blue-400 transition-colors font-medium border-l-2 border-blue-500/30 ml-4 ${
                            pathname === link.href ? "text-blue-400 bg-slate-700 border-l-2 border-blue-500" : ""
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Bottom CTA */}
            <div className="p-6 bg-slate-800 border-t border-slate-700">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 text-lg py-3"
                onClick={closeMenu}
              >
                <Link href="/get-quote">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
