"use client"

import { useEffect, useRef } from "react"
import { animate, useInView } from "framer-motion"
import { StaggeredContainer, StaggeredItem } from "@/components/ui/staggered-container"

const stats = [
  {
    value: 25,
    label: "Faculty Members",
    suffix: "+",
  },
  {
    value: 1600,
    label: "Alumni",
    suffix: "+",
  },
  {
    value: 19,
    label: "Modern Labs",
    suffix: "",
  },
]

function AnimatedCounter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toLocaleString()
          }
        },
      })
      return () => controls.stop()
    }
  }, [isInView, to])

  return <span ref={ref}>0</span>
}

export function StatsSection() {
  return (
    <div className="bg-gray-50/70">
      <StaggeredContainer
        className="container mx-auto grid grid-cols-3 gap-8 py-12 text-center"
        staggerDelay={0.2}
      >
        {stats.map((stat, index) => (
          <StaggeredItem key={index}>
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-900">
                <AnimatedCounter to={stat.value} />
                {stat.suffix}
              </p>
              <p className="text-sm text-gray-700 mt-2 tracking-wide uppercase">{stat.label}</p>
            </div>
          </StaggeredItem>
        ))}
      </StaggeredContainer>
    </div>
  )
} 