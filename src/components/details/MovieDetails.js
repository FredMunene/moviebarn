import React from 'react';
import Image from 'next/image';
import { TMDB_IMAGE_BASE_URL, TMDB_POSTER_SIZE_W500, PLACEHOLDER_MOVIE_POSTER } from '@/lib/utils/constants';
import Rating from '../ui/Rating';
import { formatRuntime, formatCurrency } from '@/lib/utils/formatters';
import CastList from './CastList'; 
import WatchlistButton from '../watchlist/WatchlistButton';

const MovieDetails = ({ movie }) => {
  const {
    title,
    poster_path,
    overview,
    release_date,
    genres,
    runtime,
    vote_average,
    credits,
    omdb,
  } = movie;

  const posterUrl = poster_path
    ? `${TMDB_IMAGE_BASE_URL}${TMDB_POSTER_SIZE_W500}${poster_path}`
    : PLACEHOLDER_MOVIE_POSTER;

  const releaseYear = release_date ? new Date(release_date).getFullYear() : 'N/A';

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <Image
          src={posterUrl}
          alt={title || 'Movie poster'}
          width={500}
          height={750}
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="md:w-2/3">
        <h1 className="text-3xl md:text-4xl font-bold">{title} ({releaseYear})</h1>
        <div className="flex items-center space-x-4 mt-2 text-gray-600 dark:text-gray-400">
          <span>{formatRuntime(runtime)}</span>
          <span>|</span>
          <span>{genres.map(g => g.name).join(', ')}</span>
        </div>

        <div className="flex items-center my-4">
          <Rating rating={vote_average} maxRating={10} size="large" />
          <span className="ml-2 text-xl font-bold">{vote_average.toFixed(1)}/10</span>
        </div>
        
        <WatchlistButton item={movie} className="my-4" />

        <h2 className="text-2xl font-semibold mt-6 mb-2">Overview</h2>
        <p className="text-lg">{overview}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-bold">Box Office</h3>
            <p>{omdb?.BoxOffice ? formatCurrency(parseInt(omdb.BoxOffice.replace(/\\$|,/g, ''))) : 'N/A'}</p>
          </div>
          <div>
            <h3 className="font-bold">Director</h3>
            <p>{omdb?.Director || 'N/A'}</p>
          </div>
        </div>
        
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

export default MovieDetails; 