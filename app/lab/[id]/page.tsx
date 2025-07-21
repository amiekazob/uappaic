import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { labs } from '@/lib/lab-data';
import { 
  ArrowLeft,
  Award,
  BarChart,
  BookOpen, 
  CheckCircle, 
  Clock, 
  GraduationCap, 
  Info, 
  Lightbulb, 
  MapPin, 
  Monitor, 
  Settings, 
  Shield, 
  Tag, 
  Target, 
  User, 
  Users, 
  Wrench, 
  Zap 
} from 'lucide-react';

interface LabPageProps {
  params: {
    id: string;
  };
}

export default async function LabPage({ params }: LabPageProps) {
  const { id } = await params;
  const lab = labs.find(l => l.id === id);

  if (!lab) {
    notFound();
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Electronics': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Power': return 'bg-red-100 text-red-800 border-red-200';
      case 'Communications': return 'bg-green-100 text-green-800 border-green-200';
      case 'Control': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Computer': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Research': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Electronics': return '⚡';
      case 'Power': return '🔌';
      case 'Communications': return '📡';
      case 'Control': return '🎛️';
      case 'Computer': return '💻';
      case 'Research': return '🔬';
      default: return '🏭';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900 opacity-30"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <Link 
            href="/lab" 
            className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-all duration-300 hover:translate-x-1"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Laboratories
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                {lab.category && (
                  <>
                    <span className="text-3xl mr-3">{getCategoryIcon(lab.category)}</span>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border-2 ${getCategoryColor(lab.category)} bg-white`}>
                      {lab.category} Laboratory
                    </span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {lab.name}
              </h1>
              
              {lab.description && (
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  {lab.description.substring(0, 200)}...
                </p>
              )}
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-medium">{lab.capacity} Students</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-medium">{lab.location}</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span className="font-medium">Hands-on Learning</span>
                </div>
              </div>
            </div>
            
            {/* Quick Stats Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-yellow-300" />
                Lab Highlights
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-sm">Industry-Standard Equipment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-sm">Expert Supervision</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-sm">Real-world Applications</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                  <span className="text-sm">Safety Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Lab Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Lab Image Gallery */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-96 lg:h-[500px]">
                  <Image
                    src={lab.image}
                    alt={lab.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Lab Info Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                  Laboratory Details
                </h3>
                
                <div className="space-y-5">
                  {lab.location && (
                    <div className="flex items-start group">
                      <div className="bg-blue-100 rounded-lg p-2 mr-4 group-hover:bg-blue-200 transition-colors">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Location</p>
                        <p className="font-semibold text-gray-800 text-lg">{lab.location}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start group">
                    <div className="bg-green-100 rounded-lg p-2 mr-4 group-hover:bg-green-200 transition-colors">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Capacity</p>
                      <p className="font-semibold text-gray-800 text-lg">{lab.capacity} Students</p>
                    </div>
                  </div>
                  
                  {lab.supervisor && (
                    <div className="flex items-start group">
                      <div className="bg-purple-100 rounded-lg p-2 mr-4 group-hover:bg-purple-200 transition-colors">
                        <User className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Supervisor</p>
                        <p className="font-semibold text-gray-800 text-lg">{lab.supervisor}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start group">
                    <div className="bg-orange-100 rounded-lg p-2 mr-4 group-hover:bg-orange-200 transition-colors">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Safety Level</p>
                      <p className="font-semibold text-gray-800 text-lg">Certified Safe</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Learning Outcomes Preview */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                  Key Learning Outcomes
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Practical circuit analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Equipment operation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Problem-solving skills</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Safety procedures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Detailed Description Section */}
          {lab.description && (
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <Monitor className="w-8 h-8 mr-3 text-blue-600" />
                  Laboratory Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {lab.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Learning Outcomes Section */}
          {lab.learningOutcomes && lab.learningOutcomes.length > 0 && (
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <div className="bg-green-100 rounded-xl p-3 mr-4">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  Learning Outcomes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lab.learningOutcomes?.map((outcome, index) => (
                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <div className="bg-green-500 rounded-full p-2 mr-4 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}



          {/* Safety Requirements */}
          {lab.safetyRequirements && lab.safetyRequirements.length > 0 && (
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <div className="bg-red-100 rounded-xl p-3 mr-4">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  Safety Requirements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lab.safetyRequirements?.map((requirement, index) => (
                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
                      <div className="bg-red-500 rounded-full p-2 mr-4 flex-shrink-0">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Assessment Methods */}
          {lab.assessmentMethods && lab.assessmentMethods.length > 0 && (
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <div className="bg-indigo-100 rounded-xl p-3 mr-4">
                    <BarChart className="w-8 h-8 text-indigo-600" />
                  </div>
                  Assessment Methods
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lab.assessmentMethods?.map((method, index) => (
                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
                      <div className="bg-indigo-500 rounded-full p-2 mr-4 flex-shrink-0">
                        <BarChart className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Industry Relevance */}
          {lab.industryRelevance && lab.industryRelevance.length > 0 && (
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <div className="bg-yellow-100 rounded-xl p-3 mr-4">
                    <Lightbulb className="w-8 h-8 text-yellow-600" />
                  </div>
                  Industry Relevance
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lab.industryRelevance?.map((relevance, index) => (
                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-100">
                      <div className="bg-yellow-500 rounded-full p-2 mr-4 flex-shrink-0">
                        <Lightbulb className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium">{relevance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Equipment & Applications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Equipment Section */}
            {lab.equipment && lab.equipment.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <div className="bg-blue-100 rounded-xl p-3 mr-4">
                      <Wrench className="w-6 h-6 text-blue-600" />
                    </div>
                    Laboratory Equipment
                  </h3>
                  <div className="bg-blue-50 rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-blue-600">{lab.equipment.length} Items</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {lab.equipment?.map((item, index) => (
                    <div key={index} className="group bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center">
                        <div className="bg-blue-500 rounded-full p-2 mr-4 group-hover:bg-blue-600 transition-colors">
                          <Settings className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-800 font-semibold text-lg">{item}</span>
                          <div className="w-full bg-blue-200 rounded-full h-1 mt-2">
                            <div className="bg-blue-500 h-1 rounded-full" style={{width: `${Math.min(90 + index * 2, 100)}%`}}></div>
                          </div>
                        </div>
                        <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Zap className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-800">All equipment is regularly calibrated and safety-certified</span>
                  </div>
                </div>
              </div>
            )}

            {/* Applications Section */}
            {lab.applications && lab.applications.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <div className="bg-green-100 rounded-xl p-3 mr-4">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    Practical Applications
                  </h3>
                  <div className="bg-green-50 rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-green-600">{lab.applications.length} Areas</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {lab.applications?.map((application, index) => (
                    <div key={index} className="group bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center">
                        <div className="bg-green-500 rounded-full p-2 mr-4 group-hover:bg-green-600 transition-colors">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-800 font-semibold text-lg">{application}</span>
                          <div className="w-full bg-green-200 rounded-full h-1 mt-2">
                            <div className="bg-green-500 h-1 rounded-full" style={{width: `${Math.min(85 + index * 3, 100)}%`}}></div>
                          </div>
                        </div>
                        <div className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Lightbulb className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-800">Hands-on experience with real-world engineering applications</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Related Labs Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-gray-800 flex items-center">
                <div className="bg-indigo-100 rounded-xl p-3 mr-4">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                Related Laboratories
              </h3>
              <Link 
                href="/lab" 
                className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-4 py-2 rounded-xl font-semibold transition-colors duration-300 flex items-center"
              >
                View All Labs
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>
            
            {labs.filter(l => l.id !== lab.id && l.category === lab.category).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {labs
                  .filter(l => l.id !== lab.id && l.category === lab.category)
                  .slice(0, 3)
                  ?.map((relatedLab) => (
                    <Link key={relatedLab.id} href={`/lab/${relatedLab.id}`}>
                      <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border border-gray-100">
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={relatedLab.image}
                            alt={relatedLab.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 right-4">
                            {relatedLab.category && (
                              <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getCategoryColor(relatedLab.category)} bg-white shadow-lg`}>
                                {getCategoryIcon(relatedLab.category)} {relatedLab.category}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                            {relatedLab.name}
                          </h4>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-gray-600">
                              <Users className="w-4 h-4 mr-2 text-indigo-500" />
                              <span className="text-sm font-medium">{relatedLab.capacity} Students</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                              <span className="text-sm font-medium">{relatedLab.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Click to explore</span>
                            <div className="bg-indigo-100 rounded-full p-2 group-hover:bg-indigo-200 transition-colors">
                              <ArrowLeft className="w-4 h-4 text-indigo-600 rotate-180" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-12 h-12 text-gray-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-600 mb-2">No Related Laboratories</h4>
                <p className="text-gray-500 mb-6">No other laboratories found in the {lab.category} category.</p>
                <Link 
                  href="/lab" 
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore All Laboratories
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all labs
export async function generateStaticParams() {
  return labs.map((lab) => ({
    id: lab.id,
  }));
}

// Generate metadata for each lab page
export async function generateMetadata({ params }: LabPageProps) {
  const { id } = await params;
  const lab = labs.find(l => l.id === id);
  
  if (!lab) {
    return {
      title: 'Lab Not Found',
      description: 'The requested laboratory page could not be found.'
    };
  }

  return {
    title: `${lab.name} | EEE Department`,
    description: lab.description || `Learn about ${lab.name} at the Department of Electrical and Electronic Engineering.`,
    keywords: [
      lab.name,
      'laboratory',
      'electrical engineering',
      'electronic engineering',
      lab.category,
      ...(lab.applications || []),
      ...(lab.equipment || [])
    ].join(', ')
  };
}