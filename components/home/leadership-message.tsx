import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"

export function LeadershipMessage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
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
              <h2 className="text-2xl font-bold mb-2">Message from Head of the Department</h2>
              <h4 className="text-gray-500 text-xl font-bold mb-2">Associate Professor A.H.M. Zadidul Karim</h4>
              <p className="text-gray-600 mb-4 text-justify">
                The Department of Electrical and Electronic Engineering (EEE) offers undergraduate and Master’s programs in EEE with a vision for creating quality electrical engineers. At present we enroll 250 students per year in two semesters. So far more than 1600 students graduated from this department since the inception of the department in 2004.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 