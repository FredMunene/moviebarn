/**
 * Safely access localStorage.
 * @param {('save'|'load'|'remove')} action - The action to perform.
 * @param {string} key - The key to access in localStorage.
 * @param {any} [value] - The value to save (required for 'save' action).
 * @returns {any|null} The loaded value, or null if not found or in a server environment.
 */
const accessLocalStorage = (action, key, value) => {
    if (typeof window === 'undefined') {
      return null;
    }
  
    try {
      switch (action) {
        case 'save':
          localStorage.setItem(key, JSON.stringify(value));
          return null;
        case 'load':
          const item = localStorage.getItem(key);
          return item ? JSON.parse(item) : null;
        case 'remove':
          localStorage.removeItem(key);
          return null;
        default:
          return null;
      }
    } catch (error) {
      console.error(`Error accessing localStorage (${action} ${key}):`, error);
      return null;
    }
  };
  
  export const saveToStorage = (key, value) => {
    accessLocalStorage('save', key, value);
  };
  
  export const loadFromStorage = (key) => {
    return accessLocalStorage('load', key);
  };
  
  export const removeFromStorage = (key) => {
    accessLocalStorage('remove', key);
  }; 