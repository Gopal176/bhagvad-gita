import Link from 'next/link';

export default function ChapterCard({ chapter }) {
  return (
    <Link href={`/chapters/${chapter.id}`}>
      <div className="bg-white/10 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg hover:scale-105 transition transform backdrop-blur-md">
        <h3 className="text-xl font-playfair text-gold-400 dark:text-gold-300">{`Chapter ${chapter.id}: ${chapter.name}`}</h3>
        <p className="text-gray-200 dark:text-gray-300 mt-2 line-clamp-3">{chapter.description}</p>
      </div>
    </Link>
  );
}