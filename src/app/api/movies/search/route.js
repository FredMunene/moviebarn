import { NextResponse } from 'next/server';
import { tmdb } from '@/lib/api/tmdb';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
  }

  try {
    const data = await tmdb.searchMovies(query);
    return NextResponse.json(data);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 });
  }
} 