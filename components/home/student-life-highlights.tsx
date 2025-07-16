"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, GraduationCap, Users, Heart, Trophy, BookOpen, ArrowRight, Star, MapPin, User, Sparkles, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { studentLifeData, type StudentLifeType } from '@/lib/student-life-data'

function JourneyStageCard({ activity, index }: { activity: StudentLifeType; index: number }) {
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
            src={activity.coverImage || activity.gallery?.[0]?.url || '/placeholder.jpg'}
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
  )
}

export default function StudentLifeHighlights() {
  // Get the first 3 student experiences from the data file
  const latestExperiences = studentLifeData.slice(0, 3)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-10 h-10 text-indigo-600 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Journey to Excellence: Your Path in EEE
            </h2>
            <Trophy className="w-10 h-10 text-pink-600 animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow the transformative journey of our students from their first steps into university life to becoming accomplished electrical and electronic engineers. Each stage tells a unique story of growth, discovery, and achievement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestExperiences.map((activity, index) => (
            <div 
              key={activity.slug} 
              className="transform transition-all duration-500"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <JourneyStageCard activity={activity} index={index} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Link href="/campus-life/student-life-in-eee">
              <GraduationCap className="w-5 h-5 mr-2" />
              Explore Complete Journey Stories
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}