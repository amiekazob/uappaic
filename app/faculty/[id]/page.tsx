import { facultyMembers, FacultyMember } from '@/lib/faculty-data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Mail, Star, ArrowLeft, Award, Users, FileText, Calendar, Trophy, GraduationCap, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AcademicProfileIcons } from '@/components/ui/academic-profile-icons';
import { generateMetadata as generateSEOMetadata, generatePersonSchema } from '@/lib/seo';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const member = getFacultyMember(id);
  
  if (!member) {
    return {
      title: 'Faculty Member Not Found',
      description: 'The requested faculty member could not be found.'
    };
  }

  return generateSEOMetadata({
    title: `${member.name} - ${member.title}`,
    description: `Learn about ${member.name}, ${member.title} at UAP EEE Department. ${member.bio.substring(0, 150)}...`,
    keywords: `${member.name}, UAP faculty, ${member.title}, electrical engineering professor, ${member.researchInterests.join(', ')}`,
    url: `https://uap-eee.edu.bd/faculty/${member.id}`,
    image: member.image
  });
}

export async function generateStaticParams() {
  return facultyMembers.map(member => ({
    id: member.id,
  }));
}

const getFacultyMember = (id: string): FacultyMember | undefined => {
  return facultyMembers.find(member => member.id === id);
};

export default async function FacultyProfilePage({ params }: PageProps) {
  const { id } = await params;
  const member = getFacultyMember(id);

  if (!member) {
    notFound();
  }

  const longBio = `${member.bio} `.repeat(3);
  
  const personSchema = generatePersonSchema({
    name: member.name,
    jobTitle: member.title,
    description: member.bio,
    email: member.email,
    image: member.image,
    url: `https://uap-eee.edu.bd/faculty/${member.id}`,
    affiliation: 'University of Asia Pacific'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
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
                  src={member.image || "/placeholder-user.jpg"}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-gray-100 shadow-md mb-6 md:mb-0 md:mr-8 flex-shrink-0 object-cover"
                />
                <div className="flex-grow">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{member.name}</h1>
                  <p className="text-xl text-indigo-600 font-semibold mt-1">{member.title}</p>
                  {member.role === 'HOD' && (
                    <Badge className="mt-2 text-base bg-indigo-100 text-indigo-800 py-1 px-3">Head of Department</Badge>
                  )}

                  <div className="mt-6 space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <a href={`mailto:${member.email}`} className="flex items-center text-gray-600 hover:text-indigo-700">
                        <Mail className="w-4 h-4 mr-2 text-indigo-500" /> {member.email}
                      </a>
                      <span className="flex items-center text-gray-600">
                        <Building className="w-4 h-4 mr-2 text-indigo-500" /> Department of EEE
                      </span>
                    </div>
                  </div>

                  {/* Academic Profiles Section */}
                  {member.academicProfiles && member.academicProfiles.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Academic Profiles</h3>
                      <AcademicProfileIcons profiles={member.academicProfiles} />
                    </div>
                  )}

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Specialization</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.researchInterests.slice(0, 3).map((interest, index) => (
                        <Badge key={index} className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 md:px-12 pb-12">
              <div className="mt-8 border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Biography</h2>
                <p className="text-gray-600 leading-relaxed text-justify">{longBio}</p>
              </div>

              <div className="mt-10 border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-indigo-500" />
                  Education Qualification
                </h2>
                <div className="space-y-4">
                  {member.education.map((edu, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <span className="text-indigo-500 mr-3 mt-1 text-lg">•</span>
                      <div>
                        <p className="font-medium text-gray-800">{typeof edu === 'string' ? edu : edu.degree}</p>
                        {typeof edu === 'object' && (
                          <>
                            <p className="text-sm text-gray-600 mt-1">{edu.institution}</p>
                            {edu.year && (
                              <p className="text-sm text-gray-600">({edu.year})</p>
                            )}
                          </>
                        )}
                        {typeof edu === 'string' && (
                          <p className="text-sm text-gray-600 mt-1">Year: {2020 - index * 3} - {2024 - index * 3}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {member.professionalMemberships && member.professionalMemberships.length > 0 && (
                <div className="mt-10 border-t pt-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-indigo-500" />
                    Professional Memberships
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {member.professionalMemberships.map((membership, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <Award className="w-5 h-5 mr-3 text-indigo-500" />
                        <span className="text-gray-700">{membership}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {member.recentPublications && member.recentPublications.length > 0 && (
                <div className="mt-10 border-t pt-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-indigo-500" />
                    Publications
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="space-y-3">
                        {member.recentPublications.map((pub, index) => (
                          <div key={index} className="border-l-4 border-indigo-400 pl-4">
                            <p className="text-gray-700 font-medium">{pub.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{pub.authors}, {pub.venue}, {pub.year}</p>
                            {pub.impactFactor && (
                              <Badge className="mt-2 text-xs bg-green-100 text-green-800">Impact Factor: {pub.impactFactor}</Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {member.administrativeRoles && member.administrativeRoles.length > 0 && (
                <div className="mt-10 border-t pt-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Calendar className="w-6 h-6 mr-3 text-indigo-500" />
                    Administrative Roles & Services
                  </h2>
                  <div className="space-y-4">
                    {member.administrativeRoles.map((role, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800">{role.title}</h4>
                        <p className="text-gray-600">{role.organization} ({role.period})</p>
                        {role.description && <p className="text-sm text-gray-600 mt-2">{role.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
