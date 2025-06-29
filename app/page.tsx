import { HeroSection } from "@/components/home/hero-section"
import { LeadershipMessage } from "@/components/home/leadership-message"
import { NewsEvents } from "@/components/home/news-events"
import { FacultyPreview } from "@/components/home/faculty-preview"
import { AnimatedSection } from "@/components/ui/animated-section"
import { SocialFollow } from "@/components/home/social-follow"
import { StatsSection } from "@/components/home/stats-section"

export default function Homepage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <StatsSection />
      <AnimatedSection animation="fadeIn" delay={0.2}>
        <LeadershipMessage />
      </AnimatedSection>
      <AnimatedSection animation="slideUp" delay={0.1}>
        <FacultyPreview />
      </AnimatedSection>
      <AnimatedSection animation="slideUp" delay={0.1}>
        <NewsEvents />
      </AnimatedSection>
      <SocialFollow />
    </div>
  )
}