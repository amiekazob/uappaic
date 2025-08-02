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
  BookOpen, 
  Lightbulb, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
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
  Calculator
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



const courseCategories: CourseCategory[] = [
  {
    id: '1',
    name: 'Interdisciplinary Courses',
    courses: [
      {
        id: '1',
        code: 'EEE 6101',
        name: 'Engineering Analysis',
        credits: 3,
        description: 'Advanced mathematical methods for engineering analysis'
      },
      {
        id: '2',
        code: 'EEE 6102',
        name: 'Selected Topics in Electrical and Electronic Engineering',
        credits: 3,
        description: 'Current topics and emerging trends in EEE'
      },
      {
        id: '3',
        code: 'EEE 6103',
        name: 'Nonlinear System Analysis',
        credits: 3,
        description: 'Analysis and design of nonlinear systems'
      },
      {
        id: '4',
        code: 'EEE 6104',
        name: 'Artificial Neural Systems',
        credits: 3,
        description: 'Neural networks and artificial intelligence applications'
      },
      {
        id: '5',
        code: 'EEE 6105',
        name: 'Power Semiconductor Circuits',
        credits: 3,
        description: 'Advanced power semiconductor devices and circuits'
      },
      {
        id: '6',
        code: 'EEE 6106',
        name: 'Design of Power Semiconductor Circuits and Drives',
        credits: 3,
        description: 'Design methodologies for power electronic systems'
      },
      {
        id: '7',
        code: 'EEE 6107',
        name: 'Electric and Magnetic Properties of Materials',
        credits: 3,
        description: 'Material properties for electrical applications'
      },
      {
        id: '8',
        code: 'EEE 6108',
        name: 'Academic Methodology',
        credits: 3,
        description: 'Academic methods and technical writing for engineers'
      }
    ]
  },
  {
    id: '2',
    name: 'Communication Group',
    courses: [
      {
        id: '9',
        code: 'EEE 6201',
        name: 'Information and Coding Theory',
        credits: 3,
        description: 'Information theory and error correction coding'
      },
      {
        id: '10',
        code: 'EEE 6202',
        name: 'Advanced Telecommunication Engineering',
        credits: 3,
        description: 'Modern telecommunication systems and networks'
      },
      {
        id: '11',
        code: 'EEE 6203',
        name: 'Advanced Digital Signal Processing',
        credits: 3,
        description: 'Advanced DSP algorithms and applications'
      },
      {
        id: '12',
        code: 'EEE 6204',
        name: 'Biomedical Signal Processing',
        credits: 3,
        description: 'Signal processing for biomedical applications'
      },
      {
        id: '13',
        code: 'EEE 6205',
        name: 'Optical Communications and Networks',
        credits: 3,
        description: 'Fiber optic communication systems'
      },
      {
        id: '14',
        code: 'EEE 6206',
        name: 'Advanced Multimedia Communications',
        credits: 3,
        description: 'Multimedia signal processing and transmission'
      },
      {
        id: '15',
        code: 'EEE 6207',
        name: 'Digital Communication',
        credits: 3,
        description: 'Digital modulation and communication techniques'
      },
      {
        id: '16',
        code: 'EEE 6208',
        name: 'Digital Satellite Communication',
        credits: 3,
        description: 'Satellite communication systems and protocols'
      },
      {
        id: '17',
        code: 'EEE 6209',
        name: 'Speech and Image Processing',
        credits: 3,
        description: 'Processing techniques for speech and image signals'
      },
      {
        id: '18',
        code: 'EEE 6210',
        name: 'Antennas and Propagation',
        credits: 3,
        description: 'Antenna design and electromagnetic wave propagation'
      },
      {
        id: '19',
        code: 'EEE 6211',
        name: 'Wireless Communications and Networks',
        credits: 3,
        description: 'Wireless communication systems and network protocols'
      }
    ]
  },
  {
    id: '3',
    name: 'Electronics Group',
    courses: [
      {
        id: '20',
        code: 'EEE 6301',
        name: 'MOS Devices',
        credits: 3,
        description: 'Metal-oxide-semiconductor device physics and modeling'
      },
      {
        id: '21',
        code: 'EEE 6302',
        name: 'Compound Semiconductor Devices',
        credits: 3,
        description: 'III-V and II-VI semiconductor devices'
      },
      {
        id: '22',
        code: 'EEE 6303',
        name: 'VLSI Technology and Device Modeling',
        credits: 3,
        description: 'VLSI fabrication technology and device modeling'
      },
      {
        id: '23',
        code: 'EEE 6304',
        name: 'Advanced VLSI Design',
        credits: 3,
        description: 'Advanced techniques in VLSI circuit design'
      },
      {
        id: '24',
        code: 'EEE 6305',
        name: 'Carbon Nanotechnology',
        credits: 3,
        description: 'Carbon nanotubes and graphene for electronics'
      },
      {
        id: '25',
        code: 'EEE 6306',
        name: 'Nano Systems',
        credits: 3,
        description: 'Nanotechnology applications in electronic systems'
      },
      {
        id: '26',
        code: 'EEE 6307',
        name: 'Thin film Growth and Deposition',
        credits: 3,
        description: 'Thin film fabrication techniques and applications'
      },
      {
        id: '27',
        code: 'EEE 6308',
        name: 'Semiconductor Characterization Technology',
        credits: 3,
        description: 'Techniques for semiconductor material characterization'
      },
      {
        id: '28',
        code: 'EEE 6309',
        name: 'Electronics of Solids',
        credits: 3,
        description: 'Solid state physics for electronic applications'
      },
      {
        id: '29',
        code: 'EEE 6310',
        name: 'Semiconductor Materials and Heterostructures',
        credits: 3,
        description: 'Advanced semiconductor materials and structures'
      }
    ]
  },
  {
    id: '4',
    name: 'Power Group',
    courses: [
      {
        id: '30',
        code: 'EEE 6401',
        name: 'Optimization of Power System Operation',
        credits: 3,
        description: 'Optimization techniques for power system operation'
      },
      {
        id: '31',
        code: 'EEE 6402',
        name: 'Computer Methods in Power System Analysis',
        credits: 3,
        description: 'Computational methods for power system analysis'
      },
      {
        id: '32',
        code: 'EEE 6403',
        name: 'Advanced Power System Protection',
        credits: 3,
        description: 'Modern protection schemes for power systems'
      },
      {
        id: '33',
        code: 'EEE 6404',
        name: 'Power System Stability',
        credits: 3,
        description: 'Analysis and enhancement of power system stability'
      },
      {
        id: '34',
        code: 'EEE 6405',
        name: 'Transients in Power Systems',
        credits: 3,
        description: 'Transient analysis in electrical power systems'
      },
      {
        id: '35',
        code: 'EEE 6406',
        name: 'Reliability of Modern Power System',
        credits: 3,
        description: 'Reliability assessment and improvement techniques'
      },
      {
        id: '36',
        code: 'EEE 6407',
        name: 'Power System Planning',
        credits: 3,
        description: 'Strategic planning for power system expansion'
      },
      {
        id: '37',
        code: 'EEE 6408',
        name: 'Advanced Power System Control',
        credits: 3,
        description: 'Modern control techniques for power systems'
      },
      {
        id: '38',
        code: 'EEE 6409',
        name: 'Energy Conversion and Storage',
        credits: 3,
        description: 'Energy conversion technologies and storage systems'
      },
      {
        id: '39',
        code: 'EEE 6410',
        name: 'Modern Power System Modeling',
        credits: 3,
        description: 'Advanced modeling techniques for power systems'
      },
      {
        id: '40',
        code: 'EEE 6411',
        name: 'Smart Grid Operation',
        credits: 3,
        description: 'Smart grid technologies and operation strategies'
      }
    ]
  },
  {
    id: '5',
    name: 'Thesis/Project',
    courses: [
      {
        id: '41',
        code: 'EEE 6000',
        name: 'Thesis (for M.Sc. in EEE)',
        credits: 18,
        description: 'Independent academic project culminating in a thesis'
      },
      {
        id: '42',
        code: 'EEE 6001',
        name: 'Project (for M. Engg. in EEE)',
        credits: 6,
        description: 'Applied engineering project for professional degree'
      }
    ]
  }
]

const careerPaths: CareerPath[] = [
  {
    id: '1',
    title: 'Technology Specialist',
    description: 'Lead cutting-edge technology development in electrical and electronic engineering',
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
    description: 'Teach and conduct academic work at universities and institutions',
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
    name: 'Advanced Learning Facilities',
    description: 'State-of-the-art learning facilities with latest equipment',
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
    description: 'Access to international journals and academic databases',
    icon: <BookOpen className="w-6 h-6" />
  }
]

const feeStructure: FeeStructure[] = [
  {
    id: '1',
    category: 'Application Fee',
    amount: 'Tk. 1,200/-',
    description: 'Non-refundable',
    frequency: 'One Time'
  },
  {
    id: '2',
    category: 'Tuition Fee',
    amount: 'Tk. 4,500/-',
    description: 'Per credit hour',
    frequency: 'Per Credit'
  },
  {
    id: '3',
    category: 'Admission Fee',
    amount: 'Tk. 15,000/-',
    description: 'One-time admission processing fee',
    frequency: 'One Time'
  }
]



const programHighlights = [
  'Advanced Learning Opportunities',
  'Industry-Academia Collaboration',
  'International Faculty',
  'State-of-the-art Learning Facilities',
  'Thesis-based Program',
  'Flexible Course Selection'
]

const admissionRequirements = [
  'Bachelor degree in EEE/ECE/ETE/CSE or equivalent',
  'Minimum CGPA of 2.5 on 4.0 scale',
  'No third class in any public examination',
  'Prerequisite courses as suggested by BPGS',
  'Must clear all prerequisite courses as suggested by BPGS.'
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
              Advance your career with cutting-edge technology and specialized knowledge in electrical and electronic engineering. Join our graduate program designed for innovation and excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {programHighlights.map((highlight, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 text-sm">
                  {highlight}
                </Badge>
              ))}
            </div>
            

          </div>
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
              <p className="text-gray-600 mb-2">50-70 Students</p>
              <p className="text-sm text-gray-500">Medium Cohorts</p>
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

        {/* Degree Requirements */}
        <AnimatedSection animation="slideUp" delay={0.4} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Degree <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete requirements for Master of Science in Electrical & Electronic Engineering degree.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-green-600" />
                M.Sc. in EEE Degree Requirements
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Credit Hour Completion</h4>
                    <p className="text-gray-700">Completion of minimum 36 (thirty-six) credit hours including 18 (eighteen) credit hours thesis work.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Course Selection</h4>
                    <p className="text-gray-700">Completion of at least 3 (three) courses from his/her group of interest and at least 1 (one) course from interdisciplinary courses.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Performance</h4>
                    <p className="text-gray-700">Obtaining a minimum CGPA of 2.75 out of 4.0.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>

        {/* Curriculum */}
        <AnimatedSection animation="slideUp" delay={0.5} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Curriculum</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum combines theoretical depth with practical learning experience, preparing you for leadership roles in academia and industry.
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



        {/* Tuition Fees */}
        <AnimatedSection animation="slideUp" delay={0.6} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tuition <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Fees</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive graduate program fees with transparent pricing structure.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
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
              
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Total Program Cost (36 Credits):</span>
                    <span className="text-2xl font-bold text-green-600">Tk. 1,77,000/-</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">36 Credits × Tk. 4,500/- + Admission Fee</p>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>

        {/* Academic Facilities */}
        <AnimatedSection animation="slideUp" delay={0.7} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access world-class academic facilities and collaborate with leading faculty on cutting-edge projects.
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
                Join our prestigious MSc in EEE program and become a leader in electrical and electronic engineering technology and innovation.
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