import { getRandomVerse } from '../lib/utils';
import Link from 'next/link';

export default async function VerseOfTheDay() {
  const verse = await getRandomVerse();

  if (!verse) {
    return (
      <section className="my-16 text-center">
        <h2 className="text-3xl font-playfair text-gold-400 dark:text-gold-300 mb-4">Verse of the Day</h2>
        <p className="text-gray-200 dark:text-gray-400">Unable to load verse. Please try again later.</p>
      </section>
    );
  }

  return (
    <section className="my-16 text-center animate-fade-in">
      <h2 className="text-3xl font-playfair text-gold-400 dark:text-gold-300 mb-4">Verse of the Day</h2>
      <div className="bg-blue-800/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <p className="text-lg font-devanagari text-white dark:text-gray-200 mb-2">{verse.text}</p>
        <p className="text-sm text-gray-300 dark:text-gray-400 mb-4">{verse.transliteration}</p>
        <p className="text-md text-gray-200 dark:text-gray-300">{verse.translation}</p>
        <Link
          href={`/chapters/${verse.chapterId}/verses/${verse.verseId}`}
          className="mt-4 inline-block text-gold-400 dark:text-gold-300 hover:underline"
        >
          Read More (Chapter {verse.chapterId}, Verse {verse.verseId})
        </Link>
      </div>
    </section>
  );
}