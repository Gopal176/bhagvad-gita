import { getChapters, getChapterVerses } from '../../lib/api';
import Link from 'next/link';

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q?.toLowerCase() || '';

  // Fetch all chapters and their verses
  const chapters = await getChapters();
  const allVerses = [];
  for (const chapter of chapters) {
    const verses = await getChapterVerses(chapter.id);
    verses.forEach((verse) => {
      allVerses.push({
        chapterId: chapter.id,
        verseId: verse.verse_number,
        text: verse.text,
        transliteration: verse.transliteration,
        translation: verse.translations[0]?.description || '',
      });
    });
  }

  // Filter verses based on query
  const results = query
    ? allVerses.filter(
        (verse) =>
          verse.text.toLowerCase().includes(query) ||
          verse.transliteration.toLowerCase().includes(query) ||
          verse.translation.toLowerCase().includes(query)
      )
    : [];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-playfair text-gold-400 dark:text-gold-300 mb-6 animate-fade-in">
        Search Results for "{query}"
      </h1>
      {results.length === 0 ? (
        <p className="text-lg text-gray-700 dark:text-gray-300">
          No verses found matching your query.
        </p>
      ) : (
        <div className="grid gap-6">
          {results.map((verse) => (
            <div key={`${verse.chapterId}-${verse.verseId}`} className="card animate-fade-in">
              <h2 className="text-xl font-playfair text-gold-400 dark:text-gold-300 mb-2">
                Chapter {verse.chapterId}, Verse {verse.verseId}
              </h2>
              <p className="text-lg font-devanagari text-gray-900 dark:text-gray-100 mb-2">
                {verse.text}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                {verse.transliteration}
              </p>
              <p className="text-md text-gray-700 dark:text-gray-300">
                {verse.translation}
              </p>
              <Link
                href={`/chapters/${verse.chapterId}/verses/${verse.verseId}`}
                className="mt-4 inline-block text-gold-400 dark:text-gold-300 hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}