"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, ChevronDown, Search, Loader2, Trophy, Award, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { achievementsData, type AchievementType, formatDate } from '@/lib/achievements-data'

// Format date utility
const formatAchievementDate = (dateString: string) => {
  const date = new Date(dateString)
  return {
    day: date.getDate().toString(),
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    year: date.getFullYear().toString()
  }
}

function AchievementCard({ achievement }: { achievement: AchievementType }) {
  const formattedDate = achievement.date ? formatAchievementDate(achievement.date) : null;
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'competition':
        return <Trophy className="w-5 h-5 text-yellow-600" />
      case 'award':
        return <Award className="w-5 h-5 text-blue-600" />
      case 'recognition':
        return <Star className="w-5 h-5 text-purple-600" />
      case 'academic':
        return <Award className="w-5 h-5 text-green-600" />
      case 'innovation':
        return <Star className="w-5 h-5 text-orange-600" />
      default:
        return <Trophy className="w-5 h-5 text-gray-600" />
    }
  }
  
  return (
    <StaggeredItem>
      <Card className="overflow-hidden h-full flex flex-col group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-yellow-500">
        <div className="relative">
          <Link href={`/campus-life/our-achievements/${achievement.id}`} className="block">
            <Image
              src={achievement.images[0] || '/placeholder.jpg'}
              alt={achievement.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          {formattedDate && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 p-3 text-center rounded-lg shadow-md">
              <div className="font-bold text-2xl leading-none">{formattedDate.day}</div>
              <div className="text-sm uppercase tracking-wider">{formattedDate.month}</div>
            </div>
          )}
          <div className="absolute top-4 left-4 bg-yellow-500/90 backdrop-blur-sm text-white p-2 rounded-full shadow-md">
            {getTypeIcon(achievement.type)}
          </div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn(
              "px-2 py-1 text-xs font-medium rounded-full",
              achievement.type === 'competition' && "bg-yellow-100 text-yellow-800",
              achievement.type === 'award' && "bg-blue-100 text-blue-800",
              achievement.type === 'recognition' && "bg-purple-100 text-purple-800",
              achievement.type === 'academic' && "bg-green-100 text-green-800",
              achievement.type === 'innovation' && "bg-orange-100 text-orange-800"
            )}>
              {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
            </span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
              {achievement.category}
            </span>
          </div>
          <h3 className="font-bold text-xl mb-2 line-clamp-2">
            <Link href={`/campus-life/our-achievements/${achievement.id}`} className="hover:text-yellow-600 transition-colors duration-300">{achievement.title}</Link>
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">{achievement.shortDescription}</p>
          {formattedDate && (
            <div className="text-sm text-gray-500 flex items-center mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formattedDate.month} {formattedDate.day}, {formattedDate.year}</span>
            </div>
          )}
          <Button asChild className="bg-yellow-600 hover:bg-yellow-700 mt-auto w-fit">
            <Link href={`/campus-life/our-achievements/${achievement.id}`}>
              Read More
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </StaggeredItem>
  )
}

export default function OurAchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('- Any -');
  const [selectedYear, setSelectedYear] = useState<string>('- Year -');
  const [selectedType, setSelectedType] = useState<string>('All');
  
  const allAchievements = achievementsData

  // Get unique categories and years from achievements
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allAchievements.map(achievement => achievement.category)));
    return ['- Any -', ...uniqueCategories];
  }, [allAchievements]);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(allAchievements
      .filter(achievement => achievement.date)
      .map(achievement => new Date(achievement.date!).getFullYear().toString())));
    return ['- Year -', ...uniqueYears.sort((a, b) => parseInt(b) - parseInt(a))];
  }, [allAchievements]);

  const types = ['All', 'Competition', 'Award', 'Recognition', 'Academic', 'Innovation'];

  const filteredAchievements = useMemo(() => {
    return allAchievements.filter(achievement => {
      const categoryMatch = selectedCategory === '- Any -' || achievement.category === selectedCategory;
      const yearMatch = selectedYear === '- Year -' || 
        (achievement.date && new Date(achievement.date).getFullYear().toString() === selectedYear);
      const typeMatch = selectedType === 'All' || achievement.type.toLowerCase() === selectedType.toLowerCase();
      
      return categoryMatch && yearMatch && typeMatch;
    }).sort((a, b) => a.order - b.order);
  }, [allAchievements, selectedCategory, selectedYear, selectedType]);

  const handleSearchArchive = () => {
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-12 h-12 text-yellow-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Achievements</h1>
            <Trophy className="w-12 h-12 text-yellow-600" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating the outstanding accomplishments, innovations, and recognitions of our EEE department students and faculty.
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
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 min-w-[140px]"
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
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 min-w-[120px]"
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
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 min-w-[140px]"
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
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search Archive
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {filteredAchievements.length > 0 ? (
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAchievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </StaggeredGrid>
        ) : (
          <AnimatedSection animation="fadeIn" className="text-center py-16">
            <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No achievements found</h3>
            <p className="text-gray-500">Please try adjusting your filters or check back later for new achievements.</p>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}