'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { 
  Calendar, 
  Camera, 
  Video, 
  Search, 
  Filter, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Download,
  Share2,
  Heart,
  Eye
} from 'lucide-react';

// Types
interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  eventType: string;
  year: number;
  date: string;
  description: string;
  tags: string[];
  likes: number;
  views: number;
}

interface Album {
  id: string;
  title: string;
  eventType: string;
  year: number;
  date: string;
  coverImage: string;
  itemCount: number;
  items: GalleryItem[];
  description: string;
}

// Sample data
const sampleAlbums: Album[] = [
  {
    id: '1',
    title: 'Annual Tech Fest 2024',
    eventType: 'Festival',
    year: 2024,
    date: '2024-12-15',
    coverImage: '/images/campus life/clubs/programming-ai-club.jpg',
    itemCount: 45,
    description: 'Highlights from our biggest tech event of the year',
    items: [
      {
        id: '1-1',
        title: 'Opening Ceremony',
        type: 'image',
        url: '/images/campus life/clubs/programming-ai-club.jpg',
        thumbnail: '/images/campus life/clubs/programming-ai-club.jpg',
        eventType: 'Festival',
        year: 2024,
        date: '2024-12-15',
        description: 'Grand opening of Tech Fest 2024',
        tags: ['opening', 'ceremony', 'tech-fest'],
        likes: 124,
        views: 1250
      },
      {
        id: '1-2',
        title: 'Tech Fest Highlights',
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/images/hero/1.jpg',
        eventType: 'Festival',
        year: 2024,
        date: '2024-12-15',
        description: 'Complete highlights of the tech fest',
        tags: ['highlights', 'video', 'tech-fest'],
        likes: 89,
        views: 890
      }
    ]
  },
  {
    id: '2',
    title: 'Programming Contest 2024',
    eventType: 'Competition',
    year: 2024,
    date: '2024-11-20',
    coverImage: '/images/news/kuet_contest_2025/1.jpg',
    itemCount: 32,
    description: 'Inter-university programming competition moments',
    items: [
      {
        id: '2-1',
        title: 'Contest Arena',
        type: 'image',
        url: '/images/news/kuet_contest_2025/2.jpg',
        thumbnail: '/images/news/kuet_contest_2025/2.jpg',
        eventType: 'Competition',
        year: 2024,
        date: '2024-11-20',
        description: 'Programming contest in action',
        tags: ['programming', 'contest', 'competition'],
        likes: 67,
        views: 543
      }
    ]
  },
  {
    id: '3',
    title: 'AI Workshop Series',
    eventType: 'Workshop',
    year: 2024,
    date: '2024-10-10',
    coverImage: '/images/lab/computer-programming-lab.jpg',
    itemCount: 28,
    description: 'Machine learning and AI workshop sessions',
    items: [
      {
        id: '3-1',
        title: 'AI Workshop Session 1',
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/images/lab/matlab-lab.jpg',
        eventType: 'Workshop',
        year: 2024,
        date: '2024-10-10',
        description: 'Introduction to Machine Learning',
        tags: ['ai', 'workshop', 'machine-learning'],
        likes: 156,
        views: 2100
      }
    ]
  },
  {
    id: '4',
    title: 'Graduation Ceremony 2024',
    eventType: 'Ceremony',
    year: 2024,
    date: '2024-09-25',
    coverImage: '/images/hero/2.jpg',
    itemCount: 67,
    description: 'Celebrating our graduates achievements',
    items: [
      {
        id: '4-1',
        title: 'Graduation Day',
        type: 'image',
        url: '/images/our-achievements/department-ieb-accreditation/1.jpg',
        thumbnail: '/images/our-achievements/department-ieb-accreditation/1.jpg',
        eventType: 'Ceremony',
        year: 2024,
        date: '2024-09-25',
        description: 'Proud graduates receiving their degrees',
        tags: ['graduation', 'ceremony', 'achievement'],
        likes: 234,
        views: 3400
      }
    ]
  },
  {
    id: '5',
    title: 'Robotics Exhibition 2023',
    eventType: 'Exhibition',
    year: 2023,
    date: '2023-12-08',
    coverImage: '/images/our-achievements/robo-soccer-2019/1.jpg',
    itemCount: 41,
    description: 'Student robotics projects showcase',
    items: [
      {
        id: '5-1',
        title: 'Robot Demonstrations',
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/images/lab/control-systems-labs.jpg',
        eventType: 'Exhibition',
        year: 2023,
        date: '2023-12-08',
        description: 'Amazing robot demonstrations by students',
        tags: ['robotics', 'exhibition', 'innovation'],
        likes: 178,
        views: 1890
      }
    ]
  },
  {
    id: '6',
    title: 'Industry Visit 2023',
    eventType: 'Visit',
    year: 2023,
    date: '2023-08-15',
    coverImage: '/images/news/elliotganj_visit_2025/1.jpg',
    itemCount: 23,
    description: 'Educational visit to tech companies',
    items: [
      {
        id: '6-1',
        title: 'Company Tour',
        type: 'image',
        url: '/images/news/elliotganj_visit_2025/2.jpg',
        thumbnail: '/images/news/elliotganj_visit_2025/2.jpg',
        eventType: 'Visit',
        year: 2023,
        date: '2023-08-15',
        description: 'Students exploring industry facilities',
        tags: ['industry', 'visit', 'learning'],
        likes: 92,
        views: 756
      }
    ]
  }
];

const eventTypes = ['All', 'Festival', 'Competition', 'Workshop', 'Ceremony', 'Exhibition', 'Visit'];
const years = [2024, 2023, 2022, 2021];

// Lightbox Component
const Lightbox: React.FC<{
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ item, onClose, onNext, onPrev }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Content */}
        <div className="max-w-4xl max-h-full flex flex-col items-center">
          {item.type === 'image' ? (
            <img
              src={item.url}
              alt={item.title}
              className="max-w-full max-h-[80vh] object-contain"
            />
          ) : (
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                src={item.url}
                title={item.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          )}

          {/* Info */}
          <div className="mt-4 text-center text-white max-w-2xl">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{item.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{item.views}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="hover:text-gray-300">
                  <Download className="w-4 h-4" />
                </button>
                <button className="hover:text-gray-300">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Album Card Component
const AlbumCard: React.FC<{
  album: Album;
  onClick: () => void;
}> = ({ album, onClick }) => {
  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={album.coverImage}
          alt={album.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
          {album.itemCount} items
        </div>
        <Badge className="absolute top-2 left-2 bg-blue-600 hover:bg-blue-700">
          {album.eventType}
        </Badge>
      </div>
      <CardContent className="p-4" onClick={onClick}>
        <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {album.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{album.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(album.date).toLocaleDateString()}</span>
          </div>
          <span className="font-medium">{album.year}</span>
        </div>
      </CardContent>
    </Card>
  );
};

// Gallery Grid Component
const GalleryGrid: React.FC<{
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}> = ({ items, onItemClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          onClick={() => onItemClick(item)}
        >
          <div className="relative overflow-hidden">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/70 rounded-full p-3 group-hover:bg-blue-600 transition-colors">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </div>
            )}
            <div className="absolute top-2 right-2">
              {item.type === 'video' ? (
                <Video className="w-5 h-5 text-white" />
              ) : (
                <Camera className="w-5 h-5 text-white" />
              )}
            </div>
          </div>
          <div className="p-3">
            <h4 className="font-medium text-sm mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h4>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                  <span>{item.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{item.views}</span>
                </div>
              </div>
              <span>{new Date(item.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Gallery Page
const GalleryPage: React.FC = () => {
  const [view, setView] = useState<'albums' | 'grid'>('albums');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [filteredAlbums, setFilteredAlbums] = useState<Album[]>(sampleAlbums);
  const [allItems, setAllItems] = useState<GalleryItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEventType, setSelectedEventType] = useState('All');
  const [selectedYear, setSelectedYear] = useState<number | 'All'>('All');

  // Initialize all items
  useEffect(() => {
    const items = sampleAlbums.flatMap(album => album.items);
    setAllItems(items);
    setFilteredItems(items);
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = view === 'albums' ? sampleAlbums : allItems;

    // Filter by event type
    if (selectedEventType !== 'All') {
      filtered = filtered.filter(item => item.eventType === selectedEventType);
    }

    // Filter by year
    if (selectedYear !== 'All') {
      filtered = filtered.filter(item => item.year === selectedYear);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (view === 'grid' && (item as GalleryItem).tags?.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      );
    }

    if (view === 'albums') {
      setFilteredAlbums(filtered as Album[]);
    } else {
      setFilteredItems(filtered as GalleryItem[]);
    }
  }, [view, selectedEventType, selectedYear, searchTerm, allItems]);

  const openLightbox = (item: GalleryItem) => {
    const items = selectedAlbum ? selectedAlbum.items : filteredItems;
    const index = items.findIndex(i => i.id === item.id);
    setLightboxIndex(index);
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  const nextLightboxItem = () => {
    const items = selectedAlbum ? selectedAlbum.items : filteredItems;
    const nextIndex = (lightboxIndex + 1) % items.length;
    setLightboxIndex(nextIndex);
    setLightboxItem(items[nextIndex]);
  };

  const prevLightboxItem = () => {
    const items = selectedAlbum ? selectedAlbum.items : filteredItems;
    const prevIndex = lightboxIndex === 0 ? items.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
    setLightboxItem(items[prevIndex]);
  };

  const handleAlbumClick = (album: Album) => {
    setSelectedAlbum(album);
    setView('grid');
    setFilteredItems(album.items);
  };

  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
    setView('albums');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Capturing moments, preserving memories from our journey in technology and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Camera className="w-4 h-4 inline mr-2" />
                {sampleAlbums.reduce((acc, album) => acc + album.itemCount, 0)} Photos
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Video className="w-4 h-4 inline mr-2" />
                {allItems.filter(item => item.type === 'video').length} Videos
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                {sampleAlbums.length} Albums
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              {selectedAlbum && (
                <Button
                  variant="outline"
                  onClick={handleBackToAlbums}
                  className="mr-4"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to Albums
                </Button>
              )}
              {!selectedAlbum && (
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setView('albums')}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      view === 'albums'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    Albums
                  </button>
                  <button
                    onClick={() => setView('grid')}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      view === 'grid'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    All Media
                  </button>
                </div>
              )}
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search gallery..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              <select
                value={selectedEventType}
                onChange={(e) => setSelectedEventType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'All' ? 'All' : parseInt(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content */}
        {selectedAlbum ? (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedAlbum.title}</h2>
              <p className="text-gray-600 mb-4">{selectedAlbum.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <Badge variant="secondary">{selectedAlbum.eventType}</Badge>
                <span>{new Date(selectedAlbum.date).toLocaleDateString()}</span>
                <span>{selectedAlbum.itemCount} items</span>
              </div>
            </div>
            <GalleryGrid items={selectedAlbum.items} onItemClick={openLightbox} />
          </div>
        ) : view === 'albums' ? (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Event Albums</h2>
              <p className="text-gray-600">Browse our collection of memorable events and activities</p>
            </div>
            {filteredAlbums.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAlbums.map((album) => (
                  <AlbumCard
                    key={album.id}
                    album={album}
                    onClick={() => handleAlbumClick(album)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No albums found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">All Media</h2>
              <p className="text-gray-600">Browse all photos and videos from our events</p>
            </div>
            {filteredItems.length > 0 ? (
              <GalleryGrid items={filteredItems} onItemClick={openLightbox} />
            ) : (
              <div className="text-center py-12">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No media found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        item={lightboxItem}
        onClose={closeLightbox}
        onNext={nextLightboxItem}
        onPrev={prevLightboxItem}
      />
    </div>
  );
};

export default GalleryPage;