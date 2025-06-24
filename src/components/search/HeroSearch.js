'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';

const HeroSearch = () => {
  const router = useRouter();

  const handleSearch = (query) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default HeroSearch; 