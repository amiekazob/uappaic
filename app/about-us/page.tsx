"use client"

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
  Zap,
  Cpu,
  Radio,
  Microscope
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
    year: '2004',
    title: 'Department Establishment',
    description: 'Founded in 2004, the Department of Electrical and Electronic Engineering at the University of Asia Pacific is committed to delivering high-quality education and fostering research in electrical and electronic technologies.',
    type: 'establishment'
  },
  {
    year: '2008',
    title: 'First Graduation Batch',
    description: 'The first batch of EEE students graduated, marking the beginning of our alumni network that now spans across the globe.',
    type: 'achievement'
  },
  {
    year: '2016',
    title: 'Research Lab Expansion',
    description: 'Established state-of-the-art laboratories for Power Systems, Electronics, and Communications research.',
    type: 'expansion'
  },
  {
    year: '2012',
    title: 'Industry Partnerships',
    description: 'Formed strategic partnerships with leading technology companies and power sector organizations in Bangladesh.',
    type: 'achievement'
  },
  {
    year: '2015',
    title: 'MSc Program Launch',
    description: 'Introduced the Master of Science in EEE program to advance higher education and research capabilities.',
    type: 'expansion'
  },
  {
    year: '2018',
    title: 'IEB Accreditation',
    description: 'Received recognition from international engineering bodies, enhancing the global value of our degrees.',
    type: 'recognition'
  },
  {
    year: '2025',
    title: 'Research lab',
    description: 'Established the Research lab, becoming a pioneer in renewable energy research in Bangladesh.',
    type: 'expansion'
  },
  {
    year: '2020',
    title: '1500+ Alumni Milestone',
    description: 'Celebrated the graduation of our 1000th student, with alumni working in top companies worldwide.',
    type: 'achievement'
  },
 {
  year: '2020',
  title: 'Switch Gear Lab',
  description: 'Established to provide hands-on training on power system protection, circuit breakers, relays, and industrial control systems, supporting both academic and practical learning.',
  type: 'expansion'
},
  {
    year: '2023',
    title: 'Research Excellence Award',
    description: 'Received the National Research Excellence Award for contributions to renewable energy and smart grid technologies.',
    type: 'recognition'
  }
]

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Students Graduated',
    description: 'Proud alumni working globally',
    icon: <GraduationCap className="w-8 h-8" />,
    value: '1,200+'
  },
  {
    id: '2',
    title: 'Faculty Members',
    description: 'Experienced and qualified educators',
    icon: <Users className="w-8 h-8" />,
    value: '25+'
  },
  {
    id: '3',
    title: 'Research Publications',
    description: 'International journal publications',
    icon: <BookOpen className="w-8 h-8" />,
    value: '200+'
  },
  {
    id: '4',
    title: 'Industry Partners',
    description: 'Collaborations with leading companies',
    icon: <Building className="w-8 h-8" />,
    value: '30+'
  },
  {
    id: '5',
    title: 'Research Projects',
    description: 'Ongoing and completed projects',
    icon: <Lightbulb className="w-8 h-8" />,
    value: '50+'
  },
  {
    id: '6',
    title: 'Years of Excellence',
    description: 'Serving the nation since 1996',
    icon: <Award className="w-8 h-8" />,
    value: '28+'
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
      <AnimatedSection className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Our Department
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              28 years of excellence in electrical and electronic engineering education
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Established 1996</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>1,200+ Graduates</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Global Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Department Overview */}
      <AnimatedSection className="py-20" delay={0.2}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Legacy
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The Department of Electrical and Electronic Engineering at University of Asia Pacific 
                was established in 1996 as one of the pioneering engineering departments in private 
                higher education in Bangladesh. Over nearly three decades, we have grown from a small 
                department with ambitious dreams to a leading center of excellence in engineering education 
                and research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Foundation Story
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded with the vision of providing world-class engineering education in Bangladesh, 
                  our department began its journey with a small but dedicated team of faculty members 
                  and the first batch of enthusiastic students. The founders envisioned creating 
                  engineers who would not only excel technically but also contribute meaningfully 
                  to society.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From the beginning, we emphasized practical learning, industry collaboration, 
                  and research excellence. This foundation has enabled us to produce graduates 
                  who are now working in leading companies across the globe, from Silicon Valley 
                  tech giants to major power companies in Bangladesh.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-full text-white">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Power Systems</h4>
                      <p className="text-sm text-gray-600">Leading research in smart grids and renewable energy</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-600 rounded-full text-white">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Electronics</h4>
                      <p className="text-sm text-gray-600">Advanced VLSI design and embedded systems</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-600 rounded-full text-white">
                      <Radio className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Communications</h4>
                      <p className="text-sm text-gray-600">5G/6G technologies and signal processing</p>
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

      {/* Vision & Mission */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white" delay={0.8}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Our Vision & Mission
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-center">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 leading-relaxed">
                    To be a globally recognized center of excellence in electrical and electronic 
                    engineering education and research, producing innovative engineers who contribute 
                    to technological advancement and societal development.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-center">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 leading-relaxed">
                    To provide world-class engineering education, conduct cutting-edge research, 
                    and foster innovation while maintaining strong industry partnerships and 
                    contributing to Bangladesh's technological progress.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white" delay={1.0}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Legacy
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Be part of our continuing story of excellence, innovation, and impact. 
            Discover opportunities to study, research, or collaborate with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <GraduationCap className="w-5 h-5 mr-2" />
              Admission Information
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              <Users className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}