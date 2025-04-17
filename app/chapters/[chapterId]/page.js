import { getChapter, getChapterVerses } from '../../../lib/api';
import VerseCard from '../../../components/VerseCard';
import Breadcrumbs from '../../../components/Breadcrumbs';

export async function generateStaticParams() {
  return Array.from({ length: 18 }, (_, i) => ({ chapterId: (i + 1).toString() }));
}

export default async function ChapterPage({ params }) {
  const chapter = await getChapter(parseInt(params.chapterId));
  const verses = await getChapterVerses(parseInt(params.chapterId));

  return (
    <div className="container mx-auto py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Chapters', href: '/chapters' },
          { label: `Chapter ${chapter.id}`, href: `/chapters/${chapter.id}` },
        ]}
      />
      <h1 className="text-4xl font-playfair text-gold-400 dark:text-gold-300 mb-4">{`Chapter ${chapter.id}: ${chapter.name}`}</h1>
      <p className="text-gray-200 dark:text-gray-300 mb-8">{chapter.description}</p>
      <div className="space-y-4">
        {verses.map((verse) => (
          <VerseCard key={verse.id} verse={verse} />
        ))}
      </div>
    </div>
  );
}