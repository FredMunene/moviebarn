import React from 'react';
import WatchlistGrid from '@/components/watchlist/WatchlistGrid';

export const metadata = {
    title: 'Your Watchlist - MovieBarn',
    description: 'Manage your personal watchlist of movies and TV shows.',
};

export default function WatchlistPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">My Watchlist</h1>
            <WatchlistGrid />
        </div>
    );
} 