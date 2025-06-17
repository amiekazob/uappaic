"use client"

import React, { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "UAP Hosted ICPC World Finals 2021",
    description: "UAP had the honor of hosting the prestigious ICPC World Finals, bringing together the brightest minds in competitive programming.",
    date: { day: '08', month: 'Nov', year: '2022' },
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/events/icpc-world-finals-2021",
  },
  {
    id: 2,
    title: "11th Convocation of UAP",
    description: "The 11th Convocation of the University of Asia Pacific was held with grandeur, celebrating the achievements of our graduates.",
    date: { day: '09', month: 'Oct', year: '2023' },
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/events/convocation-11th",
  },
  {
    id: 3,
    title: "Annual EEE Tech Fest 2024",
    description: "The annual tech fest showcased innovative projects and research from our talented EEE students and faculty.",
    date: { day: '20', month: 'Apr', year: '2024' },
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/events/eee-tech-fest-2024",
  },
  {
    id: 4,
    title: "Workshop on Modern Robotics",
    description: "A hands-on workshop covering the latest trends and technologies in the field of robotics and automation.",
    date: { day: '05', month: 'Jun', year: '2024' },
    image: "https://images.unsplash.com/photo-1620712943543-95fc6962c3a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/events/robotics-workshop-2024",
  },
];

export function NewsEvents() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News and Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Life at UAP is very much eventful. Through a lot of meaningful and impactful events, students get the
            opportunity to develop their skills and portfolio beyond the curriculum.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {events.map((event) => (
              <div className="flex-shrink-0 flex-grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4" key={event.id}>
                <Card className="overflow-hidden h-full flex flex-col group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Link href={event.link} className="block">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={250}
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                    <div className="absolute bottom-0 left-0 bg-blue-900 text-white p-3 text-center rounded-tr-xl">
                      <div className="font-bold text-2xl leading-none">{event.date.day}</div>
                      <div className="text-sm uppercase tracking-wider">{event.date.month}</div>
                      <div className="text-xs">{event.date.year}</div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="font-bold text-xl mb-2">
                      <Link href={event.link} className="hover:text-blue-700 transition-colors duration-300">{event.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
                    <Button asChild className="bg-indigo-700 hover:bg-indigo-800 mt-auto w-fit">
                      <Link href={event.link}>
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 