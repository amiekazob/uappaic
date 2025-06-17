import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"

export function LeadershipMessage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600">Message from University Leadership</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Welcome Message</h3>
              <p className="text-gray-600 mb-4">
                Our university offers undergraduate and graduate programs with a vision for creating quality
                education. We are committed to excellence in teaching, research, and service to our community.
              </p>
              <p className="text-gray-600 mb-6">
                With state-of-the-art facilities and dedicated faculty, we provide an environment where students can
                thrive academically and personally.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 