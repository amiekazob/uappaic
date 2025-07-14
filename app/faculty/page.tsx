'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, ChevronRight, Loader2 } from 'lucide-react';
import { useLazyFacultyData } from '@/components/ui/lazy-data-loader';

type FacultyMember = {
  id: string
  name: string
  title: string
  role: string
  bio: string
  image: string
  email: string
  phone: string
  researchInterests: string[]
}



const FacultyCard = ({ member }: { member: FacultyMember }) => (
  <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
    <div className="relative">
      <Image
        src={member.image}
        alt={member.name}
        width={400}
        height={400}
        className="w-full h-80 object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-sm text-indigo-300 font-semibold">{member.title.replace('Head of the Department & ', '')}</p>
      </div>
    </div>
    <CardContent className="p-4 flex-grow">
      <p className="text-sm text-gray-600 line-clamp-3">{member.bio}</p>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Button asChild className="w-full bg-indigo-700 hover:bg-indigo-800 group-hover:bg-indigo-600 transition-colors">
        <Link href={`/faculty/${member.id}`}>
          View Full Profile
          <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

const HodCard = ({ member }: { member: FacultyMember }) => (
  <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden border border-indigo-100">
    <div className="relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-blue-600/5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-200/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      
      <div className="relative lg:grid lg:grid-cols-5 lg:gap-8">
        {/* Image Section */}
        <div className="lg:col-span-2 relative">
          <div className="relative h-96 lg:h-full min-h-[500px]">
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={600}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            {/* Floating badge */}
            <div className="absolute top-6 left-6">
              <Badge className="bg-indigo-600 text-white text-sm px-4 py-2 shadow-lg">
                Head of Department
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="lg:col-span-3 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
          <div className="space-y-6">
            {/* Title Section */}
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {member.name}
              </h2>
              <p className="text-xl lg:text-2xl text-indigo-700 font-semibold mt-2">
                {member.title.replace('Head of the Department & ', '')}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mt-4 rounded-full"></div>
            </div>
            
            {/* Bio */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              {member.bio}
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href={`mailto:${member.email}`} 
                  className="flex items-center text-gray-600 hover:text-indigo-700 transition-colors group"
                >
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{member.email}</p>
                  </div>
                </a>
                <div className="flex items-center text-gray-600">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{member.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Link href={`/faculty/${member.id}`}>
                  Read Full Profile & Message
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-8 py-3 rounded-xl">
                <Link href="/message-from-head">
                  Department Message
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function FacultyPage() {
  const { data: facultyMembers, loading, error } = useLazyFacultyData()

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-indigo-600" />
          <p className="text-gray-600">Loading faculty members...</p>
        </div>
      </div>
    )
  }

  if (error || !facultyMembers) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load faculty data</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    )
  }

  // Find HOD - can be 'HOD' or any role containing 'Head'
  const hod = facultyMembers.find(m => m.role === 'HOD' || m.role.includes('Head'));
  
  // Filter faculty members by role, excluding HOD from other categories
  const professors = facultyMembers.filter(m => 
    m.role === 'Professor' && m.role !== 'HOD' && !m.role.includes('Head')
  );
  const associateProfessors = facultyMembers.filter(m => 
    (m.role === 'Associate Professor' || m.role.includes('Associate Professor')) && 
    m.role !== 'HOD' && !m.role.includes('Head')
  );
  const assistantProfessors = facultyMembers.filter(m => 
    m.role === 'Assistant Professor' && m.role !== 'HOD' && !m.role.includes('Head')
  );
  const lecturers = facultyMembers.filter(m => 
    m.role === 'Lecturer' && m.role !== 'HOD' && !m.role.includes('Head')
  );
  const onLeaveFaculty = facultyMembers.filter(m => m.role === 'On Leave');

  const FacultySection = ({ title, members, bgColor = "bg-gray-50" }: { title: string; members: FacultyMember[]; bgColor?: string }) => {
    if (members.length === 0) return null;
    
    return (
      <div className={`${bgColor} py-12 rounded-2xl mb-12`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            {title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map(member => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Faculty</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of educators, researchers, and innovators shaping the future of Electrical and Electronic Engineering.
          </p>
        </div>

        {hod && (
          <div className="mb-20">
            {/* HOD Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Department Leadership
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our distinguished Head of Department who leads our academic excellence and research initiatives
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
            </div>
            
            <HodCard member={hod} />
            
            {/* Separator */}
            <div className="mt-20 mb-12">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-6 text-lg font-semibold text-gray-500">Our Faculty Members</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <FacultySection title="Professors" members={professors} bgColor="bg-blue-50" />
        <FacultySection title="Associate Professors" members={associateProfessors} bgColor="bg-indigo-50" />
        <FacultySection title="Assistant Professors" members={assistantProfessors} bgColor="bg-purple-50" />
        <FacultySection title="Lecturers" members={lecturers} bgColor="bg-gray-50" />
        <FacultySection title="On Leave Faculty" members={onLeaveFaculty} bgColor="bg-orange-50" />
      </div>
    </div>
  );
}