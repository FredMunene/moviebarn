'use client';

import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import TVCard from './TVCard';

const TrendingCarousel = ({ title, items, loading, itemsToShow = 10 }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  const isLoading = loading && (!items || items.length === 0);

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      {/* Scroll Buttons */}
      <div className="absolute top-1/2 -left-4 z-10 hidden md:block">
        <button onClick={() => scroll('left')} className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white">
          &larr;
        </button>
      </div>
      <div className="absolute top-1/2 -right-4 z-10 hidden md:block">
        <button onClick={() => scroll('right')} className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white">
          &rarr;
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
      >
        {isLoading &&
          Array.from({ length: itemsToShow }).map((_, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <MovieCard loading={true} />
            </div>
          ))}

        {!isLoading && items.map((item) => {
          const itemType = item.media_type || (item.title ? 'movie' : 'tv');
          
          if (itemType === 'movie') {
            return (
              <div key={`movie-${item.id}`} className="flex-shrink-0 w-64">
                <MovieCard movie={item} />
              </div>
            );
          }
          
          if (itemType === 'tv') {
            return (
              <div key={`tv-${item.id}`} className="flex-shrink-0 w-64">
                <TVCard tvShow={item} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default TrendingCarousel; 