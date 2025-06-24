'use client';

import React from 'react';
import Loading from '../ui/Loading';
import ContentGrid from '../content/ContentGrid';
import NoResults from '../common/NoResults';

const SearchResults = ({ results, loading, error, query }) => {
  if (loading && (!results || results.length === 0)) {
    return <ContentGrid loading={true} />;
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  if (!query) {
    return <p className="text-gray-500 text-center">Start by searching for a movie or TV show.</p>
  }

  if (results.length === 0 && query) {
    return <NoResults searchQuery={query} />;
  }

  return <ContentGrid items={results} loading={loading} />;
};

export default SearchResults; 