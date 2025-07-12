"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
  }

  return (
    <>
      {/* Top Header */}
      <div className="bg-blue-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📧 info@uap-bd.edu</span>
            <span>📞 +880-2-8157091-4</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-blue-200">Student Portal</Link>
            <Link href="#" className="hover:text-blue-200">Faculty Portal</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo and University Name */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">UAP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-blue-900">University of Asia Pacific</span>
                <span className="text-sm text-gray-600">Department of EEE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                Home
              </Link>

              {/* About Us */}
              <div className="relative group">
                <button
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center space-x-1",
                    "hover:bg-orange-50 hover:text-orange-600",
                    openDropdown === 'about-us' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                  )}
                  onClick={() => toggleDropdown('about-us')}
                >
                  <span>About Us</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {openDropdown === 'about-us' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-2">
                      <Link href="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        About Us
                      </Link>
                      <Link href="/mission-vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        Mission & Vision
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Admission */}
              <div className="relative group">
                <button
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center space-x-1",
                    "hover:bg-orange-50 hover:text-orange-600",
                    openDropdown === 'admission' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                  )}
                  onClick={() => toggleDropdown('admission')}
                >
                  <span>Admission</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'admission' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-2">
                      <Link href="/programs/bsc-eee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">BSc in EEE</Link>
                      <Link href="/programs/msc-eee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MSc in EEE</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Faculty */}
              <Link
                href="/faculty"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/faculty' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                Faculty
              </Link>

              {/* Research and Publications */}
              <div className="relative group">
                <button
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center space-x-1",
                    "hover:bg-orange-50 hover:text-orange-600",
                    openDropdown === 'research-publications' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                  )}
                  onClick={() => toggleDropdown('research-publications')}
                >
                  <span>Research and Publications</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'research-publications' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-2">
                      <Link href="/research" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Research</Link>
                      <Link href="/publications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Publications</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* News and Events */}
              <Link
                href="/news"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/news' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                News and events
              </Link>

              
              {/* Campus Life */}
<div className="relative group">
  <button
    className={cn(
      "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center space-x-1",
      "hover:bg-orange-50 hover:text-orange-600",
      openDropdown === 'campus-life' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
    )}
    onClick={() => toggleDropdown('campus-life')}
  >
    <span>Campus Life</span>
    <ChevronDown className="w-4 h-4" />
  </button>

  {openDropdown === 'campus-life' && (
    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border z-50">
      <div className="py-2">
        <Link href="/campus-life/clubs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Clubs
        </Link>
        <Link href="/campus-life/organizations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Organizations
        </Link>
        <Link href="/campus-life/conferences" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Conferences & Talks
        </Link>
        <Link href="/campus-life/trips" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Trips & Tours
        </Link>
      </div>
    </div>
  )}
</div>

              {/* laboratory */}
              <Link
                href="/lab"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/lab' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                Laboratory
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact-us"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/contact-us' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                Contact Us
              </Link>
            </nav>



            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">


                <Link href="/" className="block py-2 font-medium">Home</Link>
                
                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-left font-medium"
                    onClick={() => toggleDropdown('mobile-about-us')}
                  >
                    <span>About Us</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'mobile-about-us' && 'rotate-180')} />
                  </button>
                  {openDropdown === 'mobile-about-us' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link href="/about-us" className="block py-1 text-sm text-gray-600">About Us</Link>
                      <Link href="/mission-vision" className="block py-1 text-sm text-gray-600">Mission & Vision</Link>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-left font-medium"
                    onClick={() => toggleDropdown('mobile-admission')}
                  >
                    <span>Admission</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'mobile-admission' && 'rotate-180')} />
                  </button>
                  {openDropdown === 'mobile-admission' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link href="/programs/bsc-eee" className="block py-1 text-sm text-gray-600">BSc in EEE</Link>
                      <Link href="/programs/msc-eee" className="block py-1 text-sm text-gray-600">MSc in EEE</Link>
                    </div>
                  )}
                </div>

                <Link href="/faculty" className="block py-2 font-medium">Faculty</Link>
                
                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-left font-medium"
                    onClick={() => toggleDropdown('mobile-research-publications')}
                  >
                    <span>Research and Publications</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'mobile-research-publications' && 'rotate-180')} />
                  </button>
                  {openDropdown === 'mobile-research-publications' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link href="/research" className="block py-1 text-sm text-gray-600">Research</Link>
                      <Link href="/publications" className="block py-1 text-sm text-gray-600">Publications</Link>
                    </div>
                  )}
                </div>
                
                <Link href="/news" className="block py-2 font-medium">News and Events</Link>

                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-left font-medium"
                    onClick={() => toggleDropdown('mobile-campus-life')}
                  >
                    <span>Campus Life</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'mobile-campus-life' && 'rotate-180')} />
                  </button>
                  {openDropdown === 'mobile-campus-life' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link href="/campus-life/clubs" className="block py-1 text-sm text-gray-600">Clubs</Link>
                      <Link href="/campus-life/organizations" className="block py-1 text-sm text-gray-600">Organizations</Link>
                      <Link href="/campus-life/conferences" className="block py-1 text-sm text-gray-600">Conferences & Talks</Link>
                      <Link href="/campus-life/trips" className="block py-1 text-sm text-gray-600">Trips & Tours</Link>
                    </div>
                  )}
                </div>

                <Link href="/lab" className="block py-2 font-medium">Laboratory</Link>
                <Link href="/contact-us" className="block py-2 font-medium">Contact Us</Link>


              </div>
            </div>
          </div>
        )}
      </header>



      {/* Overlay for closing dropdowns */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeDropdown}
        />
      )}
    </>
  )
}