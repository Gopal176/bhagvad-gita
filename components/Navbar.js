'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status from localStorage
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900/80 dark:bg-gray-800/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-playfair text-gold-400 dark:text-gold-300">
          Bhagavad Gita
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gold-400 dark:hover:text-gold-300 transition">Home</Link>
          <Link href="/chapters" className="hover:text-gold-400 dark:hover:text-gold-300 transition">Chapters</Link>
          <Link href="/about" className="hover:text-gold-400 dark:hover:text-gold-300 transition">About</Link>
          <SearchBar />
          <ThemeToggle />

          {!isLoggedIn ? (
            <>
              <Link href="/login" className="hover:text-gold-400 dark:hover:text-gold-300 transition">Login</Link>
              <Link href="/register" className="hover:text-gold-400 dark:hover:text-gold-300 transition">Register</Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:text-gold-400 dark:hover:text-gold-300 transition"
            >
              Logout
            </button>
          )}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-900 dark:bg-gray-800 p-4 space-y-2">
          <Link href="/" className="block hover:text-gold-400 dark:hover:text-gold-300">Home</Link>
          <Link href="/chapters" className="block hover:text-gold-400 dark:hover:text-gold-300">Chapters</Link>
          <Link href="/about" className="block hover:text-gold-400 dark:hover:text-gold-300">About</Link>
          <SearchBar />
          <ThemeToggle />

          {!isLoggedIn ? (
            <>
              <Link href="/login" className="block hover:text-gold-400 dark:hover:text-gold-300">Login</Link>
              <Link href="/register" className="block hover:text-gold-400 dark:hover:text-gold-300">Register</Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="block hover:text-gold-400 dark:hover:text-gold-300"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
