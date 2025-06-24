import client from './client';

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com';

export const omdb = {
  getOMDBDetails(imdbId) {
    if (!imdbId) {
      return Promise.resolve(null); // Return null if no imdbId is provided
    }
    return client.get(`${BASE_URL}/?i=${imdbId}&apikey=${API_KEY}`);
  },
}; 