import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
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
  )
} 