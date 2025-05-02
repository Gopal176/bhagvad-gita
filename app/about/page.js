export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-playfair text-gold-400 dark:text-gold-300 mb-6">
        About This Project
      </h1>

      <p className="text-lg text-gray-200 dark:text-gray-300 mb-4">
        Welcome to the <strong>Bhagavad Gita Web Application</strong>, a digital platform created to help users explore the timeless wisdom of the Bhagavad Gita — one of the most sacred and inspiring texts in Hindu philosophy.
      </p>

      <h2 className="text-2xl font-playfair text-gold-400 dark:text-gold-300 mb-4">Project Goals</h2>
      <ul className="list-disc list-inside text-gray-200 dark:text-gray-300 mb-4 space-y-2">
        <li>Provide easy access to all 18 chapters and 700 verses of the Bhagavad Gita.</li>
        <li>Offer multi-author translations and commentaries.</li>
        {/* <li>Allow users to create accounts, log in, and save favorite shlokas.</li> */}
        <li>Support dark mode and responsive design.</li>
        <li>Ensure secure user data handling with MongoDB and JWT.</li>
      </ul>

      <h2 className="text-2xl font-playfair text-gold-400 dark:text-gold-300 mb-4">Key Features</h2>
      <ul className="list-disc list-inside text-gray-200 dark:text-gray-300 mb-4 space-y-2">
        <li>Browse all chapters and verses of the Gita.</li>
        <li>Search shlokas by chapter, verse, or keywords.</li>
        <li>Read multiple translations and commentaries.</li>
        <li>Mark and manage favorite verses (requires login).</li>
        <li>Secure login and registration system.</li>
        <li>Dark mode toggle for night reading.</li>
        <li>Fully responsive and mobile-friendly interface.</li>
      </ul>

      <h2 className="text-2xl font-playfair text-gold-400 dark:text-gold-300 mb-4">Technologies Used</h2>
      <ul className="list-disc list-inside text-gray-200 dark:text-gray-300 mb-4 space-y-2">
        <li>Frontend: Next.js, Tailwind CSS, React</li>
        <li>Backend: Node.js API routes, MongoDB, Mongoose</li>
        <li>Authentication: JWT, bcrypt</li>
        <li>Deployment: Vercel</li>
        <li>Data Source: Bhagavad Gita API</li>
      </ul>

      <h2 className="text-2xl font-playfair text-gold-400 dark:text-gold-300 mb-4">Why This Project Matters</h2>
      <p className="text-lg text-gray-200 dark:text-gray-300 mb-4">
        The Bhagavad Gita has been a source of guidance, inspiration, and peace for millions across generations. With this project, I wanted to bring this timeless text to the modern digital world — making it accessible, interactive, and personal for today’s readers.
      </p>

      <h2 className="text-2xl font-playfair text-gold-400 dark:text-gold-300 mb-4">Feedback & Contributions</h2>
      <p className="text-lg text-gray-200 dark:text-gray-300">
        I warmly welcome any feedback, suggestions, or feature requests! Feel free to reach out through the project repository or contribute to its improvement.
      </p>
    </div>
  );
}
