export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Mayowa Adams</h1>
        <p className="text-lg mb-6">
          I'm a frontend engineer focused on building responsive, accessible,
          and performance-driven web applications using React, TypeScript, and
          Next.js.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Projects</h2>
        <div className="space-y-6">
          <div className="bg-white shadow p-4 rounded-2xl">
            <h3 className="text-xl font-semibold">Mattress Store UI Clone</h3>
            <p className="mt-2 text-gray-700">
              A responsive, SEO-optimized e-commerce interface modeled after
              Mattressman.co.uk. Built with React, TypeScript, and Tailwind CSS.
              Features include product listings, filters, cart preview, and
              accessibility improvements.
            </p>
            <div className="mt-3 flex space-x-4">
              <a
                href="https://portfolio-mayowa.vercel.app"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/mayowa-adams/portfolio-mayowa"
                className="text-blue-600 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="bg-white shadow p-4 rounded-2xl">
            <h3 className="text-xl font-semibold">
              Spotify Landing Page Clone
            </h3>
            <p className="mt-2 text-gray-700">
              Created a visually rich replica of Spotify’s homepage with
              responsive layout, animation transitions using Framer Motion, and
              reusable components. Demonstrates attention to pixel-perfect
              design and accessibility.
            </p>
            <div className="mt-3 flex space-x-4">
              <a href="#" className="text-blue-600 hover:underline">
                Live Demo
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="bg-white shadow p-4 rounded-2xl">
            <h3 className="text-xl font-semibold">GitHub Profile Explorer</h3>
            <p className="mt-2 text-gray-700">
              Developed a web app using React and the GitHub API to display user
              repositories, followers, and contributions. Highlights API
              integration, real-time data rendering, and clean state management.
            </p>
            <div className="mt-3 flex space-x-4">
              <a href="#" className="text-blue-600 hover:underline">
                Live Demo
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>React.js, Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Git, GitHub</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="text-gray-700">
          <a
            href="mailto:adamsmayowa06@gmail.com"
            className="text-blue-600 hover:underline"
          >
            adamsmayowa06@gmail.com
          </a>
          <br />
          <a
            href="https://github.com/mayowa-adams"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <br />
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </main>
  );
}
