import { Metadata } from 'next'

interface SEOMetadataProps {
  title: string
  description: string
  keywords?: string
  url?: string
  image?: string
}

export function generateMetadata({
  title,
  description,
  keywords,
  url,
  image
}: SEOMetadataProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      images: image ? [{ url: image }] : undefined,
      type: 'website',
      siteName: 'UAP EEE Department'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined
    },
    alternates: {
      canonical: url
    }
  }
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Department of Electrical and Electronic Engineering - University of Asia Pacific',
    alternateName: 'UAP EEE Department',
    url: 'https://uap-eee.edu.bd',
    logo: 'https://uap-eee.edu.bd/logo.png',
    description: 'Leading department in electrical and electronic engineering education and research at University of Asia Pacific',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House # 73, Road # 5A',
      addressLocality: 'Dhanmondi',
      addressRegion: 'Dhaka',
      postalCode: '1205',
      addressCountry: 'BD'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+880-2-9664091',
      contactType: 'customer service'
    }
  }
}