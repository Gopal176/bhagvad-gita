'use client';
import { useState } from 'react';
import ToggleTranslation from './ToggleTranslation';

export default function VerseDetails({ verse }) {
  const [selectedTranslation, setSelectedTranslation] = useState('Swami Sivananda');
  const [selectedCommentary, setSelectedCommentary] = useState('Swami Ramsukhdas');

  const currentTranslation = verse.translations.find((t) => t.author_name === selectedTranslation);
  const currentCommentary = verse.commentaries.find((c) => c.author_name === selectedCommentary);

  return (
    <div className="bg-white/10 dark:bg-gray-800/50 p-8 rounded-lg shadow-lg backdrop-blur-md">
      <h2 className="text-3xl font-playfair text-gold-400 dark:text-gold-300 mb-4">{`Verse ${verse.chapter_number}.${verse.verse_number}`}</h2>
      <p className="text-2xl font-devanagari mb-4">{verse.text}</p>
      <div className="mb-6">
        <h3 className="text-xl font-playfair text-gold-400 dark:text-gold-300 mb-2">Translation</h3>
        <ToggleTranslation
          options={verse.translations.map((t) => t.author_name)}
          selected={selectedTranslation}
          onChange={setSelectedTranslation}
        />
        <p className="text-gray-200 dark:text-gray-300">{currentTranslation?.description}</p>
      </div>
      <div>
        <h3 className="text-xl font-playfair text-gold-400 dark:text-gold-300 mb-2">Commentary</h3>
        <ToggleTranslation
          options={verse.commentaries.map((c) => c.author_name)}
          onChange={setSelectedCommentary}
          selected={selectedCommentary}
        />
        <p className="text-gray-200 dark:text-gray-300">{currentCommentary?.description}</p>
      </div>
    </div>
  );
}