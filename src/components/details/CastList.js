import React from 'react';
import Image from 'next/image';
import { TMDB_IMAGE_BASE_URL } from '@/lib/utils/constants';

// A smaller poster size is better for profile pictures
const TMDB_PROFILE_SIZE_W185 = 'w185';
// We'll assume a generic person placeholder for now
const PLACEHOLDER_PERSON = '/images/placeholder-person.svg';

const CastList = ({ cast }) => {
  // Show only the top 15 billed cast members for brevity
  const topCast = cast.slice(0, 15);

  return (
    <div className="flex overflow-x-auto space-x-4 pb-4">
      {topCast.map((person) => (
        <div key={person.id} className="flex-shrink-0 w-32 text-center">
          <div className="relative w-32 h-48 mb-2">
            <Image
              src={person.profile_path ? `${TMDB_IMAGE_BASE_URL}${TMDB_PROFILE_SIZE_W185}${person.profile_path}` : PLACEHOLDER_PERSON}
              alt={person.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          <p className="font-bold text-sm truncate">{person.name}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{person.character}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList; 