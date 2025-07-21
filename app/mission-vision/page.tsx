"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { 
  Target, 
  Eye, 
  Lightbulb, 
  Users, 
  Globe, 
  Zap, 
  Award, 
  BookOpen, 
  Rocket, 
  Heart,
  Star,
  TrendingUp,
  Shield,
  Compass
} from 'lucide-react'

interface CoreValue {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const coreValues: CoreValue[] = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Fostering creativity and cutting-edge research in electrical and electronic engineering.",
    color: "bg-yellow-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaboration",
    description: "Building strong partnerships between students, faculty, and industry professionals.",
    color: "bg-blue-500"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "Maintaining the highest standards in education, research, and professional development.",
    color: "bg-purple-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Impact",
    description: "Contributing to technological advancement and sustainable development worldwide.",
    color: "bg-green-500"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Lifelong Learning",
    description: "Encouraging continuous growth and adaptation in an ever-evolving technological landscape.",
    color: "bg-indigo-500"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Integrity",
    description: "Upholding ethical standards and social responsibility in all our endeavors.",
    color: "bg-red-500"
  }
]

interface Objective {
  icon: React.ReactNode
  title: string
  description: string
}

const objectives: Objective[] = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Advanced Research",
    description: "Conduct cutting-edge research in emerging technologies like AI, IoT, and renewable energy systems."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Industry Leadership",
    description: "Produce graduates who become leaders and innovators in the electrical and electronics industry."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Technological Innovation",
    description: "Drive technological advancement through innovative solutions to real-world engineering challenges."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sustainable Development",
    description: "Promote environmentally conscious engineering practices and sustainable technology solutions."
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Global Competency",
    description: "Prepare students to compete and excel in the global engineering marketplace."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation Culture",
    description: "Foster an environment that encourages creativity, entrepreneurship, and technological breakthroughs."
  }
]

function ValueCard({ value }: { value: CoreValue }) {
  return (
    <StaggeredItem>
      <Card className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className={`${value.color} text-white p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            {value.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
            {value.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {value.description}
          </p>
        </CardContent>
      </Card>
    </StaggeredItem>
  )
}

function ObjectiveItem({ objective, index }: { objective: Objective; index: number }) {
  return (
    <StaggeredItem>
      <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 group">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {objective.icon}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {objective.title}
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {objective.description}
          </p>
        </div>
      </div>
    </StaggeredItem>
  )
}

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <AnimatedSection animation="fadeIn" className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Purpose</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Shaping the future of electrical and electronic engineering through innovation, 
              excellence, and unwavering commitment to technological advancement.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission & Vision Section */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/80 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-full">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our <span className="text-blue-600">Mission</span>
                </h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  To provide world-class education in electrical and electronic engineering, 
                  fostering innovation, critical thinking, and ethical leadership among our students.
                </p>
                <p>
                  We are committed to advancing knowledge through cutting-edge research, 
                  developing sustainable technological solutions, and preparing graduates 
                  who will drive positive change in society.
                </p>
                <p>
                  Our mission encompasses creating an inclusive learning environment that 
                  encourages collaboration, creativity, and the pursuit of excellence in 
                  all academic and professional endeavors.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/80 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-full">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our <span className="text-purple-600">Vision</span>
                </h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  To be a globally recognized center of excellence in electrical and 
                  electronic engineering education and research, known for producing 
                  innovative leaders and groundbreaking technological solutions.
                </p>
                <p>
                  We envision a future where our graduates are at the forefront of 
                  technological innovation, contributing to sustainable development, 
                  and addressing the world's most pressing engineering challenges.
                </p>
                <p>
                  Our vision is to create a dynamic ecosystem that bridges academia 
                  and industry, fostering entrepreneurship and driving economic growth 
                  through technological advancement.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Values Section */}
        <AnimatedSection animation="slideUp" delay={0.3} className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our actions, decisions, and commitment to excellence.
            </p>
          </div>
          
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </StaggeredGrid>
        </AnimatedSection>

        {/* Strategic Objectives Section */}
        <AnimatedSection animation="slideUp" delay={0.4} className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Objectives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our roadmap to achieving excellence and making a lasting impact in the field of engineering.
            </p>
          </div>
          
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <ObjectiveItem key={index} objective={objective} index={index} />
            ))}
          </StaggeredGrid>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="fadeIn" delay={0.5}>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Journey
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Be part of a community that's shaping the future of technology and engineering excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Badge className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                  Explore Programs
                </Badge>
                <Badge className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer">
                  Contact Us
                </Badge>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}