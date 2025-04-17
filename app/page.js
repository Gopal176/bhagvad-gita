import HeroSection from '../components/HeroSection';
import VerseOfTheDay from '../components/VerseOfTheDay';
import ChapterCard from '../components/ChapterCard';
import { getChapters } from '../lib/api';

export const metadata = {
  title: 'Bhagavad Gita',
  description: 'Explore the eternal wisdom of the Bhagavad Gita',
};

export default async function Home() {
  const chapters = await getChapters();

  return (
    <div className="container mx-auto px-4 py-16">
      <HeroSection />
      <VerseOfTheDay />
      <section className="my-16">
        <h2 className="text-3xl font-playfair text-center mb-8 text-gold-400 dark:text-gold-300">Explore Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </section>
    </div>
  );
}