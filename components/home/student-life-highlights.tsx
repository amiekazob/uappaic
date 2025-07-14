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
        return 'from-emerald-50 to-emerald-100 border-emerald-300'
      case 'orientation':
        return 'from-blue-50 to-blue-100 border-blue-300'
      case 'academic-journey':
        return 'from-purple-50 to-purple-100 border-purple-300'
      case 'personal-growth':
        return 'from-orange-50 to-orange-100 border-orange-300'
      case 'career-preparation':
        return 'from-red-50 to-red-100 border-red-300'
      case 'graduation':
        return 'from-indigo-50 to-indigo-100 border-indigo-300'
      default:
        return 'from-gray-50 to-gray-100 border-gray-300'
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

  return (
    <Card className={cn(
      "overflow-hidden h-full flex flex-col group rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 bg-gradient-to-br transform hover:scale-105 relative",
      getJourneyColor(activity.type)
    )}>
      {/* Journey stage indicator */}
      <div className={cn(
        "absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10",
        getTimelineColor(activity.type)
      )}>
        {getJourneyIcon(activity.type)}
      </div>
      
      <div className="relative">
        <Link href={activity.link} className="block">
          <Image
            src={activity.images[0] || '/placeholder.jpg'}
            alt={activity.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
          <span className="text-xs font-bold text-gray-800">{activity.studentYear}</span>
        </div>
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full">
          <span className="text-xs font-semibold text-white">{activity.journeyStage}</span>
        </div>
      </div>
      
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className={cn(
            "px-3 py-1 text-xs font-bold rounded-full text-white",
            getTimelineColor(activity.type)
          )}>
            {activity.type.replace('-', ' ').toUpperCase()}
          </span>
        </div>
        
        <h3 className="font-bold text-lg mb-2 line-clamp-2">
          <Link href={activity.link} className="hover:text-indigo-600 transition-colors duration-300">
            {activity.title}
          </Link>
        </h3>
        
        <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">{activity.shortDescription}</p>
        
        {/* Journey details */}
        <div className="space-y-1 mb-4">
          {activity.mentorSupport && (
            <div className="text-sm text-gray-600 flex items-center gap-1">
              <User className="w-4 h-4" />
              <span className="font-medium truncate">{activity.mentorSupport}</span>
            </div>
          )}
          {activity.location && (
            <div className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">{activity.location}</span>
            </div>
          )}
        </div>
        
        <Button asChild size="sm" className={cn(
          "mt-auto w-full transition-all duration-300 text-white",
          getTimelineColor(activity.type)
        )}>
          <Link href={activity.link}>
            Explore Journey Stage
            <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default function StudentLifeHighlights() {
  // Get the latest 3 student journey stages
  const latestJourneyStages = studentLifeData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

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
          {latestJourneyStages.map((activity, index) => (
            <div 
              key={activity.id} 
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