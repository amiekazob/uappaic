"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Trophy, Award, Star, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { achievementsData, formatDate } from '@/lib/achievements-data'

function NotableAchievementCard({ achievement }: { achievement: typeof achievementsData[0] }) {
  const formattedDate = achievement.date ? formatDate(achievement.date) : null;
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'competition':
        return <Trophy className="w-4 h-4 text-yellow-600" />
      case 'award':
        return <Award className="w-4 h-4 text-blue-600" />
      case 'recognition':
        return <Star className="w-4 h-4 text-purple-600" />
      case 'research':
        return <Award className="w-4 h-4 text-green-600" />
      case 'innovation':
        return <Star className="w-4 h-4 text-orange-600" />
      default:
        return <Trophy className="w-4 h-4 text-gray-600" />
    }
  }
  
  return (
    <Card className="overflow-hidden h-full flex flex-col group rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500 hover:border-l-yellow-600">
      <div className="relative">
        <Link href={`/campus-life/our-achievements/${achievement.id}`} className="block">
          <Image
            src={achievement.images[0] || '/placeholder.jpg'}
            alt={achievement.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        {formattedDate && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 p-2 text-center rounded-lg shadow-md">
            <div className="font-bold text-lg leading-none">{formattedDate.day}</div>
            <div className="text-xs uppercase tracking-wider">{formattedDate.month}</div>
          </div>
        )}
        <div className="absolute top-3 left-3 bg-yellow-500/90 backdrop-blur-sm text-white p-2 rounded-full shadow-md">
          {getTypeIcon(achievement.type)}
        </div>
      </div>
      <CardContent className="p-5 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            achievement.type === 'competition' && "bg-yellow-100 text-yellow-800",
            achievement.type === 'award' && "bg-blue-100 text-blue-800",
            achievement.type === 'recognition' && "bg-purple-100 text-purple-800",
            achievement.type === 'research' && "bg-green-100 text-green-800",
            achievement.type === 'innovation' && "bg-orange-100 text-orange-800"
          )}>
            {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
          </span>
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">
          <Link href={`/campus-life/our-achievements/${achievement.id}`} className="hover:text-yellow-600 transition-colors duration-300">
            {achievement.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{achievement.shortDescription}</p>
        {formattedDate && (
          <div className="text-sm text-gray-500 flex items-center mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formattedDate.month} {formattedDate.day}, {formattedDate.year}</span>
          </div>
        )}
        <Button asChild size="sm" className="bg-yellow-600 hover:bg-yellow-700 mt-auto w-fit">
          <Link href={`/campus-life/our-achievements/${achievement.id}`}>
            Read More
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export function NotableAchievements() {
  // Get the latest 3 achievements
  const latestAchievements = achievementsData
    .sort((a, b) => a.order - b.order)
    .slice(0, 3)

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-10 h-10 text-yellow-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Notable Achievements</h2>
            <Trophy className="w-10 h-10 text-yellow-600" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating the outstanding accomplishments and recognitions that showcase the excellence of our EEE department.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestAchievements.map((achievement) => (
            <NotableAchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
            <Link href="/campus-life/our-achievements">
              View All Achievements
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}