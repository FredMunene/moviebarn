import React from 'react';
import TVDetails from '@/components/details/TVDetails';
import { notFound } from 'next/navigation';
import BackButton from '@/components/common/BackButton';
import { TMDB_IMAGE_BASE_URL } from '@/lib/utils/constants';
import { tmdb } from '@/lib/api/tmdb';

async function getTVData(id) {
    try {
        const tvShowDetails = await tmdb.getTVShowDetails(id);
        return tvShowDetails;
    } catch (error) {
        if (error.response?.status === 404) {
            notFound();
        }
        console.error(`Failed to fetch data for TV show ${id}:`, error);
        return null;
    }
}

export async function generateMetadata(props) {
    const id = props.params.id;
    if (!id) {
        return { title: 'TV Show Not Found' };
    }
    const tvShow = await getTVData(id).catch(() => null);
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

export default async function TVPage(props) {
  const id = props.params.id;
  const tvShow = await getTVData(id);

  if (!tvShow) {
    notFound();
  }

  return (
    <div>
      <BackButton />
      <TVDetails tvShow={tvShow} />
    </div>
  );
} 