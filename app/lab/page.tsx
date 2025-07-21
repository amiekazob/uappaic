import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { labs } from '@/lib/lab-data';

export default function LabPage() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Our Laboratories
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            State-of-the-art facilities equipped with modern instruments and technology
            to support hands-on learning and research in electrical and electronic engineering.
          </p>
        </div>
      </div>

      {/* Labs Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <Link key={lab.id} href={`/lab/${lab.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={lab.image}
                    alt={lab.name}
                    fill
                    className="object-cover"
                  />
                  {lab.category && (
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(lab.category)}`}>
                        <span className="mr-1">{getCategoryIcon(lab.category)}</span>
                        {lab.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                    {lab.name}
                  </h3>
                  {lab.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {lab.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm">
                      Capacity: {lab.capacity} students
                    </p>
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}