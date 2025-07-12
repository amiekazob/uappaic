import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'News & Events',
  description: 'Stay updated with the latest news, events, and announcements from UAP EEE Department. Discover our achievements, upcoming conferences, and academic activities.',
  keywords: 'UAP news, EEE events, electrical engineering news, academic events, conferences, UAP announcements, engineering activities',
  url: 'https://uap-eee.edu.bd/news',
  image: '/news-og.jpg'
});