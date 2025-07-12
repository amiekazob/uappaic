"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer } from "@/components/ui/staggered-container"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  User, 
  Users,
  MessageSquare,
  Smartphone,
  Printer,
  GraduationCap
} from "lucide-react"

interface ContactInfo {
  id: string
  name: string
  title: string
  phone?: string
  mobile: string
  email: string
  extension?: string
}

interface UniversityContact {
  type: string
  address: string
  phone: string
  pabx: string
  fax: string
  mobiles: string[]
  email: string
}

const universityContact: UniversityContact = {
  type: "University of Asia Pacific - Admission Office",
  address: "74/A, Green Road, Dhaka - 1205, Bangladesh",
  phone: "+8802-48114140",
  pabx: "+8802-58157091-4, +8802-58157096 (Ext - 210, 211, 212, 213, 215)",
  fax: "+8802-58157097",
  mobiles: ["+8801731681081", "+8801768544208", "+8801714088321", "+8801789050383"],
  email: "admission@uap-bd.edu"
}

const deptContacts: ContactInfo[] = [
  {
    id: "1",
    name: "Md. Rahamat Ullah",
    title: "Senior Administrative Officer",
    phone: "58157091-4",
    extension: "555",
    mobile: "01717558922",
    email: "dao.eee@uap-bd.edu"
  },
  {
    id: "2",
    name: "Md. Kamruzzaman",
    title: "Assistant Administrative Officer",
    phone: "58157091-4",
    extension: "555",
    mobile: "01746120504",
    email: "zaman_eee@uap-bd.edu"
  }
]



export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <AnimatedSection className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get in touch with our department and university administration
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Green Road, Dhaka</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+8802-48114140</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>admission@uap-bd.edu</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* University Contact Section */}
      <AnimatedSection className="py-20" delay={0.2}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                University of Asia Pacific
              </h2>
              <p className="text-xl text-gray-600">
                General admission and university information
              </p>
            </div>

            <Card className="p-8 shadow-lg border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Admission Office
                </CardTitle>
                <CardDescription className="text-gray-600">
                  For general inquiries, admissions, and university information
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Address */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600">{universityContact.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Telephone</h4>
                        <p className="text-gray-600">{universityContact.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Phone className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">PABX</h4>
                        <p className="text-gray-600 text-sm">{universityContact.pabx}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Printer className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">FAX</h4>
                        <p className="text-gray-600">{universityContact.fax}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile & Email */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Smartphone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Mobile Numbers</h4>
                        <div className="space-y-1">
                          {universityContact.mobiles.map((mobile, index) => (
                            <p key={index} className="text-gray-600 text-sm">{mobile}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Mail className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <a 
                          href={`mailto:${universityContact.email}`}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {universityContact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Clock className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                        <p className="text-gray-600 text-sm">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600 text-sm">Friday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Department Contact Section */}
      <AnimatedSection className="py-20 bg-gray-50" delay={0.4}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                EEE Department Administration
              </h2>
              <p className="text-xl text-gray-600">
                Direct contact with our department administrative staff
              </p>
            </div>

            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deptContacts.map((contact) => (
                <Card key={contact.id} className="p-6 hover:shadow-lg transition-all duration-300 bg-white border-2 border-orange-100">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {contact.name}
                    </CardTitle>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                      {contact.title}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {contact.phone && (
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Phone className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Phone</p>
                          <p className="text-sm text-gray-600">
                            {contact.phone}
                            {contact.extension && `, Ext: ${contact.extension}`}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Smartphone className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Mobile</p>
                        <p className="text-sm text-gray-600">{contact.mobile}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Mail className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <a 
                          href={`mailto:${contact.email}`}
                          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredContainer>
          </div>
        </div>
      </AnimatedSection>



      {/* Contact Form Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white" delay={0.8}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Have a specific question? We'd love to hear from you.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <MessageSquare className="w-8 h-8 mx-auto text-orange-400" />
                  <h3 className="font-semibold">General Inquiries</h3>
                  <p className="text-sm text-blue-100">For general questions about our programs</p>
                </div>
                <div className="space-y-2">
                  <GraduationCap className="w-8 h-8 mx-auto text-orange-400" />
                  <h3 className="font-semibold">Admissions</h3>
                  <p className="text-sm text-blue-100">For admission-related queries</p>
                </div>
                <div className="space-y-2">
                  <Users className="w-8 h-8 mx-auto text-orange-400" />
                  <h3 className="font-semibold">Academic Support</h3>
                  <p className="text-sm text-blue-100">For current students and academic matters</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Form (Coming Soon)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Location Section */}
      <AnimatedSection className="py-20 bg-gray-50" delay={1.0}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Find Us
              </h2>
              <p className="text-xl text-gray-600">
                Located in the heart of Dhaka
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="relative h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8947654321!2d90.3892717!3d23.7548558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a38ecdcf27%3A0xd9134fb07452b4f6!2s74%2FA%20Green%20Rd%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="University of Asia Pacific Location"
                  className="rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-gray-900">74/A, Green Road, Dhaka - 1205</span>
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/74%2FA+Green+Rd,+Dhaka+1205/@23.754856,90.389272,15z/data=!4m6!3m5!1s0x3755b8a38ecdcf27:0xd9134fb07452b4f6!8m2!3d23.7548558!4d90.3892717!16s%2Fg%2F11nnt8wgb9?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 transition-colors mt-1 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}