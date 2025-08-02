import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarDays, Clock, Users, Megaphone, Trophy, BookOpen, Calendar, ArrowLeft, Tag } from 'lucide-react'
import { getAllPressReleases, getActivePressReleases, getPressReleasesByCategory } from '@/lib/press-release-data'

export const metadata: Metadata = {
  title: 'Press Release | EEE Club UAP',
  description: 'Latest press releases and updates from the EEE Club at University of Asia Pacific',
}

const priorityColors = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  low: 'bg-green-100 text-green-800 border-green-200'
}

const categoryIcons = {
  event: Calendar,
  academic: BookOpen,
  competition: Trophy,
  general: Megaphone,
  workshop: Users
}

const categoryColors = {
  event: 'text-blue-600',
  academic: 'text-purple-600',
  competition: 'text-orange-600',
  general: 'text-gray-600',
  workshop: 'text-green-600'
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function PressReleaseItem({ pressRelease }: { pressRelease: any }) {
  return (
    <div className="border-b border-gray-200 pb-6 mb-6 last:border-b-0">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {pressRelease.title}
      </h3>
      <p className="text-sm text-gray-500 mb-3">
        {formatDate(pressRelease.date)}
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        {pressRelease.content.length > 150 
          ? `${pressRelease.content.substring(0, 150)}...` 
          : pressRelease.content
        }
      </p>
      <Link
        href={`/press-release/${pressRelease.slug}`}
        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
      >
        Read More →
      </Link>
    </div>
  )
}

export default function PressReleasePage() {
  const activePressReleases = getActivePressReleases().sort((a, b) => b.id - a.id)
  const categories = ['partnership', 'award', 'facility', 'conference', 'innovation', 'scholarship', 'competition', 'alumni', 'committee']

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Press Release
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and important information from the EEE Club
          </p>
        </div>

        {/* All Press Releases */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {activePressReleases.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No press releases available at the moment.</p>
              </div>
            ) : (
              <div>
                {activePressReleases.map((pressRelease) => (
                  <PressReleaseItem key={pressRelease.id} pressRelease={pressRelease} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button variant="outline" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}