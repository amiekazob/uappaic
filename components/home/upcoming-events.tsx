"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer, StaggeredItem } from "@/components/ui/staggered-container"

type UpcomingEvent = {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  category: string
  priority: 'high' | 'medium' | 'low'
  registrationRequired: boolean
  maxParticipants?: number
  currentParticipants?: number
  organizer: string
  tags: string[]
}

export function UpcomingEvents() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await fetch('/api/upcoming-events');
        if (response.ok) {
          const data = await response.json();
          // Get first 3 upcoming events
          setUpcomingEvents(data.slice(0, 3));
        } else {
          console.error('Failed to fetch upcoming events');
          setUpcomingEvents([]);
        }
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
        setUpcomingEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Loading upcoming events...</p>
          </div>
        </div>
      </section>
    );
  }

  if (upcomingEvents.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="mb-12">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
                  <Calendar className="w-8 h-8 mr-3 text-primary-600" />
                  Upcoming Events
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Stay tuned for exciting upcoming events and activities from the EEE Department.
                </p>
              </div>
              <Link href="/upcoming-events" passHref>
                <Button className="mt-4 md:mt-0 md:ml-4 whitespace-nowrap bg-primary-600 hover:bg-primary-700">
                  View All
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
          
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No upcoming events at the moment. Check back soon!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
                <Calendar className="w-8 h-8 mr-3 text-primary-600" />
                Upcoming Events
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Don't miss out on our exciting upcoming events and activities designed to enhance your learning experience.
              </p>
            </div>
            <Link href="/upcoming-events" passHref>
              <Button className="mt-4 md:mt-0 md:ml-4 whitespace-nowrap bg-primary-600 hover:bg-primary-700">
                View All
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" scrollOptions={{ margin: "-50px" }}>
          {upcomingEvents.slice(0, 3).map((event) => {
            const dateObj = new Date(event.date);
            const formattedDate = {
              day: dateObj.toLocaleDateString('en-US', { day: '2-digit' }),
              month: dateObj.toLocaleDateString('en-US', { month: 'short' }),
              year: dateObj.toLocaleDateString('en-US', { year: 'numeric' })
            };
            return (
              <StaggeredItem key={event.id} className="w-full">
                <Card className="overflow-hidden h-full flex flex-col group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Link href={`/upcoming-events/${event.id}`} className="block">
                      <Image
                        src={event.image}
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
                      <Link href={`/upcoming-events/${event.id}`} className="hover:text-primary-700 transition-colors duration-300">{event.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{event.time} • {event.location}</span>
                    </div>
                    <Button asChild className="bg-primary-600 hover:bg-primary-700 w-fit mt-auto">
                      <Link href={`/upcoming-events/${event.id}`}>
                        Learn More
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