import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SushiCounter – Competitive Sushi Tracking App</title>
        <meta
          name="description"
          content="SushiCounter helps you track sushi pieces in real-time and compete with friends. Create or join sessions, count every piece, and see who wins the sushi challenge!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
        <main className="w-full max-w-4xl flex flex-col gap-10 text-center items-center">
          <Image src="/sushicounter-logo.png" alt="SushiCounter logo" width={120} height={120} className="dark:invert" />

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">SushiCounter</h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-xl">
            The ultimate app to track sushi pieces and compete with friends.
            Count every piece, challenge your crew, and dominate the leaderboard — all in real-time.
          </p>

          {/* Features */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left w-full max-w-2xl mt-4">
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Real-Time Sessions</h2>
              <p className="text-sm text-neutral-600">Create or join sessions with a simple code and track sushi together in real-time.</p>
            </div>
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Piece Counting</h2>
              <p className="text-sm text-neutral-600">Tap to count every sushi piece you eat. Simple, fast, and accurate tracking.</p>
            </div>
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Live Rankings</h2>
              <p className="text-sm text-neutral-600">See who's winning in real-time with automatic leaderboards during your session.</p>
            </div>
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Session History</h2>
              <p className="text-sm text-neutral-600">Track your wins, total pieces eaten, win rate, and personal best across all sessions.</p>
            </div>
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Global Leaderboard</h2>
              <p className="text-sm text-neutral-600">Compete with sushi lovers worldwide and climb the rankings of top eaters.</p>
            </div>
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Restaurant Details</h2>
              <p className="text-sm text-neutral-600">
                Save restaurant names and locations for every session to remember where the best battles happened.
              </p>
            </div>
          </section>

          {/* Why SushiCounter */}
          <section className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Why choose SushiCounter?</h2>
            <ul className="list-disc list-inside text-sm text-neutral-600 space-y-2 text-left">
              <li>Real-time sync with Firebase — everyone sees updates instantly.</li>
              <li>Simple tap-to-count interface with no learning curve.</li>
              <li>Track personal stats: total pieces, sessions played, wins, and win rate.</li>
              <li>Beautiful, clean design that's perfect for any sushi night.</li>
            </ul>
          </section>

          {/* Testimonials */}
          <section className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">What users say</h2>
            <p className="text-sm italic text-neutral-600">"Finally settled who's the real sushi champion in our group!"</p>
            <p className="text-sm italic text-neutral-600 mt-2">"All-you-can-eat nights have never been this competitive and fun."</p>
          </section>

          {/* App Store */}
          <div className="mt-16 flex flex-col items-center">
            <p className="text-sm text-neutral-700 mb-4">Download SushiCounter now</p>
            <Link href="https://apps.apple.com/app/sushicounter/YOURAPPID" target="_blank">
              <Image src="/appstore-badge.webp" alt="Download on the App Store" width={180} height={60} />
            </Link>
            <p className="text-sm text-neutral-700 mt-6 mb-2">Coming soon on Google Play</p>
            <div>
              <Image src="/google-play.webp" alt="Google Play logo" width={180} height={60} />
            </div>
          </div>

          {/* Legal & support links */}
          <div className="mt-12 space-x-6 text-sm">
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
            <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>
            <a href="mailto:info@sushicounter.app" className="text-blue-600 hover:underline">Contact Us</a>
          </div>
        </main>

        <footer className="text-xs text-neutral-400 mt-12 text-center flex flex-col items-center">
          <div className="mb-4">
            <a href="https://x.com/sushicounter" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center hover:text-neutral-600">
              <Image src="/x-icon.svg" alt="Follow us on X" width={24} height={24} />
            </a>
          </div>
          <div>&copy; {new Date().getFullYear()} SushiCounter. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
