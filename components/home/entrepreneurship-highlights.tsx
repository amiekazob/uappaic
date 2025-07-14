"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Rocket, Lightbulb, Building, Users, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { entrepreneurshipData, type EntrepreneurshipType } from '@/lib/entrepreneurship-data'

function EntrepreneurshipCard({ venture }: { venture: EntrepreneurshipType }) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'startup':
        return <Rocket className="w-5 h-5 text-blue-600" />
      case 'business':
        return <Building className="w-5 h-5 text-green-600" />
      case 'innovation':
        return <Lightbulb className="w-5 h-5 text-yellow-600" />
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
        return 'border-l-blue-500 hover:border-l-blue-600'
      case 'business':
        return 'border-l-green-500 hover:border-l-green-600'
      case 'innovation':
        return 'border-l-yellow-500 hover:border-l-yellow-600'
      case 'social-enterprise':
        return 'border-l-purple-500 hover:border-l-purple-600'
      case 'tech-venture':
        return 'border-l-red-500 hover:border-l-red-600'
      default:
        return 'border-l-gray-500 hover:border-l-gray-600'
    }
  }

  return (
    <Card className={cn(
      "overflow-hidden h-full flex flex-col group rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4",
      getTypeColor(venture.type)
    )}>
      <div className="relative">
        <Link href={venture.link} className="block">
          <Image
            src={venture.images[0] || '/placeholder.jpg'}
            alt={venture.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
          {getTypeIcon(venture.type)}
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            venture.type === 'startup' && "bg-blue-100 text-blue-800",
            venture.type === 'business' && "bg-green-100 text-green-800",
            venture.type === 'innovation' && "bg-yellow-100 text-yellow-800",
            venture.type === 'social-enterprise' && "bg-purple-100 text-purple-800",
            venture.type === 'tech-venture' && "bg-red-100 text-red-800"
          )}>
            {venture.type.charAt(0).toUpperCase() + venture.type.slice(1).replace('-', ' ')}
          </span>
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">
          <Link href={venture.link} className="hover:text-blue-600 transition-colors duration-300">
            {venture.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{venture.shortDescription}</p>
        
        {/* Key metrics */}
        <div className="space-y-1 mb-4">
          {venture.company && (
            <div className="text-sm text-gray-700">
              <span className="font-semibold">Company:</span> {venture.company}
            </div>
          )}
          {venture.valuation && (
            <div className="text-sm text-gray-700">
              <span className="font-semibold">Valuation:</span> {venture.valuation}
            </div>
          )}
        </div>
        
        <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 mt-auto w-fit">
          <Link href={venture.link}>
            Learn More
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export function EntrepreneurshipHighlights() {
  // Get the latest 3 entrepreneurship ventures
  const latestVentures = entrepreneurshipData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-10 h-10 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Entrepreneurship Highlights</h2>
            <Lightbulb className="w-10 h-10 text-yellow-600" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our alumni and students are building innovative companies and creating positive impact through entrepreneurship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestVentures.map((venture, index) => (
            <div 
              key={venture.id} 
              className="transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <EntrepreneurshipCard venture={venture} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/campus-life/our-alumni-and-student-in-entrepreneurship">
              View All Entrepreneurship Stories
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}