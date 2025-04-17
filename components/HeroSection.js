import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center">
      <Image
        src="/images/krishna-arjun.jpg"
        alt="Krishna and Arjuna"
        fill
        className="object-cover"
        style={{ filter: 'brightness(0.6)' }}
      />
      <div className="absolute text-center">
        <h1 className="text-4xl md:text-6xl font-playfair text-gold-400 dark:text-gold-300 mb-4">
          Explore the Eternal Wisdom
        </h1>
        <p className="text-xl font-inter text-white dark:text-gray-200 mb-6">
          Dive into the teachings of the Bhagavad Gita
        </p>
        <Link
          href="#chapters"
          className="inline-block bg-gold-400 dark:bg-gold-300 text-blue-900 dark:text-gray-900 px-6 py-3 rounded-full font-inter hover:bg-gold-500 dark:hover:bg-gold-400 transition"
        >
          Read Now
        </Link>
      </div>
    </section>
  );
}