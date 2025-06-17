import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award, Facebook, Twitter, Instagram, Youtube, Menu } from "lucide-react"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-pink-600 rounded flex items-center justify-center">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="font-bold text-sm">UNIVERSITY</div>
              <div className="text-xs opacity-90">Excellence in Education</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <Link href="/" className="hover:text-pink-300 transition-colors">
              Home
            </Link>
            <Link href="/admission" className="hover:text-pink-300 transition-colors">
              Admission
            </Link>
            <Link href="/faculty" className="hover:text-pink-300 transition-colors">
              Faculty
            </Link>
            <Link href="/research" className="hover:text-pink-300 transition-colors">
              Research
            </Link>
            <Link href="/alumni" className="hover:text-pink-300 transition-colors">
              Alumni
            </Link>
            <Link href="/news" className="hover:text-pink-300 transition-colors">
              News & Events
            </Link>
            <Link href="/activities" className="hover:text-pink-300 transition-colors">
              Student Activities
            </Link>
            <Link href="/more" className="hover:text-pink-300 transition-colors">
              More
            </Link>
          </div>

          <Button variant="ghost" size="sm" className="lg:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/campus-hero.jpg"
          alt="Beautiful university campus with historic buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Excellence in Higher Education</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Empowering minds, shaping futures, and building tomorrow's leaders through innovative education and
              research
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our University</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the key features that make our institution a leader in higher education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
                <p className="text-gray-600">
                  World-class faculty and cutting-edge curriculum designed to prepare students for success
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Research Innovation</h3>
                <p className="text-gray-600">
                  Leading research facilities and opportunities for groundbreaking discoveries
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Diverse Community</h3>
                <p className="text-gray-600">
                  A vibrant, inclusive campus community with students from around the world
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Success</h3>
                <p className="text-gray-600">
                  Comprehensive career services and strong alumni network for professional growth
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Message from Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Youtube className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600">Message from University Leadership</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Welcome Message</h3>
                <p className="text-gray-600 mb-4">
                  Our university offers undergraduate and graduate programs with a vision for creating quality
                  education. We are committed to excellence in teaching, research, and service to our community.
                </p>
                <p className="text-gray-600 mb-6">
                  With state-of-the-art facilities and dedicated faculty, we provide an environment where students can
                  thrive academically and personally.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News and Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News and Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest happenings, achievements, and upcoming events at our university. Discover
              opportunities for engagement and celebrate our community's success.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">University</h4>
              <div className="space-y-2 text-sm opacity-80">
                <Link href="/about" className="block hover:text-pink-300 transition-colors">
                  About Us
                </Link>
                <Link href="/history" className="block hover:text-pink-300 transition-colors">
                  History
                </Link>
                <Link href="/leadership" className="block hover:text-pink-300 transition-colors">
                  Leadership
                </Link>
                <Link href="/campus" className="block hover:text-pink-300 transition-colors">
                  Campus
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Academics</h4>
              <div className="space-y-2 text-sm opacity-80">
                <Link href="/programs" className="block hover:text-pink-300 transition-colors">
                  Programs
                </Link>
                <Link href="/departments" className="block hover:text-pink-300 transition-colors">
                  Departments
                </Link>
                <Link href="/library" className="block hover:text-pink-300 transition-colors">
                  Library
                </Link>
                <Link href="/research" className="block hover:text-pink-300 transition-colors">
                  Research
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Student Life</h4>
              <div className="space-y-2 text-sm opacity-80">
                <Link href="/housing" className="block hover:text-pink-300 transition-colors">
                  Housing
                </Link>
                <Link href="/dining" className="block hover:text-pink-300 transition-colors">
                  Dining
                </Link>
                <Link href="/activities" className="block hover:text-pink-300 transition-colors">
                  Activities
                </Link>
                <Link href="/support" className="block hover:text-pink-300 transition-colors">
                  Student Support
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
              <p className="text-sm opacity-80 mb-4">Subscribe to our newsletter for updates and announcements.</p>
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Enter your email"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300"
                />
                <Button className="bg-pink-600 hover:bg-pink-700">Subscribe</Button>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-pink-300 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-pink-300 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-pink-300 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-pink-300 transition-colors">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 University. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
