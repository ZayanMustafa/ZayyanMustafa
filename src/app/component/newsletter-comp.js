"use client";

export default function Newsletter() {
  return (
    <section className="bg-yellow-400 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-700 mb-8">
          Subscribe to my newsletter to get the latest updates, tutorials, and insights directly in your inbox.
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-72 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}