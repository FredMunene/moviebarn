'use client';

import React from 'react';
import Loading from '../ui/Loading';
// import MovieCard from '../content/MovieCard';
import Card from '../ui/Card';

const SearchResults = ({ results, loading, error, query }) => {
  if (loading) {
    return <Loading text="Finding results..." />;
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  if (!query) {
    return <p className="text-gray-500 text-center">Start by searching for a movie or TV show.</p>
  }

  if (results.length === 0 && query) {
    return <p className="text-gray-500 text-center">No results found for "{query}".</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {results.map((item) => (
        // Replace with MovieCard/TVCard once created
        <Card key={item.id} header={item.title || item.name}>
            <p>Release Date: {item.release_date || item.first_air_date}</p>
            <p>Rating: {item.vote_average.toFixed(1)} / 10</p>
        </Card>
      ))}
    </div>
  );
};

export default SearchResults; 