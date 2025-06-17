import Image from 'next/image';
import Link from 'next/link';
import { facultyMembers, FacultyMember } from '@/lib/faculty-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, ChevronRight } from 'lucide-react';

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
    <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
        <div className="md:grid md:grid-cols-3">
            <div className="md:col-span-1">
                 <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top"
                />
            </div>
            <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                <Badge className="mb-3 bg-indigo-100 text-indigo-800 text-sm w-fit">Head of Department</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{member.name}</h2>
                <p className="text-lg text-indigo-700 font-semibold mt-1">{member.title.replace('Head of the Department & ', '')}</p>
                <p className="mt-4 text-gray-600 max-w-2xl">{member.bio}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                    <a href={`mailto:${member.email}`} className="flex items-center hover:text-indigo-700">
                        <Mail className="w-4 h-4 mr-2"/> {member.email}
                    </a>
                    <span className="flex items-center">
                        <Phone className="w-4 h-4 mr-2"/> {member.phone}
                    </span>
                </div>
                <Button asChild className="mt-6 bg-indigo-700 hover:bg-indigo-800 w-fit">
                    <Link href={`/faculty/${member.id}`}>
                        Read Full Profile & Message
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </div>
    </div>
)

export default function FacultyPage() {
  const hod = facultyMembers.find(m => m.role === 'HOD');
  const otherFaculty = facultyMembers.filter(m => m.role !== 'HOD');

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
            <div className="mb-16">
                <HodCard member={hod} />
            </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherFaculty.map(member => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
} 