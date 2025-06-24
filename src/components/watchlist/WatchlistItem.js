'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TMDB_IMAGE_BASE_URL, TMDB_POSTER_SIZE_W500, PLACEHOLDER_MOVIE_POSTER, PLACEHOLDER_TV_POSTER } from '@/lib/utils/constants';
import WatchlistButton from './WatchlistButton';
import Rating from '../ui/Rating';

const WatchlistItem = ({ item }) => {
  const isMovie = item.title ? true : false;
  const href = isMovie ? `/movie/${item.id}` : `/tv/${item.id}`;
  const title = item.title || item.name;
  const releaseDate = item.release_date || item.first_air_date;
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';

  const posterUrl = item.poster_path
    ? `${TMDB_IMAGE_BASE_URL}w500${item.poster_path}`
    : (isMovie ? PLACEHOLDER_MOVIE_POSTER : PLACEHOLDER_TV_POSTER);

  return (
    <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <Link href={href} passHref className="flex-shrink-0">
        <Image
          src={posterUrl}
          alt={title}
          width={100}
          height={150}
          className="object-cover"
        />
      </Link>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <Link href={href} passHref>
            <h3 className="font-bold text-lg hover:text-brand-600 transition-colors">{title} ({releaseYear})</h3>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{item.overview}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
            <Rating rating={item.vote_average} />
            <WatchlistButton item={item} />
        </div>
      </div>
    </div>
  );
};

export default WatchlistItem; 