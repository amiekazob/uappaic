"use client"

import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Calendar, Building, Users, TrendingUp, ExternalLink } from 'lucide-react'
import { AnimatedSection } from "@/components/ui/animated-section"
import { entrepreneurshipData, type EntrepreneurshipType, formatDate } from '@/lib/entrepreneurship-data'
import { cn } from '@/lib/utils'

interface EntrepreneurshipDetailPageProps {
  params: {
    id: string
  }
}

// Format date utility
const formatEntrepreneurshipDate = (dateString: string) => {
  const date = new Date(dateString)
  return {
    day: date.getDate().toString(),
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    year: date.getFullYear().toString(),
    full: formatDate(dateString)
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'startup':
      return <TrendingUp className="w-5 h-5 text-blue-600" />
    case 'business':
      return <Building className="w-5 h-5 text-green-600" />
    case 'innovation':
      return <Building className="w-5 h-5 text-yellow-600" />
    case 'social-enterprise':
      return <Users className="w-5 h-5 text-purple-600" />
    case 'tech-venture':
      return <TrendingUp className="w-5 h-5 text-red-600" />
    default:
      return <Building className="w-5 h-5 text-gray-600" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'startup':
      return 'bg-blue-100 text-blue-800'
    case 'business':
      return 'bg-green-100 text-green-800'
    case 'innovation':
      return 'bg-yellow-100 text-yellow-800'
    case 'social-enterprise':
      return 'bg-purple-100 text-purple-800'
    case 'tech-venture':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function EntrepreneurshipDetailPage({ params }: EntrepreneurshipDetailPageProps) {
  const venture = entrepreneurshipData.find(v => v.id === params.id)
  
  if (!venture) {
    notFound()
  }

  const formattedDate = formatEntrepreneurshipDate(venture.date)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/campus-life/our-alumni-and-student-in-entrepreneurship"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Entrepreneurship
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <AnimatedSection animation="fadeIn" className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src={venture.images[0] || '/placeholder.jpg'}
                alt={venture.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={cn("flex items-center gap-1", getTypeColor(venture.type))}>
                    {getTypeIcon(venture.type)}
                    {venture.type.charAt(0).toUpperCase() + venture.type.slice(1).replace('-', ' ')}
                  </Badge>
                  <Badge variant="secondary">
                    {venture.category}
                  </Badge>
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {venture.title}
                </h1>
                <p className="text-gray-200 text-lg">
                  {venture.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Content - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Sections - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {venture.contentSections.map((section, index) => (
              <AnimatedSection 
                key={index} 
                animation="slideUp" 
                delay={index * 0.1}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </AnimatedSection>
            ))}
          </div>

          {/* Sidebar - Venture Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Venture Info Card */}
              <AnimatedSection animation="slideLeft" delay={0.2}>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Venture Details</h3>
                    
                    <div className="space-y-4">
                      {venture.founder && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Founder</h4>
                          <p className="text-gray-600">{venture.founder}</p>
                        </div>
                      )}
                      
                      {venture.company && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Company</h4>
                          <p className="text-gray-600">{venture.company}</p>
                        </div>
                      )}
                      
                      {venture.valuation && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Valuation</h4>
                          <p className="text-gray-600 font-semibold text-green-600">{venture.valuation}</p>
                        </div>
                      )}
                      
                      {venture.employees && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-1">Team Size</h4>
                          <p className="text-gray-600">{venture.employees}</p>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">Launch Date</h4>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{formattedDate.full}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Highlights Card */}
              <AnimatedSection animation="slideLeft" delay={0.3}>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                    <ul className="space-y-2">
                      {venture.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* External Link */}
              <AnimatedSection animation="slideLeft" delay={0.4}>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={venture.link} className="flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}