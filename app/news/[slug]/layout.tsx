import { Metadata } from 'next'
import { NewsEvents } from '@/lib/events-data'
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo'

interface NewsLayoutProps {
  children: React.ReactNode
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const event = NewsEvents.find(e => e.link === `/news/${slug}`)

  if (!event) {
    return {
      title: 'News Not Found | UAP EEE Department',
      description: 'The requested news article could not be found.'
    }
  }

  return generateSEOMetadata({
    title: `${event.title} | UAP EEE Department`,
    description: event.shortDescription,
    keywords: `UAP, University of Asia Pacific, EEE, Electrical Engineering, ${event.category}, ${event.type}, ${event.title}`,
    url: `https://uap-eee.edu.bd${event.link}`,
    image: event.images[0] || '' // First image as thumbnail
  })
}

export default function NewsLayout({ children, params }: NewsLayoutProps) {
  const { slug } = params
  const event = NewsEvents.find(e => e.link === `/news/${slug}`)

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
