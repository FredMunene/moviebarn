'use client';

import React from 'react';
import ContentGrid from '../content/ContentGrid';
import NoResults from '../common/NoResults';

const SearchResults = ({ results, loading, error, query }) => {
  const isLoading = loading && (!results || results.length === 0);

  if (isLoading) {
    return <ContentGrid loading={true} />;
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  if (results.length === 0) {
      if (query) {
        return <NoResults searchQuery={query} />;
      }
      return <p className="text-gray-500 text-center">Start by searching for a movie or TV show.</p>
  }

  const gridTitle = query ? `Results for "${query}"` : "Popular Movies";

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">{gridTitle}</h2>
        <ContentGrid items={results} loading={loading} />
    </div>
  );
};

export default SearchResults; 