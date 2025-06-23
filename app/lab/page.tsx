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

  return (
    <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md">
      <div className="relative overflow-hidden">
        <Image
          src={lab.image}
          alt={lab.name}
          width={400}
          height={240}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge 
          className={`absolute top-3 left-3 ${getCategoryColor(lab.category)} font-medium`}
        >
          {lab.category}
        </Badge>
        <div className="absolute bottom-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
            <Users className="w-4 h-4 text-gray-700" />
            <span className="text-xs font-medium text-gray-700 ml-1">{lab.capacity}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {lab.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
          {lab.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{lab.location}</span>
          </div>
          
          <div className="flex items-start text-sm text-gray-500">
            <Wrench className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-medium">Key Equipment:</span>
              <div className="mt-1">
                {lab.equipment.slice(0, 3).map((item, index) => (
                  <Badge key={index} variant="outline" className="mr-1 mb-1 text-xs">
                    {item}
                  </Badge>
                ))}
                {lab.equipment.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{lab.equipment.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Button asChild className="w-full group/btn">
            <Link href={`/lab/${lab.id}`}>
              View Details
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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