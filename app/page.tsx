import { HeroSection } from "@/components/home/hero-section"
import { LeadershipMessage } from "@/components/home/leadership-message"
import { NewsEvents } from "@/components/home/news-events"
import { FacultyPreview } from "@/components/home/faculty-preview"

export default function Homepage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <LeadershipMessage />
      <FacultyPreview />
      <NewsEvents />
    </div>
  )
}