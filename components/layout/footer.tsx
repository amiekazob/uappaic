"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mountain, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { siteConfig } from "@/config/site"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { AnimatedSection } from "@/components/ui/animated-section"

export function Footer() {
  return (
    <footer className="bg-[#222222] border-t border-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" scrollOptions={{ margin: "-100px" }}>
          {/* Brand Section */}
          <StaggeredItem className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6 text-white" />
              <span className="font-bold text-lg text-white">{siteConfig.name}</span>
            </Link>
            <p className="text-sm max-w-xs">
              <span>
                University of Asia Pacific
              </span><br />
              <span>
                Main Campus, Level-5, 74/A
              </span> <br />
              <span>
                Green Road, Dhaka-1205
              </span> <br />
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </StaggeredItem>
    
          {/* Academic Section */}
          <StaggeredItem className="space-y-4">
            <h3 className="font-semibold text-white">Academic</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://eee.uap-bd.edu/bsc-in-eee.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  BSc in EEE
                </a>
              </li>
              <li>
                <a href="https://eee.uap-bd.edu/msc-in-eee.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  MSc in EEE
                </a>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-white">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-white">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white">
                  Research
                </Link>
              </li>
            </ul>
          </StaggeredItem>

          {/* Campus Section */}
          <StaggeredItem className="space-y-4">
            <h3 className="font-semibold text-white">Campus</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="hover:text-white">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-white">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </StaggeredItem>

          {/* Administrative Office Section */}
          <StaggeredItem className="space-y-4">
            <h3 className="font-semibold text-white">Administrative Office</h3>
            <div className="text-sm space-y-2">
              <div>
                <p className="font-bold text-white">Md. Rahamat Ullah</p>
                <p>Senior Administrative Officer</p>
                <p>Phone: 58157091-4, Ext: 555</p>
                <p>Mobile: 01717558922</p>
                <p>
                  Email: <a href="mailto:dao.eee@uap-bd.edu" className="hover:underline hover:text-white">dao.eee@uap-bd.edu</a>
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-white">Md. Kamruzzaman</p>
                <p>Assistant Administrative Officer</p>
                <p>Phone: 58157091-4, Ext: 555</p>
                <p>Mobile: 01746120504</p>
                <p>
                  Email: <a href="mailto:zaman_eee@uap-bd.edu" className="hover:underline hover:text-white">zaman_eee@uap-bd.edu</a>
                </p>
              </div>
            </div>
          </StaggeredItem>

          {/* Location Map Section */}
          <StaggeredItem className="space-y-4">
            <h3 className="font-semibold text-white">Find Us</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">University Location</p>
              <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.906!2d90.3938!3d23.7516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087a0a6ad%3A0xc642213c20e4c478!2s74%2FA%20Green%20Rd%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1703000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="University of Asia Pacific Location"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyDQgAEEUYFhgeGDkYyQMyDQgBEAAYkgMYgAQYigUyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDI3MDNqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=bd&sa=X&geocode=KTuvjqmwuFU3MXjE_CQhQ5LG&daddr=74/A+Green+Rd,+Dhaka+1205"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </StaggeredItem>
        </StaggeredGrid>

        {/* Bottom Section */}
        <AnimatedSection animation="fadeIn" delay={0.5} className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {siteConfig.name} © All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
            
                Paboya AI
              
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}