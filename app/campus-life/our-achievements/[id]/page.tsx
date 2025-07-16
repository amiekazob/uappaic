"use client"

import React, { use } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Calendar, Trophy, Award, Star, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection } from "@/components/ui/animated-section"
import { achievementsData, formatDate } from '@/lib/achievements-data'

interface AchievementDetailPageProps {
  params: Promise<{
    id: string
  }>
}

function getTypeIcon(type: string) {
  switch (type) {
    case 'competition':
      return <Trophy className="w-6 h-6 text-yellow-600" />
    case 'award':
      return <Award className="w-6 h-6 text-blue-600" />
    case 'recognition':
      return <Star className="w-6 h-6 text-purple-600" />
    case 'research':
      return <Award className="w-6 h-6 text-green-600" />
    case 'innovation':
      return <Star className="w-6 h-6 text-orange-600" />
    default:
      return <Trophy className="w-6 h-6 text-gray-600" />
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case 'competition':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'award':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'recognition':
      return 'bg-purple-100 text-purple-800 border-purple-200'
    case 'research':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'innovation':
      return 'bg-orange-100 text-orange-800 border-orange-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export default function AchievementDetailPage({ params }: AchievementDetailPageProps) {
  const { id } = use(params)
  const achievement = achievementsData.find(a => a.id === id)
  
  if (!achievement) {
    notFound()
  }

  const formattedDate = formatDate(achievement.date)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <AnimatedSection className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/campus-life/our-achievements" 
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Achievements
            </Link>
            
            {/* Achievement Type Badge */}
            <div className="flex items-center gap-3 mb-6">
              {getTypeIcon(achievement.type)}
              <span className={cn(
                "px-3 py-1 rounded-full text-sm font-medium border",
                getTypeColor(achievement.type)
              )}>
                {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
              </span>
            </div>
            
            {/* Title and Description */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {achievement.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {achievement.shortDescription}
            </p>
            
            {/* Date and Category */}
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formattedDate.day} {formattedDate.month} {formattedDate.year}</span>
              </div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-sm">
                {achievement.category}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Images Gallery */}
          {achievement.images && achievement.images.length > 0 && (
            <AnimatedSection className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievement.images.map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={`${achievement.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Content Sections */}
          {achievement.contentSections && achievement.contentSections.length > 0 && (
            <div className="space-y-8 mb-12">
              {achievement.contentSections.map((section, index) => (
                <AnimatedSection key={index}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.sectionTitle}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {section.sectionDescription}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Highlights */}
          {achievement.highlights && achievement.highlights.length > 0 && (
            <AnimatedSection className="mb-12">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-orange-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-600" />
                    Key Highlights
                  </h2>
                  <ul className="space-y-3">
                    {achievement.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {/* Navigation */}
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-200">
              <Link href="/campus-life/our-achievements">
                <Button variant="outline" className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Back to All Achievements
                </Button>
              </Link>
              
              {achievement.link && (
                <Link href={achievement.link} target="_blank" rel="noopener noreferrer">
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