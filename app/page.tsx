import { HeroSection } from "@/components/home/hero-section"
import { LeadershipMessage } from "@/components/home/leadership-message"
import { NewsEvents } from "@/components/home/news-events"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <LeadershipMessage />
      <NewsEvents />
    </div>
  )
}