'use client';

import React, { useState, useEffect } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const SearchBar = ({ onSearch, initialQuery = '', isLoading = false }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (query !== initialQuery) {
        onSearch(query);
      }
    }, 500); 

    return () => {
      clearTimeout(timerId);
    };
  }, [query, onSearch, initialQuery]);


  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Search for movies or TV shows..."
          value={query}
          onChange={handleInputChange}
          className="w-full"
          disabled={isLoading}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-800"
            aria-label="Clear search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </div>
      <Button type="submit" variant="primary" disabled={isLoading || !query.trim()}>
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </form>
  );
};

export default SearchBar; 