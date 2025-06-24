'use client';

import { useState, useCallback } from 'react';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (searchQuery) => {
    if (searchQuery.trim() === '') {
      setResults([]);
      setQuery('');
      setLoading(false);
      return;
    }
    
    setQuery(searchQuery);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/movies/search?q=${encodeURIComponent(searchQuery)}`);
      
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
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setError(null);
  }, []);

  return { query, results, loading, error, search, clearSearch };
}; 