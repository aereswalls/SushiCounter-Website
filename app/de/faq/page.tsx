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

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Häufig gestellte Fragen (FAQ)</h1>
        <p className="text-sm text-neutral-500 mb-10">Zuletzt aktualisiert: 14. Juli 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">Was ist GarTrack?</h2>
            <p>
              GarTrack ist eine mobile App, die Ihnen hilft, alle Aspekte Ihrer Fahrzeuge zu verwalten, einschließlich Tanken, Wartung, Ausgaben, Dokumente, Checklisten und Erinnerungen – alles an einem Ort.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Was ist GarTrack PRO?</h2>
            <p>
              GarTrack PRO ist ein Premium-Upgrade, das zusätzliche Funktionen freischaltet, wie z. B. unbegrenzte Fahrzeugverwaltung (kostenlose Nutzer sind auf ein Fahrzeug beschränkt), iCloud-Backup und -Wiederherstellung sowie eine werbefreie Nutzung.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Wie werden meine persönlichen Daten und hochgeladenen Dokumente behandelt?</h2>
            <p>
              Alle eingegebenen oder hochgeladenen Daten (einschließlich Dokumente, Fotos und Notizen) werden lokal auf Ihrem Gerät gespeichert. Wenn Sie PRO-Nutzer sind und iCloud-Backup aktivieren, werden diese Daten sicher in Ihrem persönlichen iCloud-Konto gespeichert. Wir bei GarTrack haben keinen Zugriff auf Ihre Daten, speichern oder verarbeiten sie nicht auf unseren Servern. Ihre Privatsphäre und Datensicherheit haben für uns oberste Priorität.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Greift ihr auf meine Daten zu oder verkauft ihr sie?</h2>
            <p>
              Nein. Wir greifen nicht auf Ihre Daten zu, verkaufen sie nicht und geben sie nicht weiter. Alle in iCloud gespeicherten Daten bleiben unter Ihrer Kontrolle und sind durch Apples Sicherheits- und Datenschutzmaßnahmen geschützt. Wir monetarisieren keine Nutzerdaten.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Wie funktioniert das iCloud-Backup?</h2>
            <p>
              Für PRO-Nutzer speichert das iCloud-Backup Ihre GarTrack-Daten sicher, einschließlich Fahrzeuge, Tankaufzeichnungen, Wartung, Ausgaben, Dokumente und Erinnerungen. Die Wiederherstellung aus iCloud ist nur auf Geräten möglich, die mit derselben Apple-ID angemeldet sind.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Warum sehe ich Werbung in der App?</h2>
            <p>
              Kostenlose Nutzer sehen Werbung von Google AdMob. Diese Werbung hilft, die Entwicklung und Wartung von GarTrack zu unterstützen. Sie können die Werbung jederzeit entfernen, indem Sie auf GarTrack PRO upgraden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Welche Zahlungsmethoden werden für GarTrack PRO akzeptiert?</h2>
            <p>
              Zahlungen für PRO erfolgen über den Apple App Store. Wir erheben oder speichern keine Zahlungsdaten. Sie können zwischen monatlichen, jährlichen oder lebenslangen Plänen wählen und Ihre Abonnements direkt in den Einstellungen Ihres Apple-ID-Kontos verwalten oder kündigen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Was passiert, wenn ich die App lösche?</h2>
            <p>
              Das Löschen der App entfernt alle lokal gespeicherten Daten. Wenn Sie PRO-Nutzer mit aktiviertem iCloud-Backup sind, können Sie Ihre Daten nach der Neuinstallation der App wiederherstellen, sofern Sie mit derselben Apple-ID angemeldet sind und aus iCloud wiederherstellen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Verwendet ihr meinen Standort?</h2>
            <p>
              Wir fragen nur dann nach dem Standortzugriff, wenn Sie Funktionen wie die Karte der Ladestationen nutzen. Ihre Standortdaten werden ausschließlich zu diesem Zweck verwendet und niemals gespeichert oder an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Ich habe ein Problem oder einen Fehler gefunden. Was soll ich tun?</h2>
            <p>
              Es tut uns leid zu hören! Bitte senden Sie uns eine E-Mail an{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> mit Details zum Problem, Ihrem Gerätemodell und der iOS-Version. Wir werden unser Bestes tun, um zu helfen und die App zu verbessern.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Wie kann ich die Löschung meiner Daten beantragen oder meine GDPR-Rechte ausüben?</h2>
            <p>
              Sie können uns unter{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> kontaktieren, um Zugriff, Korrektur oder Löschung Ihrer Daten zu beantragen. Wir respektieren alle Benutzerrechte gemäß der DSGVO und ähnlicher Vorschriften.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Kann ich mein Abonnement auf ein anderes Gerät übertragen?</h2>
            <p>
              Ja. Ihr PRO-Abonnement ist mit Ihrer Apple-ID verknüpft, sodass Sie Ihren Kauf auf jedem Gerät wiederherstellen können, das mit demselben Apple-Konto angemeldet ist, indem Sie in den App-Einstellungen auf „Kauf wiederherstellen“ tippen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Wie oft aktualisiert ihr GarTrack?</h2>
            <p>
              Wir entwickeln GarTrack aktiv weiter und veröffentlichen regelmäßig Updates mit neuen Funktionen, Verbesserungen und Fehlerbehebungen. Sie können im App Store nach den neuesten Updates suchen.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/" className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition">
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>

      <footer className="text-xs text-neutral-400 mt-20 text-center">
        &copy; {new Date().getFullYear()} GarTrack. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
