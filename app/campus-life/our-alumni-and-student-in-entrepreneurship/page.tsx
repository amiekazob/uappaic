"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, ChevronDown, Building, Rocket, Lightbulb, Search } from 'lucide-react'
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { entrepreneurshipData, type EntrepreneurshipType, formatDate } from '@/lib/entrepreneurship-data'
import { cn } from '@/lib/utils'



function EntrepreneurshipCard({ venture }: { venture: EntrepreneurshipType }) {
  const formattedDate = new Date(venture.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  return (
    <StaggeredItem>
      <Card className="overflow-hidden h-full flex flex-col group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <Link href={`/campus-life/entrepreneurship/${venture.id}`} className="block">
            <Image
              src={venture.images[0] || '/placeholder.jpg'}
              alt={venture.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 p-3 text-center rounded-lg shadow-md">
            <div className="font-bold text-2xl leading-none">{new Date(venture.date).getDate()}</div>
            <div className="text-sm uppercase tracking-wider">{new Date(venture.date).toLocaleDateString('en-US', { month: 'short' })}</div>
          </div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
              {venture.type}
            </span>
          </div>
          <div className="mb-2">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              {venture.category}
            </span>
          </div>
          <h3 className="font-bold text-xl mb-2">
            <Link href={`/campus-life/entrepreneurship/${venture.id}`} className="hover:text-blue-700 transition-colors duration-300">{venture.title}</Link>
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{venture.shortDescription}</p>
          
          <div className="space-y-1 text-sm text-gray-700 mb-4">
            <div>Founder: {venture.founder}</div>
            <div>Company: {venture.company}</div>
            <div>Valuation: {venture.valuation}</div>
            <div>Team: {venture.employees}</div>
          </div>
          
          <div className="text-sm text-gray-500 flex items-center mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formattedDate}</span>
          </div>
          
          <Button asChild className="bg-indigo-700 hover:bg-indigo-800 mt-auto w-fit">
            <Link href={`/campus-life/entrepreneurship/${venture.id}`}>
              Read More
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </StaggeredItem>
  )
}

export default function EntrepreneurshipPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('- Any -');
  const [selectedYear, setSelectedYear] = useState<string>('- Year -');
  const [selectedType, setSelectedType] = useState<string>('All');
  
  const allVentures = entrepreneurshipData

  // Get unique categories and years from ventures
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allVentures.map(venture => venture.category)));
    return ['- Any -', ...uniqueCategories];
  }, [allVentures]);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(allVentures.map(venture => new Date(venture.date).getFullYear().toString())));
    return ['- Year -', ...uniqueYears.sort((a, b) => parseInt(b) - parseInt(a))];
  }, [allVentures]);

  const types = ['All', 'Startup', 'Business', 'Innovation', 'Social Enterprise', 'Tech Venture'];

  const filteredVentures = useMemo(() => {
    return allVentures.filter(venture => {
      const categoryMatch = selectedCategory === '- Any -' || venture.category === selectedCategory;
      const yearMatch = selectedYear === '- Year -' || new Date(venture.date).getFullYear().toString() === selectedYear;
      const typeMatch = selectedType === 'All' || venture.type.toLowerCase().replace('-', ' ') === selectedType.toLowerCase();
      
      return categoryMatch && yearMatch && typeMatch;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [allVentures, selectedCategory, selectedYear, selectedType]);

  const handleSearch = () => {
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
        {/* Hero Section */}
        <AnimatedSection animation="fadeIn" className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Alumni & Student Entrepreneurship</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the innovative ventures and entrepreneurial success stories from our EEE alumni and students who are making a difference in the world.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection animation="slideUp" delay={0.2} className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              {/* Categories Filter */}
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

              {/* Venture Types Filter */}
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-w-[140px]"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Years Filter */}
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

              {/* Search Archive Button */}
              <Button
                onClick={handleSearch}
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search Archive
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {filteredVentures.length > 0 ? (
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVentures.map((venture) => (
              <EntrepreneurshipCard key={venture.id} venture={venture} />
            ))}
          </StaggeredGrid>
        ) : (
          <AnimatedSection animation="fadeIn" className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No ventures found</h3>
            <p className="text-gray-500">Please try adjusting your filters or check back later for new ventures.</p>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}