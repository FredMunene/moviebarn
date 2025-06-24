import { NextResponse } from 'next/server';
import { tmdb } from '@/lib/api/tmdb';

export async function GET() {
  try {
    const trendingMovies = await tmdb.getTrendingMovies();
    return NextResponse.json(trendingMovies);
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    const status = error.response?.status || 500;
    const message = error.response?.data?.status_message || 'Internal Server Error';
    return NextResponse.json({ error: message }, { status });
  }
} 