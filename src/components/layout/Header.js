"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/search', label: 'Search' },
    { href: '/watchlist', label: 'Watchlist' },
    { href: '/trending', label: 'Trending' },
  ];

  const isActiveLink = (href) => pathname === href;

  return (
    <header className="bg-brand-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            MovieBarn
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-brand-300 transition-colors ${
                  isActiveLink(href) ? 'text-brand-300' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden fixed top-0 left-0 w-full h-full bg-black/50 z-20 transition-opacity duration-300
            ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <nav
            className={`
              fixed top-0 left-0 h-full w-3/4 max-w-sm bg-brand-900 p-8 z-30
              transform transition-transform duration-300
              ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the nav
          >
            <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">MovieBarn</span>
                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div className="space-y-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block py-2 text-xl hover:text-brand-300 transition-colors ${
                      isActiveLink(href) ? 'text-brand-300' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 