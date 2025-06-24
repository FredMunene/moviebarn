import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { loadFromStorage, saveToStorage, removeFromStorage } from '../utils/storage';

const WATCHLIST_STORAGE_KEY = 'moviebarn-watchlist';

export const useWatchlistStore = create(
  persist(
    (set, get) => ({
      watchlist: [],
      
      addToWatchlist: (item) => {
        const { watchlist } = get();
        if (!watchlist.find(i => i.id === item.id)) {
          set({ watchlist: [...watchlist, item] });
        }
      },
      
      removeFromWatchlist: (itemId) => {
        set((state) => ({
          watchlist: state.watchlist.filter(item => item.id !== itemId),
        }));
      },

      isInWatchlist: (itemId) => {
        return get().watchlist.some(item => item.id === itemId);
      },

      clearWatchlist: () => {
        set({ watchlist: [] });
      },
    }),
    {
      name: WATCHLIST_STORAGE_KEY,
      storage: createJSONStorage(() => ({
        getItem: (name) => {
            const value = loadFromStorage(name);
            return value ? JSON.stringify(value) : null;
        },
        setItem: (name, value) => saveToStorage(name, value),
        removeItem: (name) => removeFromStorage(name),
      })),
    }
  )
); 