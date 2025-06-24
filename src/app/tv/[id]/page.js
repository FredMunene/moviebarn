import React from 'react';
import TVDetails from '@/components/details/TVDetails';
import { notFound } from 'next/navigation';
import BackButton from '@/components/common/BackButton';
import { TMDB_IMAGE_BASE_URL } from '@/lib/utils/constants';

async function getTVData(id) {
  // Fetch from the absolute URL on the server
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/tv/${id}`, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error('Failed to fetch TV show data');
  }

  return res.json();
}

export async function generateMetadata({ params }) {
    const tvShow = await getTVData(params.id).catch(() => null);
    if (!tvShow) {
        return {
            title: 'TV Show Not Found',
        };
    }
    return {
        title: `${tvShow.name} - MovieBarn`,
        description: tvShow.overview,
        openGraph: {
            title: `${tvShow.name} - MovieBarn`,
            description: tvShow.overview,
            images: [
                {
                    url: tvShow.poster_path ? `${TMDB_IMAGE_BASE_URL}w500${tvShow.poster_path}` : '/images/og-image.svg',
                }
            ]
        }
    };
}

export default async function TVPage({ params }) {
  const tvShow = await getTVData(params.id);

  return (
    <div>
      <BackButton />
      <TVDetails tvShow={tvShow} />
    </div>
  );
} 