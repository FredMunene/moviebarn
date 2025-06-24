import React from 'react';
import Image from 'next/image';
import { TMDB_IMAGE_BASE_URL, TMDB_POSTER_SIZE_W500, PLACEHOLDER_TV_POSTER } from '@/lib/utils/constants';
import Rating from '../ui/Rating';
import CastList from './CastList';
import WatchlistButton from '../watchlist/WatchlistButton';

const TVDetails = ({ tvShow }) => {
  const {
    name,
    poster_path,
    overview,
    first_air_date,
    genres,
    vote_average,
    number_of_seasons,
    number_of_episodes,
    credits,
  } = tvShow;

  const posterUrl = poster_path
    ? `${TMDB_IMAGE_BASE_URL}${TMDB_POSTER_SIZE_W500}${poster_path}`
    : PLACEHOLDER_TV_POSTER;

  const firstAirYear = first_air_date ? new Date(first_air_date).getFullYear() : 'N/A';

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <Image
          src={posterUrl}
          alt={name || 'TV Show poster'}
          width={500}
          height={750}
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="md:w-2/3">
        <h1 className="text-3xl md:text-4xl font-bold">{name} ({firstAirYear})</h1>
        <div className="flex items-center space-x-4 mt-2 text-gray-600 dark:text-gray-400">
          <span>{number_of_seasons} Season{number_of_seasons > 1 ? 's' : ''}</span>
          <span>|</span>
          <span>{number_of_episodes} Episodes</span>
          <span>|</span>
          <span>{genres.map(g => g.name).join(', ')}</span>
        </div>

        <div className="flex items-center my-4">
          <Rating rating={vote_average} maxRating={10} size="large" />
          <span className="ml-2 text-xl font-bold">{vote_average.toFixed(1)}/10</span>
        </div>

        <WatchlistButton item={tvShow} className="my-4" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">Overview</h2>
        <p className="text-lg">{overview}</p>

        {credits?.cast && credits.cast.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Top Billed Cast</h2>
            <CastList cast={credits.cast} />
          </>
        )}
      </div>
    </div>
  );
};

export default TVDetails; 