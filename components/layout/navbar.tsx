"use client"

import * as React from "react"
import Link from "next/link"
import { LoadingLink } from "@/components/ui/loading-link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Close dropdowns and mobile menu when navigating to a new page
  useEffect(() => {
    setOpenDropdown(null)
    setIsMobileMenuOpen(false)
  }, [pathname])


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
      <div className="bg-blue-900 text-white py-2 text-sm" suppressHydrationWarning={true}>
        <div className="container mx-auto px-4 flex justify-between items-center" suppressHydrationWarning={true}>
          <div className="flex items-center space-x-4" suppressHydrationWarning={true}>
            <span>📧 dao.eee@uap-bd.edu</span>
            <span>📞 +880-2-58157091</span>
          </div>
          <div className="flex items-center space-x-4" suppressHydrationWarning={true}>
            <Link href="https://ucam.uap-bd.edu/Security/LogIn.aspx" className="hover:text-blue-200">Student Portal</Link>
            <Link href="https://ucam.uap-bd.edu/Security/LogIn.aspx" className="hover:text-blue-200">Faculty Portal</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto px-4" suppressHydrationWarning={true}>
          <div className="flex h-20 items-center justify-between" suppressHydrationWarning={true}>
            {/* Logo and Department Name */}
            <LoadingLink href="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 flex items-center justify-center" suppressHydrationWarning={true}>
                <img src="/images/logo.png" alt="University of Asia Pacific Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col" suppressHydrationWarning={true}>
                <span className="text-lg font-bold text-gray-900">Department of EEE</span>
                <span className="text-sm text-gray-600">UAP</span>
              </div>
            </LoadingLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <LoadingLink
                href="/"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                Home
              </LoadingLink>

              {/* About Us */}
              <div className="relative group" suppressHydrationWarning={true}>
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
                      <LoadingLink href="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        About Us
                      </LoadingLink>
                      <LoadingLink href="/mission-vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        Mission & Vision
                      </LoadingLink>
                    </div>
                  </div>
                )}
              </div>

              {/* Admission */}
              <div className="relative group" suppressHydrationWarning={true}>
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
                      <LoadingLink href="/programs/bsc-eee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">BSc in EEE</LoadingLink>
                      <LoadingLink href="/programs/msc-eee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MSc in EEE</LoadingLink>
                    </div>
                  </div>
                )}
              </div>

              {/* Faculty */}
              <LoadingLink
                href="/faculty"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/faculty' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                Faculties
              </LoadingLink>

              {/* Research and Publications */}
              <div className="relative group" suppressHydrationWarning={true}>
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
                      <LoadingLink href="/research" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Research</LoadingLink>
                      <LoadingLink href="/publications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Publications</LoadingLink>
                    </div>
                  </div>
                )}
              </div>

              {/* News and Events */}
              <LoadingLink
                href="/news"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/news' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                News and events
              </LoadingLink>

              
              {/* Campus Life */}
<div className="relative group" suppressHydrationWarning={true}>
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
        <LoadingLink href="/campus-life/our-achievements" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Our Achievements
        </LoadingLink>
        <LoadingLink href="/campus-life/our-alumni-and-student-in-entrepreneurship" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Our Alumni & Students in Entrepreneurship
        </LoadingLink>
        <LoadingLink href="/campus-life/student-life-in-eee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Student Life in EEE
        </LoadingLink>
        <LoadingLink href="/campus-life/clubs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Clubs
        </LoadingLink>
        <LoadingLink href="/campus-life/student-organizations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Organizations
        </LoadingLink>

        <LoadingLink href="/campus-life/trips" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Trips & Tours
        </LoadingLink>
      </div>
    </div>
  )}
</div>

              {/* laboratory */}
              <LoadingLink
                href="/lab"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/lab' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                Laboratories
              </LoadingLink>

              {/* More */}
              <div className="relative group" suppressHydrationWarning={true}>
                <button
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center space-x-1",
                    "hover:bg-orange-50 hover:text-orange-600",
                    openDropdown === 'more' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                  )}
                  onClick={() => toggleDropdown('more')}
                >
                  <span>More</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'more' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-2">
                      <LoadingLink href="/class-routine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Class Routine</LoadingLink>
                      <LoadingLink href="/exam-routine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Exam Routine</LoadingLink>
                      <LoadingLink href="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Contact Us</LoadingLink>
                    </div>
                  </div>
                )}
              </div>
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


                <LoadingLink href="/" className="block py-2 font-medium">Home</LoadingLink>
                
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
                      <LoadingLink href="/about-us" className="block py-1 text-sm text-gray-600">About Us</LoadingLink>
                      <LoadingLink href="/mission-vision" className="block py-1 text-sm text-gray-600">Mission & Vision</LoadingLink>
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
                      <LoadingLink href="/programs/bsc-eee" className="block py-1 text-sm text-gray-600">BSc in EEE</LoadingLink>
                      <LoadingLink href="/programs/msc-eee" className="block py-1 text-sm text-gray-600">MSc in EEE</LoadingLink>
                    </div>
                  )}
                </div>

                <LoadingLink href="/faculty" className="block py-2 font-medium">Faculties</LoadingLink>
                
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
                      <LoadingLink href="/research" className="block py-1 text-sm text-gray-600">Research</LoadingLink>
                      <LoadingLink href="/publications" className="block py-1 text-sm text-gray-600">Publications</LoadingLink>
                    </div>
                  )}
                </div>
                
                <LoadingLink href="/news" className="block py-2 font-medium">News and Events</LoadingLink>

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
                      <LoadingLink href="/campus-life/our-achievements" className="block py-1 text-sm text-gray-600">Our Achievements</LoadingLink>
                      <LoadingLink href="/campus-life/our-alumni-and-student-in-entrepreneurship" className="block py-1 text-sm text-gray-600">Our Alumni & Students in Entrepreneurship</LoadingLink>
                      <LoadingLink href="/campus-life/student-life-in-eee" className="block py-1 text-sm text-gray-600">Student Life in EEE</LoadingLink>
                      <LoadingLink href="/campus-life/clubs" className="block py-1 text-sm text-gray-600">Clubs</LoadingLink>
                      <LoadingLink href="/campus-life/student-organizations" className="block py-1 text-sm text-gray-600">Organizations</LoadingLink>

                      <LoadingLink href="/campus-life/trips" className="block py-1 text-sm text-gray-600">Trips & Tours</LoadingLink>
                    </div>
                  )}
                </div>

                <LoadingLink href="/lab" className="block py-2 font-medium">Laboratories</LoadingLink>

                <div>
                  <button
                    className="flex items-center justify-between w-full py-2 text-left font-medium"
                    onClick={() => toggleDropdown('mobile-more')}
                  >
                    <span>More</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'mobile-more' && 'rotate-180')} />
                  </button>
                  {openDropdown === 'mobile-more' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <LoadingLink href="/class-routine" className="block py-1 text-sm text-gray-600">Class Routine</LoadingLink>
                      <LoadingLink href="/exam-routine" className="block py-1 text-sm text-gray-600">Exam Routine</LoadingLink>
                      <LoadingLink href="/contact-us" className="block py-1 text-sm text-gray-600">Contact Us</LoadingLink>
                    </div>
                  )}
                </div>

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