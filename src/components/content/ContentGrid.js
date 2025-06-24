import React from 'react';
import MovieCard from './MovieCard';
import TVCard from './TVCard';

const ContentGrid = ({ items, loading, itemsToShow = 10 }) => {
  const isLoading = loading && (!items || items.length === 0);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: itemsToShow }).map((_, index) => (
          // Assuming MovieCard skeleton is generic enough
          <MovieCard key={index} loading={true} />
        ))}
      </div>
    );
  }

  if (!items || items.length === 0) {
    return null; // Or a "no content" message if preferred
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {items.map((item) => {
        const itemType = item.media_type || (item.title ? 'movie' : 'tv');
        
        if (itemType === 'movie') {
          return <MovieCard key={`movie-${item.id}`} movie={item} />;
        } else if (itemType === 'tv') {
          return <TVCard key={`tv-${item.id}`} tvShow={item} />;
        }
        return null;
      })}
    </div>
  );
};

export default ContentGrid; 