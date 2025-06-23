import { labs, getLabById, Lab } from '@/lib/lab-data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Users, MapPin, Wrench, User, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';

export async function generateStaticParams() {
  return labs.map(lab => ({
    id: lab.id,
  }));
}

const getCategoryColor = (category: Lab['category']) => {
  switch (category) {
    case 'Electronics':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Power':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Communications':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Control':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Computer':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    case 'Research':
      return 'bg-pink-100 text-pink-800 border-pink-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getCategoryGradient = (category: Lab['category']) => {
  switch (category) {
    case 'Electronics':
      return 'from-blue-900 to-blue-700';
    case 'Power':
      return 'from-green-900 to-green-700';
    case 'Communications':
      return 'from-purple-900 to-purple-700';
    case 'Control':
      return 'from-orange-900 to-orange-700';
    case 'Computer':
      return 'from-indigo-900 to-indigo-700';
    case 'Research':
      return 'from-pink-900 to-pink-700';
    default:
      return 'from-gray-900 to-gray-700';
  }
};

// Add proper TypeScript interface for params
interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function LabDetailPage({ params }: PageProps) {
  // Handle both Promise and direct params for Next.js 13+ compatibility
  const resolvedParams = await Promise.resolve(params);
  const lab = getLabById(resolvedParams.id);

  if (!lab) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${getCategoryGradient(lab.category)} text-white py-16 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.05)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="ghost" className="mb-8 text-white hover:bg-white/10 hover:text-white">
            <Link href="/lab">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Labs
            </Link>
          </Button>
          
          <AnimatedSection animation="fadeIn">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <Badge className={`${getCategoryColor(lab.category)} mb-4`}>
                  {lab.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {lab.name}
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
                  {lab.description}
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                    <Users className="w-5 h-5 mr-3 text-blue-200" />
                    <div>
                      <div className="font-semibold">{lab.capacity}</div>
                      <div className="text-sm text-blue-200">Capacity</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                    <MapPin className="w-5 h-5 mr-3 text-blue-200" />
                    <div>
                      <div className="font-semibold text-sm">{lab.location}</div>
                      <div className="text-sm text-blue-200">Location</div>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                    <User className="w-5 h-5 mr-3 text-blue-200" />
                    <div>
                      <div className="font-semibold text-sm">{lab.supervisor}</div>
                      <div className="text-sm text-blue-200">Supervisor</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-96">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src={lab.image}
                    alt={lab.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Equipment Section */}
          <AnimatedSection animation="slideUp" delay={0.1}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-gray-900">
                  <Wrench className="w-6 h-6 mr-3 text-blue-600" />
                  Equipment & Instruments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {lab.equipment.map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Applications Section */}
          <AnimatedSection animation="slideUp" delay={0.2}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-gray-900">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  Applications & Research Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {lab.applications.map((application, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div 
                        className={`w-3 h-3 rounded-full mr-3 flex-shrink-0`}
                        style={{
                          backgroundColor: getCategoryColor(lab.category).includes('blue') ? '#3b82f6' :
                                         getCategoryColor(lab.category).includes('green') ? '#10b981' :
                                         getCategoryColor(lab.category).includes('purple') ? '#8b5cf6' :
                                         getCategoryColor(lab.category).includes('orange') ? '#f97316' :
                                         getCategoryColor(lab.category).includes('indigo') ? '#6366f1' :
                                         getCategoryColor(lab.category).includes('pink') ? '#ec4899' :
                                         '#6b7280'
                        }}
                      />
                      <span className="text-gray-700 font-medium">{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Additional Information */}
        <AnimatedSection animation="slideUp" delay={0.3}>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">
                Laboratory Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{lab.capacity}</div>
                  <div className="text-sm text-gray-600">Student Capacity</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">{lab.equipment.length}</div>
                  <div className="text-sm text-gray-600">Equipment Types</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{lab.applications.length}</div>
                  <div className="text-sm text-gray-600">Research Areas</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}