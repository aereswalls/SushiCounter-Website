import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>GarTrack – Smart Vehicle Management App</title>
        <meta
          name="description"
          content="GarTrack helps you track fuel, expenses, documents, and maintenance for your car, motorcycle, boat, or truck. Designed for individuals and fleets."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
        <main className="w-full max-w-4xl flex flex-col gap-10 text-center items-center">
          <Image src="/gartrack-logo.png" alt="GarTrack logo" width={120} height={120} className="dark:invert" />

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">GarTrack</h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-xl">
            The smart app to manage cars, motorcycles, boats, trucks & more.
            Track fuel, expenses, documents, and reminders — all in one secure place.
          </p>

          {/* Features */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left w-full max-w-2xl mt-4">
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Vehicle Management</h2>
              <p className="text-sm text-neutral-600">Add and organize all your vehicles in a single dashboard.</p>
            </div>
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Fuel & Expenses</h2>
              <p className="text-sm text-neutral-600">Track refueling, electric charging, tolls, fines, and costs with ease.</p>
            </div>
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Reminders & Documents</h2>
              <p className="text-sm text-neutral-600">Set reminders for insurance, tax, inspections, and store key documents.</p>
            </div>
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Multi-Vehicle Ready</h2>
              <p className="text-sm text-neutral-600">Perfect for individual owners or small business fleets.</p>
            </div>
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">EV Charging Stations</h2>
              <p className="text-sm text-neutral-600">Find nearby electric vehicle charging points directly in the app.</p>
            </div>
            <div className="border border-neutral-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Multilingual Support</h2>
              <p className="text-sm text-neutral-600">
                Available in English, Italian, French, Dutch, German, Spanish, Portuguese, Czech, Greek, Polish, Swedish, Turkish, Norwegian.
              </p>
            </div>
          </section>

          {/* Why GarTrack */}
          <section className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Why choose GarTrack?</h2>
            <ul className="list-disc list-inside text-sm text-neutral-600 space-y-2 text-left">
              <li>Secure local storage, with optional iCloud backup (for PRO users).</li>
              <li>Ad-free experience with GarTrack PRO.</li>
              <li>Supports electric and traditional vehicles.</li>
              <li>Easy to use, with beautiful, clean design.</li>
            </ul>
          </section>

          {/* Testimonials */}
          <section className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">What users say</h2>
            <p className="text-sm italic text-neutral-600">“Finally, an app that keeps everything about my car in one place!”</p>
            <p className="text-sm italic text-neutral-600 mt-2">“Managing my boat documents has never been easier.”</p>
          </section>

          {/* App Store */}
          <div className="mt-16 flex flex-col items-center">
            <p className="text-sm text-neutral-700 mb-4">Download GarTrack now</p>
            <Link href="https://apps.apple.com/us/app/gartrack-car-management/id6747924692" target="_blank">
              <Image src="/appstore-badge.svg" alt="Download on the App Store" width={180} height={60} />
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
            <a href="mailto:info@gartrack.app" className="text-blue-600 hover:underline">Contact Us</a>
          </div>
        </main>

        <footer className="text-xs text-neutral-400 mt-12 text-center flex flex-col items-center">
          <div className="mb-4">
            <a href="https://x.com/gartrack" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center hover:text-neutral-600">
              <Image src="/x-icon.svg" alt="Follow us on X" width={24} height={24} />
            </a>
          </div>
          <div>&copy; {new Date().getFullYear()} GarTrack. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}
