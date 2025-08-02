import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PastEventsData } from '@/lib/past-events-data'
import NewsClientPage from '@/app/news/[slug]/client-page'
import { formatDate } from '@/lib/past-events-data'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const event = PastEventsData.find(event => event.slug === params.slug)
  
  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'The requested event could not be found.'
    }
  }

  return {
    title: `${event.title} | EEE UAP`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: event.images.length > 0 ? [{
        url: event.images[0],
        width: 1200,
        height: 630,
        alt: event.title
      }] : []
    }
  }
}

export async function generateStaticParams() {
  return PastEventsData.map((event) => ({
    slug: event.slug,
  }))
}

export default function PastEventPage({ params }: PageProps) {
  const event = PastEventsData.find(event => event.slug === params.slug)
  
  if (!event) {
    notFound()
  }

  const formattedDate = formatDate(event.date)
  const highlights = event.highlights || []

  return (
    <NewsClientPage 
      event={event}
      formattedDate={formattedDate}
      images={event.images}
      highlights={highlights}
    />
  )
}