"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, History } from "lucide-react"
import { PastEventsData, formatDate } from "@/lib/past-events-data"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer, StaggeredItem } from "@/components/ui/staggered-container"

export function PastEvents() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  // Get recent past events (limit to 3 for home page)
  const recentPastEvents = PastEventsData.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
                <History className="w-8 h-8 mr-3 text-primary-600" />
                Past Events
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Explore our successful past events and see how we've been making an impact in the EEE community.
              </p>
            </div>
            <Link href="/past-events" passHref>
              <Button className="mt-4 md:mt-0 md:ml-4 whitespace-nowrap bg-primary-600 hover:bg-primary-700">
                View All
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" scrollOptions={{ margin: "-50px" }}>
          {recentPastEvents.map((event) => {
            const formattedDate = formatDate(event.date);
            return (
              <StaggeredItem key={event.id} className="w-full">
                <Card className="overflow-hidden h-full flex flex-col group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Link href={event.link} className="block">
                      <Image
                        src={event.images[0]}
                        alt={event.title}
                        width={400}
                        height={250}
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                    <div className="absolute bottom-0 left-0 bg-primary-600 text-white p-3 text-center rounded-tr-xl">
                      <div className="font-bold text-2xl leading-none">{formattedDate.day}</div>
                      <div className="text-sm uppercase tracking-wider">{formattedDate.month}</div>
                      <div className="text-xs">{formattedDate.year}</div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="font-bold text-xl mb-2">
                      <Link href={event.link} className="hover:text-primary-700 transition-colors duration-300">{event.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{event.shortDescription}</p>
                    <Button asChild className="bg-primary-600 hover:bg-primary-700 w-fit mt-auto">
                      <Link href={event.link}>
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredItem>
            )
          })}
        </StaggeredContainer>
      </div>
    </section>
  )
}