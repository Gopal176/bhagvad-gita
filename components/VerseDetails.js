'use client';
import { useState } from 'react';
import ToggleTranslation from './ToggleTranslation';

export default function VerseDetails({ verse }) {
  const [selectedTranslation, setSelectedTranslation] = useState('Swami Sivananda');
  const [selectedCommentary, setSelectedCommentary] = useState('Swami Ramsukhdas');

  const currentTranslation = verse.translations.find((t) => t.author_name === selectedTranslation);
  const currentCommentary = verse.commentaries.find((c) => c.author_name === selectedCommentary);

  return (
   <p>hi</p>
  );
}