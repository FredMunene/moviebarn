import Image from 'next/image';

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movie }) {
  const releaseYear = new Date(movie.release_date).getFullYear();
  const imageUrl = movie.poster_path ? `${TMDB_IMAGE_BASE}${movie.poster_path}` : '/placeholder-movie.jpg';

  return (
    <div className="bg-white dark:bg-brand-900 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-[400px]">
        <Image
          src={imageUrl}
          alt={`${movie.title} poster`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 dark:text-white">{movie.title}</h2>
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
          <span>{releaseYear}</span>
          <span>⭐ {movie.vote_average.toFixed(1)}/10</span>
        </div>
      </div>
    </div>
  );
} 