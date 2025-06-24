import React from 'react';
import MovieDetails from '@/components/details/MovieDetails';
import { notFound } from 'next/navigation';

async function getMovieData(id) {
  // Fetch from the absolute URL on the server
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/movies/${id}`, {
    cache: 'force-cache', // Cache data indefinitely
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    if (res.status === 404) {
      notFound();
    }
    throw new Error('Failed to fetch movie data');
  }

  return res.json();
}

// Generate dynamic metadata for the page
export async function generateMetadata({ params }) {
    const movie = await getMovieData(params.id).catch(() => null);
    if (!movie) {
        return {
            title: 'Movie Not Found',
        };
    }
    return {
        title: `${movie.title} - MovieBarn`,
        description: movie.overview,
    };
}


export default async function MoviePage({ params }) {
  const movie = await getMovieData(params.id);

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
} 