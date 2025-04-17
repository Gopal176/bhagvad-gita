'use client';
export default function ToggleTranslation({ options, selected, onChange }) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="bg-blue-800 dark:bg-gray-700 text-white dark:text-gray-200 p-2 rounded-md mb-4"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}