"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer } from "@/components/ui/staggered-container"
import { 
  Calendar, 
  Users, 
  Award, 
  BookOpen, 
  Building, 
  Target,
  TrendingUp,
  Globe,
  Lightbulb,
  GraduationCap,
  Code,
  Brain,
  Trophy,
  Rocket
} from "lucide-react"

interface Milestone {
  year: string
  title: string
  description: string
  type: 'establishment' | 'achievement' | 'expansion' | 'recognition'
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  value: string
}

const milestones: Milestone[] = [
  {
    year: '2024',
    title: 'Club Establishment',
    description: 'Founded in 2024, the Programming and AI Club at the Department of EEE, University of Asia Pacific was established to foster innovation in programming, artificial intelligence, and competitive coding.',
    type: 'establishment'
  },
  {
    year: '2024',
    title: 'First Programming Contest',
    description: 'Organized our inaugural programming contest with participation from students across multiple departments, establishing our commitment to competitive programming.',
    type: 'achievement'
  },
  {
    year: '2024',
    title: 'AI Workshop Series',
    description: 'Launched comprehensive AI workshop series covering machine learning, deep learning, and neural networks for club members.',
    type: 'expansion'
  },
  {
    year: '2025',
    title: 'Industry Mentorship Program',
    description: 'Established partnerships with leading tech companies to provide mentorship and internship opportunities for club members.',
    type: 'achievement'
  },
  {
    year: '2024',
    title: 'Coding Bootcamp Initiative',
    description: 'Introduced intensive coding bootcamps focusing on competitive programming, algorithm design, and problem-solving techniques.',
    type: 'expansion'
  },
  {
    year: '2024',
    title: 'National Contest Participation',
    description: 'Club members participated in national programming contests including ICPC preliminaries and other prestigious competitions.',
    type: 'recognition'
  },
  {
    year: '2024',
    title: 'AI Project Showcase',
    description: 'Organized the first AI project showcase featuring innovative projects in computer vision, NLP, and machine learning applications.',
    type: 'expansion'
  },
  {
    year: '2024',
    title: 'Tech Talk Series',
    description: 'Launched monthly tech talks featuring industry experts, alumni, and faculty members sharing insights on latest programming and AI trends.',
    type: 'achievement'
  }
]

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Active Members',
    description: 'Passionate programmers and AI enthusiasts',
    icon: <Users className="w-8 h-8" />,
    value: '50+'
  },
  {
    id: '2',
    title: 'Programming Contests',
    description: 'Participated in national contests',
    icon: <Trophy className="w-8 h-8" />,
    value: '3+'
  },
  {
    id: '3',
    title: 'AI Projects',
    description: 'Innovative AI and ML projects completed',
    icon: <Brain className="w-8 h-8" />,
    value: '5+'
  },
  {
    id: '4',
    title: 'Workshop Sessions',
    description: 'Technical workshops and training sessions',
    icon: <BookOpen className="w-8 h-8" />,
    value: '2+'
  },
  {
    id: '5',
    title: 'Industry Mentors',
    description: 'Professional mentors from tech industry',
    icon: <Building className="w-8 h-8" />,
    value: '1+'
  }
  
]

const getMilestoneColor = (type: string) => {
  switch (type) {
    case 'establishment': return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'achievement': return 'bg-green-100 text-green-800 border-green-200'
    case 'expansion': return 'bg-purple-100 text-purple-800 border-purple-200'
    case 'recognition': return 'bg-orange-100 text-orange-800 border-orange-200'
    default: return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

const getMilestoneIcon = (type: string) => {
  switch (type) {
    case 'establishment': return <Building className="w-5 h-5" />
    case 'achievement': return <Award className="w-5 h-5" />
    case 'expansion': return <TrendingUp className="w-5 h-5" />
    case 'recognition': return <Target className="w-5 h-5" />
    default: return <Calendar className="w-5 h-5" />
  }
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <AnimatedSection className="relative py-20 bg-gradient-to-r from-purple-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Programming and AI Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Department of EEE, University of Asia Pacific
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Established 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>Programming Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>AI Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Club Overview */}
      <AnimatedSection className="py-20" delay={0.2}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To cultivate a community of passionate programmers and AI enthusiasts who excel in competitive programming, 
                    develop innovative AI solutions, and contribute to technological advancement through continuous learning, 
                    collaboration, and practical application of cutting-edge technologies.
                  </p>
                </Card>
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become the leading programming and AI club in Bangladesh, producing world-class programmers and AI researchers 
                    who will shape the future of technology, win international programming contests, and create AI solutions 
                    that solve real-world problems.
                  </p>
                </Card>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                The Programming and AI Club at the Department of EEE, University of Asia Pacific was established in 2024 
                with the vision of creating a vibrant community where students can explore the fascinating worlds of 
                competitive programming and artificial intelligence. We are committed to fostering innovation, 
                excellence, and collaboration among aspiring technologists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Foundation Story
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2024 by a group of passionate students and faculty members from the Department of EEE, 
                  our club emerged from the recognition that programming and AI skills are essential for modern engineers. 
                  We started with the goal of creating a platform where students could enhance their coding abilities, 
                  participate in programming contests, and explore the limitless possibilities of artificial intelligence.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From day one, we have emphasized hands-on learning, competitive programming, and practical AI applications. 
                  Our regular participation in programming contests, including ICPC and other national competitions, 
                  has helped our members develop problem-solving skills and algorithmic thinking that extends far beyond 
                  traditional academic boundaries.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-600 rounded-full text-white">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Competitive Programming</h4>
                      <p className="text-sm text-gray-600">ICPC, Codeforces, AtCoder, and national contests</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-600 rounded-full text-white">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Artificial Intelligence</h4>
                      <p className="text-sm text-gray-600">Machine learning, deep learning, and neural networks</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-600 rounded-full text-white">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Innovation Projects</h4>
                      <p className="text-sm text-gray-600">Real-world AI applications and software development</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements Section */}
      <AnimatedSection className="py-20 bg-gray-50" delay={0.4}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and impact on society
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {achievement.value}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Timeline Section */}
      <AnimatedSection className="py-20" delay={0.6}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our department into what it is today
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-blue-200 rounded-full flex items-center justify-center text-blue-600 relative z-10">
                      {getMilestoneIcon(milestone.type)}
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={`${getMilestoneColor(milestone.type)} border`}>
                            {milestone.year}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {milestone.type.charAt(0).toUpperCase() + milestone.type.slice(1)}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {milestone.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {milestone.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>


      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white" delay={0.8}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Programming & AI Community
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Be part of a vibrant community that's passionate about competitive programming and artificial intelligence. 
            Enhance your coding skills, participate in contests, and build innovative AI solutions that shape the future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
              Join the Club
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
              Contact Us
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}