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
      {/* Gradient transition between sections */}
      <div className="h-16 bg-gradient-to-b from-indigo-50 via-purple-50/70 to-purple-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-violet-50/60" />
      </div>
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