import React from 'react';

const StarIcon = ({ filled, size }) => {
  const sizeClass = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  }[size];

  return (
    <svg
      className={`${sizeClass} ${
        filled ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

const Rating = ({ rating, maxRating = 10, showText = true, size = 'medium', className = '' }) => {
  // Convert rating to a 5-star scale
  const normalizedRating = (rating / maxRating) * 5;
  const fullStars = Math.floor(normalizedRating);
  const emptyStars = 5 - fullStars;

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} filled={true} size={size} />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={`empty-${i}`} filled={false} size={size} />
        ))}
      </div>
      {showText && (
        <span className="ml-1 text-gray-600 dark:text-gray-300">
          {rating.toFixed(1)}/{maxRating}
        </span>
      )}
    </div>
  );
};

export default Rating; 