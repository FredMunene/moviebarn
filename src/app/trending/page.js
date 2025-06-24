import React from 'react';
import TrendingGrid from '@/components/content/TrendingGrid';

async function getTrendingMovies() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/movies/trending`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch trending movies:", error);
    return [];
  }
}

async function getTrendingTVShows() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/tv/trending`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch trending TV shows:", error);
    return [];
  }
}

export const metadata = {
    title: 'Trending - MovieBarn',
    description: 'Discover the most popular movies and TV shows of the moment.',
};

export default async function TrendingPage() {
    const [trendingMovies, trendingTVShows] = await Promise.all([
        getTrendingMovies(),
        getTrendingTVShows(),
    ]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Trending Now</h1>
      <TrendingGrid initialMovies={trendingMovies} initialTvShows={trendingTVShows} />
    </div>
  );
} 