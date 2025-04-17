import { getChapters, getChapterVerses } from './api';

export async function getRandomVerse() {
  try {
    // Fetch all chapters
    const chapters = await getChapters();
    if (!chapters || chapters.length === 0) {
      return null;
    }

    // Select a random chapter
    const randomChapter = chapters[Math.floor(Math.random() * chapters.length)];

    // Fetch verses for the random chapter
    const verses = await getChapterVerses(randomChapter.id);
    if (!verses || verses.length === 0) {
      return null;
    }

    // Select a random verse
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];

    return {
      chapterId: randomChapter.id,
      verseId: randomVerse.verse_number,
      text: randomVerse.text,
      transliteration: randomVerse.transliteration,
      translation: randomVerse.translations[0]?.description || 'Translation not available',
    };
  } catch (error) {
    console.error('Error fetching random verse:', error);
    return null;
  }
}