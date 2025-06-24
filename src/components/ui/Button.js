import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'medium', disabled = false, className = '' }) => {
  const baseStyles = 'font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500',
    ghost: 'bg-transparent text-black hover:bg-gray-100 focus:ring-gray-500 dark:text-white dark:hover:bg-gray-800',
  };

  const sizeStyles = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const appliedStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled ? disabledStyles : '',
    className,
  ].join(' ');

  return (
    <button onClick={onClick} disabled={disabled} className={appliedStyles}>
      {children}
    </button>
  );
};

export default Button; 