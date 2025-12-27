"use client";

import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
      <main className="w-full max-w-3xl">
        <div className="flex justify-end mb-6 space-x-4">
          <Link href="/faq" className="text-sm text-neutral-500 hover:underline font-bold">EN 🇬🇧</Link>
          <Link href="/it/faq" className="text-sm text-neutral-500 hover:underline">IT 🇮🇹</Link>
          <Link href="/fr/faq" className="text-sm text-neutral-500 hover:underline">FR 🇫🇷</Link>
          <Link href="/es/faq" className="text-sm text-neutral-500 hover:underline">ES 🇪🇸</Link>
          <Link href="/de/faq" className="text-sm text-neutral-500 hover:underline">DE 🇩🇪</Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#fe6f41]">Frequently Asked Questions (FAQ)</h1>
        <p className="text-sm text-neutral-500 mb-10">Last updated: December 27, 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">What is SushiCounter?</h2>
            <p>
              SushiCounter is the ultimate app for all-you-can-eat challenges! Create sessions with friends, count pieces in real-time, and discover who's the true sushi champion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">How do sessions work?</h2>
            <p>
              Create a new session or join with a code. During the meal, each participant counts their own pieces. The leaderboard updates in real-time for everyone!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">What does the free version include?</h2>
            <p>
              You can create sessions with up to 2 participants, track your personal records, and view your challenge history.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">What does SushiCounter Premium offer?</h2>
            <p>
              With Premium you unlock sessions with up to 20 participants, perfect for large groups and parties. Ideal for epic challenges!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">How does the session code work?</h2>
            <p>
              When you create a session, you receive a unique 6-character alphanumeric code. Share it with friends who can join instantly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Can I edit my count if I make a mistake?</h2>
            <p>
              Yes! Use the 'Undo' button to decrement the count if you make an error. You can correct at any time during the session.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">What happens when I end a session?</h2>
            <p>
              All data is automatically saved to each participant's history. You can review leaderboards, scores, and stats anytime.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">How does the global leaderboard work?</h2>
            <p>
              Compete with users worldwide! The leaderboard shows the best sushi eaters by personal record and number of sessions won.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Can I hide my profile from the leaderboard?</h2>
            <p>
              Yes, go to Settings and disable 'Visible in Leaderboard'. Your profile will remain private and won't appear in the global leaderboard.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">How do I get SushiCounter Premium?</h2>
            <p>
              Go to your Profile and tap the Premium button. Choose your preferred plan and unlock all advanced features.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">How do I cancel my Premium subscription?</h2>
            <p>
              <strong>iOS:</strong> Go to Settings → [Your name] → Subscriptions → SushiCounter, and manage or cancel your subscription there.
            </p>
            <p className="mt-2">
              <strong>Android:</strong> Open Google Play Store → Menu → Subscriptions → SushiCounter, and manage or cancel your subscription.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Can I delete my account?</h2>
            <p>
              Go to SushiCounter Settings and tap "Delete Account". This will permanently remove all your data and you won't be able to access your profile anymore.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Can I use SushiCounter offline?</h2>
            <p>
              Creating a session or joining a session requires an Internet connection, but incrementing scores in active sessions works offline too. If there's no Internet signal in a restaurant, ask the staff for Wi-Fi access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Are my data safe?</h2>
            <p>
              Absolutely yes! All communications are encrypted. Read the <a href="/privacy" className="text-[#fe6f41] underline font-semibold">Privacy Policy</a> for more details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">How do I report a problem or bug?</h2>
            <p>
              Go to Settings → Support and email us at <a href="mailto:sushicounterapp@gmail.com" className="text-[#fe6f41] underline font-semibold">sushicounterapp@gmail.com</a>. We respond within 24-48 hours and are always happy to help!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Can I use SushiCounter for other types of food?</h2>
            <p>
              Of course! Although designed for sushi, you can use it for any culinary challenge: dim sum, tapas, buffet dishes... Have fun!
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/" className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition">
            ← Back to Home
          </Link>
        </div>
      </main>

      <footer className="text-xs text-neutral-400 mt-20 text-center">
        &copy; {new Date().getFullYear()} SushiCounter. All rights reserved.
      </footer>
    </div>
  );
}
