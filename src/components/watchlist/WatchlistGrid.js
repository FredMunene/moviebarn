'use client';

import React from 'react';
import WatchlistItem from './WatchlistItem';
import { useWatchlist } from '@/lib/hooks/useWatchlist';
import Button from '../ui/Button';
import { useWatchlistStore } from '@/lib/store/watchlistStore';

const WatchlistGrid = () => {
  const { watchlist, isClient } = useWatchlist();
  const clearWatchlist = useWatchlistStore(state => state.clearWatchlist);

  if (!isClient) {
    // Show a loading state or placeholder on the server
    return (
        <div className="text-center">
            <p>Loading watchlist...</p>
        </div>
    );
  }

  if (watchlist.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">Your watchlist is empty</h2>
        <p className="text-gray-500 mt-2">
          Add movies and TV shows to your watchlist to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{watchlist.length} item(s) in your watchlist</h2>
            <Button onClick={clearWatchlist} variant="secondary">
                Clear All
            </Button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {watchlist.map(item => (
                <WatchlistItem key={`${item.id}-${item.title || item.name}`} item={item} />
            ))}
        </div>
    </div>
  );
};

export default WatchlistGrid; 