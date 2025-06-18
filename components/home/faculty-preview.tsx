"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { facultyMembers } from "@/lib/faculty-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredGrid, StaggeredItem } from "@/components/ui/staggered-container"

export function FacultyPreview() {
  // Show HOD and 2 other faculty members
  const hod = facultyMembers.find(m => m.role === 'HOD');
  const otherFaculty = facultyMembers.filter(m => m.role !== 'HOD').slice(0, 2);
  const previewFaculty = hod ? [hod, ...otherFaculty] : otherFaculty.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slideUp" className="flex flex-col md:flex-row justify-between md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Meet Our Faculty</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Our department is proud to have a team of highly qualified and dedicated educators.
            </p>
          </div>
          <Link href="/faculty" passHref>
            <Button className="mt-4 md:mt-0 md:ml-4 whitespace-nowrap bg-indigo-700 hover:bg-indigo-800">
              Show All
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </AnimatedSection>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewFaculty.map((member) => (
            <StaggeredItem key={member.id}>
              <Card className="overflow-hidden h-full flex flex-col group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Link href={`/faculty/${member.id}`} className="block">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white leading-tight">{member.name}</h3>
                    <p className="text-sm text-indigo-300 font-semibold">{member.title.replace('Head of the Department & ', '')}</p>
                  </div>
                </div>
              </Card>
            </StaggeredItem>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  )
}