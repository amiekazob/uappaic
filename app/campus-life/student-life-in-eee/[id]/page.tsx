"use client"

import React, { use } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, User, MapPin, GraduationCap, Users, Heart, Trophy, BookOpen, Star, ArrowRight, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection } from "@/components/ui/animated-section"
import { studentLifeData } from '@/lib/student-life-data'

interface StudentLifeDetailPageProps {
  params: Promise<{
    id: string
  }>
}

function getTypeIcon(type: string) {
  switch (type) {
    case 'academic':
      return <BookOpen className="w-6 h-6 text-blue-600" />
    case 'extracurricular':
      return <Users className="w-6 h-6 text-green-600" />
    case 'academic':
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

function getTypeColor(type: string) {
  switch (type) {
    case 'academic':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'extracurricular':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'academic':
      return 'bg-purple-100 text-purple-800 border-purple-200'
    case 'leadership':
      return 'bg-orange-100 text-orange-800 border-orange-200'
    case 'community':
      return 'bg-red-100 text-red-800 border-red-200'
    case 'career':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

function getGradientColor(type: string) {
  switch (type) {
    case 'academic':
      return 'from-blue-900 to-blue-700'
    case 'extracurricular':
      return 'from-green-900 to-green-700'
    case 'academic':
      return 'from-purple-900 to-purple-700'
    case 'leadership':
      return 'from-orange-900 to-orange-700'
    case 'community':
      return 'from-red-900 to-red-700'
    case 'career':
      return 'from-indigo-900 to-indigo-700'
    default:
      return 'from-gray-900 to-gray-700'
  }
}

export default function StudentLifeDetailPage({ params }: StudentLifeDetailPageProps) {
  const { id } = use(params)
  const activity = studentLifeData.find(a => a.slug === id)
  
  if (!activity) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <AnimatedSection className={cn(
        "relative py-20 bg-gradient-to-r text-white overflow-hidden",
        getGradientColor(activity.experienceType)
      )}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/campus-life/student-life-in-eee" 
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Student Life
            </Link>
            
            {/* Activity Type Badge */}
            <div className="flex items-center gap-3 mb-6">
              {getTypeIcon(activity.experienceType)}
              <span className={cn(
                "px-3 py-1 rounded-full text-sm font-medium border",
                getTypeColor(activity.experienceType)
              )}>
                {activity.experienceType.charAt(0).toUpperCase() + activity.experienceType.slice(1).replace('-', ' ')}
              </span>
            </div>
            
            {/* Title and Description */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {activity.title}
            </h1>
            {activity.subtitle && (
              <h2 className="text-2xl text-blue-200 mb-4 font-medium">
                {activity.subtitle}
              </h2>
            )}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {activity.description}
            </p>
            
            {/* Category */}
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="px-3 py-1 bg-white/10 rounded-full text-sm">
                {activity.category}
              </div>
              {activity.metadata?.duration && (
                <div className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  Duration: {activity.metadata.duration}
                </div>
              )}
              {activity.metadata?.participants && (
                <div className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  Participants: {activity.metadata.participants}
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Activity Details */}
          <AnimatedSection className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activity.metadata?.location && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-700">{activity.metadata.location}</p>
                  </CardContent>
                </Card>
              )}
              
              {activity.engagement?.difficulty && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Difficulty</h3>
                    <p className="text-gray-700">{activity.engagement.difficulty}</p>
                  </CardContent>
                </Card>
              )}
              
              {activity.impact?.reach && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Impact Reach</h3>
                    <p className="text-gray-700">{activity.impact.reach}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </AnimatedSection>

          {/* Images Gallery */}
          {activity.images && activity.images.length > 0 && (
            <AnimatedSection className="mb-12">
              <div className={`grid gap-6 ${
                activity.images.filter(image => image && image.trim() !== '').length === 1 
                  ? 'grid-cols-1' 
                  : 'grid-cols-1 md:grid-cols-2'
              }`}>
                {activity.images.filter(image => image && image.trim() !== '').map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={`${activity.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Content Sections */}
          {activity.content && activity.content.length > 0 && (
            <div className="space-y-8 mb-12">
              {activity.content.map((section, index) => (
                <AnimatedSection key={index}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.section}
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {section.details}
                      </p>
                      
                      {/* Section Images */}
                      {section.images && section.images.length > 0 && (
                        <div className={`grid gap-4 mb-6 ${
                          section.images.filter(image => image && image.trim() !== '').length === 1 
                            ? 'grid-cols-1' 
                            : 'grid-cols-1 md:grid-cols-2'
                        }`}>
                          {section.images.filter(image => image && image.trim() !== '').map((image, imgIndex) => (
                            <div key={imgIndex} className="relative aspect-video rounded-lg overflow-hidden">
                              <Image
                                src={image}
                                alt={`${section.section} - Image ${imgIndex + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.keyPoints && section.keyPoints.length > 0 && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-800 mb-3">Key Points</h3>
                          <ul className="space-y-2">
                            {section.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-700">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Achievements */}
          {activity.achievements && activity.achievements.length > 0 && (
            <AnimatedSection className="mb-12">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                    Key Achievements
                  </h2>
                  <ul className="space-y-3">
                    {activity.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}
          
          {/* Tags */}
          {activity.tags && activity.tags.length > 0 && (
            <AnimatedSection className="mb-12">
              <div className="flex flex-wrap gap-2">
                {activity.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Navigation */}
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-200">
              <Link href="/campus-life/student-life-in-eee">
                <Button variant="outline" className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Back to Student Life
                </Button>
              </Link>
              
              {activity.metadata?.externalLink && (
                <Link href={activity.metadata.externalLink} target="_blank" rel="noopener noreferrer">
                  <Button className="flex items-center gap-2">
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}