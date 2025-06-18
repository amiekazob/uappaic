"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { GlobalSearch, useGlobalSearch } from "@/components/ui/global-search"
import { Menu, X, ChevronDown, Search, User } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { isOpen: isSearchOpen, openSearch, closeSearch } = useGlobalSearch()

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
            <Link href="#" className="hover:text-blue-200">Alumni</Link>
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
            <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
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
                      <a href="https://eee.uap-bd.edu/bsc-in-eee.html" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">BSc in EEE</a>
                      <a href="https://eee.uap-bd.edu/msc-in-eee.html" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MSc in EEE</a>
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

              {/* Publications */}
              <Link
                href="/publications"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/publications' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                Publications
              </Link>

              {/* News and Events */}
              <Link
                href="/news"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/news' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                News & Events
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
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                    <div className="py-2">
                      <Link href="/clubs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Clubs</Link>
                      <Link href="/organizations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Organizations</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Alumni */}
              <Link
                href="/alumni"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-orange-50 hover:text-orange-600",
                  pathname === '/alumni' ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                )}
              >
                Alumni
              </Link>

              {/* More */}
              <div className="relative group">
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
                      <Link href="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">About Us</Link>
                      <Link href="/mission-vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mission and Vision</Link>
                      <Link href="/laboratories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Laboratories</Link>
                      <Link href="/photo-gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Photo Gallery</Link>
                      <Link href="/ucam" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">UCAM</Link>
                      <Link href="/academic-calendar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Academic Calendar</Link>
                      <Link href="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Contact Us</Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {/* Desktop Search Button */}
              <Button
                variant="outline"
                className="hidden lg:flex items-center justify-start text-sm text-muted-foreground w-48 h-10"
                onClick={openSearch}
              >
                <Search className="h-4 w-4 mr-2" />
                Search...
                <kbd className="pointer-events-none ml-auto h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                  ⌘K
                </kbd>
              </Button>

              {/* Mobile Search Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-gray-100"
                onClick={openSearch}
                title="Search"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Apply Button */}
              <Button className="hidden xl:inline-flex bg-blue-900 hover:bg-blue-800 text-white px-4">
                Apply Online
              </Button>
            </div>

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
                <Button
                  variant="outline"
                  className="flex items-center justify-start text-sm text-muted-foreground w-full h-10 mb-4"
                  onClick={() => {
                    openSearch();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search...
                </Button>

                <Link href="/" className="block py-2 font-medium">Home</Link>
                
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
                      <a href="https://eee.uap-bd.edu/bsc-in-eee.html" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-600">BSc in EEE</a>
                      <a href="https://eee.uap-bd.edu/msc-in-eee.html" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm text-gray-600">MSc in EEE</a>
                    </div>
                  )}
                </div>

                <Link href="/faculty" className="block py-2 font-medium">Faculty</Link>
                <Link href="/publications" className="block py-2 font-medium">Publications</Link>
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
                      <Link href="/clubs" className="block py-1 text-sm text-gray-600">Clubs</Link>
                      <Link href="/organizations" className="block py-1 text-sm text-gray-600">Organizations</Link>
                    </div>
                  )}
                </div>

                <Link href="/alumni" className="block py-2 font-medium">Alumni</Link>

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
                      <Link href="/about-us" className="block py-1 text-sm text-gray-600">About Us</Link>
                      <Link href="/mission-vision" className="block py-1 text-sm text-gray-600">Mission and Vision</Link>
                      <Link href="/laboratories" className="block py-1 text-sm text-gray-600">Laboratories</Link>
                      <Link href="/photo-gallery" className="block py-1 text-sm text-gray-600">Photo Gallery</Link>
                      <Link href="/ucam" className="block py-1 text-sm text-gray-600">UCAM</Link>
                      <Link href="/academic-calendar" className="block py-1 text-sm text-gray-600">Academic Calendar</Link>
                      <Link href="/contact-us" className="block py-1 text-sm text-gray-600">Contact Us</Link>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t space-y-3">
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    Apply Online
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <GlobalSearch isOpen={isSearchOpen} onClose={closeSearch} />

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