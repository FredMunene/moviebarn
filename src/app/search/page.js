import React, { Suspense } from 'react';
import SearchPageContent from './SearchPageContent';
import Loading from '@/components/ui/Loading';

export const metadata = {
    title: 'Search - MovieBarn',
    description: 'Search for your favorite movies and TV shows.',
};

function SearchFallback() {
    return <Loading text="Loading search..." />;
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchPageContent />
    </Suspense>
  );
} 