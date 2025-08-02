"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Newspaper } from "lucide-react"
import { NewsData, formatDate } from "@/lib/news-data"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer, StaggeredItem } from "@/components/ui/staggered-container"

export function News() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  // Get recent news (limit to 3 for home page)
  const recentNews = NewsData.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
                <Newspaper className="w-8 h-8 mr-3 text-green-600" />
                Latest News
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Stay updated with the latest news, achievements, and developments from the EEE Department.
              </p>
            </div>
            <Link href="/news" passHref>
              <Button className="mt-4 md:mt-0 md:ml-4 whitespace-nowrap bg-green-700 hover:bg-green-800">
                View All
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" scrollOptions={{ margin: "-50px" }}>
          {recentNews.map((item) => {
            const dateObj = new Date(item.date);
            const formattedDate = {
              day: dateObj.toLocaleDateString('en-US', { day: '2-digit' }),
              month: dateObj.toLocaleDateString('en-US', { month: 'short' }),
              year: dateObj.toLocaleDateString('en-US', { year: 'numeric' })
            };
            return (
              <StaggeredItem key={item.id} className="w-full">
                <Card className="overflow-hidden h-full flex flex-col group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Link href={item.link} className="block">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        width={400}
                        height={250}
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                    <div className="absolute bottom-0 left-0 bg-blue-600 text-white p-3 text-center rounded-tr-xl">
                      <div className="font-bold text-2xl leading-none">{formattedDate.day}</div>
                      <div className="text-sm uppercase tracking-wider">{formattedDate.month}</div>
                      <div className="text-xs">{formattedDate.year}</div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="font-bold text-xl mb-2">
                      <Link href={item.link} className="hover:text-blue-700 transition-colors duration-300">{item.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{item.shortDescription}</p>
                    <Button asChild className="bg-blue-700 hover:bg-blue-800 w-fit mt-auto">
                      <Link href={item.link}>
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredItem>
            )
          })}
        </StaggeredContainer>
      </div>
    </section>
  )
}