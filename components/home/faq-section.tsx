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
    question: "What programs does the EEE department offer?",
    answer: "We offer Bachelor of Science in Electrical and Electronic Engineering (BSc EEE) and Master of Science in Electrical and Electronic Engineering (MSc EEE). Our programs are designed to provide comprehensive knowledge in electrical systems, electronics, telecommunications, and power engineering.",
    category: "Programs"
  },
  {
    id: 2,
    question: "What are the admission requirements for EEE programs?",
    answer: "For BSc EEE, students need to have completed HSC or equivalent with strong background in Mathematics and Physics. For MSc EEE, a bachelor's degree in EEE or related field is required. Specific GPA requirements and entrance exam details are available on our admissions page.",
    category: "Admissions"
  },
  {
    id: 3,
    question: "What career opportunities are available after graduation?",
    answer: "Our graduates work in diverse fields including power generation and distribution, telecommunications, electronics manufacturing, automation and control systems, renewable energy, research and development, and many pursue entrepreneurship in tech startups.",
    category: "Career"
  },
  {
    id: 4,
    question: "Does the department have research facilities and labs?",
    answer: "Yes, we have state-of-the-art laboratories including Power Systems Lab, Electronics Lab, Telecommunications Lab, Control Systems Lab, and Renewable Energy Lab. Students get hands-on experience with modern equipment and software.",
    category: "Facilities"
  },
  {
    id: 5,
    question: "Are there opportunities for internships and industry collaboration?",
    answer: "Absolutely! We have partnerships with leading companies in Bangladesh and internationally. Students can participate in internships, industrial training, and collaborative research projects that provide real-world experience.",
    category: "Industry"
  },
  {
    id: 6,
    question: "What student organizations and activities are available?",
    answer: "Students can join the EEE Student Association, IEEE Student Branch, robotics clubs, and participate in various technical competitions, seminars, workshops, and cultural events that enhance both technical and soft skills.",
    category: "Student Life"
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
            Get answers to common questions about our EEE programs, admissions, facilities, and student life. 
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
              Our admissions team is here to help you with any additional questions about our programs.
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