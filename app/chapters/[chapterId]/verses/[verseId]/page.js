import { getVerse } from '../../../../../lib/api';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import client component
const FavoriteButton = dynamic(() => import('../../../../../components/FavouriteButton'), { ssr: false });

export default async function VersePage({ params }) {
  const { chapterId, verseId } = params;
  const verse = await getVerse(chapterId, verseId);

  if (!verse || Object.keys(verse).length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-playfair text-gold-400 dark:text-gold-300 mb-4">
          Verse Not Found
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          The requested verse (Chapter {chapterId}, Verse {verseId}) could not be found.
        </p>
        <Link
          href={`/chapters/${chapterId}`}
          className="text-gold-400 dark:text-gold-300 hover:underline"
        >
          Back to Chapter {chapterId}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href={`/chapters/${chapterId}`}
        className="text-gold-400 dark:text-gold-300 hover:underline mb-4 inline-block"
      >
        ← Back to Chapter {chapterId}
      </Link>
      <h1 className="text-3xl font-playfair text-gold-400 dark:text-gold-300 mb-4">
        Chapter {chapterId}, Verse {verse.verse_number}
      </h1>
      <div className="bg-blue-800/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg">
        <p className="text-lg font-devanagari text-white dark:text-gray-200 mb-4">
          {verse.text}
        </p>
        <p className="text-sm text-gray-300 dark:text-gray-400 mb-4">
          {verse.transliteration}
        </p>
        <p className="text-md text-gray-200 dark:text-gray-300">
          {verse.translations[0]?.description || 'Translation not available'}
        </p>

        {/* Add to Favorites Button */}
        <FavoriteButton
          chapter={chapterId}
          verse={verse.verse_number}
      
        />
      </div>
    </div>
  );
}
