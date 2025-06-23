import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/movies')
      .then(res => setResults(res.data))
      .catch(err => console.error('Failed to fetch movies:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">TMDB Clone</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Movies</a>
          <a href="#" className="hover:underline">TV Shows</a>
          <a href="#" className="hover:underline">People</a>
        </nav>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-4 bg-white border-r hidden lg:block">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="space-y-3">
            <div>
              <p className="font-medium">Show Me</p>
              <div className="space-y-1">
                <label><input type="radio" name="seen" defaultChecked /> Everything</label><br />
                <label><input type="radio" name="seen" /> Movies I Haven't Seen</label><br />
                <label><input type="radio" name="seen" /> Movies I Have Seen</label>
              </div>
            </div>
            <div>
              <p className="font-medium">Availabilities</p>
              <label><input type="checkbox" defaultChecked /> Search all availabilities?</label>
            </div>
            <div>
              <p className="font-medium">Release Dates</p>
              <label><input type="checkbox" defaultChecked /> Search all releases?</label><br />
              <input type="date" className="border px-2 py-1 rounded" /> to <input type="date" className="border px-2 py-1 rounded" />
            </div>
            <div>
              <p className="font-medium">Genres</p>
              <div className="flex flex-wrap gap-2">
                {["Action", "Adventure", "Animation", "Comedy", "Drama", "Fantasy", "Horror", "Sci-Fi"].map(genre => (
                  <span key={genre} className="px-2 py-1 bg-gray-200 rounded text-sm">{genre}</span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {results.map(movie => (
              <div key={movie.id} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
                <div className="relative">
                  <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://via.placeholder.com/300x450?text=No+Image'}
                    alt={movie.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 m-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                    {movie.vote_average ? Math.round(movie.vote_average * 10) / 10 : 'N/A'}
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold">{movie.title}</h3>
                  <p className="text-xs text-gray-600">{movie.release_date}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
