import React from 'react';

const LoadingSkeleton = () => (
    <div className="flex flex-col md:flex-row gap-8 animate-pulse">
      <div className="md:w-1/3">
        <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
      </div>
      <div className="md:w-2/3 space-y-4">
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="h-24 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
      </div>
    </div>
  );
  

export default function Loading() {
  return <LoadingSkeleton />;
} 