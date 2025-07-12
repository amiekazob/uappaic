"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer } from "@/components/ui/staggered-container"
import { 
  Microscope, 
  Zap, 
  Cpu, 
  Radio, 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp,
  ExternalLink,
  Calendar,
  DollarSign,
  Target
} from "lucide-react"

interface ResearchArea {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  projects: number
  publications: number
  funding: string
}

interface OngoingProject {
  id: string
  title: string
  description: string
  duration: string
  funding: string
  status: 'ongoing' | 'completed' | 'proposed'
  collaborators: string[]
  area: string
}

interface ResearchAchievement {
  id: string
  title: string
  description: string
  year: string
  type: 'award' | 'grant' | 'publication' | 'patent'
  amount?: string
}

const researchAreas: ResearchArea[] = [
  {
    id: '1',
    title: 'Power Systems & Renewable Energy',
    description: 'Research in smart grids, renewable energy integration, power quality, and energy storage systems.',
    icon: <Zap className="w-8 h-8" />,
    projects: 12,
    publications: 45,
    funding: '৳2.5M'
  },
  {
    id: '2',
    title: 'Electronics & VLSI Design',
    description: 'Advanced research in analog/digital circuit design, VLSI systems, and embedded electronics.',
    icon: <Cpu className="w-8 h-8" />,
    projects: 8,
    publications: 32,
    funding: '৳1.8M'
  },
  {
    id: '3',
    title: 'Communications & Signal Processing',
    description: 'Wireless communications, 5G/6G technologies, digital signal processing, and IoT systems.',
    icon: <Radio className="w-8 h-8" />,
    projects: 15,
    publications: 58,
    funding: '৳3.2M'
  },
  {
    id: '4',
    title: 'Control Systems & Robotics',
    description: 'Automation, robotics, artificial intelligence, and intelligent control systems.',
    icon: <Microscope className="w-8 h-8" />,
    projects: 10,
    publications: 28,
    funding: '৳2.1M'
  }
]

const ongoingProjects: OngoingProject[] = [
  {
    id: '1',
    title: 'Smart Grid Implementation for Rural Bangladesh',
    description: 'Development of cost-effective smart grid solutions for rural electrification with renewable energy integration.',
    duration: '2023-2025',
    funding: '৳1.2M',
    status: 'ongoing',
    collaborators: ['BSTI', 'BUET', 'Local Government'],
    area: 'Power Systems'
  },
  {
    id: '2',
    title: '5G Network Optimization for Dense Urban Areas',
    description: 'Research on beamforming techniques and interference mitigation for 5G networks in Dhaka metropolitan area.',
    duration: '2024-2026',
    funding: '৳950K',
    status: 'ongoing',
    collaborators: ['Grameenphone', 'BTRC'],
    area: 'Communications'
  },
  {
    id: '3',
    title: 'AI-Powered Medical Device Development',
    description: 'Creating intelligent medical monitoring devices using machine learning and IoT technologies.',
    duration: '2023-2024',
    funding: '৳750K',
    status: 'ongoing',
    collaborators: ['Square Hospital', 'UAP Medical Center'],
    area: 'Electronics'
  },
  {
    id: '4',
    title: 'Autonomous Drone System for Agriculture',
    description: 'Development of autonomous drones for precision agriculture and crop monitoring in Bangladesh.',
    duration: '2024-2025',
    funding: '৳680K',
    status: 'ongoing',
    collaborators: ['Ministry of Agriculture', 'BARI'],
    area: 'Robotics'
  }
]

const achievements: ResearchAchievement[] = [
  {
    id: '1',
    title: 'Best Research Paper Award - IEEE Conference',
    description: 'Recognition for outstanding research in renewable energy systems at IEEE PEDES 2023.',
    year: '2023',
    type: 'award'
  },
  {
    id: '2',
    title: 'UGC Research Grant',
    description: 'Major research grant awarded for smart grid development project.',
    year: '2023',
    type: 'grant',
    amount: '৳1.5M'
  },
  {
    id: '3',
    title: 'Patent Filed for IoT Security Protocol',
    description: 'Novel security protocol for IoT devices in industrial applications.',
    year: '2024',
    type: 'patent'
  },
  {
    id: '4',
    title: 'Nature Communications Publication',
    description: 'High-impact publication on quantum communication systems.',
    year: '2024',
    type: 'publication'
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ongoing': return 'bg-green-100 text-green-800'
    case 'completed': return 'bg-blue-100 text-blue-800'
    case 'proposed': return 'bg-yellow-100 text-yellow-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'award': return <Award className="w-5 h-5" />
    case 'grant': return <DollarSign className="w-5 h-5" />
    case 'publication': return <BookOpen className="w-5 h-5" />
    case 'patent': return <Target className="w-5 h-5" />
    default: return <Award className="w-5 h-5" />
  }
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <AnimatedSection className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Research Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Advancing knowledge through innovative research in electrical and electronic engineering
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>163+ Publications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>45+ Active Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>৳9.6M+ Funding</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Research Areas */}
      <AnimatedSection className="py-20" delay={0.2}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our department focuses on cutting-edge research across multiple domains of electrical and electronic engineering
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area) => (
              <Card key={area.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {area.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {area.projects} Projects
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{area.publications} Publications</span>
                    <span className="font-semibold text-green-600">{area.funding} Funding</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Ongoing Projects */}
      <AnimatedSection className="py-20 bg-gray-50" delay={0.4}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ongoing Research Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current research initiatives addressing real-world challenges and advancing technological innovation
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ongoingProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getStatusColor(project.status)} variant="secondary">
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                    <Badge variant="outline">{project.area}</Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      <span>{project.funding}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Collaborators:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.collaborators.map((collaborator, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {collaborator}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Research Achievements */}
      <AnimatedSection className="py-20" delay={0.6}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that highlight our research excellence and impact
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600 flex-shrink-0">
                      {getTypeIcon(achievement.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">
                          {achievement.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {achievement.year}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {achievement.description}
                      </p>
                      {achievement.amount && (
                        <p className="text-green-600 font-semibold text-sm">
                          {achievement.amount}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Research Statistics */}
      <AnimatedSection className="py-20 bg-blue-900 text-white" delay={0.8}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Research Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our research contributions by the numbers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">163+</div>
              <div className="text-blue-100">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">45+</div>
              <div className="text-blue-100">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">৳9.6M+</div>
              <div className="text-blue-100">Research Funding</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-blue-100">Industry Partners</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white" delay={1.0}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Research Community
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Collaborate with us on cutting-edge research projects and contribute to technological advancement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Users className="w-5 h-5 mr-2" />
              Research Collaboration
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Publications
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}