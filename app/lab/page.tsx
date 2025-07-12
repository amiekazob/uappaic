import React from 'react';
import Image from 'next/image';
import { labs } from '@/lib/lab-data';

export default function LabPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Laboratories
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {labs.map((lab) => (
            <div key={lab.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={lab.image}
                  alt={lab.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {lab.name}
                </h2>
                <p className="text-gray-600">
                  Capacity: {lab.capacity} students
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}