import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="mb-6">
      <ul className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index}>
            {index < items.length - 1 ? (
              <Link href={item.href} className="text-gold-400 dark:text-gold-300 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-200 dark:text-gray-300">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}