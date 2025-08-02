import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NewsData, formatDate } from '@/lib/news-data'
import NewsClientPage from './client-page'

interface NewsPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return NewsData.map((newsItem) => ({
    slug: newsItem.slug,
  }))
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const newsItem = NewsData.find(item => item.slug === resolvedParams.slug)
  
  if (!newsItem) {
    return {
      title: 'News Not Found',
      description: 'The requested news item could not be found.'
    }
  }

  // Convert relative URLs to absolute URLs for social media sharing
  const baseUrl = 'https://uappaic.netlify.app'
  const absoluteImages = newsItem.images.map(image => 
    image.startsWith('http') ? image : `${baseUrl}${image}`
  )
  const canonicalUrl = `${baseUrl}/news/${newsItem.slug}`

  return {
    title: `${newsItem.title} | UAP EEE Department`,
    description: newsItem.shortDescription,
    keywords: [
      'UAP',
      'University of Asia Pacific',
      'EEE',
      'Electrical and Electronic Engineering',
      'News',
      newsItem.category,
      ...newsItem.title.split(' ').filter(word => word.length > 3)
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: newsItem.title,
      description: newsItem.shortDescription,
      type: 'article',
      publishedTime: newsItem.date,
      url: canonicalUrl,
      siteName: 'UAP EEE Department',
      images: absoluteImages.map(image => ({
        url: image,
        width: 1200,
        height: 630,
        alt: newsItem.title
      }))
    },
    twitter: {
      card: 'summary_large_image',
      title: newsItem.title,
      description: newsItem.shortDescription,
      images: absoluteImages,
      site: '@uap_eee'
    }
  }
}

export default async function NewsPage({ params }: NewsPageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  const newsItem = NewsData.find(item => item.slug === slug)

  if (!newsItem) {
    notFound()
  }

  const formattedDate = formatDate(new Date(newsItem.date))

  return (
    <NewsClientPage
      event={newsItem}
      formattedDate={formattedDate}
      images={newsItem.images || []}
      content={{ highlights: newsItem.highlights || [] }}
    />
  )
}
