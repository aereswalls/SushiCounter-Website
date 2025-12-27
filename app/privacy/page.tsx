import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 px-6 py-16 sm:py-20 font-mono">
      <main className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-10 text-blue-600 hover:underline text-sm"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          Privacy Policy
        </h1>
        <p className="mb-6 text-sm text-neutral-500">Last updated: July 23, 2025</p>

        <p className="mb-6">
          This Privacy Policy describes how user data is handled in the GarTrack app. By using the app, you agree to the practices described below.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">1. Data Collection</h2>
        <p className="mb-6">
          GarTrack collects only the minimum data necessary to provide its services. All sensitive data is stored securely on your device, in your personal iCloud (if you are a PRO user), or in Firebase services. We do not collect names, emails, or contact details unless provided through sign-in methods.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">2. Sign in with Apple / Google / Email</h2>
        <p className="mb-6">
          GarTrack allows you to sign in using “Sign in with Apple”, Google Sign-In, or by registering with email and password. These login methods are used solely for authentication. We store only the user identifier (UID) and email (for email sign-ups) to manage your session. We do not store or use your name, profile information, or email address for marketing or any other purpose.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">3. Firebase Services</h2>
        <p className="mb-6">
          GarTrack integrates the following Firebase services:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Firebase Authentication: to manage login sessions (Apple, Google)</li>
          <li>Firebase Firestore: to store user data like vehicles, fuel logs, maintenance, and checklists</li>
          <li>Firebase Storage: to store user-uploaded documents (photos, PDFs, etc.)</li>
          <li>Firebase Messaging: to deliver optional push notifications (future feature)</li>
          <li>Firebase Analytics: to monitor app performance and usage, using anonymized or pseudonymized data</li>
          <li>Firebase Crashlytics: to monitor app stability and diagnose crashes, using anonymous data</li>
        </ul>
        <p className="mb-6">
          For more information, see{" "}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Firebase Privacy and Security
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Google Privacy Policy
          </a>.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">4. Data Stored</h2>
        <p className="mb-6">
          The following data may be stored locally on your device, in iCloud (for PRO users), or in Firebase:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Vehicle details and configurations</li>
          <li>Fuel and charging entries</li>
          <li>Maintenance logs and expenses</li>
          <li>Trip checklists and reminders</li>
          <li>Uploaded vehicle documents and expiration dates</li>
        </ul>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">5. iCloud Sync (PRO only)</h2>
        <p className="mb-6">
          If enabled, iCloud backup stores your app data in your personal iCloud account. We do not access, analyze, or transmit your iCloud data.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">6. Location Access</h2>
        <p className="mb-6">
          GarTrack may request location access to show nearby electric charging stations. Your location is used only for this purpose and is not stored or transmitted to our servers.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">7. Ads and Third-Party Services</h2>
        <p className="mb-6">
          GarTrack FREE version may display Google AdMob ads. These may use your device’s Advertising Identifier (IDFA) for delivery and performance tracking.
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>You will be asked for consent via Apple’s App Tracking Transparency (ATT) prompt on first launch.</li>
          <li>Ads will not be personalized without explicit permission.</li>
          <li>You can change this at any time in iOS Settings &gt; Privacy &amp; Security &gt; Tracking.</li>
          <li>
            See{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google’s Privacy &amp; Terms
            </a>.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">8. In-App Purchases and RevenueCat</h2>
        <p className="mb-6">
          GarTrack uses RevenueCat to manage in-app purchases and PRO subscriptions. RevenueCat handles subscription status, transaction validation, and syncing across devices.
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>RevenueCat collects anonymized app user identifiers to manage subscriptions.</li>
          <li>No payment information is stored by GarTrack; all transactions are processed through Apple via StoreKit.</li>
          <li>GarTrack uses RevenueCat solely for purchase tracking and entitlement control. No marketing data is collected.</li>
          <li>See{" "}
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              RevenueCat Privacy Policy
            </a>.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">9. In-App Purchases</h2>
        <p className="mb-6">
          PRO access is available through in-app purchases using Apple’s StoreKit. We do not collect or store payment information; payments are handled entirely by Apple.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">10. Notifications</h2>
        <p className="mb-6">
          GarTrack uses local notifications for reminders (maintenance, fuel logs, document renewals, checklists). In the future, optional push notifications may be delivered using Firebase Messaging (FCM), always with your permission.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">11. Crash Reports</h2>
        <p className="mb-6">
          We use Firebase Crashlytics to monitor app stability and diagnose crashes. Reports are anonymous and do not contain personal information.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">12. Data Deletion</h2>
        <p className="mb-6">
          You can delete your account and all associated data directly from the app: go to Settings &gt; Delete Account. This will remove your data from Firebase (Firestore, Storage, Authentication). You can also delete local data by uninstalling the app or, if using iCloud, via your device’s iCloud settings.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">13. Children’s Privacy</h2>
        <p className="mb-6">
          GarTrack is not intended for children under 13. We do not knowingly collect data from children. Contact us if you believe a child has used the app.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">14. Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy periodically. Significant changes will be communicated in-app. Continued use of the app means acceptance of the updated policy.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">15. Contact</h2>
        <p className="mb-6">
          For questions or concerns, contact us at{" "}
          <a href="mailto:info@gartrack.app" className="text-blue-600 underline">
            info@gartrack.app
          </a>.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">16. GDPR Compliance</h2>
        <p className="mb-6">
          If you are a resident of the European Economic Area (EEA) or the United Kingdom (UK), GarTrack processes your data in accordance with the General Data Protection Regulation (GDPR) and similar laws. The legal bases for processing your data are:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Performance of a contract (providing the app and its services)</li>
          <li>Your consent (for example, for advertising and analytics)</li>
          <li>Compliance with legal obligations</li>
          <li>Our legitimate interests (such as improving the app and ensuring security)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">17. User Rights under GDPR</h2>
        <p className="mb-6">
          As a user in the EU/UK, you have the right to:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Access your personal data</li>
          <li>Request correction or deletion of your data</li>
          <li>Object to or restrict certain processing activities</li>
          <li>Withdraw your consent at any time (for example, for ads or analytics)</li>
          <li>Lodge a complaint with your local data protection authority</li>
        </ul>
        <p className="mb-6">
          To exercise these rights, contact us at{" "}
          <a href="mailto:info@gartrack.app" className="text-blue-600 underline">
            info@gartrack.app
          </a>.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">18. Data Retention</h2>
        <p className="mb-6">
          We retain your data only as long as necessary to provide the app’s services, comply with legal obligations, or resolve disputes. If you delete your account, your data will be promptly removed from our systems, except as required by law.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">19. International Data Transfers</h2>
        <p className="mb-6">
          Some of your data may be processed or stored on servers outside your country, including the United States (for Firebase services). Google and Firebase comply with the EU-U.S. Data Privacy Framework and ensure appropriate safeguards for your data.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">20. No Sale of Data</h2>
        <p className="mb-6">
          GarTrack does not sell, rent, or share your personal data with third parties for marketing purposes.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">21. Data Controller</h2>
        <p className="mb-6">
          The data controller for GarTrack is:
        </p>
        <p className="mb-6">
          GarTrack Project<br />
          Email:{" "}
          <a href="mailto:info@gartrack.app" className="text-blue-600 underline">
            info@gartrack.app
          </a>
        </p>

        <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-2">22. AI Features (GarTrackAI)</h2>
        <p className="mb-6">
          GarTrackAI is an optional feature powered by OpenAI. When you interact with it, your prompts may be sent to OpenAI's servers for processing. These prompts can include text related to your vehicle data or questions you ask the assistant.
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>No personal identifiers are included unless explicitly provided by you.</li>
          <li>Data is not stored or used to train OpenAI models, according to their API terms.</li>
          <li>GarTrack does not save AI chat history on its servers. All interactions are processed in-session only.</li>
        </ul>
        <p className="mb-6">
          For more, visit{" "}
          <a
            href="https://openai.com/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            OpenAI’s Privacy Policy
          </a>.
        </p>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
