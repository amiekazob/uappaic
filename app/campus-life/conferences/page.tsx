"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Award, 
  Globe, 
  Mic, 
  BookOpen,
  ExternalLink,
  Download,
  Star,
  Zap,
  Target,
  TrendingUp,
  Lightbulb,
  Network,
  Trophy,
  Building,
  GraduationCap
} from 'lucide-react'

interface Speaker {
  name: string
  title: string
  organization: string
  image: string
}

interface Conference {
  id: string
  title: string
  subtitle: string
  description: string
  date: string
  endDate?: string
  venue: string
  location: string
  category: 'IEEE' | 'International' | 'National' | 'Workshop'
  status: 'Completed' | 'Upcoming' | 'Ongoing'
  image: string
  speakers: Speaker[]
  sessions: string[]
  competitions: string[]
  attendees: number
  organizers: string[]
  highlights: string[]
  participants: string[]
}

const conferences: Conference[] = [
  {
    id: '1',
    title: 'IEEE BDS CO-LOCATED CONFERENCES',
    subtitle: 'IEEE BDS 2022',
    description: 'A two-day-long conference jointly organized by IEEE Bangladesh Section and the Department of EEE, University of Asia Pacific.',
    date: '2022-06-24',
    endDate: '2022-06-25',
    venue: 'UAP Campus',
    location: 'Dhaka, Bangladesh (Hybrid Mode)',
    category: 'IEEE',
    status: 'Completed',
    image: 'https://i.ibb.co/b5h8T981/image.png',
    speakers: [
      {
        name: 'Prof. Dr. Qumrul Ahsan',
        title: 'Honorable Vice-Chancellor',
        organization: 'University of Asia Pacific',
        image: 'https://i.ibb.co/b5h8T981/image.png'
      },
      {
        name: 'Prof. Dr. Celia Shahnaz',
        title: 'IEEE WIE Committee Chair-Elect',
        organization: 'IEEE Bangladesh Section',
        image: 'https://i.ibb.co/b5h8T981/image.png'
      },
      {
        name: 'Prof. Dr. M. Moshiul Haque',
        title: 'Chair',
        organization: 'IEEE Bangladesh Section',
        image: 'https://i.ibb.co/b5h8T981/image.png'
      },
      {
        name: 'Dr. Tasnia Hossain',
        title: 'Head of EEE Department',
        organization: 'University of Asia Pacific',
        image: 'https://i.ibb.co/b5h8T981/image.png'
      }
    ],
    sessions: [
      'International Young Professionals Activities Conference (YPCON)',
      'International Student-LED Conference (STUDENT-LED CON)',
      'IEEE International Symposium on Social Implications of Sustainable Technology (SympSIST)',
      'International Professional Activities Conference (ProCon)',
      'International Industrial Activities Conference (IndCon)'
    ],
    competitions: [
      'Thesis Paper Competition (Undergraduate & Postgraduate)',
      'Research Paper Competition',
      'Pitching Competition',
      'Debate Competition',
      'Idea Contest',
      'Case Study Competition'
    ],
    attendees: 500,
    organizers: ['IEEE Bangladesh Section', 'Department of EEE, UAP'],
    highlights: [
      'Keynote Sessions',
      'Panel Discussions',
      'Training Sessions',
      'Workshops',
      'Virtual Participation Available',
      'Overwhelming Response from Participants'
    ],
    participants: [
      'BUET', 'BUP', 'CU', 'DUET', 'Leading University', 
      'RUET', 'NSU', 'UAP', 'Other Private and Public Universities'
    ]
  },
  {
    id: '2',
    title: 'International Conference on Electrical and Electronics Engineering',
    subtitle: 'ICEEE 2023',
    description: 'Premier conference focusing on cutting-edge research in electrical and electronics engineering with emphasis on sustainable technology.',
    date: '2023-12-15',
    endDate: '2023-12-16',
    venue: 'UAP Engineering Complex',
    location: 'Dhaka, Bangladesh',
    category: 'International',
    status: 'Completed',
    image: 'https://i.ibb.co/b5h8T981/image.png',
    speakers: [
      {
        name: 'Prof. Dr. Mohammad Ali',
        title: 'Dean of Engineering',
        organization: 'University of Asia Pacific',
        image: 'https://i.ibb.co/b5h8T981/image.png'
      },
      {
        name: 'Dr. Sarah Ahmed',
        title: 'Senior Research Scientist',
        organization: 'MIT, USA',
        image: 'https://i.ibb.co/b5h8T981/image.png'
      }
    ],
    sessions: [
      'Renewable Energy Systems',
      'Smart Grid Technology',
      'Power Electronics and Drives',
      'Signal Processing Applications',
      'IoT and Embedded Systems'
    ],
    competitions: [
      'Best Paper Award',
      'Student Poster Competition',
      'Innovation Challenge',
      'Technical Presentation Contest'
    ],
    attendees: 350,
    organizers: ['Department of EEE, UAP', 'IEEE UAP Student Branch'],
    highlights: [
      '40+ Technical Papers Presented',
      'Industry-Academia Collaboration',
      'Research Exhibition',
      'Networking Sessions',
      'Publication Opportunities'
    ],
    participants: [
      'UAP', 'BUET', 'CUET', 'RUET', 'DUET', 
      'NSU', 'BRAC University', 'International Participants'
    ]
  },
  {
    id: '3',
    title: 'National Workshop on Emerging Technologies',
    subtitle: 'NWET 2024',
    description: 'Comprehensive workshop focusing on emerging technologies in electrical engineering and their practical applications.',
    date: '2024-03-20',
    venue: 'UAP Technology Center',
    location: 'Dhaka, Bangladesh',
    category: 'Workshop',
    status: 'Upcoming',
    image: 'https://i.ibb.co/b5h8T981/image.png',
    speakers: [
      {
        name: 'Prof. Dr. Rahman Khan',
        title: 'Professor of Electrical Engineering',
        organization: 'BUET, Bangladesh',
        image: 'https://i.ibb.co/b5h8T981/image.png'
      },
      {
        name: 'Dr. Fatima Begum',
        title: 'Research Director',
        organization: 'Bangladesh Council of Scientific Research',
        image: 'https://i.ibb.co/b5h8T981/image.png'
      }
    ],
    sessions: [
      'Artificial Intelligence in Engineering',
      'Machine Learning Applications',
      'Internet of Things (IoT)',
      'Blockchain Technology',
      'Quantum Computing Fundamentals'
    ],
    competitions: [
      'Innovation Showcase',
      'Project Demonstration',
      'Technical Quiz Competition',
      'Best Idea Award'
    ],
    attendees: 200,
    organizers: ['Department of EEE, UAP', 'Bangladesh Engineering Society'],
    highlights: [
      'Hands-on Training Sessions',
      'Industry Expert Lectures',
      'Technology Demonstrations',
      'Certificate of Participation',
      'Networking Opportunities'
    ],
    participants: [
      'Engineering Students', 'Faculty Members', 'Industry Professionals',
      'Researchers', 'Technology Enthusiasts'
    ]
  },
  {
    id: '4',
    title: 'International Symposium on Sustainable Energy',
    subtitle: 'ISSE 2024',
    description: 'Addressing global energy challenges through innovative research in renewable energy and sustainable technology solutions.',
    date: '2024-05-15',
    endDate: '2024-05-16',
    venue: 'UAP Green Energy Research Center',
    location: 'Dhaka, Bangladesh',
    category: 'International',
    status: 'Upcoming',
    image: 'https://i.ibb.co/b5h8T981/image.png',
    speakers: [
      {
        name: 'Prof. Dr. Aminul Islam',
        title: 'Director of Renewable Energy Research',
        organization: 'University of Asia Pacific',
        image: 'https://i.ibb.co/b5h8T981/image.png'
      },
      {
        name: 'Dr. Maria Santos',
        title: 'Senior Energy Consultant',
        organization: 'World Bank, USA',
        image: 'https://i.ibb.co/b5h8T981/image.png'
      }
    ],
    sessions: [
      'Solar Energy Systems and Applications',
      'Wind Power Technology',
      'Energy Storage Solutions',
      'Smart Grid Integration',
      'Policy and Economic Aspects'
    ],
    competitions: [
      'Sustainable Energy Project Competition',
      'Research Paper Presentation',
      'Innovation in Green Technology',
      'Best Poster Award'
    ],
    attendees: 400,
    organizers: ['UAP Green Energy Research Center', 'International Energy Forum'],
    highlights: [
      'International Expert Speakers',
      'Technology Exhibition',
      'Policy Round Table',
      'Industry Partnerships',
      'Publication in Special Issue'
    ],
    participants: [
      'International Universities', 'Research Institutions', 'Energy Companies',
      'Government Officials', 'Environmental Organizations'
    ]
  }
]

// Conference Statistics
const conferenceStats = {
  totalConferences: conferences.length,
  completedConferences: conferences.filter(c => c.status === 'Completed').length,
  upcomingConferences: conferences.filter(c => c.status === 'Upcoming').length,
  totalAttendees: conferences.reduce((sum, conf) => sum + conf.attendees, 0),
  totalSpeakers: conferences.reduce((sum, conf) => sum + conf.speakers.length, 0),
  participatingUniversities: Array.from(new Set(conferences.flatMap(c => c.participants))).length
}

const categoryLabels = {
  IEEE: 'IEEE',
  International: 'International',
  National: 'National',
  Workshop: 'Workshop'
}

const statusLabels = {
  Upcoming: 'Upcoming',
  Ongoing: 'Ongoing',
  Completed: 'Completed'
}

const statusColors = {
  Upcoming: 'bg-blue-100 text-blue-800 border-blue-200',
  Ongoing: 'bg-green-100 text-green-800 border-green-200',
  Completed: 'bg-gray-100 text-gray-800 border-gray-200'
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

function formatDateRange(startDate: string, endDate?: string): string {
  if (!endDate) return formatDate(startDate)
  const start = new Date(startDate)
  const end = new Date(endDate)
  
  if (start.getMonth() === end.getMonth()) {
    return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.getDate()}, ${start.getFullYear()}`
  }
  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}

function ConferenceCard({ conference }: { conference: Conference }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex gap-2">
            <Badge 
              variant="outline" 
              className={`${statusColors[conference.status]} font-medium`}
            >
              {statusLabels[conference.status]}
            </Badge>
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
              {categoryLabels[conference.category]}
            </Badge>
          </div>
          <div className="text-right text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDateRange(conference.date, conference.endDate)}</span>
            </div>
          </div>
        </div>
        
        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
          {conference.title}
        </CardTitle>
        <p className="text-lg font-semibold text-blue-600 mb-2">{conference.subtitle}</p>
        <p className="text-gray-600 leading-relaxed">{conference.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Building className="w-4 h-4 text-blue-500" />
            <span>{conference.venue}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4 text-green-500" />
            <span>{conference.attendees} attendees</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 col-span-2">
            <MapPin className="w-4 h-4 text-purple-500" />
            <span>{conference.location}</span>
          </div>
        </div>
        
        {conference.sessions && conference.sessions.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Conference Sessions
            </h4>
            <div className="space-y-1">
              {conference.sessions.slice(0, 3).map((session, index) => (
                <div key={index} className="text-sm text-gray-600 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{session}</span>
                </div>
              ))}
              {conference.sessions.length > 3 && (
                <div className="text-xs text-gray-500">
                  +{conference.sessions.length - 3} more sessions
                </div>
              )}
            </div>
          </div>
        )}
        
        {conference.competitions && conference.competitions.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Competitions
            </h4>
            <div className="flex flex-wrap gap-1">
              {conference.competitions.slice(0, 3).map((competition, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">
                  {competition}
                </Badge>
              ))}
              {conference.competitions.length > 3 && (
                <Badge variant="outline" className="text-xs bg-gray-50">
                  +{conference.competitions.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
        
        {conference.speakers && conference.speakers.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Mic className="w-4 h-4" />
              Key Speakers ({conference.speakers.length})
            </h4>
            <div className="space-y-2">
              {conference.speakers.slice(0, 2).map((speaker, index) => (
                <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm">{speaker.name}</p>
                    <p className="text-xs text-gray-600">{speaker.title}</p>
                    <p className="text-xs text-gray-500">{speaker.organization}</p>
                  </div>
                </div>
              ))}
              {conference.speakers.length > 2 && (
                <p className="text-xs text-gray-500 text-center">
                  +{conference.speakers.length - 2} more speakers
                </p>
              )}
            </div>
          </div>
        )}
        
        {conference.highlights && conference.highlights.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Highlights
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {conference.highlights.slice(0, 4).map((highlight, index) => (
                <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                  <Zap className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {conference.organizers && conference.organizers.length > 0 && (
          <div className="pt-3 border-t border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Organized by
            </h4>
            <div className="flex flex-wrap gap-1">
              {conference.organizers.map((organizer, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                  {organizer}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function FeaturedSpeaker({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="relative mb-4">
          <Image
            src={speaker.image}
            alt={speaker.name}
            width={120}
            height={120}
            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-blue-600 text-white">
              Speaker
            </Badge>
          </div>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-1">{speaker.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{speaker.title}</p>
        <p className="text-xs text-gray-500">{speaker.organization}</p>
      </CardContent>
    </Card>
  )
}

export default function ConferencesPage() {
  const allSpeakers = conferences.flatMap(conf => conf.speakers).slice(0, 6)
  const upcomingConferences = conferences.filter(conf => conf.status === 'Upcoming').slice(0, 3)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              Academic <span className="text-yellow-300">Conferences</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              Join world-class conferences, workshops, and symposiums that shape the future of engineering and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                View All Events
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{conferenceStats.totalConferences}</div>
              <div className="text-gray-600">Total Conferences</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">{conferenceStats.totalAttendees.toLocaleString()}</div>
              <div className="text-gray-600">Total Participants</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">{conferenceStats.totalSpeakers}</div>
              <div className="text-gray-600">Expert Speakers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">{conferenceStats.participatingUniversities}</div>
              <div className="text-gray-600">Universities</div>
            </div>
          </div>
        </div>



        {/* Conferences Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {conferences.map((conference) => (
              <ConferenceCard key={conference.id} conference={conference} />
            ))}
          </div>
        </div>

        {/* Featured Speakers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Distinguished <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Speakers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Renowned academics, industry leaders, and researchers from leading institutions worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {allSpeakers.map((speaker, index) => (
              <FeaturedSpeaker key={index} speaker={speaker} index={index} />
            ))}
          </div>
        </div>

        {/* Conference Information */}
        <div>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-3xl p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Academic Excellence in Engineering
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                The Department of EEE at University of Asia Pacific continues to host world-class conferences, 
                fostering research collaboration and knowledge exchange in electrical and electronics engineering.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Network className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Research Collaboration</h3>
                  <p className="text-sm opacity-90">Connecting researchers from leading institutions worldwide</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Lightbulb className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Innovation Showcase</h3>
                  <p className="text-sm opacity-90">Presenting cutting-edge research and technological advances</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Award className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Academic Recognition</h3>
                  <p className="text-sm opacity-90">Recognizing outstanding contributions to engineering research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}