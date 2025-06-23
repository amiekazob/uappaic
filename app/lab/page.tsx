'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { labs, Lab } from '@/lib/lab-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, MapPin, Wrench, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

const LabCard = ({ lab }: { lab: Lab }) => {
  const getCategoryColor = (category: Lab['category']) => {
    switch (category) {
      case 'Electronics':
        return 'bg-blue-600 text-white';
      case 'Power':
        return 'bg-green-600 text-white';
      case 'Communications':
        return 'bg-purple-600 text-white';
      case 'Control':
        return 'bg-orange-600 text-white';
      case 'Computer':
        return 'bg-indigo-600 text-white';
      case 'Research':
        return 'bg-pink-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <Link href={`/lab/${lab.id}`} className="group block">
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg rounded-xl">
        <div className="relative overflow-hidden h-80">
          <Image
            src={lab.image}
            alt={lab.name}
            width={400}
            height={256}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={`${getCategoryColor(lab.category)} font-medium text-xs px-3 py-1 rounded-full`}>
              {lab.category.toUpperCase()}
            </Badge>
          </div>
          
          {/* Date Badge - Using a mock date for demonstration */}
          <div className="absolute top-4 right-4">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-white text-xs font-medium">Est. 2020</span>
            </div>
          </div>
          
          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-lg font-bold mb-1 leading-tight">
              {lab.name}
            </h3>
            <p className="text-gray-200 text-xs line-clamp-1 mb-2">
              {lab.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-300 text-xs">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{lab.location}</span>
              </div>
              <div className="flex items-center text-gray-300 text-xs">
                <Users className="w-3 h-3 mr-1" />
                <span>{lab.capacity}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: {
  categories: Lab['category'][];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Electronics':
        return 'hover:bg-blue-50 hover:text-blue-700 data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-800';
      case 'Power':
        return 'hover:bg-green-50 hover:text-green-700 data-[selected=true]:bg-green-100 data-[selected=true]:text-green-800';
      case 'Communications':
        return 'hover:bg-purple-50 hover:text-purple-700 data-[selected=true]:bg-purple-100 data-[selected=true]:text-purple-800';
      case 'Control':
        return 'hover:bg-orange-50 hover:text-orange-700 data-[selected=true]:bg-orange-100 data-[selected=true]:text-orange-800';
      case 'Computer':
        return 'hover:bg-indigo-50 hover:text-indigo-700 data-[selected=true]:bg-indigo-100 data-[selected=true]:text-indigo-800';
      case 'Research':
        return 'hover:bg-pink-50 hover:text-pink-700 data-[selected=true]:bg-pink-100 data-[selected=true]:text-pink-800';
      default:
        return 'hover:bg-gray-50 hover:text-gray-700 data-[selected=true]:bg-gray-100 data-[selected=true]:text-gray-800';
    }
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onCategoryChange('All')}
        data-selected={selectedCategory === 'All'}
        className={`transition-colors ${
          selectedCategory === 'All' 
            ? 'bg-gray-100 text-gray-800 border-gray-300' 
            : 'hover:bg-gray-50'
        }`}
      >
        All Labs
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          size="sm"
          onClick={() => onCategoryChange(category)}
          data-selected={selectedCategory === category}
          className={`transition-colors ${getCategoryColor(category)}`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default function LabPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  
  const categories = Array.from(new Set(labs.map(lab => lab.category)));
  
  const filteredLabs = selectedCategory === 'All' 
    ? labs 
    : labs.filter(lab => lab.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fadeIn" className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Laboratories
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore our state-of-the-art facilities equipped with cutting-edge technology for hands-on learning and innovative research
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold text-blue-200">19</span>
                <span className="ml-2">Modern Labs</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold text-blue-200">6</span>
                <span className="ml-2">Specializations</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-semibold text-blue-200">400+</span>
                <span className="ml-2">Student Capacity</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection animation="slideUp" delay={0.2}>
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLabs.map((lab, index) => (
              <div key={lab.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <LabCard lab={lab} />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {filteredLabs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No laboratories found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
}