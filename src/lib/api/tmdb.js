import client from './client';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbOptions = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const tmdb = {
  searchMovies(query) {
    return client.get(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, tmdbOptions);
  },

  getMovieDetails(id) {
    return client.get(`${BASE_URL}/movie/${id}`, tmdbOptions);
  },

  getTrendingMovies() {
    return client.get(`${BASE_URL}/trending/movie/week`, tmdbOptions);
  },
}; 