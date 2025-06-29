import { Metadata } from 'next'
import { events } from '@/lib/events-data'
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo'

interface NewsLayoutProps {
  children: React.ReactNode
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const event = events.find(e => e.link === `/news/${slug}`)
  
  if (!event) {
    return {
      title: 'News Not Found | UAP EEE Department',
      description: 'The requested news article could not be found.'
    }
  }

  return generateSEOMetadata({
    title: `${event.title} | UAP EEE Department`,
    description: event.description,
    keywords: `UAP, University of Asia Pacific, EEE, Electrical Engineering, ${event.category}, ${event.type}, ${event.title}`,
    url: `https://uap-eee.edu.bd${event.link}`,
    image: event.image
  })
}

export default async function NewsLayout({ children, params }: NewsLayoutProps) {
  const { slug } = await params
  const event = events.find(e => e.link === `/news/${slug}`)
  
  if (event) {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://uap-eee.edu.bd' },
      { name: 'News & Events', url: 'https://uap-eee.edu.bd/news' },
      { name: event.title, url: `https://uap-eee.edu.bd${event.link}` }
    ])

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {children}
      </>
    )
  }

  return children
}