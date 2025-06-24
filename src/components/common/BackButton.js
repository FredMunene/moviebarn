'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';

const BackButton = ({ className = '' }) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant="ghost"
      className={`mb-4 ${className}`}
    >
      &larr; Back
    </Button>
  );
};

export default BackButton; 