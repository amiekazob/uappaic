"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, ChevronDown, Search } from 'lucide-react'
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
  const [selectedCategory, setSelectedCategory] = useState<string>('- Any -');
  const [selectedYear, setSelectedYear] = useState<string>('- Year -');
  const [selectedType, setSelectedType] = useState<string>('All');

  // Get unique categories and years from events
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allEvents.map(event => event.category)));
    return ['- Any -', ...uniqueCategories];
  }, []);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(allEvents.map(event => event.date.getFullYear().toString())));
    return ['- Year -', ...uniqueYears.sort((a, b) => parseInt(b) - parseInt(a))];
  }, []);

  const types = ['All', 'News', 'Events'];

  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => {
      const categoryMatch = selectedCategory === '- Any -' || event.category === selectedCategory;
      const yearMatch = selectedYear === '- Year -' || event.date.getFullYear().toString() === selectedYear;
      const typeMatch = selectedType === 'All' || 
        (selectedType === 'News' && event.type === 'news') ||
        (selectedType === 'Events' && event.type === 'event');
      
      return categoryMatch && yearMatch && typeMatch;
    }).sort((a, b) => b.date.getTime() - a.date.getTime());
  }, [selectedCategory, selectedYear, selectedType]);

  const handleSearchArchive = () => {
    // This could trigger additional filtering or search functionality
    console.log('Search archive clicked with filters:', {
      category: selectedCategory,
      year: selectedYear,
      type: selectedType
    });
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection animation="fadeIn" className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">News and Events</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest happenings, achievements, and events from the UAP EEE department.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-w-[140px]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Year Filter */}
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-w-[120px]"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Type Filter */}
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-w-[120px]"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Search Archive Button */}
              <Button
                onClick={handleSearchArchive}
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search Archive
              </Button>
            </div>
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