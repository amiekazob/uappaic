'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLazyData } from '@/components/ui/lazy-data-loader'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Users, Calendar, Trophy, BookOpen, Coffee, Lightbulb, Heart, Star, User, Briefcase, GraduationCap, Globe } from 'lucide-react'
import { StudentExperiencesData, formatDate, getAllCategories, getAllTypes, type StudentExperience } from '@/lib/student-experiences-data'

const clubActivities = [
  {
    icon: BookOpen,
    title: 'Technical Workshops',
    description: 'Regular hands-on workshops covering latest technologies in electrical and electronic engineering.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Trophy,
    title: 'Competitions',
    description: 'Participate in programming contests, circuit design competitions, and innovation challenges.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Users,
    title: 'Team Projects',
    description: 'Collaborate on exciting projects ranging from IoT devices to renewable energy systems.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Labs',
    description: 'Access to state-of-the-art laboratories for research and development activities.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Coffee,
    title: 'Social Events',
    description: 'Regular meetups, tech talks, and social gatherings to build lasting friendships.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Heart,
    title: 'Community Service',
    description: 'Engage in meaningful community projects and social impact initiatives.',
    color: 'bg-red-100 text-red-600'
  }
]

const achievements = [

  {
    title: 'Top Contributor Engineering Club',
    description: 'Recognized as the top contributor engineering club in the university in 2025.',
    date: '2025'
  },
  {
    title: 'National Collaboration',
    description: 'Partnerships with leading tech companies and national universities.',
    date: '2025'
  }
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'academic':
      return BookOpen
    case 'research':
      return GraduationCap
    case 'internship':
      return Briefcase
    case 'project':
      return Trophy
    case 'achievement':
      return Trophy
    default:
      return User
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'academic':
      return 'bg-blue-100 text-blue-800'
    case 'research':
      return 'bg-purple-100 text-purple-800'
    case 'internship':
      return 'bg-green-100 text-green-800'
    case 'project':
      return 'bg-orange-100 text-orange-800'
    case 'achievement':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

interface ExperienceCardProps {
  experience: StudentExperience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const TypeIcon = getTypeIcon(experience.type)
  
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden">
      {/* Initial Photo */}
      {experience.images && experience.images.length > 0 && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={experience.images[0]}
            alt={experience.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-3">
          <Badge className={getTypeColor(experience.type)}>
            <TypeIcon className="w-3 h-3 mr-1" />
            {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(experience.date)}
          </div>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-primary-600 transition-colors">
          {experience.title}
        </CardTitle>
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <User className="w-4 h-4 mr-2" />
          <div>
            <span className="font-medium">{experience.student.name}</span>
            <span className="mx-1">•</span>
            <span>{experience.student.year}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 mb-4 line-clamp-3">
          {experience.contentSections[0]?.content}
        </CardDescription>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {experience.category}
          </Badge>
          <Link href={`/student-experiences/${experience.slug}`}>
            <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700">
              Read Story →
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ClubLifePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedType, setSelectedType] = useState<string>('All')
  
  const { data: experiences, loading, error } = useLazyData(
    () => Promise.resolve(StudentExperiencesData),
    []
  )

  const categories = useMemo(() => ['All', ...getAllCategories()], [])
  const types = useMemo(() => ['All', ...getAllTypes()], [])

  const filteredExperiences = useMemo(() => {
    if (!experiences) return []
    
    return experiences.filter(experience => {
      const categoryMatch = selectedCategory === 'All' || experience.category === selectedCategory
      const typeMatch = selectedType === 'All' || experience.type === selectedType
      return categoryMatch && typeMatch
    })
  }, [experiences, selectedCategory, selectedType])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600">Failed to load student experiences. Please try again later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Club Life in EEE
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the vibrant community of passionate engineers, innovators, and future leaders at EEE Club UAP
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Users className="w-5 h-5 mr-2" />
                500+ Active Members
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Calendar className="w-5 h-5 mr-2" />
                50+ Events Annually
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Trophy className="w-5 h-5 mr-2" />
                15+ Awards Won
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Club Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technical workshops to social events, our club offers diverse opportunities for growth and learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubActivities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${activity.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {activity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating our milestones and recognitions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{achievement.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Experiences */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Experiences
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover inspiring stories from our students and alumni who are making their mark in the world
            </p>
          </div>
          
          {/* Filter Controls */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Inspiring Student Stories
                </h3>
                <p className="text-gray-600">
                  {filteredExperiences.length} {filteredExperiences.length === 1 ? 'story' : 'stories'} found
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Category Filter */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white min-w-[150px]"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {/* Type Filter */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white min-w-[150px]"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type === 'All' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Experiences Grid */}
          {filteredExperiences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No stories found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to see more student experiences.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedType('All')
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-accent-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of a vibrant community of engineers and innovators. Start your journey with us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join the Club
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}