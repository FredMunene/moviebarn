'use client';

import { useEffect, useState } from 'react';
import { useWatchlistStore } from '../store/watchlistStore';

export const useWatchlist = () => {
  // Use the store's state
  const watchlist = useWatchlistStore((state) => state.watchlist);
  const addToWatchlist = useWatchlistStore((state) => state.addToWatchlist);
  const removeFromWatchlist = useWatchlistStore((state) => state.removeFromWatchlist);
  const isInWatchlist = useWatchlistStore((state) => state.isInWatchlist);

  // Zustand's persistence hydrates on the client, so we need to handle SSR
  // This ensures the component re-renders with the correct state on the client
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    isClient, // Expose this to allow components to handle hydration state
  };
}; 