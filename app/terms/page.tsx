"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
      <main className="w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-sm text-neutral-500 mb-10">Last updated: July 23, 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By using the GarTrack app or accessing the website, you agree to these Terms and Conditions. If you do not agree, please do not use the app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. App Usage</h2>
            <p>
              GarTrack provides tools to manage vehicle-related data including refueling, maintenance, expenses, documents, checklists, and reminders. You are responsible for the accuracy and legality of the data you input.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Account & Authentication</h2>
            <p>
              You may sign in using Apple, Google, or by registering with email and password solely for authentication. We do not collect or store your Apple or Google credentials. Personal information (such as email) is stored only as necessary for authentication, as detailed in our{" "}
              <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>. We do not use your email for marketing or unrelated communication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Subscription & Billing</h2>
            <p>
              Optional PRO features are available via in-app purchases through Apple’s App Store. Subscriptions are managed by Apple under its own billing policies. GarTrack does not handle or store payment information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Data Storage</h2>
            <p>
              Data is stored locally on your device. If you are a PRO user, you may enable iCloud backup, which stores data privately in your iCloud account. We do not access or transmit this data unless explicitly stated in our{" "}
              <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Location Access</h2>
            <p>
              GarTrack may request location access to show nearby electric charging stations. Location data is used only for this purpose and is not stored or shared by us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
            <p>
              All content, design, source code, and branding associated with GarTrack are the intellectual property of the project owners. You may not reproduce, modify, distribute, or reverse engineer any part of the app without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Ads & Third-Party Services</h2>
            <p>
              The free version of GarTrack may display ads from Google AdMob, subject to your consent under Apple’s App Tracking Transparency framework. For details, see our{" "}
              <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Warranty Disclaimer</h2>
            <p>
              GarTrack is provided “as is” without warranties of any kind, express or implied. We do not guarantee uninterrupted operation, availability, or that the app is error-free.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, GarTrack and its developers are not liable for any damages arising from your use of the app, including data loss, financial loss, or device issues.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">11. Compliance with EU & UK Laws</h2>
            <p>
              If you are located in the European Union or United Kingdom, we process your data according to the General Data Protection Regulation (GDPR) and similar laws. You have rights to access, rectify, delete, or restrict processing of your data, as detailed in our{" "}
              <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">12. User Rights</h2>
            <p>
              You may contact us at any time to exercise your rights under GDPR, including access to your data, correction, deletion, or objection to processing. Email us at{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">13. Data Transfers</h2>
            <p>
              By using GarTrack, you agree that your data may be processed outside your country, including in the United States, where our providers (such as Google/Firebase) operate under the EU-U.S. Data Privacy Framework.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">14. Changes to Terms</h2>
            <p>
              We may update these Terms & Conditions at any time. Updates will be communicated in-app or on our website. Continued use of GarTrack after updates means you accept the changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">15. Contact</h2>
            <p>
              If you have questions or concerns, contact us at{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">16. Trademarks & Vehicle Logos</h2>
            <p>
              All vehicle brand names, logos, and trademarks displayed in the GarTrack app are the property of their respective owners. We use only official, original, and unmodified logos to help users visually identify their vehicles.
            </p>
            <p>
              Such usage is strictly for identification purposes. GarTrack has no affiliation, sponsorship, or endorsement relationship with any vehicle manufacturer or brand.
            </p>
            <p>
              We do not claim ownership of any third-party trademarks or intellectual property. If you are a rights holder and believe your logo or trademark is used improperly, please contact us at{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> and we will promptly take appropriate action.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">17. AI Assistant Disclaimer (GarTrackAI)</h2>
            <p>
              GarTrack includes an optional AI assistant feature (GarTrackAI) that provides vehicle-related information and advice using third-party AI technology (OpenAI API).
            </p>
            <p className="mt-2">
              While we aim to ensure responses are helpful and accurate, GarTrackAI is an automated assistant and may occasionally provide incomplete, outdated, or incorrect information.
              All responses should be considered informational only and <strong>do not replace professional advice</strong> from mechanics, technicians, legal advisors, or other certified experts.
            </p>
            <p className="mt-2">
              GarTrack and its developers are <strong>not responsible</strong> for any actions you take based on suggestions provided by GarTrackAI, including but not limited to vehicle damage, financial loss, regulatory violations, or safety issues.
            </p>
            <p className="mt-2">
              Always verify critical information through official sources or qualified professionals before making decisions related to your vehicle or safety.
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
