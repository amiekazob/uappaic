'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CalendarDays, Clock, AlertCircle, BookOpen, Users, Megaphone, ChevronRight } from 'lucide-react'
import { getActivePressReleases, type PressRelease } from '@/lib/press-release-data'
import { StaggeredContainer, StaggeredItem } from '@/components/ui/staggered-container'

const priorityColors = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  low: 'bg-green-100 text-green-800 border-green-200'
}

const categoryIcons = {
  academic: BookOpen,
  event: CalendarDays,
  general: Users,
  urgent: AlertCircle,
  partnership: Users,
  award: Users,
  facility: Users,
  conference: CalendarDays,
  innovation: BookOpen,
  scholarship: BookOpen,
  competition: Users,
  alumni: Users,
  committee: Users,
  tragedy: AlertCircle
}

const categoryColors = {
  academic: 'text-blue-600',
  event: 'text-purple-600',
  general: 'text-gray-600',
  urgent: 'text-red-600',
  partnership: 'text-green-600',
  award: 'text-yellow-600',
  facility: 'text-blue-600',
  conference: 'text-purple-600',
  innovation: 'text-blue-600',
  scholarship: 'text-green-600',
  competition: 'text-orange-600',
  alumni: 'text-gray-600',
  committee: 'text-indigo-600',
  tragedy: 'text-red-600'
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

function PressReleaseCard({ pressRelease }: { pressRelease: PressRelease }) {
  const IconComponent = categoryIcons[pressRelease.category] || Users
  const iconColor = categoryColors[pressRelease.category] || 'text-gray-600'

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 group border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-1">
            <IconComponent className={`h-5 w-5 ${iconColor} flex-shrink-0`} />
            <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">
              {pressRelease.title}
            </CardTitle>
          </div>
          <Badge 
            variant="outline" 
            className={`${priorityColors[pressRelease.priority]} text-xs font-medium flex-shrink-0`}
          >
            {pressRelease.priority.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {pressRelease.content}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{formatDate(pressRelease.date)}</span>
          </div>
          <Link href={pressRelease.link}>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2 h-auto"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Announcements() {
  // Get active press releases and sort by ID in descending order
  const activePressReleases = getActivePressReleases()
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 3) // Show latest 3 press releases

  if (activePressReleases.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Megaphone className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Latest Press Releases</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest news and announcements from the EEE Club
            </p>
            <Card className="max-w-md mx-auto">
              <CardContent className="py-8">
                <p className="text-muted-foreground">No active press releases at the moment.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Megaphone className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Latest Press Releases</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and important information from the EEE Club
          </p>
        </div>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activePressReleases.map((pressRelease, index) => (
            <StaggeredItem key={pressRelease.id} index={index}>
              <PressReleaseCard pressRelease={pressRelease} />
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <div className="text-center mt-12">
          <Link href="/press-release">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
              View All Press Releases
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}