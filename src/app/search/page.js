'use client';

import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchBar from '@/components/search/SearchBar';
import SearchResults from '@/components/search/SearchResults';
import { useSearch } from '@/lib/hooks/useSearch';

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const { query, results, loading, error, search, clearSearch } = useSearch();

  useEffect(() => {
    if (initialQuery) {
      search(initialQuery);
    }
  }, []); 

  const handleSearch = (searchQuery) => {
    search(searchQuery);
    const params = new URLSearchParams(window.location.search);
    if (searchQuery.trim()) {
      params.set('q', searchQuery);
      router.push(`/search?${params.toString()}`);
    } else {
      params.delete('q');
      router.push('/search');
      clearSearch();
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Search</h1>
      <SearchBar onSearch={handleSearch} initialQuery={query || initialQuery} isLoading={loading} />
      <SearchResults results={results} loading={loading} error={error} query={query} />
    </div>
  );
} 