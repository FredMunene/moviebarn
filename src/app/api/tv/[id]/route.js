import { NextResponse } from 'next/server';
import { tmdb } from '@/lib/api/tmdb';

export async function GET(request, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'TV show ID is required' }, { status: 400 });
  }

  try {
    const tvShowDetails = await tmdb.getTVShowDetails(id);
    return NextResponse.json(tvShowDetails);
  } catch (error) {
    console.error(`Error fetching details for TV show ${id}:`, error);
    const status = error.response?.status || 500;
    const message = error.response?.data?.status_message || 'Internal Server Error';
    return NextResponse.json({ error: message }, { status });
  }
} 