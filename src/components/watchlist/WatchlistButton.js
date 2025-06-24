'use client';

import React from 'react';
import { useWatchlist } from '@/lib/hooks/useWatchlist';
import Button from '../ui/Button';

const WatchlistButton = ({ item, className = '' }) => {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist, isClient } = useWatchlist();

  // Only render the button on the client after hydration to prevent mismatches
  if (!isClient) {
    return null;
  }

  if (!item || !item.id) return null;

  const isItemInWatchlist = isInWatchlist(item.id);

  const handleToggleWatchlist = (e) => {
    e.preventDefault(); // Prevent navigation if the button is on a Link
    e.stopPropagation();

    if (isItemInWatchlist) {
      removeFromWatchlist(item.id);
    } else {
      addToWatchlist(item);
    }
  };

  return (
    <Button
      onClick={handleToggleWatchlist}
      variant={isItemInWatchlist ? 'secondary' : 'primary'}
      className={className}
    >
      {isItemInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
    </Button>
  );
};

export default WatchlistButton; 