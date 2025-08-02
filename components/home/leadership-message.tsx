"use client"

import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/video-player"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Quote } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function LeadershipMessage() {
  const videoJsOptions = {
    techOrder: ["youtube"],
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "",
        type: "video/youtube",
      },
    ],
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full">
            <Quote className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Message from the
            <span className="block text-indigo-700">Convener of the Club</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0 lg:min-h-[359px]">
              {/* Video Section */}
              <AnimatedSection animation="slideLeft" delay={0.2} className="relative h-full">
                <div className="h-full bg-gray-900 relative overflow-hidden lg:rounded-l-3xl">
                  <VideoPlayer options={videoJsOptions} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </AnimatedSection>

              {/* Content Section */}
              <AnimatedSection animation="slideRight" delay={0.4} className="p-8 lg:p-12 flex flex-col justify-center">
                {/* HOD Profile */}
                <div className="flex items-center mb-5">
                  <div className="relative mt-[-10px]">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Ms. Munmun Akter"
                      width={80}
                      height={80}
                      className="rounded-full border-4 border-indigo-100 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div className="ml-6 mt-[-10px] mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Ms. Munmun Akter
                    </h3>
                    <p className="text-indigo-600 font-semibold text-lg">
                      Lecturer & Convener, Programming and AI Club
                    </p>
                    <p className="text-gray-500 text-sm">
                      Department of Electrical & Electronic Engineering
                    </p>
                  </div>
                </div>

                {/* Quote/Message */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-indigo-200" />
                  <blockquote className="text-gray-700 text-md leading-relaxed italic pl-6 border-l-4 border-indigo-200">
                    "It gives me immense pleasure to welcome you to the Programming and AI Club of the Department of Electrical and Electronic Engineering (EEE), University of Asia Pacific. This club was founded with a clear vision—to create a collaborative and forward-thinking space where students can explore, innovate, and lead in the ever-evolving fields of programming, artificial intelligence, and technology-driven problem solving..."
                  </blockquote>
                </div>

                {/* CTA Button */}
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-6 px-8 text-lg font-semibold">
                  <Link href="/message-from-convener">
                    Read Full Message
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-200 rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl" />
      </div>
    </section>
  )
}