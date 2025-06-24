'use client';

import { useState, useCallback } from 'react';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (searchQuery) => {
    const isNewSearch = searchQuery.trim() !== query;
    const isClearing = searchQuery.trim() === '';
    
    setQuery(searchQuery.trim());
    setLoading(true);
    setError(null);
    
    let endpoint = `/api/movies/search?q=${encodeURIComponent(searchQuery.trim())}`;
    if (isClearing) {
      endpoint = `/api/movies/trending`;
    }

    try {
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setResults(data.results || []);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const clearSearch = useCallback(() => {
    // Now, clearing the search will trigger a fetch for popular movies
    search('');
  }, [search]);

  return { query, results, loading, error, search, clearSearch };
}; 