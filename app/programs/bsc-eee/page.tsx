"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Lightbulb, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  Zap,
  Cpu,
  Radio,
  Settings,

  Briefcase,
  CreditCard,
  Calculator,
  AlertTriangle,
  X,
  Trophy
} from 'lucide-react'

interface CourseCategory {
  id: string
  title: string
  description: string
  credits: number
  courses: string[]
  color: string
}

interface CareerPath {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  growth: string
}

interface Facility {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

interface FeeStructure {
  id: string
  category: string
  amount: string
  description: string
  frequency: string
}

interface ScholarshipOption {
  id: string
  name: string
  description: string
  coverage: string
  eligibility: string
}

const courseCategories: CourseCategory[] = [
  {
    id: '1',
    title: 'Core Engineering Courses',
    description: 'Fundamental electrical and electronic engineering subjects',
    credits: 84,
    courses: [
      'Circuit Analysis I & II',
      'Electronics I & II',
      'Digital Logic Design',
      'Electromagnetic Fields',
      'Power Systems',
      'Control Systems',
      'Signal Processing',
      'Communication Systems'
    ],
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: '2',
    title: 'Mathematics & Sciences',
    description: 'Mathematical foundation and scientific principles',
    credits: 36,
    courses: [
      'Calculus I, II & III',
      'Differential Equations',
      'Linear Algebra',
      'Physics I & II',
      'Chemistry',
      'Statistics & Probability'
    ],
    color: 'bg-green-100 text-green-800'
  },
  {
    id: '3',
    title: 'Computer Programming',
    description: 'Programming languages and software development',
    credits: 18,
    courses: [
      'Programming in C',
      'Object Oriented Programming',
      'Data Structures',
      'Microprocessor & Assembly',
      'MATLAB/Simulink',
      'VLSI Design'
    ],
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: '4',
    title: 'General Education',
    description: 'Liberal arts and communication skills',
    credits: 24,
    courses: [
      'English Composition',
      'Technical Writing',
      'Economics',
      'Ethics in Engineering',
      'Bangladesh Studies',
      'Environmental Science'
    ],
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: '5',
    title: 'Specialization Tracks',
    description: 'Choose your area of expertise',
    credits: 18,
    courses: [
      'Power & Energy Systems',
      'Telecommunications',
      'Electronics & VLSI',
      'Control & Automation',
      'Biomedical Engineering',
      'Renewable Energy'
    ],
    color: 'bg-red-100 text-red-800'
  }
]

const careerPaths: CareerPath[] = [
  {
    id: '1',
    title: 'Power Systems Engineer',
    description: 'Design and maintain electrical power generation, transmission, and distribution systems.',
    icon: <Zap className="w-8 h-8" />,
    growth: '15% annually'
  },
  {
    id: '2',
    title: 'Electronics Design Engineer',
    description: 'Develop electronic circuits, PCBs, and embedded systems for various applications.',
    icon: <Cpu className="w-8 h-8" />,
    growth: '18% annually'
  },
  {
    id: '3',
    title: 'Telecommunications Engineer',
    description: 'Work on communication networks, 5G systems, and wireless technologies.',
    icon: <Radio className="w-8 h-8" />,
    growth: '20% annually'
  },
  {
    id: '4',
    title: 'Control Systems Engineer',
    description: 'Design automation systems for manufacturing, robotics, and industrial processes.',
    icon: <Settings className="w-8 h-8" />,
    growth: '16% annually'
  },
  {
    id: '5',
    title: 'Research & Development',
    description: 'Conduct research in emerging technologies and develop innovative solutions.',
    icon: <Lightbulb className="w-8 h-8" />,
    growth: '22% annually'
  },
  {
    id: '6',
    title: 'Project Manager',
    description: 'Lead engineering projects and manage technical teams in various industries.',
    icon: <Briefcase className="w-8 h-8" />,
    growth: '14% annually'
  }
]

const facilities: Facility[] = [
  {
    id: '1',
    name: 'Advanced Electronics Lab',
    description: 'State-of-the-art equipment for circuit design and testing',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: '2',
    name: 'Power Systems Laboratory',
    description: 'High-voltage equipment and power system simulation tools',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: '3',
    name: 'Communication Systems Lab',
    description: 'RF equipment, antennas, and wireless communication setups',
    icon: <Radio className="w-6 h-6" />
  },
  {
    id: '4',
    name: 'Computer Programming Lab',
    description: 'Modern computers with latest software and development tools',
    icon: <Settings className="w-6 h-6" />
  }
]

const feeStructure: FeeStructure[] = [
  {
    id: '1',
    category: 'Tuition Fee',
    amount: '৳1,00,000',
    description: 'Per semester tuition fee for regular courses',
    frequency: 'Per Semester'
  },
  {
    id: '2',
    category: 'Admission Fee',
    amount: '৳25,000',
    description: 'One-time admission and registration fee',
    frequency: 'One Time'
  },
  {
    id: '3',
    category: 'Laboratory Fee',
    amount: 'FREE',
    description: 'Laboratory equipment and maintenance fee',
    frequency: 'Included'
  },
  {
    id: '4',
    category: 'Library Fee',
    amount: 'FREE',
    description: 'Access to library resources and digital databases',
    frequency: 'Included'
  },
  {
    id: '5',
    category: 'Student Activity Fee',
    amount: 'FREE',
    description: 'Clubs, events, and extracurricular activities',
    frequency: 'Included'
  },
  {
    id: '6',
    category: 'Technology Fee',
    amount: 'FREE',
    description: 'IT infrastructure and software licenses',
    frequency: 'Included'
  }
]

const scholarshipOptions: ScholarshipOption[] = [
  {
    id: '1',
    name: 'Entry Level Merit Waiver',
    description: 'Based on SSC and HSC academic excellence (1st semester only)',
    coverage: '50% - 100%',
    eligibility: 'GPA 5.00 in SSC & HSC, or all A+ grades for 100% waiver'
  },
  {
    id: '2',
    name: 'Continuing Merit Waiver',
    description: 'Performance-based waiver from 2nd semester onward',
    coverage: '25% - 100%',
    eligibility: 'Top 3% (100%), Next 6% (50%), Next 10% (25%) based on CGPA'
  },
  {
    id: '3',
    name: 'Freedom Fighter Children',
    description: 'Full free studentship for children of freedom fighters',
    coverage: '100%',
    eligibility: '3% of total students as per Private University Act 2010'
  },
  {
    id: '4',
    name: 'Meritorious Students from Remote Areas',
    description: 'Full scholarship for students from underdeveloped areas',
    coverage: '100%',
    eligibility: '3% of students from remote and underdeveloped areas'
  },
  {
    id: '5',
    name: 'Sibling Discount',
    description: 'Tuition fee waiver for 2nd sibling',
    coverage: '60%',
    eligibility: 'Second sibling studying at UAP'
  },
  {
    id: '6',
    name: 'Need-Based Scholarship',
    description: 'Special tuition fee waiver for poor but meritorious students',
    coverage: '10% - 100%',
    eligibility: 'Based on performance at UAP and financial need'
  }
]

const programHighlights = [
  '4-Year Bachelor\'s Degree Program',
  '162 Credit Hours Total',
  'Industry-Focused Curriculum',
  'State-of-the-art Laboratory Facilities',
  'Experienced Faculty Members',
  'Internship & Co-op Opportunities',
  'Final Year Project & Research',
  'Strong Industry Partnerships',
  'Modern Campus in Dhaka',
  'Active Student Organizations'
]

const admissionRequirements = [
  'HSC/A-Level with Physics, Mathematics and Chemistry (either in SSC or HSC)',
  'Total GPA in SSC & HSC = 7.00 (with minimum GPA 3.00 in each)',
  'For O-Level & A-Level: minimum 26.5 points with best 7 subjects',
  'Diploma students: CGPA 3.00 in relevant engineering fields with science background in SSC',
  'Pass UAP Admission Test',
  'HSC passed candidates of 2022, 2023, and 2024 are eligible for Spring 2025'
]

export default function BSCEEEPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <AnimatedSection animation="fadeIn" className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bachelor of Science in
              <span className="block text-yellow-300">Electrical & Electronic Engineering</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Shape the future of technology with our comprehensive EEE program. From power systems to cutting-edge electronics, 
              prepare for a rewarding career in engineering innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                <Award className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold">
                <BookOpen className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Program Overview */}
        <AnimatedSection animation="slideUp" delay={0.1} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our BSc in EEE program combines theoretical knowledge with practical skills to prepare you for the rapidly evolving field of electrical and electronic engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">4 Years</div>
              <div className="text-gray-600">Duration</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">162</div>
              <div className="text-gray-600">Credit Hours</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">25:1</div>
              <div className="text-gray-600">Student-Faculty Ratio</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Award className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">ABET</div>
              <div className="text-gray-600">Accredited</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3 text-blue-600" />
                Program Highlights
              </h3>
              <div className="space-y-3">
                {programHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-green-600" />
                Admission Requirements
              </h3>
              <div className="space-y-3">
                {admissionRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </AnimatedSection>

        {/* Curriculum */}
        <AnimatedSection animation="slideUp" delay={0.2} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Curriculum</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed to provide a strong foundation in electrical and electronic engineering principles while allowing specialization in your area of interest.
            </p>
          </div>
          
          <StaggeredGrid className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courseCategories.map((category) => (
              <StaggeredItem key={category.id}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900">{category.title}</CardTitle>
                      <Badge className={category.color}>{category.credits} Credits</Badge>
                    </div>
                    <p className="text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.courses.map((course, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </AnimatedSection>

        {/* Career Opportunities */}
        <AnimatedSection animation="slideUp" delay={0.3} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates are highly sought after by leading companies in Bangladesh and internationally. Explore the diverse career paths available to EEE graduates.
            </p>
          </div>
          
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.map((career) => (
              <StaggeredItem key={career.id}>
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {career.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{career.title}</h3>
                  <p className="text-gray-600 mb-4">{career.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Growth: {career.growth}</span>
                    </div>
                  </div>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </AnimatedSection>

        {/* Tuition Fees */}
        <AnimatedSection animation="slideUp" delay={0.4} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tuition <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Fees</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent and competitive fee structure with flexible payment options and generous scholarship opportunities to make quality education accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Fee Structure */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-3 text-green-600" />
                Fee Structure
              </h3>
              <div className="space-y-4">
                {feeStructure.map((fee) => (
                  <div key={fee.id} className={`flex items-center justify-between p-4 rounded-lg ${
                    fee.amount === 'FREE' ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                  }`}>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{fee.category}</h4>
                      <p className="text-sm text-gray-600">{fee.description}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-bold ${
                        fee.amount === 'FREE' ? 'text-green-600' : 'text-blue-600'
                      }`}>{fee.amount}</div>
                      <div className={`text-xs ${
                        fee.amount === 'FREE' ? 'text-green-500' : 'text-gray-500'
                      }`}>{fee.frequency}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total Per Semester:</span>
                  <span className="text-2xl font-bold text-blue-600">৳1,00,000</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-semibold text-gray-900">Total Program Cost:</span>
                  <span className="text-2xl font-bold text-blue-600">৳8,25,000</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">*Excluding admission fee. Fees may be subject to annual revision.</p>
              </div>
              
              {/* Included Services */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Included at No Additional Cost
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-green-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Laboratory Equipment & Maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Library Resources & Digital Databases</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Student Clubs & Activities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>IT Infrastructure & Software Licenses</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Payment Options */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-blue-600" />
                Payment Options
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                    Installment Plan
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">Pay tuition fees in 4 convenient installments</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span><strong>1st Installment:</strong> Registration fees</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span><strong>2nd Installment:</strong> 30% of the Tuition fees</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span><strong>3rd Installment:</strong> 30% of the Tuition fees</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span><strong>4th Installment:</strong> 40% of the Tuition fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Scholarships */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Scholarship <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Opportunities</span>
            </h3>
            
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarshipOptions.map((scholarship) => (
                <StaggeredItem key={scholarship.id}>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{scholarship.name}</h4>
                      <Badge className="bg-yellow-100 text-yellow-800">{scholarship.coverage}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{scholarship.description}</p>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span><strong>Eligibility:</strong> {scholarship.eligibility}</span>
                    </div>
                  </Card>
                </StaggeredItem>
              ))}
            </StaggeredGrid>
            
            {/* Scholarship Disqualification */}
            <Card className="mt-8 p-6 bg-red-50 border-red-200">
              <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Scholarship Disqualification Criteria
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-red-700">
                <div className="flex items-center">
                  <X className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>CGPA below 3.5 for Merit Waiver</span>
                </div>
                <div className="flex items-center">
                  <X className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Any "F" grade in courses</span>
                </div>
                <div className="flex items-center">
                  <X className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Not taking full credit load</span>
                </div>
                <div className="flex items-center">
                  <X className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Disciplinary action/misconduct</span>
                </div>
                <div className="flex items-center">
                  <X className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Discontinuation of semester</span>
                </div>
              </div>
            </Card>
            
            {/* Special Scholarships */}
            <Card className="mt-6 p-6 bg-blue-50 border-blue-200">
              <h4 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Special Scholarships
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Trophy className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-blue-900">ICPC – Jamilur Reza Chowdhury Scholarship</h5>
                    <p className="text-blue-700 text-sm">For students excelling in competitive programming</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>

        {/* Facilities */}
        <AnimatedSection animation="slideUp" delay={0.5} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art laboratories and facilities provide hands-on learning experiences that prepare you for real-world engineering challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility) => (
              <Card key={facility.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-600">{facility.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="fadeIn" delay={0.6}>
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Engineering Journey?
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join the next generation of electrical and electronic engineers. Apply now and transform your passion for technology into a rewarding career.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                  <Calendar className="w-5 h-5 mr-2" />
                  Apply for Admission
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Admissions
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>74/A Green Road, Dhaka</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+880-2-8157091-4</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>admission@uap-bd.edu</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}