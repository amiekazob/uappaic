"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { committeeMembers } from "@/lib/committee-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Mail, Phone, Star, Award, Users } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"

export function CommitteePreview() {
  // Show first 3 committee members (Convener, President, General Secretary)
  const previewCommittee = committeeMembers.slice(0, 3);

  return (
    <section className="mb-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237E1891' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <Users className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Meet Our
            <span className="block text-purple-700">Distinguished Club Committee</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our club is led by a dedicated team of passionate students and faculty members committed to fostering excellence and innovation in electrical and electronic engineering.
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full" />
        </AnimatedSection>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewCommittee.map((member, index) => (
            <StaggeredItem key={member.id}>
              <Card className="overflow-hidden h-full flex flex-col group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Link href={`/committee/${member.id}`} className="block">
                    <Image
                      src={member.image || "/placeholder-user.jpg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover object-top transition-all duration-500 group-hover:scale-110"
                     />
                  </Link>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Position Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500 text-white border-0 shadow-lg">
                      <Award className="w-3 h-3 mr-1" />
                      {member.position}
                    </Badge>
                  </div>
                  
                  {/* Committee Member Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-purple-200 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-purple-300 font-semibold mb-3">
                      {member.position}
                    </p>
                    
                    {/* Contact Info */}
                    <div className="flex items-center space-x-4 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        <span className="truncate">{member.email.split('@')[0]}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        <span>Contact</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-t-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
                
                {/* Card Content */}
                <CardContent className="p-6 flex-grow">
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl group/btn">
                    <Link href={`/committee/${member.id}`}>
                      <span className="flex items-center justify-center">
                        View Full Profile
                        <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredGrid>
        
        {/* Call to Action */}
        <AnimatedSection animation="fadeIn" delay={0.4} className="text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-5 pt-5 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Discover Our Complete Committee Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore detailed profiles, roles, and contact information for all our dedicated committee members leading the EEE Club.
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3">
              <Link href="/committee">
                <Users className="w-5 h-5 mr-2" />
                View All Committee Members
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-violet-200 rounded-full opacity-20 blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-5 w-16 h-16 bg-indigo-200 rounded-full opacity-10 animate-bounce" />
      </div>
    </section>
  )
}