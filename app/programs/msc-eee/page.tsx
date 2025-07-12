'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/ui/animated-section'
import { StaggeredGrid, StaggeredItem } from '@/components/ui/staggered-container'
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
  BarChart3,
  Briefcase,
  DollarSign,
  CreditCard,
  PiggyBank,
  Calculator,
  AlertTriangle,
  FileText,
  Download
} from 'lucide-react'

interface CourseCategory {
  id: string
  name: string
  courses: Course[]
}

interface Course {
  id: string
  code: string
  name: string
  credits: number
  description: string
}

interface CareerPath {
  id: string
  title: string
  description: string
  averageSalary: string
  growthRate: string
  icon: React.ReactNode
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
    name: 'Core Courses',
    courses: [
      {
        id: '1',
        code: 'EEE 601',
        name: 'Advanced Circuit Analysis',
        credits: 3,
        description: 'Advanced techniques in circuit analysis and design'
      },
      {
        id: '2',
        code: 'EEE 602',
        name: 'Advanced Digital Signal Processing',
        credits: 3,
        description: 'Digital signal processing algorithms and applications'
      },
      {
        id: '3',
        code: 'EEE 603',
        name: 'Advanced Control Systems',
        credits: 3,
        description: 'Modern control theory and system design'
      },
      {
        id: '4',
        code: 'EEE 604',
        name: 'Advanced Power Electronics',
        credits: 3,
        description: 'Power electronic devices and converter circuits'
      }
    ]
  },
  {
    id: '2',
    name: 'Specialization Tracks',
    courses: [
      {
        id: '5',
        code: 'EEE 611',
        name: 'Power System Analysis & Design',
        credits: 3,
        description: 'Advanced power system modeling and analysis'
      },
      {
        id: '6',
        code: 'EEE 612',
        name: 'Communication System Design',
        credits: 3,
        description: 'Design of modern communication systems'
      },
      {
        id: '7',
        code: 'EEE 613',
        name: 'VLSI Design & Technology',
        credits: 3,
        description: 'Very large scale integration design principles'
      },
      {
        id: '8',
        code: 'EEE 614',
        name: 'Renewable Energy Systems',
        credits: 3,
        description: 'Solar, wind, and other renewable energy technologies'
      }
    ]
  },
  {
    id: '3',
    name: 'Research & Thesis',
    courses: [
      {
        id: '9',
        code: 'EEE 691',
        name: 'Research Methodology',
        credits: 3,
        description: 'Research methods and academic writing'
      },
      {
        id: '10',
        code: 'EEE 699',
        name: 'Thesis',
        credits: 6,
        description: 'Independent research project and thesis writing'
      }
    ]
  }
]

const careerPaths: CareerPath[] = [
  {
    id: '1',
    title: 'Research Scientist',
    description: 'Lead cutting-edge research in electrical and electronic engineering',
    averageSalary: '৳8,00,000 - ৳15,00,000',
    growthRate: '12%',
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    id: '2',
    title: 'Senior Design Engineer',
    description: 'Design and develop advanced electronic systems and products',
    averageSalary: '৳6,00,000 - ৳12,00,000',
    growthRate: '10%',
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: '3',
    title: 'Project Manager',
    description: 'Lead engineering projects and manage technical teams',
    averageSalary: '৳7,00,000 - ৳14,00,000',
    growthRate: '8%',
    icon: <Target className="w-6 h-6" />
  },
  {
    id: '4',
    title: 'University Professor',
    description: 'Teach and conduct research at universities and institutions',
    averageSalary: '৳5,00,000 - ৳10,00,000',
    growthRate: '6%',
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    id: '5',
    title: 'Technical Consultant',
    description: 'Provide expert technical advice to organizations',
    averageSalary: '৳8,00,000 - ৳16,00,000',
    growthRate: '15%',
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    id: '6',
    title: 'Innovation Manager',
    description: 'Drive technological innovation in organizations',
    averageSalary: '৳9,00,000 - ৳18,00,000',
    growthRate: '18%',
    icon: <TrendingUp className="w-6 h-6" />
  }
]

const facilities: Facility[] = [
  {
    id: '1',
    name: 'Advanced Research Labs',
    description: 'State-of-the-art research facilities with latest equipment',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: '2',
    name: 'High-Performance Computing',
    description: 'Powerful computing resources for simulation and modeling',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: '3',
    name: 'Specialized Testing Equipment',
    description: 'Advanced testing and measurement instruments',
    icon: <Radio className="w-6 h-6" />
  },
  {
    id: '4',
    name: 'Digital Library Access',
    description: 'Access to international journals and research databases',
    icon: <BookOpen className="w-6 h-6" />
  }
]

const feeStructure: FeeStructure[] = [
  {
    id: '1',
    category: 'Tuition Fee',
    amount: '৳95,000',
    description: 'Per semester tuition fee for graduate courses',
    frequency: 'Per Semester'
  },
  {
    id: '2',
    category: 'Admission Fee',
    amount: '৳21,500',
    description: 'One-time admission and registration fee',
    frequency: 'One Time'
  },
  {
    id: '3',
    category: 'Research Fee',
    amount: '৳20,000',
    description: 'Research facilities and thesis supervision fee',
    frequency: 'Per Semester'
  },
  {
    id: '4',
    category: 'Library Fee',
    amount: '৳5,000',
    description: 'Access to digital libraries and research databases',
    frequency: 'Per Semester'
  },
  {
    id: '5',
    category: 'Laboratory Fee',
    amount: '৳15,000',
    description: 'Advanced laboratory equipment and maintenance',
    frequency: 'Per Semester'
  }
]

const scholarshipOptions: ScholarshipOption[] = [
  {
    id: '1',
    name: 'Graduate Merit Scholarship',
    description: 'Based on undergraduate academic performance',
    coverage: '30% - 100%',
    eligibility: 'CGPA 3.5 and above'
  },
  {
    id: '2',
    name: 'Research Assistantship',
    description: 'Financial support for research activities',
    coverage: '50% - 80%',
    eligibility: 'Research project involvement'
  },
  {
    id: '3',
    name: 'Teaching Assistantship',
    description: 'Support for students assisting in teaching',
    coverage: '40% - 70%',
    eligibility: 'Teaching capability assessment'
  },
  {
    id: '4',
    name: 'Industry Sponsorship',
    description: 'Sponsored by partner companies',
    coverage: '60% - 100%',
    eligibility: 'Industry partnership agreement'
  }
]

const programHighlights = [
  'Advanced Research Opportunities',
  'Industry-Academia Collaboration',
  'International Faculty',
  'State-of-the-art Laboratories',
  'Thesis-based Program',
  'Flexible Course Selection'
]

const admissionRequirements = [
  'Bachelor degree in EEE/CSE or equivalent',
  'Minimum CGPA of 2.5 on 4.0 scale',
  'No third class in any public examination',
  'Prerequisite courses as suggested by BPGS',
  'English proficiency (if applicable)',
  'Research proposal (for thesis track)'
]

export default function MScEEEPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2">
              Graduate Program
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Master of Science in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Electrical & Electronic Engineering
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Advance your career with cutting-edge research and specialized knowledge in electrical and electronic engineering. Join our graduate program designed for innovation and excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {programHighlights.map((highlight, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 text-sm">
                  {highlight}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Apply Now
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Exam Routine Notice */}
        <AnimatedSection animation="slideUp" delay={0.1} className="mb-16">
          <Card className="p-6 border-l-4 border-orange-500 bg-orange-50">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-orange-900 mb-2 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Exam Routine Notice
                </h3>
                <p className="text-orange-800 mb-4">
                  The final examination schedule for MSc in EEE program has been published. Students are advised to check their exam dates and prepare accordingly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="sm" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                    <Download className="w-4 h-4 mr-2" />
                    Download Exam Routine
                  </Button>
                  <Button variant="outline" size="sm" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Academic Calendar
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Program Overview */}
        <AnimatedSection animation="slideUp" delay={0.2} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600 mb-2">1.5 - 2 Years</p>
              <p className="text-sm text-gray-500">Full-time Program</p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Credits</h3>
              <p className="text-gray-600 mb-2">36 Credit Hours</p>
              <p className="text-sm text-gray-500">Including Thesis</p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Class Size</h3>
              <p className="text-gray-600 mb-2">15-20 Students</p>
              <p className="text-sm text-gray-500">Small Cohorts</p>
            </Card>
          </div>
        </AnimatedSection>

        {/* Admission Requirements */}
        <AnimatedSection animation="slideUp" delay={0.3} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our selective graduate program designed for ambitious engineers ready to push the boundaries of technology.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {admissionRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </AnimatedSection>

        {/* Curriculum */}
        <AnimatedSection animation="slideUp" delay={0.4} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Curriculum</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum combines theoretical depth with practical research experience, preparing you for leadership roles in academia and industry.
            </p>
          </div>
          
          <div className="space-y-8">
            {courseCategories.map((category) => (
              <Card key={category.id} className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.courses.map((course) => (
                    <div key={course.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{course.code}</h4>
                        <Badge variant="outline">{course.credits} Credits</Badge>
                      </div>
                      <h5 className="font-medium text-gray-800 mb-2">{course.name}</h5>
                      <p className="text-sm text-gray-600">{course.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Career Opportunities */}
        <AnimatedSection animation="slideUp" delay={0.5} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates lead innovation in research institutions, technology companies, and academic organizations worldwide.
            </p>
          </div>
          
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((career) => (
              <StaggeredItem key={career.id}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-blue-600">{career.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h3>
                  <p className="text-gray-600 mb-4">{career.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Average Salary:</span>
                      <span className="font-semibold text-green-600">{career.averageSalary}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Growth Rate:</span>
                      <span className="font-semibold text-blue-600">{career.growthRate}</span>
                    </div>
                  </div>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </AnimatedSection>

        {/* Tuition Fees */}
        <AnimatedSection animation="slideUp" delay={0.6} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tuition <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Fees</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive graduate program fees with extensive scholarship opportunities and research funding support.
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
                  <div key={fee.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{fee.category}</h4>
                      <p className="text-sm text-gray-600">{fee.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">{fee.amount}</div>
                      <div className="text-xs text-gray-500">{fee.frequency}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total Per Semester:</span>
                  <span className="text-2xl font-bold text-blue-600">৳1,35,000</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-semibold text-gray-900">Total Program Cost:</span>
                  <span className="text-2xl font-bold text-blue-600">৳4,21,500</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">*Excluding admission fee. Fees may be subject to annual revision.</p>
              </div>
            </Card>

            {/* Scholarships */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-yellow-600" />
                Scholarships & Funding
              </h3>
              
              <div className="space-y-4">
                {scholarshipOptions.map((scholarship) => (
                  <div key={scholarship.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{scholarship.name}</h4>
                      <Badge className="bg-yellow-100 text-yellow-800">{scholarship.coverage}</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{scholarship.description}</p>
                    <div className="flex items-center text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                      <span><strong>Eligibility:</strong> {scholarship.eligibility}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </AnimatedSection>

        {/* Research Facilities */}
        <AnimatedSection animation="slideUp" delay={0.7} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access world-class research facilities and collaborate with leading faculty on cutting-edge projects.
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
        <AnimatedSection animation="fadeIn" delay={0.8}>
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Join our prestigious MSc in EEE program and become a leader in electrical and electronic engineering research and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Apply for Admission
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Schedule Campus Visit
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}