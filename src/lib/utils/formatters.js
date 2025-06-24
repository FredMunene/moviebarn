/**
 * Formats a date string (YYYY-MM-DD) into a more readable format (e.g., "January 1, 2023").
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date.
 */
export function formatDate(dateString) {
  if (!dateString) return 'N/A';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

/**
 * Formats a number of minutes into a "Xh Ym" format.
 * @param {number} minutes - The total number of minutes.
 * @returns {string} The formatted runtime.
 */
export function formatRuntime(minutes) {
  if (typeof minutes !== 'number' || minutes < 0) return 'N/A';
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}

/**
 * Formats a number into a currency string (e.g., "$1,000,000").
 * @param {number} amount - The amount to format.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(amount) {
  if (typeof amount !== 'number') return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
} 