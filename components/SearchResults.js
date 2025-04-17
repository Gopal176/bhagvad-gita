import Link from 'next/link';

export default function SearchResults({ results }) {
  return (
    <ul className="divide-y divide-gray-600 dark:divide-gray-500">
      {results.map((result) => (
        <li key={`${result.chapter_number}.${result.verse_number}`} className="p-2 hover:bg-blue-700 dark:hover:bg-gray-600">
          <Link href={`/chapters/${result.chapter_number}/verses/${result.verse_number}`}>
            Verse {result.chapter_number}.{result.verse_number}: {result.text.slice(0, 50)}...
          </Link>
        </li>
      ))}
    </ul>
  );
}