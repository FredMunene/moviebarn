import React from 'react';

const Card = ({ children, header, footer, className = '' }) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden';

  const appliedStyles = [baseStyles, className].join(' ');

  return (
    <div className={appliedStyles}>
      {header && (
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          {header}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 