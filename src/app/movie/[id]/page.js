import React from 'react';
import MovieDetails from '@/components/details/MovieDetails';
import { notFound } from 'next/navigation';
import BackButton from '@/components/common/BackButton';
import { tmdb } from '@/lib/api/tmdb';
import { omdb } from '@/lib/api/omdb';
import { TMDB_IMAGE_BASE_URL } from '@/lib/utils/constants';

async function getMovieData(id) {
  try {
    const tmdbDetails = await tmdb.getMovieDetails(id);
    let omdbDetails = null;
    if (tmdbDetails.imdb_id) {
        omdbDetails = await omdb.getOMDBDetails(tmdbDetails.imdb_id);
    }
    return { ...tmdbDetails, omdb: omdbDetails };
  } catch (error) {
    if (error.response?.status === 404) {
      notFound();
    }
    // Log other errors but don't rethrow, to avoid breaking the build
    console.error(`Failed to fetch data for movie ${id}:`, error);
    // Returning null will be handled by the page component
    return null;
  }
}

// Generate dynamic metadata for the page
export async function generateMetadata(props) {
    const id = props.params.id;
    if (!id) {
        return { title: 'Movie Not Found' };
    }
    const movie = await getMovieData(id).catch(() => null);
    if (!movie) {
        return {
            title: 'Movie Not Found',
        };
    }
    return {
        title: `${movie.title} - MovieBarn`,
        description: movie.overview,
        openGraph: {
            title: `${movie.title} - MovieBarn`,
            description: movie.overview,
            images: [
                {
                    url: movie.poster_path ? `${TMDB_IMAGE_BASE_URL}w500${movie.poster_path}` : '/images/og-image.svg',
                }
            ]
        }
    };
}


export default async function MoviePage(props) {
  const id = props.params.id;
  const movie = await getMovieData(id);

  if (!movie) {
    notFound();
  }

  return (
    <div>
      <BackButton />
      <MovieDetails movie={movie} />
    </div>
  );
} 