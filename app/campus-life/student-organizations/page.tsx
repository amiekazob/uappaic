"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Users
} from 'lucide-react'

interface Organization {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  category: string
  image: string
}

const organizations: Organization[] = [
  {
    id: 'ieee-uap-student-branch',
    name: 'IEEE UAP Student Branch',
    description: 'Advancing technology for humanity through professional development, networking, and technical excellence.',
    icon: <Zap className="w-5 h-5" />,
    category: 'Professional',
    image: 'https://i.ibb.co/b5h8T981/image.png'
  },
  {
    id: 'ieee-uap-sb-wie',
    name: 'IEEE UAP SB WIE Affinity Chapter',
    description: 'Inspiring and empowering women in engineering through mentorship, leadership development, and community building.',
    icon: <Users className="w-5 h-5" />,
    category: 'Professional',
    image: 'https://i.ibb.co/b5h8T981/image.png'
  }
]

function OrganizationCard({ organization }: { organization: Organization }) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Image
              src={organization.image}
              alt={organization.name}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {organization.name}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {organization.category}
              </Badge>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {organization.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function StudentOrganizationsPage() {
  const categories = Array.from(new Set(organizations.map(org => org.category)))
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Organizations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional organizations that provide students with opportunities for leadership, networking, and career development in engineering and technology.
          </p>
        </div>

        {/* Professional Organizations Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
            Professional Organizations
          </h2>
          <div className="space-y-4">
            {organizations.filter(org => org.category === 'Professional').map((organization) => (
              <OrganizationCard key={organization.id} organization={organization} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}