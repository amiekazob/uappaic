"use client"

import React, { use } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Calendar, Building, Users, DollarSign, ExternalLink, Star, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection } from "@/components/ui/animated-section"
import { entrepreneurshipData, formatDate } from '@/lib/entrepreneurship-data'

interface EntrepreneurshipDetailPageProps {
  params: Promise<{
    id: string
  }>
}

function getTypeIcon(type: string) {
  switch (type) {
    case 'startup':
      return <Rocket className="w-6 h-6 text-blue-600" />
    case 'business':
      return <Building className="w-6 h-6 text-green-600" />
    case 'innovation':
      return <Star className="w-6 h-6 text-purple-600" />
    case 'social-enterprise':
      return <Users className="w-6 h-6 text-orange-600" />
    case 'tech-venture':
      return <Rocket className="w-6 h-6 text-indigo-600" />
    default:
      return <Building className="w-6 h-6 text-gray-600" />
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case 'startup':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'business':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'innovation':
      return 'bg-purple-100 text-purple-800 border-purple-200'
    case 'social-enterprise':
      return 'bg-orange-100 text-orange-800 border-orange-200'
    case 'tech-venture':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export default function EntrepreneurshipDetailPage({ params }: EntrepreneurshipDetailPageProps) {
  const { id } = use(params)
  const venture = entrepreneurshipData.find(v => v.id === id)
  
  if (!venture) {
    notFound()
  }

  const formattedDate = formatDate(venture.date)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <AnimatedSection className="relative py-20 bg-gradient-to-r from-indigo-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/campus-life/our-alumni-and-student-in-entrepreneurship" 
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Entrepreneurship
            </Link>
            
            {/* Venture Type Badge */}
            <div className="flex items-center gap-3 mb-6">
              {getTypeIcon(venture.type)}
              <span className={cn(
                "px-3 py-1 rounded-full text-sm font-medium border",
                getTypeColor(venture.type)
              )}>
                {venture.type.charAt(0).toUpperCase() + venture.type.slice(1).replace('-', ' ')}
              </span>
            </div>
            
            {/* Title and Description */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {venture.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {venture.shortDescription}
            </p>
            
            {/* Date and Category */}
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formattedDate}</span>
              </div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-sm">
                {venture.category}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Venture Details */}
          <AnimatedSection className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {venture.founder && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Founder</h3>
                    <p className="text-gray-700">{venture.founder}</p>
                  </CardContent>
                </Card>
              )}
              
              {venture.company && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Building className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Company</h3>
                    <p className="text-gray-700">{venture.company}</p>
                  </CardContent>
                </Card>
              )}
              
              {venture.valuation && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Valuation</h3>
                    <p className="text-gray-700">{venture.valuation}</p>
                  </CardContent>
                </Card>
              )}
              
              {venture.employees && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Team Size</h3>
                    <p className="text-gray-700">{venture.employees}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </AnimatedSection>



          {/* Content Sections */}
          {venture.contentSections && venture.contentSections.length > 0 && (
            <div className="space-y-8 mb-12">
              {venture.contentSections.map((section, index) => (
                <AnimatedSection key={index}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      {/* Section Images */}
                      {section.images && section.images.length > 0 && (
                        <div className="mb-6">
                          <div className={`grid gap-4 ${
                            section.images.length === 1 
                              ? 'grid-cols-1' 
                              : 'grid-cols-1 md:grid-cols-2'
                          }`}>
                            {section.images.map((image, imgIndex) => (
                              <div key={imgIndex} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                                <Image
                                  src={image}
                                  alt={`${section.title} - Image ${imgIndex + 1}`}
                                  fill
                                  className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Section Title and Content */}
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Highlights */}
          {venture.highlights && venture.highlights.length > 0 && (
            <AnimatedSection className="mb-12">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-600" />
                    Key Highlights
                  </h2>
                  <ul className="space-y-3">
                    {venture.highlights.map((highlight, index) => (
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
              <Link href="/campus-life/our-alumni-and-student-in-entrepreneurship">
                <Button variant="outline" className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Back to All Ventures
                </Button>
              </Link>
              
              {venture.link && (
                <Link href={venture.link} target="_blank" rel="noopener noreferrer">
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