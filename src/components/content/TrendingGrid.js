'use client';

import React, { useState, useMemo } from 'react';
import ContentGrid from './ContentGrid';
import Button from '../ui/Button';

const TrendingGrid = ({ initialMovies, initialTvShows }) => {
  const [filter, setFilter] = useState('all'); // 'all', 'movie', 'tv'

  const items = useMemo(() => {
    const movies = initialMovies.map(item => ({ ...item, media_type: 'movie' }));
    const tvShows = initialTvShows.map(item => ({ ...item, media_type: 'tv' }));
    
    switch (filter) {
      case 'movie':
        return movies;
      case 'tv':
        return tvShows;
      case 'all':
      default:
        // Simple merge, could be improved with sorting by popularity if available
        return [...movies, ...tvShows].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }
  }, [filter, initialMovies, initialTvShows]);

  const FilterButton = ({ type, label }) => (
    <Button
      onClick={() => setFilter(type)}
      variant={filter === type ? 'primary' : 'ghost'}
    >
      {label}
    </Button>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-center space-x-2">
        <FilterButton type="all" label="All" />
        <FilterButton type="movie" label="Movies" />
        <FilterButton type="tv" label="TV Shows" />
      </div>
      <ContentGrid items={items} />
    </div>
  );
};

export default TrendingGrid; 