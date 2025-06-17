import { facultyMembers, FacultyMember } from '@/lib/faculty-data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Mail, Phone, BookOpen, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  return facultyMembers.map(member => ({
    id: member.id,
  }));
}

const getFacultyMember = (id: string): FacultyMember | undefined => {
  return facultyMembers.find(member => member.id === id);
};

export default function FacultyProfilePage({ params }: { params: { id: string } }) {
  const member = getFacultyMember(params.id);

  if (!member) {
    notFound();
  }

  // A simple way to make the bio longer for demonstration
  const longBio = `${member.bio} `.repeat(3);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Button asChild variant="ghost" className="mb-8 text-indigo-600 hover:text-indigo-800">
            <Link href="/faculty">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Faculty
            </Link>
          </Button>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={180}
                  height={180}
                  className="rounded-full border-8 border-gray-100 shadow-md mb-6 md:mb-0 md:mr-8 flex-shrink-0"
                />
                <div className="flex-grow">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{member.name}</h1>
                  <p className="text-xl text-indigo-600 font-semibold mt-1">{member.title}</p>
                   {member.role === 'HOD' && (
                      <Badge className="mt-2 text-base bg-indigo-100 text-indigo-800 py-1 px-3">Head of Department</Badge>
                  )}
                  <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
                    <a href={`mailto:${member.email}`} className="flex items-center hover:text-indigo-700">
                      <Mail className="w-4 h-4 mr-2"/> {member.email}
                    </a>
                    <span className="flex items-center">
                      <Phone className="w-4 h-4 mr-2"/> {member.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 md:px-12 pb-12">
              <div className="mt-8 border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Biography</h2>
                <p className="text-gray-600 leading-relaxed text-justify">{longBio}</p>
              </div>

              <div className="mt-10 border-t pt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-3 text-indigo-500"/>
                      Education
                  </h3>
                  <ul className="space-y-3">
                    {member.education.map((edu, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-500 mr-2 mt-1">&#10003;</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Star className="w-5 h-5 mr-3 text-indigo-500"/>
                      Research Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.researchInterests.map((interest, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-700 hover:bg-gray-300">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 