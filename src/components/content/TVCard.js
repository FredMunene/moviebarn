import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '../ui/Card';
import Rating from '../ui/Rating';
import { TMDB_IMAGE_BASE_URL, TMDB_POSTER_SIZE_W500, PLACEHOLDER_TV_POSTER } from '@/lib/utils/constants';

const TVCard = ({ tvShow, loading }) => {
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

  const { id, name, poster_path, first_air_date, vote_average } = tvShow;
  const posterUrl = poster_path
    ? `${TMDB_IMAGE_BASE_URL}${TMDB_POSTER_SIZE_W500}${poster_path}`
    : PLACEHOLDER_TV_POSTER;

  const firstAirYear = first_air_date ? new Date(first_air_date).getFullYear() : 'N/A';

  return (
    <Link href={`/tv/${id}`} passHref>
      <Card className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
        <div className="relative">
          <Image
            src={posterUrl}
            alt={name || 'TV show poster'}
            width={500}
            height={750}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg truncate" title={name}>{name}</h3>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span>{firstAirYear}</span>
            <Rating rating={vote_average} />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default TVCard; 