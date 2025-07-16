"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, Search, Users, Heart, Trophy, BookOpen, ArrowRight, Star, MapPin, User, Sparkles, GraduationCap } from 'lucide-react'
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { studentLifeData, type StudentLifeType } from '@/lib/student-life-data'
import { cn } from '@/lib/utils'

function JourneyGridCard({ activity, index }: { activity: StudentLifeType; index: number }) {
  const getJourneyIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <BookOpen className="w-6 h-6 text-blue-600" />
      case 'extracurricular':
        return <Users className="w-6 h-6 text-green-600" />
      case 'research':
        return <Star className="w-6 h-6 text-purple-600" />
      case 'leadership':
        return <Trophy className="w-6 h-6 text-orange-600" />
      case 'community':
        return <Heart className="w-6 h-6 text-red-600" />
      case 'career':
        return <GraduationCap className="w-6 h-6 text-indigo-600" />
      default:
        return <ArrowRight className="w-6 h-6 text-gray-600" />
    }
  }

  const getJourneyColor = (type: string) => {
    switch (type) {
      case 'academic':
        return 'from-blue-50 to-blue-100 border-blue-300'
      case 'extracurricular':
        return 'from-green-50 to-green-100 border-green-300'
      case 'research':
        return 'from-purple-50 to-purple-100 border-purple-300'
      case 'leadership':
        return 'from-orange-50 to-orange-100 border-orange-300'
      case 'community':
        return 'from-red-50 to-red-100 border-red-300'
      case 'career':
        return 'from-indigo-50 to-indigo-100 border-indigo-300'
      default:
        return 'from-gray-50 to-gray-100 border-gray-300'
    }
  }

  const getTimelineColor = (type: string) => {
    switch (type) {
      case 'academic':
        return 'bg-blue-500'
      case 'extracurricular':
        return 'bg-green-500'
      case 'research':
        return 'bg-purple-500'
      case 'leadership':
        return 'bg-orange-500'
      case 'community':
        return 'bg-red-500'
      case 'career':
        return 'bg-indigo-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <StaggeredItem>
      <Card className={cn(
        "overflow-hidden h-full flex flex-col group rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 bg-gradient-to-br transform hover:scale-105 relative",
        getJourneyColor(activity.experienceType)
      )}>
        {/* Journey stage indicator */}
        <div className={cn(
          "absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10",
          getTimelineColor(activity.experienceType)
        )}>
          {getJourneyIcon(activity.experienceType)}
        </div>
        
        <div className="relative">
          <Link href={`/campus-life/student-life-in-eee/${activity.slug}`} className="block">
            <Image
              src={activity.coverImage || activity.images?.[0] || '/placeholder.jpg'}
              alt={activity.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
            <span className="text-xs font-bold text-gray-800">{activity.metadata?.duration || 'Ongoing'}</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full">
            <span className="text-xs font-semibold text-white">{activity.category}</span>
          </div>
        </div>
        
        <CardContent className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className={cn(
              "px-3 py-1 text-xs font-bold rounded-full text-white",
              getTimelineColor(activity.experienceType)
            )}>
              {activity.experienceType.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          
          <h3 className="font-bold text-lg mb-2 line-clamp-2">
            <Link href={`/campus-life/student-life-in-eee/${activity.slug}`} className="hover:text-indigo-600 transition-colors duration-300">
              {activity.title}
            </Link>
          </h3>
          
          {activity.subtitle && (
            <p className="text-gray-600 text-sm mb-2 font-medium">{activity.subtitle}</p>
          )}
          
          <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">{activity.description}</p>
          
          {/* Journey details */}
          <div className="space-y-1 mb-4">
            {activity.metadata?.participants && (
              <div className="text-sm text-gray-600 flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span className="font-medium truncate">{activity.metadata.participants} participants</span>
              </div>
            )}
            {activity.metadata?.location && (
              <div className="text-sm text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{activity.metadata.location}</span>
              </div>
            )}
            {activity.engagement?.difficulty && (
              <div className="text-sm text-gray-600 flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span className="font-medium">{activity.engagement.difficulty} level</span>
              </div>
            )}
          </div>
          
          <Button asChild size="sm" className={cn(
            "mt-auto w-full transition-all duration-300 text-white",
            getTimelineColor(activity.experienceType)
          )}>
            <Link href={`/campus-life/student-life-in-eee/${activity.slug}`}>
              Explore Experience
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </StaggeredItem>
  )
}

export default function StudentLifePage() {
  const [selectedPerspective, setSelectedPerspective] = useState<'student' | 'faculty'>('student')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const allActivities = studentLifeData

  // Get unique categories from activities
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allActivities.map(activity => activity.category)))
    return ['all', ...uniqueCategories]
  }, [allActivities])

  const types = ['all', 'freshman-year', 'sophomore-year', 'junior-year', 'senior-year', 'graduate-level', 'alumni-journey']

  const filteredActivities = useMemo(() => {
    return allActivities.filter(activity => {
      const categoryMatch = selectedCategory === 'all' || activity.category === selectedCategory
      const typeMatch = selectedType === 'all' || activity.experienceType === selectedType
      return categoryMatch && typeMatch
    })
  }, [allActivities, selectedCategory, selectedType])

  const handleSearch = () => {
    // This could trigger additional filtering or search functionality
    console.log('Search archive clicked with filters:', {
      perspective: selectedPerspective,
      category: selectedCategory,
      type: selectedType
    })
  }

  const journeyStages = [
    {
      id: 'freshman',
      title: 'Freshman Year',
      description: 'Building foundations and discovering passions',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'sophomore',
      title: 'Sophomore Year',
      description: 'Deepening knowledge and exploring specializations',
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'junior',
      title: 'Junior Year',
      description: 'Advanced projects and research opportunities',
      icon: <Star className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'senior',
      title: 'Senior Year',
      description: 'Capstone projects and career preparation',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'graduate',
      title: 'Graduate Level',
      description: 'Advanced research and specialization',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'alumni',
      title: 'Alumni Journey',
      description: 'Professional success and giving back',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-red-500 to-red-600'
    }
  ]

  const facultyEngagementAreas = [
    {
      id: 'mentorship',
      title: 'Student Mentorship',
      description: 'Guiding students through academic and personal growth',
      icon: <User className="w-8 h-8" />,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'research',
      title: 'Research Collaboration',
      description: 'Working with students on cutting-edge projects',
      icon: <Star className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'innovation',
      title: 'Innovation Projects',
      description: 'Supporting student-led innovation initiatives',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'community',
      title: 'Community Engagement',
      description: 'Connecting students with real-world impact',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <AnimatedSection animation="fadeIn" className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Student Life in EEE</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the vibrant student life experiences, academic achievements, and personal growth stories from our EEE department students.
          </p>
        </AnimatedSection>

        {/* Perspective Selector */}
        <AnimatedSection animation="slideUp" delay={0.1} className="mb-12">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-2 shadow-md">
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedPerspective('student')}
                  className={cn(
                    "px-6 py-3 rounded-md font-medium transition-all duration-300",
                    selectedPerspective === 'student'
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                  )}
                >
                  Student Perspective
                </button>
                <button
                  onClick={() => setSelectedPerspective('faculty')}
                  className={cn(
                    "px-6 py-3 rounded-md font-medium transition-all duration-300",
                    selectedPerspective === 'faculty'
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                  )}
                >
                  Faculty Perspective
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Journey Stages or Faculty Engagement Areas */}
        <AnimatedSection animation="slideUp" delay={0.2} className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedPerspective === 'student' ? 'Your Journey Through EEE' : 'Faculty Engagement Areas'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {selectedPerspective === 'student'
                ? 'Follow the transformative path from freshman year to alumni success'
                : 'Discover how our faculty engages with and supports student development'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedPerspective === 'student' ? journeyStages : facultyEngagementAreas).map((stage, index) => (
              <div
                key={stage.id}
                className="group cursor-pointer"
                onClick={() => setSelectedType(selectedPerspective === 'student' ? `${stage.id}-year` : 'all')}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className={cn(
                      "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white bg-gradient-to-r",
                      stage.color
                    )}>
                      {stage.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{stage.title}</h3>
                    <p className="text-gray-600 text-sm">{stage.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection animation="slideUp" delay={0.3} className="mb-12">
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
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Experience Types Filter */}
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-w-[140px]"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
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

        {filteredActivities.length > 0 ? (
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => (
              <JourneyGridCard key={activity.slug} activity={activity} index={index} />
            ))}
          </StaggeredGrid>
        ) : (
          <AnimatedSection animation="fadeIn" className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No activities found</h3>
            <p className="text-gray-500">Please try adjusting your filters or check back later for new activities.</p>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}