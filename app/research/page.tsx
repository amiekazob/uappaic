"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { 
  BookOpen, 
  Users,
  Radio,
  Bot,
  Cpu,
  Zap,
  Leaf
} from "lucide-react"

interface ResearchArea {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

interface CommitteeMember {
  id: string
  name: string
  position: string
  role: string
}

const researchAreas: ResearchArea[] = [
  {
    id: '1',
    title: 'Communication',
    description: 'Advanced wireless communication systems, 5G/6G technologies, signal processing, and network optimization for modern telecommunications.',
    icon: <Radio className="w-8 h-8" />,
    color: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'Robotics and AI',
    description: 'Intelligent robotics, machine learning, artificial intelligence, automation systems, and smart control technologies.',
    icon: <Bot className="w-8 h-8" />,
    color: 'bg-purple-500'
  },
  {
    id: '3',
    title: 'Electronics',
    description: 'VLSI design, embedded systems, digital circuits, microelectronics, and advanced electronic device development.',
    icon: <Cpu className="w-8 h-8" />,
    color: 'bg-green-500'
  },
  {
    id: '4',
    title: 'Power',
    description: 'Power systems engineering, electrical machines, power electronics, grid technologies, and energy distribution systems.',
    icon: <Zap className="w-8 h-8" />,
    color: 'bg-yellow-500'
  },
  {
    id: '5',
    title: 'Renewable Energy',
    description: 'Solar energy systems, wind power, energy storage, smart grids, and sustainable energy technologies for environmental conservation.',
    icon: <Leaf className="w-8 h-8" />,
    color: 'bg-emerald-500'
  }
]

const committeeMembers: CommitteeMember[] = [
  {
    id: '1',
    name: 'Professor Dr. Md. Shofiqul Islam',
    position: 'Professor',
    role: 'Chair'
  },
  {
    id: '2',
    name: 'Mr. A. H. M. Zadidul Karim',
    position: 'Associate Professor & Head',
    role: 'Member'
  },
  {
    id: '3',
    name: 'Professor Dr. Tapan Kumar Chakraborty',
    position: 'Professor',
    role: 'Member'
  },
  {
    id: '4',
    name: 'Professor Dr. G. R. Ahmed Jamal',
    position: 'Professor',
    role: 'Member'
  },
  {
    id: '5',
    name: 'Dr. Tasnia Hossain',
    position: 'Assistant Professor',
    role: 'Member'
  },
  {
    id: '6',
    name: 'Mr. Md. Masum Howlader',
    position: 'Assistant Professor',
    role: 'Member'
  },
  {
    id: '7',
    name: 'Dr. Md. Sultan Mahmud',
    position: 'Assistant Professor',
    role: 'Member'
  },
  {
    id: '8',
    name: 'Mr. Sakhawat Hossen Rakib',
    position: 'Lecturer',
    role: 'Member Secretary'
  }
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <AnimatedSection className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Research
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Department of Electrical and Electronic Engineering
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Research Areas - Circular Layout */}
      <AnimatedSection className="py-20" delay={0.2}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The EEE Department focuses on cutting-edge research across five key domains
            </p>
          </div>
          
          {/* Circular Research Areas */}
           <div className="relative max-w-6xl mx-auto">
             {/* SVG Circle with Segments */}
             <div className="flex justify-center mb-12">
               <div className="relative">
                 <svg width="400" height="400" viewBox="0 0 400 400" className="transform rotate-[-90deg]">
                   {/* Communication Segment */}
                   <path
                     d="M 200 200 L 200 50 A 150 150 0 0 1 306.066 93.934 Z"
                     fill="#3b82f6"
                     className="hover:opacity-80 transition-opacity cursor-pointer"
                   />
                   {/* Robotics and AI Segment */}
                   <path
                     d="M 200 200 L 306.066 93.934 A 150 150 0 0 1 306.066 306.066 Z"
                     fill="#8b5cf6"
                     className="hover:opacity-80 transition-opacity cursor-pointer"
                   />
                   {/* Electronics Segment */}
                   <path
                     d="M 200 200 L 306.066 306.066 A 150 150 0 0 1 200 350 Z"
                     fill="#10b981"
                     className="hover:opacity-80 transition-opacity cursor-pointer"
                   />
                   {/* Power Segment */}
                    <path
                      d="M 200 200 L 200 350 A 150 150 0 0 1 106.066 306.066 Z"
                      fill="#eab308"
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                    />
                    {/* Renewable Energy Segment */}
                    <path
                      d="M 200 200 L 106.066 306.066 A 150 150 0 0 1 106.066 93.934 Z"
                      fill="#059669"
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                    />
                   {/* Center Circle */}
                   <circle cx="200" cy="200" r="40" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                 </svg>
                 
                 {/* Labels positioned around the circle */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative w-full h-full">
                     {/* Communication Label */}
                     <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
                       <div className="bg-white px-3 py-1 rounded-full shadow-md border">
                         <span className="text-sm font-semibold text-blue-600">Communication</span>
                       </div>
                     </div>
                     
                     {/* Robotics and AI Label */}
                     <div className="absolute top-1/4 right-8 transform translate-x-1/2 text-center">
                       <div className="bg-white px-3 py-1 rounded-full shadow-md border">
                         <span className="text-sm font-semibold text-purple-600">Robotics & AI</span>
                       </div>
                     </div>
                     
                     {/* Electronics Label */}
                     <div className="absolute bottom-1/4 right-8 transform translate-x-1/2 text-center">
                       <div className="bg-white px-3 py-1 rounded-full shadow-md border">
                         <span className="text-sm font-semibold text-green-600">Electronics</span>
                       </div>
                     </div>
                     
                     {/* Power Label */}
                     <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                       <div className="bg-white px-3 py-1 rounded-full shadow-md border">
                         <span className="text-sm font-semibold text-yellow-600">Power</span>
                       </div>
                     </div>
                     
                     {/* Renewable Energy Label */}
                     <div className="absolute top-1/4 left-8 transform -translate-x-1/2 text-center">
                       <div className="bg-white px-3 py-1 rounded-full shadow-md border">
                         <span className="text-sm font-semibold text-emerald-600">Renewable Energy</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Research Area Descriptions */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {researchAreas.map((area) => (
                 <Card key={area.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                   <CardHeader className="text-center pb-4">
                     <div className="flex items-center justify-center gap-3 mb-2">
                       <div className={`p-2 rounded-full ${area.color} text-white`}>
                         {area.icon}
                       </div>
                       <CardTitle className="text-lg font-bold text-gray-900">
                         {area.title}
                       </CardTitle>
                     </div>
                   </CardHeader>
                   <CardContent>
                     <p className="text-gray-600 text-sm leading-relaxed text-center">
                       {area.description}
                     </p>
                   </CardContent>
                 </Card>
               ))}
             </div>
           </div>
        </div>
      </AnimatedSection>

      {/* IRID Funding Information */}
      <AnimatedSection className="py-20 bg-gray-50" delay={0.3}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  IRID Research Funding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-justify">
                  IRID provides funding to full time regular faculty members of UAP for quality research projects. 
                  IRID strongly encourages research proposals contained with newness/novelty in the proposed areas 
                  of research and methodology that will produce innovative research outcomes publishable in reputed 
                  journals/books that are enlisted in acknowledged indices (such as ISI Web of Sciences and Scopus) 
                  and presentable in national and international forums. Early and mid-career faculty members and 
                  faculty members who did not apply earlier for IRID Research Grant are especially encouraged to 
                  consider applying for research funding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Research Committee */}
      <AnimatedSection className="py-20" delay={0.4}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  Research Committee
                </CardTitle>
                <div className="text-sm text-gray-600">
                  <p>Department of EEE</p>
                  <p>Date: 21-05-25</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  Following are the members of updated 'Research committee' for fostering the research in EEE Department:
                </p>
                <div className="space-y-4">
                  {committeeMembers.map((member, index) => (
                    <div key={member.id} className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.position}</p>
                        <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}