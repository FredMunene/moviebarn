import client from './client';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbOptions = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
};

export const tmdb = {
  searchMovies(query) {
    if (!query) return Promise.resolve({ results: [] });
    return client.get(`${BASE_URL}/search/multi?query=${encodeURIComponent(query)}`, tmdbOptions);
  },

  getMovieDetails(id) {
    return client.get(`${BASE_URL}/movie/${id}?append_to_response=credits`, tmdbOptions);
  },

  getTVShowDetails(id) {
    return client.get(`${BASE_URL}/tv/${id}?append_to_response=credits`, tmdbOptions);
  },

  getTrendingMovies() {
    return client.get(`${BASE_URL}/movie/popular`, tmdbOptions);
  },

  getTrendingTVShows() {
    return client.get(`${BASE_URL}/discover/tv?sort_by=popularity.desc`, tmdbOptions);
  },
}; 