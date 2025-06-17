import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our University</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the key features that make our institution a leader in higher education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
              <p className="text-gray-600">
                World-class faculty and cutting-edge curriculum designed to prepare students for success
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Research Innovation</h3>
              <p className="text-gray-600">
                Leading research facilities and opportunities for groundbreaking discoveries
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diverse Community</h3>
              <p className="text-gray-600">A vibrant, inclusive campus community with students from around the world</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Success</h3>
              <p className="text-gray-600">
                Comprehensive career services and strong alumni network for professional growth
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 