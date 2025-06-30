'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/ui/animated-section'

export default function NewsClientPage({ event, formattedDate, images, content }) {
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
              {event.description}
            </p>
          </AnimatedSection>

          {content && content.fullDescription.split('\n\n').map((paragraph, index) => {
            const isTitle =
              paragraph === 'Intra-Department Programming Contest' ||
              paragraph === 'Seminar on Student Research and Publication'

            return (
              <React.Fragment key={index}>
                <AnimatedSection>
                  <div className="prose prose-slate max-w-none lg:prose-lg">
                    {isTitle ? (
                      <h3 className="font-bold text-xl text-white bg-blue-500 rounded-md w-fit p-1">{paragraph}</h3>
                    ) : (
                      <p>{paragraph}</p>
                    )}
                  </div>
                </AnimatedSection>

                {/* Display two images side by side if available */}
                {(images[index * 2] || images[index * 2 + 1]) && (
                  <AnimatedSection className="my-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {images[index * 2] && (
                        <Image
                          src={images[index * 2]}
                          alt={`${event.title} - Image ${index * 2 + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                      )}
                      {images[index * 2 + 1] && (
                        <Image
                          src={images[index * 2 + 1]}
                          alt={`${event.title} - Image ${index * 2 + 2}`}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                      )}
                    </div>
                  </AnimatedSection>
                )}
              </React.Fragment>
            )
          })}

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