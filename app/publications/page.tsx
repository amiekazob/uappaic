import Link from 'next/link';
import { publications, Publication } from '@/lib/publications-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Users, Calendar, ExternalLink } from 'lucide-react';

const PublicationCard = ({ publication }: { publication: Publication }) => {
    const publicationDate = new Date(publication.publicationDate);
    const formattedDate = publicationDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

  return (
    <Card className="flex flex-col h-full rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold leading-snug text-gray-900">
            <Link href={publication.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700 transition-colors">
                {publication.title}
            </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-6 pt-0">
        <div className="space-y-3 text-sm text-gray-500 mb-4">
            <p className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-indigo-500" /> 
                {publication.authors.join(', ')}
            </p>
            <p className="flex items-center">
                <Book className="w-4 h-4 mr-2 text-indigo-500" /> 
                <em>{publication.journal}</em>
            </p>
            <p className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-indigo-500" /> 
                {formattedDate}
            </p>
        </div>
        <p className="text-gray-600 text-sm flex-grow mb-4">{publication.abstract}</p>
        <div className="mt-auto flex justify-between items-center">
            <Link href={publication.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline text-sm font-semibold flex items-center">
                View Publication <ExternalLink className="w-4 h-4 ml-1.5" />
            </Link>
            <Badge variant="secondary">{publication.doi}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default function PublicationsPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Publications</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the cutting-edge research and scholarly articles published by our esteemed faculty and students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map(pub => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      </div>
    </div>
  );
} 