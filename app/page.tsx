import { HeroSection } from "@/components/home/hero-section"
import { LeadershipMessage } from "@/components/home/leadership-message"
import { ClubPresidentMessage } from "@/components/home/club-president-message"
import { CommitteePreview } from "@/components/home/committee-preview"
import { UpcomingEvents } from "@/components/home/upcoming-events"
import { News } from "@/components/home/news"
import { PastEvents } from "@/components/home/past-events"
import StudentLifeHighlights from "@/components/home/student-life-highlights"
import FAQSection from "@/components/home/faq-section"
import { OptimizedAnimatedSection } from "@/components/ui/optimized-animated-section"
import { SocialFollow } from "@/components/home/social-follow"

import Announcements from "@/components/home/announcements"
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Home',
  description: 'Welcome to the Department of Electrical and Electronic Engineering at University of Asia Pacific. Discover our cutting-edge programs, world-class faculty, and innovative education in electrical and electronic engineering.',
  keywords: 'UAP EEE, electrical engineering home, electronic engineering Bangladesh, engineering education, UAP department, electrical engineering programs',
  url: 'https://uap-eee.edu.bd',
  image: '/og-image.svg'
})

export default function Homepage() {
  return (
    <div className="bg-white">
      {/* Hero Section - First impression and main visual */}
      <HeroSection />
      
      {/* Press Releases - Latest updates and announcements (highest priority) */}
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <Announcements />
      </OptimizedAnimatedSection>
      
      {/* Leadership Messages - Authority and credibility */}
      <OptimizedAnimatedSection animation="fadeIn" delay={0.1}>
        <LeadershipMessage />
      </OptimizedAnimatedSection>
      <OptimizedAnimatedSection animation="fadeIn" delay={0.1}>
        <ClubPresidentMessage />
      </OptimizedAnimatedSection>
      
      {/* Upcoming Events - Actionable content for engagement */}
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <UpcomingEvents />
      </OptimizedAnimatedSection>
      
      {/* News - Recent developments and achievements */}
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <News />
      </OptimizedAnimatedSection>
      
      {/* Committee Preview - Organizational structure */}
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <CommitteePreview />
      </OptimizedAnimatedSection>
      
      {/* Past Events - Historical achievements and success stories */}
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <PastEvents />
      </OptimizedAnimatedSection>
      
      {/* Student Life Highlights - Experience and community */}
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <StudentLifeHighlights />
      </OptimizedAnimatedSection>
      
      {/* FAQ Section - Support and information */}
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <FAQSection />
      </OptimizedAnimatedSection>
      
      {/* Social Follow - Community engagement (footer area) */}
      <SocialFollow />
    </div>
  )
}