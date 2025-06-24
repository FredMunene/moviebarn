import React from 'react';
import TVDetails from '@/components/details/TVDetails';
import { notFound } from 'next/navigation';

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
    };
}

export default async function TVPage({ params }) {
  const tvShow = await getTVData(params.id);

  return (
    <div>
      <TVDetails tvShow={tvShow} />
    </div>
  );
} 