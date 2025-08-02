'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Users, 
  Trophy, 
  BookOpen, 
  Lightbulb, 
  Network, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Code,
  Cpu,
  Zap
} from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Technical Workshops',
    description: 'Access to exclusive workshops on latest technologies, programming languages, and engineering concepts.'
  },
  {
    icon: Network,
    title: 'Networking Opportunities',
    description: 'Connect with industry professionals, alumni, and like-minded peers to build valuable relationships.'
  },
  {
    icon: Trophy,
    title: 'Competitions & Contests',
    description: 'Participate in programming contests, robotics competitions, and technical challenges.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Projects',
    description: 'Work on cutting-edge projects and research initiatives with faculty guidance.'
  },
  {
    icon: Users,
    title: 'Leadership Development',
    description: 'Develop leadership skills through organizing events and managing club activities.'
  },
  {
    icon: Calendar,
    title: 'Regular Events',
    description: 'Attend seminars, tech talks, industry visits, and social gatherings throughout the year.'
  }
];

const membershipSteps = [
  {
    step: '01',
    title: 'Fill Application Form',
    description: 'Complete our online membership application with your academic and personal details.'
  },
  {
    step: '02',
    title: 'Attend Orientation',
    description: 'Join our orientation session to learn about club activities and meet current members.'
  },
  {
    step: '03',
    title: 'Start Participating',
    description: 'Begin attending events, workshops, and contributing to club projects immediately.'
  }
];

const clubStats = [
  { number: '50+', label: 'Active Members' },
  { number: '20+', label: 'Events Per Year' },
  { number: '1+', label: 'Industry Partners' },
  { number: '1+', label: 'Years of Excellence' }
];

export default function JoinOurClubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto max-w-4xl">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Programming & AI Club</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Join Our <span className="text-yellow-300">Tech Community</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Become part of UAP's most dynamic tech community. Learn, innovate, and grow with fellow engineering enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Events Per Year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1+</div>
              <div className="text-gray-600 font-medium">Industry Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Member Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Join Our Club?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the amazing opportunities and benefits that await you as a member of our tech community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Membership Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Join?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to become a member and start your journey with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < membershipSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Membership Requirements
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-gray-900">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    Current student of UAP EEE Department
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    Minimum CGPA of 2.50
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    Interest in technology and programming
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    Commitment to active participation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-gray-900">
                  <Code className="w-6 h-6 text-blue-500 mr-3" />
                  What You'll Need
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Cpu className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Valid student ID card
                  </li>
                  <li className="flex items-start">
                    <Cpu className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Recent academic transcript
                  </li>
                  <li className="flex items-start">
                    <Cpu className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    Passport-size photograph
                  </li>

                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Have questions? Get in touch with our membership team.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">paiclubeee@uap-bd.edu</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+880 1234-567890</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">EEE Dept, UAP</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full">
              Apply for Membership
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}