'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/ui/animated-section'

interface Event {
  id: number
  title: string
  shortDescription: string
  date: string
  images: string[]
  contentSections: {
    sectionTitle: string
    sectionDescription: string
  }[]
  highlights: string[]
  category: string
  type: string
  link: string
}

interface FormattedDate {
  month: string
  day: string
  year: string
}

interface NewsClientPageProps {
  event: Event
  formattedDate: FormattedDate
  images: string[]
  content: {
    highlights: string[]
  } | null
}

export default function NewsClientPage({ event, formattedDate, images, content }: NewsClientPageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="ghost" className="text-slate-600 hover:text-slate-900">
            <Link href="/news" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to News & Events
            </Link>
          </Button>
        </div>

        <article className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {event.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formattedDate.month} {formattedDate.day}, {formattedDate.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>UAP Campus</span>
              </div>
              <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                {event.category}
              </Badge>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text-xl text-slate-700 leading-relaxed mb-12">
              {event.shortDescription}
            </p>
          </AnimatedSection>

          {event.contentSections?.map((section, index) => (
            <AnimatedSection key={index} className="mb-12">
              <h3 className="font-bold text-xl text-white bg-blue-500 rounded-md w-fit p-3 mb-6">
                {section.sectionTitle}
              </h3>
              {images?.[index] && (
                <div className="mb-6">
                  <Image
                    src={images[index]}
                    alt={`${event.title} - ${section.sectionTitle}`}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
              <div className="prose prose-slate max-w-none lg:prose-lg">
                <p className="text-slate-700 leading-relaxed">
                  {section.sectionDescription}
                </p>
              </div>
            </AnimatedSection>
          ))}

          {images && images.slice(event.contentSections?.length || 0).length > 0 && (
            <AnimatedSection className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {images && images.slice(event.contentSections?.length || 0).map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={`${event.title} - Additional Image ${idx + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                ))}
              </div>
            </AnimatedSection>
          )}

          {content && content.highlights.length > 0 && (
            <AnimatedSection className="mt-12">
              <div className="bg-slate-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Highlights</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {content.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          )}
        </article>
      </div>
    </div>
  )
}
