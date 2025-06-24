import { NextResponse } from 'next/server';
import { tmdb } from '@/lib/api/tmdb';
import { omdb } from '@/lib/api/omdb';

export async function GET(request, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Movie ID is required' }, { status: 400 });
  }

  try {
    const tmdbDetails = await tmdb.getMovieDetails(id);

    let omdbDetails = null;
    if (tmdbDetails.imdb_id) {
      try {
        omdbDetails = await omdb.getOMDBDetails(tmdbDetails.imdb_id);
      } catch (omdbError) {
        // Log the error but don't fail the entire request
        console.error(`Failed to fetch OMDB details for imdb_id ${tmdbDetails.imdb_id}:`, omdbError);
      }
    }

    const combinedDetails = {
      ...tmdbDetails,
      omdb: omdbDetails,
    };

    return NextResponse.json(combinedDetails);
  } catch (error) {
    console.error(`Error fetching details for movie ${id}:`, error);
    const status = error.response?.status || 500;
    const message = error.response?.data?.status_message || 'Internal Server Error';
    return NextResponse.json({ error: message }, { status });
  }
} 