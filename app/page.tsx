import { HeroSection } from "@/components/home/hero-section"
import { LeadershipMessage } from "@/components/home/leadership-message"
import { NewsEvents } from "@/components/home/news-events"
import { FacultyPreview } from "@/components/home/faculty-preview"
import { NotableAchievements } from "@/components/home/notable-achievements"
import { EntrepreneurshipHighlights } from "@/components/home/entrepreneurship-highlights"
import StudentLifeHighlights from "@/components/home/student-life-highlights"
import { AlumniPortal } from "@/components/home/alumni-portal"
import FAQSection from "@/components/home/faq-section"
import AlumniPortalNotification from "@/components/home/alumni-portal-notification"
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
  image: '/og-image.svg'
})

export default function Homepage() {
  return (
    <div className="bg-white">
      <AlumniPortalNotification />
      <HeroSection />
      <StatsSection />
      <OptimizedAnimatedSection animation="fadeIn" delay={0.1}>
        <LeadershipMessage />
      </OptimizedAnimatedSection>
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <FacultyPreview />
      </OptimizedAnimatedSection>
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <NotableAchievements />
      </OptimizedAnimatedSection>
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <EntrepreneurshipHighlights />
      </OptimizedAnimatedSection>
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <StudentLifeHighlights />
      </OptimizedAnimatedSection>
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <NewsEvents />
      </OptimizedAnimatedSection>
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <AlumniPortal />
      </OptimizedAnimatedSection>
      <OptimizedAnimatedSection animation="fadeIn" delay={0.05}>
        <FAQSection />
      </OptimizedAnimatedSection>
      <SocialFollow />
    </div>
  )
}