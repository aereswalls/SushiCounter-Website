"use client";

import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
      <main className="w-full max-w-3xl">
        <div className="flex justify-end mb-6 space-x-4">
  <Link href="/faq" className="text-sm text-neutral-500 hover:underline">EN 🇬🇧</Link>
  <Link href="/it/faq" className="text-sm text-neutral-500 hover:underline">IT 🇮🇹</Link>
  <Link href="/fr/faq" className="text-sm text-neutral-500 hover:underline">FR 🇫🇷</Link>
  <Link href="/es/faq" className="text-sm text-neutral-500 hover:underline">ES 🇪🇸</Link>
  <Link href="/de/faq" className="text-sm text-neutral-500 hover:underline">DE 🇩🇪</Link>
  </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
        <p className="text-sm text-neutral-500 mb-10">Last updated: July 14, 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">What is GarTrack?</h2>
            <p>
              GarTrack is a mobile app designed to help you manage all aspects of your vehicles, including refueling, maintenance, expenses, documents, checklists, and reminders, all in one place.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">What is GarTrack PRO?</h2>
            <p>
              GarTrack PRO is a premium upgrade that unlocks additional features such as unlimited vehicle management (free users are limited to one vehicle), iCloud backup and restore, and an ad-free experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How are my personal data and uploaded documents handled?</h2>
            <p>
              All data you enter or upload (including documents, photos, and notes) are stored locally on your device. If you are a PRO user and enable iCloud backup, this data is saved securely in your personal iCloud account. We at GarTrack do not access, store, or process your data on our servers. Your privacy and data security are our top priorities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Do you access or sell my data?</h2>
            <p>
              No. We do not access, sell, or share your data. Any data stored in iCloud remains under your control and is protected by Apple’s security and privacy measures. We do not monetize user data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How does iCloud backup work?</h2>
            <p>
              For PRO users, iCloud backup securely saves your GarTrack data, including vehicles, refueling records, maintenance, expenses, documents, and reminders. Restoring from iCloud is only possible on devices signed in with the same Apple ID.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Why do I see ads in the app?</h2>
            <p>
              Free users see ads provided by Google AdMob. These ads help support the development and maintenance of GarTrack. You can remove ads at any time by upgrading to GarTrack PRO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">What payment methods are accepted for GarTrack PRO?</h2>
            <p>
              Payments for PRO are handled through Apple’s App Store. We do not collect or store payment details. You can choose monthly, annual, or lifetime plans, and manage or cancel subscriptions directly in your Apple ID account settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">What happens if I delete the app?</h2>
            <p>
              Deleting the app removes all locally stored data. If you are a PRO user with iCloud backup enabled, you can restore your data after reinstalling the app, provided you are signed into the same Apple ID and restore from iCloud.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Do you use my location?</h2>
            <p>
              We request location access only if you use features like the electric charging station map. Your location data is used solely for this purpose and is never stored or shared with third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">I’m having problems or found a bug. What should I do?</h2>
            <p>
              We’re sorry to hear that! Please email us at{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> with details of the issue, your device model, and iOS version. We’ll do our best to help and improve the app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How do I request data deletion or exercise my GDPR rights?</h2>
            <p>
              You can contact us at{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> to request access, correction, or deletion of your account data. We respect all user rights under GDPR and related regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Can I transfer my subscription to another device?</h2>
            <p>
              Yes. Your PRO subscription is linked to your Apple ID, so you can restore your purchase on any device signed into the same Apple account by tapping “Restore Purchase” in the app settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How often do you update GarTrack?</h2>
            <p>
              We are actively developing GarTrack, regularly releasing updates with new features, improvements, and bug fixes. You can check the App Store for the latest updates.
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
        &copy; {new Date().getFullYear()} GarTrack. All rights reserved.
      </footer>
    </div>
  );
}
