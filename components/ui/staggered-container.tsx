"use client"

import { motion } from "framer-motion"
import { useScrollAnimation, ScrollAnimationOptions } from "@/hooks/use-scroll-animation"
import { ReactNode } from "react"

interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  childDelay?: number
  scrollOptions?: ScrollAnimationOptions
}

interface StaggeredItemProps {
  children: ReactNode
  className?: string
  index?: number
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function StaggeredContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  childDelay = 0.1,
  scrollOptions = {}
}: StaggeredContainerProps) {
  const { ref, isInView } = useScrollAnimation(scrollOptions)
  
  const customContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customContainerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredItem({ children, className = "", index }: StaggeredItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Specialized staggered components
export function StaggeredGrid({ children, className = "", scrollOptions = {} }: {
  children: ReactNode
  className?: string
  scrollOptions?: ScrollAnimationOptions
}) {
  return (
    <StaggeredContainer 
      className={className}
      staggerDelay={0.1}
      childDelay={0.2}
      scrollOptions={scrollOptions}
    >
      {children}
    </StaggeredContainer>
  )
}

export function StaggeredList({ children, className = "", scrollOptions = {} }: {
  children: ReactNode
  className?: string
  scrollOptions?: ScrollAnimationOptions
}) {
  return (
    <StaggeredContainer 
      className={className}
      staggerDelay={0.15}
      childDelay={0.1}
      scrollOptions={scrollOptions}
    >
      {children}
    </StaggeredContainer>
  )
}