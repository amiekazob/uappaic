'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Download } from 'lucide-react'
import { getAllPressReleases, getPressReleaseBySlug } from '@/lib/press-release-data'
import { SocialShare } from '@/components/ui/social-share'
import { Button } from '@/components/ui/button'

interface PressReleaseClientProps {
  slug: string
}

const priorityColors = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  low: 'bg-green-100 text-green-800 border-green-200'
}

const categoryColors = {
  partnership: 'bg-blue-100 text-blue-800 border-blue-200',
  award: 'bg-purple-100 text-purple-800 border-purple-200',
  facility: 'bg-green-100 text-green-800 border-green-200',
  conference: 'bg-orange-100 text-orange-800 border-orange-200',
  innovation: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  scholarship: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  competition: 'bg-red-100 text-red-800 border-red-200',
  alumni: 'bg-gray-100 text-gray-800 border-gray-200',
  committee: 'bg-teal-100 text-teal-800 border-teal-200'
}

export default function PressReleaseClient({ slug }: PressReleaseClientProps) {
  const [currentUrl, setCurrentUrl] = useState('')
  
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const pressRelease = getPressReleaseBySlug(slug)

  if (!pressRelease) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Press Release Not Found</h1>
            <Link href="/press-release" className="text-blue-600 hover:text-blue-800">
              Back to Press Releases
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/press-release" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Press Releases
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                priorityColors[pressRelease.priority as keyof typeof priorityColors]
              }`}>
                {pressRelease.priority.charAt(0).toUpperCase() + pressRelease.priority.slice(1)} Priority
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                categoryColors[pressRelease.category as keyof typeof categoryColors]
              }`}>
                <Tag className="w-3 h-3 inline mr-1" />
                {pressRelease.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {pressRelease.title}
            </h1>

            {/* Date */}
            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={pressRelease.date}>
                {formatDate(pressRelease.date)}
              </time>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {pressRelease.fullContent || pressRelease.content}
              </div>
            </div>

            {/* PDF View and Social Share */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 p-4 bg-gray-50 rounded-lg border">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {pressRelease.pdfSectionTitle || 'View PDF or Share This Press Release'}
                </h3>
                <p className="text-xs text-gray-600">
                  {pressRelease.pdfSectionDescription || 'Click the button below to view this press release as a PDF in a new tab, or use the social sharing options to spread the word.'}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => {
                    // Generate PDF URL - you can customize this path based on your PDF storage
                    const pdfUrl = pressRelease.pdfUrl || `/pdf/press-releases/${pressRelease.slug}.pdf`
                    window.open(pdfUrl, '_blank')
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Click Me
                </Button>
                <div className="border-l border-gray-300 pl-3">
                  <SocialShare
                    url={currentUrl}
                    title={pressRelease.title}
                    description={pressRelease.content.substring(0, 160)}
                    hashtags={['EEEClubUAP', 'PressRelease', pressRelease.category]}
                    variant="minimal"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Press Releases */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Press Releases</h2>
          <div className="grid gap-4">
            {getAllPressReleases()
              .filter(item => item.id !== pressRelease.id && item.category === pressRelease.category)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/press-release/${item.slug}`}
                  className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {item.content}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{formatDate(item.date)}</span>
                    <span className={`px-2 py-1 rounded-full ${
                      categoryColors[item.category as keyof typeof categoryColors]
                    }`}>
                      {item.category}
                    </span>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}