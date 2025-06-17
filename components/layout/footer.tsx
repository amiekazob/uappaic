"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mountain, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6" />
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              <span>
                University of Asia Pacific
              </span><br />
              <span>
                Main Campus, Level-5, 74/A
              </span> <br />
              <span>
                Green Road, Dhaka-1205
              </span> <br />
              <span>
                Email: <span> <a className="hover:underline" href="">headeee@uap-bd.edu</a> </span>
              </span>
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Academic Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Academic</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/bsc-in-eee" className="text-gray-600 hover:text-gray-900">
                  BSc in EEE
                </Link>
              </li>
              <li>
                <Link href="/msc-in-eee" className="text-gray-600 hover:text-gray-900">
                  MSc in EEE
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-gray-600 hover:text-gray-900">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-600 hover:text-gray-900">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-600 hover:text-gray-900">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Campus Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Campus</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-600 hover:text-gray-900">
                  News
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-gray-900">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="text-gray-600 hover:text-gray-900">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-gray-600 hover:text-gray-900">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Newsletter</h3>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Email"
                className="w-full"
              />
              <Button className="w-full bg-black hover:bg-gray-800 text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              By submitting, you agree to our{" "}
              <Link href="/privacy" className="underline hover:no-underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              {siteConfig.name} © All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Made with ❤️ by{" "}
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                @ <a href="https://github.com/SubodhShil">Subodh</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}