import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-extrabold text-brand-600">404</h1>
      <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 mb-6">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link href="/" passHref>
        <Button>
            Go back home
        </Button>
      </Link>
    </div>
  );
} 