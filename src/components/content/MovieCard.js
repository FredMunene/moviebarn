import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '../ui/Card';
import Rating from '../ui/Rating';
import { TMDB_IMAGE_BASE_URL, TMDB_POSTER_SIZE_W500, PLACEHOLDER_MOVIE_POSTER } from '@/lib/utils/constants';

const MovieCard = ({ movie, loading }) => {
  if (loading) {
    return (
      <Card className="animate-pulse">
        <div className="bg-gray-300 dark:bg-gray-700 h-64 w-full"></div>
        <div className="p-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </Card>
    );
  }

  const { id, title, poster_path, release_date, vote_average } = movie;
  const posterUrl = poster_path
    ? `${TMDB_IMAGE_BASE_URL}${TMDB_POSTER_SIZE_W500}${poster_path}`
    : PLACEHOLDER_MOVIE_POSTER;
  
  const releaseYear = release_date ? new Date(release_date).getFullYear() : 'N/A';

  return (
    <Link href={`/movie/${id}`} passHref>
      <Card className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
        <div className="relative">
          <Image
            src={posterUrl}
            alt={title || 'Movie poster'}
            width={500}
            height={750}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg truncate" title={title}>{title}</h3>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span>{releaseYear}</span>
            <Rating rating={vote_average} />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default MovieCard; 