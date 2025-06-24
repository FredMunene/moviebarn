import { NextResponse } from 'next/server';
import { tmdb } from '@/lib/api/tmdb';

export async function GET() {
  try {
    const trendingTVShows = await tmdb.getTrendingTVShows();
    return NextResponse.json(trendingTVShows);
  } catch (error) {
    console.error('Error fetching trending TV shows:', error);
    const status = error.response?.status || 500;
    const message = error.response?.data?.status_message || 'Internal Server Error';
    return NextResponse.json({ error: message }, { status });
  }
} 