import React from 'react';

const Loading = ({ text, size = 'medium', className = '' }) => {
  const sizeStyles = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  const spinnerSize = sizeStyles[size] || sizeStyles.medium;
  const textSize = size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base';

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${spinnerSize} border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin`}
        role="status"
        aria-label="loading"
      />
      {text && (
        <p className={`mt-2 text-gray-600 dark:text-gray-300 ${textSize}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default Loading; 