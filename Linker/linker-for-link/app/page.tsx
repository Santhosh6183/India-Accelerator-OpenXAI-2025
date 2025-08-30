export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-100 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-gray-100 px-6">
      {/* Hero Section */}
      <section className="max-w-4xl text-center mt-20">
        <h1 className="text-2xl font-bold">🚀 Personalized Quiz Generator</h1>

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Personalized Quiz Generator
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          Create intelligent quizzes tailored to <span className="font-semibold">your topic</span> and 
          <span className="font-semibold"> skill level</span>.  
          Our adaptive system adjusts difficulty based on your answers — the perfect companion for 
          <span className="italic"> study, training, and exam prep.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/quiz"
            className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 transition transform hover:scale-105"
          >
            🚀 Start Your Quiz
          </a>
          <a
            href="/about"
            className="px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-700 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Learn More →
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-24 grid gap-8 sm:grid-cols-3 text-center max-w-6xl w-full">
        <div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">📚 Custom Topics</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Generate quizzes on any subject — from math and coding to history, science, and fun trivia.
          </p>
        </div>
        <div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">⚡ Adaptive Difficulty</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Questions automatically adjust to your performance, keeping you challenged at the right level.
          </p>
        </div>
        <div className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">📊 Track Progress</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Monitor your scores, review mistakes, and steadily improve with detailed insights.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-24 mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to level up your learning?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Start generating personalized quizzes today and accelerate your growth.
        </p>
        <a
          href="/quiz"
          className="px-10 py-4 rounded-xl bg-purple-600 text-white font-semibold text-lg shadow-md hover:bg-purple-700 hover:shadow-xl transition transform hover:scale-105"
        >
          Get Started →
        </a>
      </section>
    </main>
  );
}

