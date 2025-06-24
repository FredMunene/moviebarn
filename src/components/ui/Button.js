import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'medium', disabled = false, className = '' }) => {
  const baseStyles = 'font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    ghost: 'bg-transparent text-brand-600 hover:bg-brand-50 focus:ring-brand-500',
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