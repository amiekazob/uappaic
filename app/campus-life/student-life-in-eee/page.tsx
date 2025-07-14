"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, ChevronDown, Search, Loader2, GraduationCap, Users, Heart, Trophy, BookOpen, Palette, ArrowRight, Star, Clock, User, MapPin, Filter } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { studentLifeData, type StudentLifeType, formatDate } from '@/lib/student-life-data'

// Format date utility
const formatStudentLifeDate = (dateString: string) => {
  const date = new Date(dateString)
  return {
    day: date.getDate().toString(),
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    year: date.getFullYear().toString()
  }
}

function JourneyTimelineCard({ activity, index }: { activity: StudentLifeType; index: number }) {
  const getJourneyIcon = (type: string) => {
    switch (type) {
      case 'transition':
        return <ArrowRight className="w-6 h-6 text-emerald-600" />
      case 'orientation':
        return <Star className="w-6 h-6 text-blue-600" />
      case 'academic-journey':
        return <BookOpen className="w-6 h-6 text-purple-600" />
      case 'personal-growth':
        return <Users className="w-6 h-6 text-orange-600" />
      case 'career-preparation':
        return <Trophy className="w-6 h-6 text-red-600" />
      case 'graduation':
        return <GraduationCap className="w-6 h-6 text-indigo-600" />
      default:
        return <Heart className="w-6 h-6 text-gray-600" />
    }
  }

  const getJourneyColor = (type: string) => {
    switch (type) {
      case 'transition':
        return 'from-emerald-50 to-emerald-100 border-emerald-200'
      case 'orientation':
        return 'from-blue-50 to-blue-100 border-blue-200'
      case 'academic-journey':
        return 'from-purple-50 to-purple-100 border-purple-200'
      case 'personal-growth':
        return 'from-orange-50 to-orange-100 border-orange-200'
      case 'career-preparation':
        return 'from-red-50 to-red-100 border-red-200'
      case 'graduation':
        return 'from-indigo-50 to-indigo-100 border-indigo-200'
      default:
        return 'from-gray-50 to-gray-100 border-gray-200'
    }
  }

  const getTimelineColor = (type: string) => {
    switch (type) {
      case 'transition':
        return 'bg-emerald-500'
      case 'orientation':
        return 'bg-blue-500'
      case 'academic-journey':
        return 'bg-purple-500'
      case 'personal-growth':
        return 'bg-orange-500'
      case 'career-preparation':
        return 'bg-red-500'
      case 'graduation':
        return 'bg-indigo-500'
      default:
        return 'bg-gray-500'
    }
  }

  const isEven = index % 2 === 0

  return (
    <div className="relative flex items-center mb-12">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-200 to-gray-300"></div>
      
      {/* Timeline dot */}
      <div className={cn(
        "absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10",
        getTimelineColor(activity.type)
      )}>
        {getJourneyIcon(activity.type)}
      </div>

      {/* Content card */}
      <div className={cn(
        "w-5/12 relative",
        isEven ? "mr-auto pr-8" : "ml-auto pl-8"
      )}>
        <Card className={cn(
          "overflow-hidden group rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 bg-gradient-to-br transform hover:scale-105",
          getJourneyColor(activity.type)
        )}>
          <div className="relative">
            <Link href={activity.link} className="block">
              <Image
                src={activity.images[0] || '/placeholder.jpg'}
                alt={activity.title}
                width={500}
                height={250}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
              <span className="text-sm font-bold text-gray-800">{activity.studentYear}</span>
            </div>
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
              <span className="text-xs font-semibold text-gray-700">{activity.journeyStage}</span>
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={cn(
                "px-3 py-1 text-xs font-bold rounded-full text-white",
                getTimelineColor(activity.type)
              )}>
                {activity.type.replace('-', ' ').toUpperCase()}
              </span>
            </div>
            
            <h3 className="font-bold text-xl mb-3 line-clamp-2">
              <Link href={activity.link} className="hover:text-indigo-600 transition-colors duration-300">
                {activity.title}
              </Link>
            </h3>
            
            <p className="text-gray-700 text-sm mb-4 line-clamp-3">{activity.shortDescription}</p>
            
            {/* Journey details */}
            <div className="space-y-2 mb-4">
              {activity.mentorSupport && (
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Support:</span> {activity.mentorSupport}
                </div>
              )}
              {activity.location && (
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">Location:</span> {activity.location}
                </div>
              )}
            </div>
            
            <Button asChild size="sm" className={cn(
              "w-full transition-all duration-300 text-white",
              getTimelineColor(activity.type)
            )}>
              <Link href={activity.link}>
                Explore This Journey Stage
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        {/* Arrow pointing to timeline */}
        <div className={cn(
          "absolute top-1/2 transform -translate-y-1/2 w-0 h-0",
          isEven ? "right-0 border-l-8 border-y-8 border-y-transparent" : "left-0 border-r-8 border-y-8 border-y-transparent",
          activity.type === 'transition' && "border-l-emerald-200 border-r-emerald-200",
          activity.type === 'orientation' && "border-l-blue-200 border-r-blue-200",
          activity.type === 'academic-journey' && "border-l-purple-200 border-r-purple-200",
          activity.type === 'personal-growth' && "border-l-orange-200 border-r-orange-200",
          activity.type === 'career-preparation' && "border-l-red-200 border-r-red-200",
          activity.type === 'graduation' && "border-l-indigo-200 border-r-indigo-200"
        )}></div>
      </div>
    </div>
  )
}

export default function StudentLifePage() {
  const [selectedPerspective, setSelectedPerspective] = useState<string>('student')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)

  // Sample activities data with perspective information
  const sampleActivities = [
    // Student Perspective Activities
    {
      id: 1,
      title: "Freshman Orientation Week",
      shortDescription: "Welcome to the EEE family! A comprehensive introduction to university life, academic expectations, and building your first connections.",
      date: "2024-01-15",
      studentYear: "1st Year",
      journeyStage: "Transition & Orientation",
      type: "transition",
      mentorSupport: "Senior Student Buddy",
      location: "Main Campus",
      category: "orientation",
      images: ["/api/placeholder/400/300"],
      link: "/student-life/orientation",
      perspective: "student"
    },
    {
      id: 2,
      title: "First Circuit Design Lab",
      shortDescription: "Hands-on experience with basic circuit design principles. Your first step into the practical world of electrical engineering.",
      date: "2024-02-10",
      studentYear: "1st Year",
      journeyStage: "Academic Discovery",
      type: "academic-journey",
      mentorSupport: "Lab Instructor",
      location: "Electronics Lab A",
      category: "academic",
      images: ["/api/placeholder/400/300"],
      link: "/student-life/circuit-lab",
      perspective: "student"
    },
    {
      id: 3,
      title: "IEEE Student Chapter Membership",
      shortDescription: "Joining the professional community early. Networking, workshops, and exposure to industry standards and practices.",
      date: "2024-03-05",
      studentYear: "2nd Year",
      journeyStage: "Personal Growth",
      type: "personal-growth",
      mentorSupport: "Chapter Advisor",
      location: "Student Center",
      category: "extracurricular",
      images: ["/api/placeholder/400/300"],
      link: "/student-life/ieee-chapter",
      perspective: "student"
    },
    {
      id: 4,
      title: "Summer Internship at Tech Company",
      shortDescription: "Real-world application of classroom knowledge. Three months of hands-on experience in a professional engineering environment.",
      date: "2024-06-01",
      studentYear: "3rd Year",
      journeyStage: "Career Preparation",
      type: "career-preparation",
      mentorSupport: "Industry Mentor",
      location: "Tech Corp HQ",
      category: "career",
      images: ["/api/placeholder/400/300"],
      link: "/student-life/internship",
      perspective: "student"
    },
    {
      id: 5,
      title: "Senior Design Project Presentation",
      shortDescription: "Culmination of four years of learning. Presenting an innovative solution to a real-world engineering challenge.",
      date: "2024-11-20",
      studentYear: "4th Year",
      journeyStage: "Graduation & Beyond",
      type: "graduation",
      mentorSupport: "Faculty Advisor",
      location: "Engineering Auditorium",
      category: "academic",
      images: ["/api/placeholder/400/300"],
      link: "/student-life/senior-project",
      perspective: "both"
    },
    {
      id: 6,
      title: "Alumni Network Welcome Event",
      shortDescription: "Transitioning from student to alumnus. Building lifelong professional and personal connections with the EEE community.",
      date: "2024-12-15",
      studentYear: "Graduate",
      journeyStage: "Lifelong Connections",
      type: "graduation",
      mentorSupport: "Alumni Coordinator",
      location: "Alumni Hall",
      category: "networking",
      images: ["/api/placeholder/400/300"],
      link: "/student-life/alumni-network",
      perspective: "both"
    },
    // Faculty Perspective Activities
    {
      id: 7,
      title: "New Faculty Orientation",
      shortDescription: "Comprehensive introduction to university policies, teaching methodologies, and research opportunities in the EEE department.",
      date: "2024-01-08",
      studentYear: "Faculty",
      journeyStage: "Teaching Excellence",
      type: "orientation",
      mentorSupport: "Department Head",
      location: "Faculty Lounge",
      category: "orientation",
      images: ["/api/placeholder/400/300"],
      link: "/faculty-life/orientation",
      perspective: "faculty"
    },
    {
      id: 8,
      title: "Curriculum Development Workshop",
      shortDescription: "Collaborative session on updating course content to reflect industry trends and emerging technologies in electrical engineering.",
      date: "2024-02-20",
      studentYear: "Faculty",
      journeyStage: "Teaching Excellence",
      type: "academic-journey",
      mentorSupport: "Curriculum Committee",
      location: "Conference Room B",
      category: "academic",
      images: ["/api/placeholder/400/300"],
      link: "/faculty-life/curriculum",
      perspective: "faculty"
    },
    {
      id: 9,
      title: "Student Mentorship Program Launch",
      shortDescription: "Initiating a structured mentorship program to guide students through their academic journey and career development.",
      date: "2024-03-15",
      studentYear: "Faculty",
      journeyStage: "Student Mentorship",
      type: "personal-growth",
      mentorSupport: "Student Affairs",
      location: "Mentorship Center",
      category: "mentorship",
      images: ["/api/placeholder/400/300"],
      link: "/faculty-life/mentorship",
      perspective: "faculty"
    },
    {
      id: 10,
      title: "Research Grant Proposal Submission",
      shortDescription: "Submitting innovative research proposals to advance knowledge in power systems and renewable energy technologies.",
      date: "2024-04-10",
      studentYear: "Faculty",
      journeyStage: "Research Guidance",
      type: "career-preparation",
      mentorSupport: "Research Office",
      location: "Research Lab",
      category: "research",
      images: ["/api/placeholder/400/300"],
      link: "/faculty-life/research",
      perspective: "faculty"
    },
    {
      id: 11,
      title: "Industry Partnership Development",
      shortDescription: "Building strategic partnerships with technology companies to enhance student internship and job placement opportunities.",
      date: "2024-05-25",
      studentYear: "Faculty",
      journeyStage: "Industry Connections",
      type: "career-preparation",
      mentorSupport: "Industry Relations",
      location: "Corporate Meeting Room",
      category: "industry",
      images: ["/api/placeholder/400/300"],
      link: "/faculty-life/industry",
      perspective: "faculty"
    },
    {
      id: 12,
      title: "Faculty Development Conference",
      shortDescription: "Attending professional development conference to stay current with teaching methodologies and technological advancements.",
      date: "2024-07-12",
      studentYear: "Faculty",
      journeyStage: "Personal Development",
      type: "personal-growth",
      mentorSupport: "Professional Development Fund",
      location: "Convention Center",
      category: "development",
      images: ["/api/placeholder/400/300"],
      link: "/faculty-life/development",
      perspective: "faculty"
    }
  ]

  // Get unique categories, years, and types for filters
  const categories = ['all', ...Array.from(new Set(sampleActivities.map(activity => activity.category)))]
  const years = ['all', ...Array.from(new Set(sampleActivities.map(activity => new Date(activity.date).getFullYear().toString()))).sort().reverse()]
  const types = ['all', ...Array.from(new Set(sampleActivities.map(activity => activity.type)))]

  // Filter activities based on selected filters
  const filteredActivities = sampleActivities.filter(activity => {
    const categoryMatch = selectedCategory === 'all' || activity.category === selectedCategory
    const yearMatch = selectedYear === 'all' || new Date(activity.date).getFullYear().toString() === selectedYear
    const typeMatch = selectedType === 'all' || activity.type === selectedType
    return categoryMatch && yearMatch && typeMatch
  })

  const handleFilterChange = (filterType: string, value: string) => {
    setIsLoading(true)
    setTimeout(() => {
      if (filterType === 'category') setSelectedCategory(value)
      if (filterType === 'year') setSelectedYear(value)
      if (filterType === 'type') setSelectedType(value)
      setIsLoading(false)
    }, 300)
  }

  const handleSearchArchive = () => {
    console.log('Search archive clicked with filters:', {
      category: selectedCategory,
      year: selectedYear,
      type: selectedType
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <div className="text-center max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <GraduationCap className="w-12 h-12 text-blue-400" />
                <ArrowRight className="w-8 h-8 text-white animate-pulse" />
                <Trophy className="w-12 h-12 text-indigo-400" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {selectedPerspective === 'student' ? 'Your Journey to Excellence' : 'Nurturing Excellence Together'}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                {selectedPerspective === 'student' 
                  ? 'Follow the transformative path from high school to university graduation. Discover how each student\'s unique journey unfolds through academic discovery, personal growth, leadership development, and career preparation in our EEE department.'
                  : 'Explore how our dedicated faculty members guide, mentor, and support students throughout their academic journey. Discover the teaching philosophies, mentorship approaches, and collaborative experiences that shape the next generation of electrical engineers.'
                }
              </p>
              {/* Perspective Selector */}
              <div className="flex justify-center gap-4 mb-8">
                <Button
                  onClick={() => setSelectedPerspective('student')}
                  className={cn(
                    "px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2",
                    selectedPerspective === 'student'
                      ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
                      : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  )}
                >
                  <GraduationCap className="w-5 h-5" />
                  Student Perspective
                </Button>
                <Button
                  onClick={() => setSelectedPerspective('faculty')}
                  className={cn(
                    "px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2",
                    selectedPerspective === 'faculty'
                      ? "bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg"
                      : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  )}
                >
                  <Users className="w-5 h-5" />
                  Faculty Perspective
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                <h3 className="text-lg font-semibold mb-4 text-blue-300">
                  {selectedPerspective === 'student' ? 'The Complete Student Journey' : 'Faculty Engagement Areas'}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  {selectedPerspective === 'student' ? (
                    <>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                        <span>Transition & Orientation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        <span>Academic Discovery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-orange-400" />
                        <span>Personal Growth</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-red-400" />
                        <span>Career Preparation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-indigo-400" />
                        <span>Graduation & Beyond</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-pink-400" />
                        <span>Lifelong Connections</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-400" />
                        <span>Teaching Excellence</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-green-400" />
                        <span>Student Mentorship</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-purple-400" />
                        <span>Research Guidance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-orange-400" />
                        <span>Personal Development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-red-400" />
                        <span>Industry Connections</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-indigo-400" />
                        <span>Career Support</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection animation="slideUp" delay={0.2} className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 border border-indigo-100">
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
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-w-[140px]"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              <Button 
                onClick={handleSearchArchive}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-md transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Search className="w-4 h-4" />
                Search Activities
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.4}>
          {filteredActivities.length > 0 ? (
            <div className="relative max-w-6xl mx-auto">
              {/* Journey Timeline */}
              <div className="space-y-0">
                {filteredActivities
                  .filter(activity => {
                    // Filter activities based on selected perspective
                    if (selectedPerspective === 'student') {
                      return activity.perspective === 'student' || activity.perspective === 'both'
                    } else {
                      return activity.perspective === 'faculty' || activity.perspective === 'both'
                    }
                  })
                  .map((activity, index) => (
                    <JourneyTimelineCard key={activity.id} activity={activity} index={index} />
                  ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="flex justify-center mb-4">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No journey stages found</h3>
              <p className="text-gray-500">Try adjusting your filters to explore different stages of the student journey.</p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </div>
  )
}