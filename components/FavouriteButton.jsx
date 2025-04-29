'use client';
import { useState } from 'react';

export default function FavouriteButton({ chapter, verse }) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const addToFavourites = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/shloka/favourite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chapter, verse }),
      });

      if (res.ok) {
        setAdded(true);
      } else {
        alert('Error adding to favorites.');
      }
    } catch (err) {
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={addToFavourites}
      disabled={loading || added}
      className="mt-4 px-4 py-2 bg-gold-400 text-black rounded hover:bg-gold-500 disabled:opacity-50"
    >
      {added ? 'Added to Favorites' : loading ? 'Adding...' : 'Add to Favorites'}
    </button>
  );
}
