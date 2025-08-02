import { notFound } from 'next/navigation'
import { getAllPressReleases, getPressReleaseBySlug } from '@/lib/press-release-data'
import PressReleaseClient from './press-release-client'

interface PressReleaseDetailProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const pressReleases = getAllPressReleases()
  return pressReleases.map((pressRelease) => ({
    slug: pressRelease.slug,
  }))
}

export async function generateMetadata({ params }: PressReleaseDetailProps) {
  const { slug } = await params
  const pressRelease = getPressReleaseBySlug(slug)

  if (!pressRelease) {
    return {
      title: 'Press Release Not Found',
    }
  }

  const baseUrl = 'https://uappaic.netlify.app'
  const canonicalUrl = `${baseUrl}/press-release/${slug}`
  const description = pressRelease.content.substring(0, 160) + '...'

  return {
    title: `${pressRelease.title} | EEE Club UAP`,
    description: description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: pressRelease.title,
      description: description,
      type: 'article',
      publishedTime: pressRelease.date,
      url: canonicalUrl,
      siteName: 'UAP EEE Department',
      images: [{
        url: `${baseUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: pressRelease.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: pressRelease.title,
      description: description,
      images: [`${baseUrl}/og-image.svg`],
      site: '@uap_eee'
    }
  }
}



export default async function PressReleaseDetail({ params }: PressReleaseDetailProps) {
  const { slug } = await params
  const pressRelease = getPressReleaseBySlug(slug)

  if (!pressRelease) {
    notFound()
  }

  return <PressReleaseClient slug={slug} />
}