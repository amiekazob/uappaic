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

  return {
    title: `${pressRelease.title} | EEE Club UAP`,
    description: pressRelease.content.substring(0, 160) + '...',
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