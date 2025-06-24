import React from 'react';
import TrendingCarousel from '@/components/content/TrendingCarousel';
import HeroSearch from '@/components/search/HeroSearch';
import { tmdb } from '@/lib/api/tmdb';

async function getTrendingMovies() {
  try {
    const data = await tmdb.getTrendingMovies();
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch trending movies:", error);
    return [];
  }
}

async function getTrendingTVShows() {
  try {
    const data = await tmdb.getTrendingTVShows();
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch trending TV shows:", error);
    return [];
  }
}

export default async function HomePage() {
  const [trendingMovies, trendingTVShows] = await Promise.all([
    getTrendingMovies(),
    getTrendingTVShows(),
  ]);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Welcome to MovieBarn
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Discover your next favorite movie or TV show. Search from thousands of titles from TMDB and OMDB.
        </p>
        <div className="flex justify-center">
            <HeroSearch />
        </div>
      </section>

      {/* Trending Movies Section */}
      <section>
        <TrendingCarousel title="Popular Movies" items={trendingMovies} />
      </section>

      {/* Trending TV Shows Section */}
      <section>
        <TrendingCarousel title="Popular TV Shows" items={trendingTVShows} />
      </section>
    </div>
  );
}
