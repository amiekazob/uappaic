"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Calculator, 
  MessageSquare, 
  Trophy, 
  Camera, 
  Music, 
  Wrench
} from 'lucide-react'

interface Club {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  category: string
  image: string
}

const clubs: Club[] = [
  {
    id: 'project-club',
    name: 'Project Club',
    description: 'Building innovative solutions and fostering entrepreneurial mindset among students.',
    icon: <Wrench className="w-5 h-5" />,
    category: 'Technical',
    image: '/images/campus%20life/clubs/project-club.jpg'
  },
  {
    id: 'programming-ai-club',
    name: 'Programming and AI Club',
    description: 'Exploring the frontiers of artificial intelligence and competitive programming.',
    icon: <Code className="w-5 h-5" />,
    category: 'Technical',
    image: '/images/campus%20life/clubs/programming-ai-club.jpg'
  },
  {
    id: 'math-club',
    name: 'Math Club',
    description: 'Celebrating the beauty of mathematics through problem-solving and learning.',
    icon: <Calculator className="w-5 h-5" />,
    category: 'Academic',
    image: '/images/campus%20life/clubs/math-club.jpg'
  },
  {
    id: 'debate-club',
    name: 'Debate Club',
    description: 'Developing critical thinking and public speaking skills through structured debates.',
    icon: <MessageSquare className="w-5 h-5" />,
    category: 'Literary',
    image: '/images/campus%20life/clubs/debate-club.jpg'
  },
  {
    id: 'sports-club',
    name: 'Sports Club',
    description: 'Promoting physical fitness and sportsmanship through various athletic activities.',
    icon: <Trophy className="w-5 h-5" />,
    category: 'Sports',
    image: '/images/campus%20life/clubs/sports-club.jpg'
  },
  {
    id: 'photography-club',
    name: 'Photography Club',
    description: 'Capturing moments and expressing creativity through the art of photography.',
    icon: <Camera className="w-5 h-5" />,
    category: 'Creative',
    image: '/images/campus%20life/clubs/photography-club.jpg'
  },
  {
    id: 'cultural-club',
    name: 'Cultural Club',
    description: 'Celebrating diversity and promoting cultural exchange through arts and performances.',
    icon: <Music className="w-5 h-5" />,
    category: 'Cultural',
    image: '/images/campus%20life/clubs/cultural-club.jpg'
  }
]

function ClubCard({ club }: { club: Club }) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Image
              src={club.image}
              alt={club.name}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {club.name}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {club.category}
              </Badge>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {club.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ClubsPage() {
  const categories = Array.from(new Set(clubs.map(club => club.category)))
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            List of UAP EEE Club/Society/Forum
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The heart of co-curricular activities at UAP EEE Department lies in its diverse clubs and societies, which play a vital role in enhancing student skills and learning.
          </p>
        </div>

        {/* Academic Clubs Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
            Academic Club (Co-Curricular)
          </h2>
          <div className="space-y-4">
            {clubs.filter(club => club.category === 'Academic' || club.category === 'Technical').map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        </div>

        {/* Non-Academic Clubs Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
            Non-Academic Club (Extra-Curricular)
          </h2>
          <div className="space-y-4">
            {clubs.filter(club => !['Academic', 'Technical'].includes(club.category)).map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}