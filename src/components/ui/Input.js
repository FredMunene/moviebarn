import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, disabled = false, className = '' }) => {
  const baseStyles =
    'block w-full px-4 py-2 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brand-500';

  const disabledStyles = 'bg-gray-100 dark:bg-gray-800 cursor-not-allowed';

  const appliedStyles = [
    baseStyles,
    disabled ? disabledStyles : '',
    className,
  ].join(' ');

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={appliedStyles}
    />
  );
};

export default Input; 