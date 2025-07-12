"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  GraduationCap, 
  Coffee, 
  Award, 
  Users, 
  FileText,
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  Search
} from 'lucide-react'

interface AcademicEvent {
  id: string
  title: string
  description: string
  startDate: string
  endDate?: string
  category: 'semester' | 'exam' | 'holiday' | 'registration' | 'orientation' | 'graduation' | 'break'
  color: string
  icon: React.ReactNode
  isMultiDay: boolean
}

const academicEvents: AcademicEvent[] = [
  {
    id: '1',
    title: 'Spring Semester Begins',
    description: 'First day of Spring 2024 semester classes',
    startDate: '2024-01-15',
    category: 'semester',
    color: 'bg-green-500',
    icon: <BookOpen className="w-4 h-4" />,
    isMultiDay: false
  },
  {
    id: '2',
    title: 'Course Registration Period',
    description: 'Online course registration for Spring semester',
    startDate: '2024-01-08',
    endDate: '2024-01-14',
    category: 'registration',
    color: 'bg-blue-500',
    icon: <FileText className="w-4 h-4" />,
    isMultiDay: true
  },
  {
    id: '3',
    title: 'Independence Day',
    description: 'National holiday - University closed',
    startDate: '2024-03-26',
    category: 'holiday',
    color: 'bg-red-500',
    icon: <Coffee className="w-4 h-4" />,
    isMultiDay: false
  },
  {
    id: '4',
    title: 'Mid-term Examinations',
    description: 'Spring semester mid-term exam period',
    startDate: '2024-03-15',
    endDate: '2024-03-25',
    category: 'exam',
    color: 'bg-orange-500',
    icon: <Award className="w-4 h-4" />,
    isMultiDay: true
  },
  {
    id: '5',
    title: 'Spring Break',
    description: 'University spring break - No classes',
    startDate: '2024-04-01',
    endDate: '2024-04-07',
    category: 'break',
    color: 'bg-purple-500',
    icon: <Coffee className="w-4 h-4" />,
    isMultiDay: true
  },
  {
    id: '6',
    title: 'Final Examinations',
    description: 'Spring semester final exam period',
    startDate: '2024-05-20',
    endDate: '2024-06-05',
    category: 'exam',
    color: 'bg-orange-500',
    icon: <Award className="w-4 h-4" />,
    isMultiDay: true
  },
  {
    id: '7',
    title: 'Spring Semester Ends',
    description: 'Last day of Spring 2024 semester',
    startDate: '2024-06-10',
    category: 'semester',
    color: 'bg-green-500',
    icon: <BookOpen className="w-4 h-4" />,
    isMultiDay: false
  },
  {
    id: '8',
    title: 'Summer Session Begins',
    description: 'First day of Summer 2024 session',
    startDate: '2024-06-15',
    category: 'semester',
    color: 'bg-yellow-500',
    icon: <BookOpen className="w-4 h-4" />,
    isMultiDay: false
  },
  {
    id: '9',
    title: 'Graduation Ceremony',
    description: 'Spring 2024 commencement ceremony',
    startDate: '2024-06-20',
    category: 'graduation',
    color: 'bg-indigo-500',
    icon: <GraduationCap className="w-4 h-4" />,
    isMultiDay: false
  },
  {
    id: '10',
    title: 'Summer Session Ends',
    description: 'Last day of Summer 2024 session',
    startDate: '2024-08-15',
    category: 'semester',
    color: 'bg-yellow-500',
    icon: <BookOpen className="w-4 h-4" />,
    isMultiDay: false
  },
  {
    id: '11',
    title: 'Fall Semester Registration',
    description: 'Course registration for Fall 2024 semester',
    startDate: '2024-08-20',
    endDate: '2024-08-30',
    category: 'registration',
    color: 'bg-blue-500',
    icon: <FileText className="w-4 h-4" />,
    isMultiDay: true
  },
  {
    id: '12',
    title: 'Fall Semester Begins',
    description: 'First day of Fall 2024 semester classes',
    startDate: '2024-09-01',
    category: 'semester',
    color: 'bg-amber-500',
    icon: <BookOpen className="w-4 h-4" />,
    isMultiDay: false
  },
  {
    id: '13',
    title: 'New Student Orientation',
    description: 'Orientation program for new students',
    startDate: '2024-08-28',
    endDate: '2024-08-31',
    category: 'orientation',
    color: 'bg-teal-500',
    icon: <Users className="w-4 h-4" />,
    isMultiDay: true
  },
  {
    id: '14',
    title: 'Victory Day',
    description: 'National holiday - University closed',
    startDate: '2024-12-16',
    category: 'holiday',
    color: 'bg-red-500',
    icon: <Coffee className="w-4 h-4" />,
    isMultiDay: false
  },
  {
    id: '15',
    title: 'Fall Mid-term Examinations',
    description: 'Fall semester mid-term exam period',
    startDate: '2024-10-15',
    endDate: '2024-10-25',
    category: 'exam',
    color: 'bg-orange-500',
    icon: <Award className="w-4 h-4" />,
    isMultiDay: true
  },
  {
    id: '16',
    title: 'Fall Final Examinations',
    description: 'Fall semester final exam period',
    startDate: '2024-12-10',
    endDate: '2024-12-20',
    category: 'exam',
    color: 'bg-orange-500',
    icon: <Award className="w-4 h-4" />,
    isMultiDay: true
  },
  {
    id: '17',
    title: 'Winter Break',
    description: 'University winter break - No classes',
    startDate: '2024-12-21',
    endDate: '2025-01-07',
    category: 'break',
    color: 'bg-purple-500',
    icon: <Coffee className="w-4 h-4" />,
    isMultiDay: true
  }
]

const categoryLabels = {
  semester: 'Semester',
  exam: 'Examinations',
  holiday: 'Holidays',
  registration: 'Registration',
  orientation: 'Orientation',
  graduation: 'Graduation',
  break: 'Break'
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

function formatDateRange(startDate: string, endDate?: string): string {
  if (!endDate) return formatDate(startDate)
  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}

function EventCard({ event }: { event: AcademicEvent }) {
  return (
    <StaggeredItem>
      <Card className="h-full group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4" style={{ borderLeftColor: event.color.replace('bg-', '#') }}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={`${event.color} text-white p-2 rounded-full`}>
                {event.icon}
              </div>
              <div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </CardTitle>
                <Badge variant="secondary" className="mt-1 text-xs">
                  {categoryLabels[event.category]}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-700">
                {formatDateRange(event.startDate, event.endDate)}
              </div>
              {event.isMultiDay && (
                <Badge variant="outline" className="mt-1 text-xs">
                  Multi-day
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm leading-relaxed">
            {event.description}
          </p>
        </CardContent>
      </Card>
    </StaggeredItem>
  )
}

function MonthlyView({ events, currentMonth }: { events: AcademicEvent[], currentMonth: number }) {
  const monthEvents = events.filter(event => {
    const eventMonth = new Date(event.startDate).getMonth()
    return eventMonth === currentMonth
  })

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {monthNames[currentMonth]} 2024
      </h3>
      {monthEvents.length > 0 ? (
        <StaggeredGrid className="grid grid-cols-1 gap-4">
          {monthEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </StaggeredGrid>
      ) : (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No events scheduled for this month</p>
        </div>
      )}
    </div>
  )
}

export default function AcademicCalendarPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth())
  const [viewMode, setViewMode] = useState<'list' | 'monthly'>('list')

  const filteredEvents = selectedCategory === 'all' 
    ? academicEvents 
    : academicEvents.filter(event => event.category === selectedCategory)

  const categories = Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>
  const upcomingEvents = academicEvents
    .filter(event => new Date(event.startDate) >= new Date())
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Academic <span className="text-blue-600">Calendar</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay informed about important academic dates, deadlines, and events throughout the academic year.
          </p>
        </AnimatedSection>

        {/* Quick Stats */}
        <AnimatedSection animation="slideUp" delay={0.1} className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{academicEvents.length}</div>
              <div className="text-gray-600">Total Events</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">{upcomingEvents.length}</div>
              <div className="text-gray-600">Upcoming</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-gray-600">Semesters</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-gray-600">Exam Periods</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Controls */}
        <AnimatedSection animation="slideUp" delay={0.2} className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white p-6 rounded-xl shadow-md">
            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'}
                onClick={() => setViewMode('list')}
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                List View
              </Button>
              <Button 
                variant={viewMode === 'monthly' ? 'default' : 'outline'}
                onClick={() => setViewMode('monthly')}
                className="flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Monthly View
              </Button>
            </div>

            {/* Month Navigation (for monthly view) */}
            {viewMode === 'monthly' && (
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))}
                  disabled={currentMonth === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="font-semibold min-w-[100px] text-center">
                  {new Date(2024, currentMonth).toLocaleDateString('en-US', { month: 'long' })}
                </span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentMonth(Math.min(11, currentMonth + 1))}
                  disabled={currentMonth === 11}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Category Filter (for list view) */}
            {viewMode === 'list' && (
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant={selectedCategory === 'all' ? 'default' : 'secondary'}
                  className="cursor-pointer px-3 py-1"
                  onClick={() => setSelectedCategory('all')}
                >
                  All Events
                </Badge>
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'secondary'}
                    className="cursor-pointer px-3 py-1 hover:bg-blue-100 transition-colors"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {categoryLabels[category]}
                  </Badge>
                ))}
              </div>
            )}

            {/* Download Button */}
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <AnimatedSection animation="slideUp" delay={0.3}>
          {viewMode === 'list' ? (
            <StaggeredGrid className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </StaggeredGrid>
          ) : (
            <MonthlyView events={academicEvents} currentMonth={currentMonth} />
          )}
        </AnimatedSection>

        {/* Upcoming Events Sidebar */}
        {viewMode === 'list' && (
          <AnimatedSection animation="slideUp" delay={0.4} className="mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <p className="text-blue-100 text-sm">{event.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">
                          {formatDateRange(event.startDate, event.endDate)}
                        </div>
                        <Badge className="bg-white/20 text-white border-white/30 mt-1">
                          {categoryLabels[event.category]}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}