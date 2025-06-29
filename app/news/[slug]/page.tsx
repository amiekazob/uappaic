'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Calendar, MapPin, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { events, formatDate } from '@/lib/events-data'
import { AnimatedSection } from '@/components/ui/animated-section'
import { StaggeredGrid, StaggeredItem } from '@/components/ui/staggered-container'

interface NewsPageProps {
  params: Promise<{
    slug: string
  }>
}

// Sample gallery images for each news item
const galleryImages = {
  'icpc-world-finals-2021': [
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  'convocation-11th': [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  'eee-tech-fest-2024': [
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  'robotics-workshop-2024': [
    'https://plus.unsplash.com/premium_photo-1723291289063-d78b337be6d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  'international-conference-2024': [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  'smart-grid-symposium-2024': [
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3'
  ],
  'ai-ml-engineering-workshop-2024': [
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
  ],
  'research-excellence-awards-2024': [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
  ]
}

// Extended descriptions for each news item
const extendedContent = {
  'icpc-world-finals-2021': {
    fullDescription: `UAP had the distinct honor of hosting the ICPC World Finals 2021, a prestigious event that brought together the brightest young minds in competitive programming from around the globe. The campus was abuzz with energy as teams competed to solve complex algorithmic challenges, showcasing their exceptional problem-solving skills and teamwork. This event not only highlighted UAP's commitment to fostering academic excellence but also placed it on the global map as a center for technological innovation and collaboration.`,
    highlights: [
      'Hosted top programming talent from around the world',
      'Challenging problem sets and intense competition',
      'Showcased UAP as a hub for tech and innovation',
      'Opportunities for students to interact with global peers',
    ]
  },
  'convocation-11th': {
    fullDescription: `The 11th Convocation of the University of Asia Pacific was a momentous occasion, celebrating the academic achievements of our graduating students. Held with great pomp and circumstance, the event was a testament to the hard work and dedication of both students and faculty. Graduates from various disciplines received their degrees, ready to embark on their professional journeys and make a positive impact on the world.`,
    highlights: [
      'Celebrated the graduation of the class of 2023',
      'Recognized outstanding student achievements',
      'Inspirational speeches from distinguished guests',
      'A memorable day for graduates and their families',
    ]
  },
  'eee-tech-fest-2024': {
    fullDescription: `The Annual EEE Tech Fest 2024 was a vibrant showcase of innovation and creativity from the students and faculty of the Electrical and Electronic Engineering department. The event featured a wide array of projects, from robotics and automation to renewable energy solutions. It provided a platform for students to demonstrate their technical skills, exchange ideas, and engage with industry professionals, fostering a culture of research and development within the department.`,
    highlights: [
      'Showcased innovative student projects',
      'Featured research from EEE faculty',
      'Included workshops and technical seminars',
      'Promoted industry-academia collaboration',
    ]
  },
  'robotics-workshop-2024': {
    fullDescription: `The Workshop on Modern Robotics offered participants a deep dive into the rapidly evolving world of robotics and automation. This hands-on workshop covered the latest trends, technologies, and programming techniques in the field. Attendees had the opportunity to work with state-of-the-art robotic hardware and software, gaining practical skills and insights into building and controlling intelligent systems. The workshop was a great success, inspiring many to pursue further studies and careers in robotics.`,
    highlights: [
      'Hands-on experience with modern robotic systems',
      'Covered topics like robot kinematics and control',
      'Led by experts in the field of robotics',
      'Encouraged innovation and practical problem-solving',
    ]
  },
  'international-conference-2024': {
    fullDescription: `The Programming and AI Club at UAP successfully organized Codex 1.0, an event that brought together students passionate about coding and artificial intelligence. Held on April 23rd, 2025, the event featured coding competitions, AI workshops, and talks by industry experts. It was a fantastic opportunity for students to hone their programming skills, learn about the latest advancements in AI, and network with like-minded peers. The event underscored the club's commitment to promoting a vibrant coding culture on campus.
    
    \n\n Intra-Department Programming Contest

The event kicked off with an intra-department programming contest, where enthusiastic students from various semesters showcased their coding skills, problem-solving abilities, and teamwork. It provided a competitive yet collaborative platform for young programmers to sharpen their logic and gain real-world experience.

\n\n Seminar on Student Research and Publication

Following the contest, a seminar on "Empowering Students’ Research and Publications" was conducted by Dr. Md Shafiul Alam, Associate Professor, Dept. of EEE. Dr. Alam, listed among the world’s top 2% scientists by Elsevier and Stanford University, shared his insights on academic research, paper publishing, and project funding. He emphasized the importance of building a research mindset early in academic life. His session inspired students with real data from his experience, including 1600+ citations, 23 H-index journals, and over 10 funded projects.
    `,
    highlights: [
      'Organized by the Programming and AI Club',
      'Coding competitions with exciting prizes',
      'Workshops on cutting-edge AI technologies',
      'Talks by professionals from the tech industry',
    ]
  },
  'smart-grid-symposium-2024': {
    fullDescription: `The Smart Grid Technology Symposium 2024 represents a pivotal gathering of industry leaders, researchers, and innovators in the field of electrical engineering. This comprehensive event will explore cutting-edge developments in smart grid infrastructure, renewable energy integration, and sustainable power systems that are reshaping the future of electrical engineering.\n\nThe symposium will feature keynote presentations from renowned experts, interactive workshops, and technical sessions covering topics such as advanced metering infrastructure, demand response systems, energy storage solutions, and grid modernization strategies. Participants will gain insights into the latest research findings, emerging technologies, and practical applications that are driving the transformation of traditional power grids into intelligent, efficient, and resilient energy networks.\n\nThis event provides an excellent opportunity for students, faculty, and industry professionals to network, share knowledge, and collaborate on innovative solutions that address the challenges of modern power systems. The symposium will also showcase student research projects and provide a platform for academic-industry partnerships.`,
    highlights: [
      'Keynote speeches by industry leaders',
      'Interactive workshops on smart grid technologies',
      'Technical sessions on renewable energy integration',
      'Student research project showcase',
      'Networking opportunities with industry professionals',
      'Panel discussions on future energy systems'
    ]
  },
  'ai-ml-engineering-workshop-2024': {
    fullDescription: `The AI and Machine Learning in Engineering Workshop 2024 is designed to bridge the gap between theoretical knowledge and practical applications of artificial intelligence in electrical and electronic engineering. This intensive workshop will provide participants with hands-on experience in implementing AI and ML solutions for real-world engineering challenges.\n\nThe workshop will cover a wide range of topics including neural networks for signal processing, machine learning algorithms for power system optimization, AI-driven automation in manufacturing, and deep learning applications in telecommunications. Participants will work with state-of-the-art tools and frameworks, gaining practical skills that are highly valued in today's technology-driven industry.\n\nLed by expert faculty and industry practitioners, the workshop will feature interactive coding sessions, case studies, and project-based learning. Attendees will have the opportunity to work on real engineering problems and develop AI solutions that can be applied in their academic research or professional careers.`,
    highlights: [
      'Hands-on coding sessions with AI frameworks',
      'Real-world case studies in engineering applications',
      'Expert-led tutorials on machine learning algorithms',
      'Project-based learning approach',
      'Industry best practices and tools',
      'Certificate of completion for participants'
    ]
  },
  'research-excellence-awards-2024': {
    fullDescription: `The EEE Department Research Excellence Awards 2024 celebrates the outstanding contributions of our faculty and students to the advancement of electrical and electronic engineering. This annual ceremony recognizes groundbreaking research, innovative projects, and significant achievements that have made a lasting impact on the field and society.\n\nThe awards ceremony will honor researchers across various categories including fundamental research, applied research, student innovation, and collaborative projects. Recipients will be recognized for their dedication to pushing the boundaries of knowledge and their commitment to excellence in research and development.\n\nThis prestigious event brings together the entire EEE community to celebrate achievements, share research findings, and inspire future innovations. The ceremony will feature presentations by award recipients, showcasing their research contributions and the potential impact of their work on the engineering community and beyond.`,
    highlights: [
      'Recognition of outstanding faculty research',
      'Student innovation awards and scholarships',
      'Research presentation sessions',
      'Networking with research community',
      'Celebration of collaborative achievements',
      'Inspiration for future research endeavors'
    ]
  }
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { slug } = await params
  const event = events.find(e => e.link === `/news/${slug}`)
  
  if (!event) {
    notFound()
  }

  const formattedDate = formatDate(event.date)
  const images = galleryImages[slug as keyof typeof galleryImages] || []
  const content = extendedContent[slug as keyof typeof extendedContent]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <AnimatedSection className="relative bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button asChild variant="ghost" className="text-slate-600 hover:text-slate-900">
              <Link href="/news" className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to News & Events
              </Link> 
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                  {event.category}
                </Badge>
                <Badge variant={event.type === 'event' ? 'default' : 'outline'}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {event.title}
              </h1>
              
              <div className="flex items-center gap-6 text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formattedDate.month} {formattedDate.day}, {formattedDate.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>UAP Campus</span>
                </div>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                {event.description}
              </p>
            </div>
            
            <div className="relative">
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      {content && (
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white shadow-sm border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">About This Event</h2>
                  <div className="prose prose-slate max-w-none">
                    {content.fullDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-slate-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Event Highlights</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {content.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Gallery Section */}
      {images.length > 0 && (
        <AnimatedSection className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Photo Gallery</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore moments captured from this event and get a glimpse of the engaging activities and interactions.
              </p>
            </div>
            
            <StaggeredGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <StaggeredItem key={index}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <div className="relative aspect-video">
                      <Image
                        src={image}
                        alt={`${event.title} - Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Card>
                </StaggeredItem>
              ))}
            </StaggeredGrid>
          </div>
        </AnimatedSection>
      )}

      {/* Related Events Section */}
      <AnimatedSection className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Events</h2>
            <p className="text-slate-600">Discover more upcoming events and news from our department</p>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/news">
                View All News & Events
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}