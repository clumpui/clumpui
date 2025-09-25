'use client'

import { getAllAuthors, getComponentsByAuthor } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye, Download } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { components } from '@/constant/renderers';

const ProfilesPage = () => {
  const authors = getAllAuthors();

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Component Authors
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover amazing UI components created by talented developers and designers from around the world.
        </p>
      </div>

      {/* Authors Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {authors.map((author, index) => (
          <AuthorCard key={author.slug} author={author} />
        ))}
      </div>
    </div>
  );
};

interface AuthorCardProps {
  author: {
    authorName: string;
    website: string;
    avatar: string;
    slug: string;
    componentCount: number;
  };
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  const authorComponents = getComponentsByAuthor(author.authorName);

  const getFeaturedComponents = () => {
    return authorComponents.slice(0, 2).map(component => ({
      name: component.title
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      path: component.title,
      description: `${author.authorName} component`,
      views: Math.floor(Math.random() * 50000) + 10000
    }));
  };

  const featuredComponents = getFeaturedComponents();

  return (
    <Link href={`/profile/${author.slug}`} suppressHydrationWarning>
      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg border hover:border-primary/20 bg-gradient-to-br from-background to-muted/20">
        <CardHeader className="pb-4">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 ring-2 ring-background">
              <AvatarImage
                src={`https://api.microlink.io/?url=${author.website}&embed=logo.url`}
                alt={author.authorName}
              />
              <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                {author.avatar}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <CardTitle className="flex gap-2 text-lg group-hover:text-primary transition-colors truncate">
                {author.authorName}
                <Link
                  href={author.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </Link>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Building beautiful components
              </p>
            </div>
          </div>

          {/* Stats */}

          <div className="flex items-center justify-between pt-2">
            <Badge variant="secondary" className="text-xs">
              {author.componentCount} Component{author.componentCount !== 1 ? 's' : ''}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Featured Components Preview */}
          <div className="grid grid-cols-2 gap-2">
            {featuredComponents.map((component, idx) => {
              const [src, setSrc] = useState(`/media/${component.path}.png`);
              return (
                <div
                  key={idx}
                  className="relative aspect-video bg-gradient-to-br from-muted to-muted/60 rounded-lg overflow-hidden border group-hover:shadow-sm transition-shadow"
                >
                  <div className="bg-cover bg-center inset-0"
                  />
                  <img
                    src={src}
                    loading='lazy'
                    onError={() => setSrc(`https://placehold.co/190x108?text=${component.name}`)}
                    alt=""
                    className='object-cover size-full'
                  />
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProfilesPage;
