'use client';
import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-900 dark:bg-gray-800 p-4">
          <Link href="/" className="block py-2 hover:text-gold-400 dark:hover:text-gold-300">Home</Link>
          <Link href="/chapters" className="block py-2 hover:text-gold-400 dark:hover:text-gold-300">Chapters</Link>
          <Link href="/about" className="block py-2 hover:text-gold-400 dark:hover:text-gold-300">About</Link>
          <SearchBar />
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}