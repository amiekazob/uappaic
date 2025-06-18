"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, Clock } from 'lucide-react'
import { events as allEvents, formatDate, Event } from '@/lib/events-data'
import { cn } from '@/lib/utils'
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"

function EventCard({ event }: { event: Event }) {
  const formattedDate = formatDate(event.date);
  return (
    <StaggeredItem>
      <Card className="overflow-hidden h-full flex flex-col group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <Link href={event.link} className="block">
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 p-3 text-center rounded-lg shadow-md">
            <div className="font-bold text-2xl leading-none">{formattedDate.day}</div>
            <div className="text-sm uppercase tracking-wider">{formattedDate.month}</div>
          </div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="font-bold text-xl mb-2">
            <Link href={event.link} className="hover:text-blue-700 transition-colors duration-300">{event.title}</Link>
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
          <div className="text-sm text-gray-500 flex items-center mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formattedDate.month} {formattedDate.day}, {formattedDate.year}</span>
          </div>
          <Button asChild className="bg-indigo-700 hover:bg-indigo-800 mt-auto w-fit">
            <Link href={event.link}>
              Read More
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </StaggeredItem>
  )
}

export default function NewsPage() {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');

  const filteredEvents = useMemo(() => {
    const now = new Date();
    const upcoming = allEvents
      .filter(event => event.date >= now)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
    const past = allEvents
      .filter(event => event.date < now)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
    
    return filter === 'upcoming' ? upcoming : past;
  }, [filter]);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection animation="fadeIn" className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">News and Events</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest happenings, achievements, and events from the UAP EEE department.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="flex justify-center mb-12">
          <div className="flex rounded-full bg-white p-1 shadow-md">
            <Button
              onClick={() => setFilter('upcoming')}
              variant="ghost"
              className={cn(
                "rounded-full px-6 py-2 transition-colors duration-300",
                filter === 'upcoming' ? 'bg-indigo-700 text-white hover:bg-indigo-800 hover:text-white' : 'hover:bg-gray-100'
              )}
            >
              <Clock className="w-4 h-4 mr-2" />
              Upcoming
            </Button>
            <Button
              onClick={() => setFilter('past')}
              variant="ghost"
              className={cn(
                "rounded-full px-6 py-2 transition-colors duration-300",
                filter === 'past' ? 'bg-indigo-700 text-white hover:bg-indigo-800 hover:text-white' : 'hover:bg-gray-100'
              )}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Past
            </Button>
          </div>
        </AnimatedSection>

        {filteredEvents.length > 0 ? (
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </StaggeredGrid>
        ) : (
          <AnimatedSection animation="fadeIn" className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No {filter} events</h3>
            <p className="text-gray-500">Please check back later or view our {filter === 'upcoming' ? 'past' : 'upcoming'} events.</p>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}