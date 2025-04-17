'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function VerseCard({ verse }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/10 dark:bg-gray-800/50 p-4 rounded-lg shadow-lg backdrop-blur-md">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-playfair text-gold-400 dark:text-gold-300">{`Verse ${verse.chapter_number}.${verse.verse_number}`}</h3>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-xl font-devanagari mb-4">{verse.text}</p>
          <p className="text-gray-200 dark:text-gray-300">
            {verse.translations.find((t) => t.author_name === 'Swami Sivananda')?.description}
          </p>
          <Link
            href={`/chapters/${verse.chapter_number}/verses/${verse.verse_number}`}
            className="text-gold-400 dark:text-gold-300 hover:underline mt-2 block"
          >
            View Details
          </Link>
        </div>
      )}
    </div>
  );
}