"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  id: number
  image: string
  title: string
  description: string
  ctaText?: string
  ctaAction?: () => void
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/hero/1.jpg",
    title: "Programming & AI Club",
    description: "Master the art of coding and artificial intelligence through hands-on projects, workshops, and collaborative learning experiences",
    ctaText: "Join Club"
  },
  {
    id: 2,
    image: "/images/lab/computer-programming-lab.jpg",
    title: "Code. Learn. Innovate.",
    description: "Dive deep into programming languages, machine learning algorithms, and cutting-edge AI technologies with fellow enthusiasts",
    ctaText: "Start Coding"
  },
  {
    id: 3,
    image: "/images/lab/matlab-lab.jpg",
    title: "AI Projects & Competitions",
    description: "Participate in hackathons, coding contests, and AI challenges while building real-world applications that make a difference",
    ctaText: "View Projects"
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Use a ref to hold the callback to avoid stale closures in setInterval
  const savedCallback = useRef(nextSlide);
  useEffect(() => {
    savedCallback.current = nextSlide;
  }, [nextSlide]);

  // Auto-rotate slides every 8 seconds
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }
    const intervalId = setInterval(tick, 8000);

    return () => clearInterval(intervalId);
  }, []);

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-500 transform ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
              }`}
          >
            {slides[currentSlide].title}
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 opacity-90 transition-all duration-500 delay-100 transform ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-90'
              }`}
          >
            {slides[currentSlide].description}
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 delay-200 transform ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
              }`}
          >
            <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3">
              {slides[currentSlide].ctaText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-accent-400 hover:text-primary-900 px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'bg-white scale-110'
              : 'bg-white/50 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}