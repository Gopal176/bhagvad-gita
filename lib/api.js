const API_BASE = 'https://bhagavad-gita3.p.rapidapi.com/v2';
const headers = {
  'x-rapidapi-key': 'a214a8e8f4mshe9120e2cd9d7e74p164becjsn288edbe6601d',
  'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
};

export async function getChapters() {
  try {
    const response = await fetch(`${API_BASE}/chapters/?skip=0&limit=18`, { headers });
    return await response.json();
  } catch (error) {
    console.error('Error fetching chapters:', error);
    return [];
  }
}

export async function getChapter(chapterId) {
  try {
    const response = await fetch(`${API_BASE}/chapters/${chapterId}/`, { headers });
    return await response.json();
  } catch (error) {
    console.error('Error fetching chapter:', error);
    return {};
  }
}

export async function getChapterVerses(chapterId) {
  try {
    const response = await fetch(`${API_BASE}/chapters/${chapterId}/verses/`, { headers });
    return await response.json();
  } catch (error) {
    console.error('Error fetching verses:', error);
    return [];
  }
}

export async function getVerse(chapterId, verseId) {
  try {
    const response = await fetch(`${API_BASE}/chapters/${chapterId}/verses/${verseId}/`, { headers });
    return await response.json();
  } catch (error) {
    console.error('Error fetching verse:', error);
    return {};
  }
}