import { HeroSection } from "@/components/home/hero-section"
import { LeadershipMessage } from "@/components/home/leadership-message"
import { NewsEvents } from "@/components/home/news-events"
import { FacultyPreview } from "@/components/home/faculty-preview"
import { OptimizedAnimatedSection } from "@/components/ui/optimized-animated-section"
import { SocialFollow } from "@/components/home/social-follow"
import { StatsSection } from "@/components/home/stats-section"
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description: 'Welcome to the Department of Electrical and Electronic Engineering at University of Asia Pacific. Discover our cutting-edge programs, world-class faculty, and innovative research in electrical and electronic engineering.',
  keywords: 'UAP EEE, electrical engineering home, electronic engineering Bangladesh, engineering education, UAP department, electrical engineering programs',
  url: 'https://uap-eee.edu.bd',
  image: '/og-image.jpg'
})

export default function Homepage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <StatsSection />
      <OptimizedAnimatedSection animation="fadeIn" delay={0.1}>
        <LeadershipMessage />
      </OptimizedAnimatedSection>
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <FacultyPreview />
      </OptimizedAnimatedSection>
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <NewsEvents />
      </OptimizedAnimatedSection>
      <SocialFollow />
    </div>
  )
}