import { Metadata } from 'next'
import { NewsData } from '@/lib/news-data'
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo'

interface NewsLayoutProps {
  children: React.ReactNode
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const newsItem = NewsData.find(item => item.slug === slug)

  if (!newsItem) {
    return {
      title: 'News Not Found | UAP EEE Department',
      description: 'The requested news article could not be found.'
    }
  }

  return generateSEOMetadata({
    title: `${newsItem.title} | UAP EEE Department`,
    description: newsItem.shortDescription,
    keywords: `UAP, University of Asia Pacific, EEE, Electrical Engineering, ${newsItem.category}, ${newsItem.type}, ${newsItem.title}`,
    url: `https://uap-eee.edu.bd${newsItem.link}`,
    image: newsItem.images[0] || '' // First image as thumbnail
  })
}

export default async function NewsLayout({ children, params }: NewsLayoutProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const newsItem = NewsData.find(item => item.slug === slug)

  if (newsItem) {
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://uap-eee.edu.bd' },
      { name: 'News', url: 'https://uap-eee.edu.bd/news' },
      { name: newsItem.title, url: `https://uap-eee.edu.bd${newsItem.link}` }
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
