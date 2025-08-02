"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is the Programming and AI Club?",
    answer: "The Programming and AI Club is a student-led organization within the Department of EEE at University of Asia Pacific. We focus on developing programming skills, exploring artificial intelligence technologies, and fostering innovation through hands-on projects, workshops, and collaborative learning experiences.",
    category: "About Club"
  },
  {
    id: 2,
    question: "Who can join the Programming and AI Club?",
    answer: "The club is open to all students from the Department of EEE, regardless of their programming experience level. Whether you're a complete beginner or an experienced coder, we welcome everyone who has an interest in programming, AI, and technology innovation.",
    category: "Membership"
  },
  {
    id: 3,
    question: "What programming languages and technologies do you focus on?",
    answer: "We cover a wide range of programming languages including Python, C++, Java, JavaScript, and specialized AI/ML frameworks like TensorFlow, PyTorch, and scikit-learn. We also explore web development, mobile app development, embedded systems programming, and emerging technologies in AI and machine learning.",
    category: "Technical"
  },
  {
    id: 4,
    question: "What activities and events does the club organize?",
    answer: "We organize regular coding workshops, AI/ML seminars, hackathons, programming competitions, project showcases, guest lectures from industry experts, study groups, and collaborative coding sessions. We also participate in inter-university programming contests and tech conferences.",
    category: "Activities"
  },
  {
    id: 5,
    question: "Do I need prior programming experience to join?",
    answer: "Not at all! We welcome beginners and provide comprehensive support through mentorship programs, beginner-friendly workshops, and peer learning sessions. Our experienced members are always ready to help newcomers get started with programming and AI concepts.",
    category: "Membership"
  },
  {
    id: 6,
    question: "How can joining the club benefit my career in EEE?",
    answer: "Programming and AI skills are increasingly essential in modern electrical and electronic engineering. Club membership enhances your technical portfolio, provides networking opportunities, offers hands-on project experience, and prepares you for careers in automation, IoT, smart systems, robotics, and emerging tech industries.",
    category: "Career"
  },
  {
    id: 7,
    question: "How do I become a member and what are the requirements?",
    answer: "Simply attend one of our regular meetings or contact us through our social media channels. There are no strict requirements - just bring your enthusiasm to learn! We have a simple registration process and welcome new members throughout the academic year.",
    category: "Membership"
  },
  {
    id: 8,
    question: "Does the club work on real-world projects?",
    answer: "Yes! We regularly work on practical projects including IoT applications, automation systems, AI-powered solutions for engineering problems, mobile apps, web platforms, and research projects. Many of our projects are showcased at university events and some have won competitions.",
    category: "Projects"
  }
]

function FAQCard({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <Card className="overflow-hidden border-2 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <button
          onClick={onToggle}
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700 rounded-full">
                {faq.category}
              </span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 pr-4">
              {faq.question}
            </h3>
          </div>
          <div className="flex-shrink-0">
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-indigo-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </button>
        
        <div className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-6 pb-6 pt-0">
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([1]) // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-indigo-600 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <MessageCircle className="w-10 h-10 text-purple-600 animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about the Programming and AI Club, membership, activities, and opportunities. 
            Can't find what you're looking for? Feel free to contact us directly.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq) => (
            <FAQCard
              key={faq.id}
              faq={faq}
              isOpen={openItems.includes(faq.id)}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our club coordinators are here to help you with any additional questions about joining or participating in club activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us" 
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a 
                href="tel:+8801234567890" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Call: +880 123 456 7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection