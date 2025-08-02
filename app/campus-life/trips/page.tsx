"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { Calendar, MapPin, Users, Camera } from 'lucide-react'

interface Tour {
  id: string
  title: string
  destination: string
  date: string
  participants: number
  image: string
  description: string
}

const completedTours: Tour[] = [
  {
    id: '1',
    title: 'Power Plant Visit',
    destination: 'Dhaka Power Station',
    date: '2023-11-15',
    participants: 45,
    image: '/placeholder.jpg',
    description: 'Students explored modern power generation facilities and learned about electrical grid systems.'
  },
  {
    id: '2',
    title: 'Cox\'s Bazar Educational Trip',
    destination: 'Cox\'s Bazar Beach',
    date: '2023-10-20',
    participants: 30,
    image: '/placeholder.jpg',
    description: 'Marine engineering educational expedition studying coastal systems and wave energy.'
  },
  {
    id: '3',
    title: 'Sundarbans Eco Tour',
    destination: 'Sundarbans National Park',
    date: '2023-09-12',
    participants: 25,
    image: '/placeholder.jpg',
    description: 'Environmental engineering study tour focusing on sustainable technology in nature.'
  },
  {
    id: '4',
    title: 'Smart City Tour',
    destination: 'Dhaka Metropolitan',
    date: '2023-08-18',
    participants: 40,
    image: '/placeholder.jpg',
    description: 'Exploration of smart city infrastructure and IoT implementations in urban areas.'
  },
  {
    id: '5',
    title: 'Hill Tracts Adventure',
    destination: 'Bandarban Hills',
    date: '2023-07-25',
    participants: 20,
    image: '/placeholder.jpg',
    description: 'Remote area engineering solutions and off-grid renewable energy systems study.'
  },
  {
    id: '6',
    title: 'Tea Garden Technology',
    destination: 'Sylhet Tea Gardens',
    date: '2023-06-10',
    participants: 35,
    image: '/placeholder.jpg',
    description: 'Agricultural automation and processing technology tour in scenic tea plantations.'
  }
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <StaggeredItem>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <Image
            src={tour.image}
            alt={tour.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3">
            <Badge className="bg-green-100 text-green-800">
              Completed
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{tour.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{tour.description}</p>
          
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(tour.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{tour.destination}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{tour.participants} Students</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </StaggeredItem>
  )
}

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Educational Tours
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of our completed educational tours and field trips that provided hands-on learning experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Simple Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{completedTours.length}</div>
            <div className="text-gray-600">Tours Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {completedTours.reduce((sum, tour) => sum + tour.participants, 0)}
            </div>
            <div className="text-gray-600">Students Participated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">6</div>
            <div className="text-gray-600">Destinations Visited</div>
          </div>
        </div>

        {/* Tours Grid */}
        <AnimatedSection animation="slideUp">
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </StaggeredGrid>
        </AnimatedSection>

        {/* Simple Footer Message */}
        <div className="text-center mt-16 p-8 bg-white rounded-lg">
          <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            More Tours Coming Soon
          </h3>
          <p className="text-gray-600">
            Stay tuned for upcoming educational tours and field trips.
          </p>
        </div>
      </div>
    </div>
  )
}