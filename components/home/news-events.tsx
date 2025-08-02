"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { events, formatDate } from "@/lib/events-data"
import { PastEventsData } from "@/lib/past-events-data"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer, StaggeredItem } from "@/components/ui/staggered-container"

export function NewsEvents() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  // Combine current events and past events, then sort by date (newest first)
  const allEvents = [...events, ...PastEventsData].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const recentEvents = allEvents.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">News and Events</h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Life at UAP is very much eventful. Through a lot of meaningful and impactful events, students get the
                opportunity to develop their skills and portfolio beyond the curriculum.
              </p>
            </div>
            <Link href="/news" passHref>
              <Button className="mt-4 md:mt-0 md:ml-4 whitespace-nowrap bg-primary-600 hover:bg-primary-700">
                Show All
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <StaggeredContainer className="overflow-hidden" scrollOptions={{ margin: "-50px" }}>
          <div className="flex -ml-4" ref={emblaRef}>
            {recentEvents.map((event) => {
              const formattedDate = formatDate(event.date);
              return (
                <StaggeredItem key={event.id} className="flex-shrink-0 flex-grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4">
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
                      <div className="absolute bottom-0 left-0 bg-primary-800 text-white p-3 text-center rounded-tr-xl">
                        <div className="font-bold text-2xl leading-none">{formattedDate.day}</div>
                        <div className="text-sm uppercase tracking-wider">{formattedDate.month}</div>
                        <div className="text-xs">{formattedDate.year}</div>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="font-bold text-xl mb-2">
                        <Link href={event.link} className="hover:text-blue-700 transition-colors duration-300">{event.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{event.shortDescription}</p>
                      <Button asChild className="bg-primary-600 hover:bg-primary-700 w-fit">
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
          </div>
        </StaggeredContainer>
      </div>
    </section>
  )
}