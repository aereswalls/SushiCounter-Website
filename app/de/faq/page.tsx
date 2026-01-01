"use client";

import Link from "next/link";

export default function FAQPageDE() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
      <main className="w-full max-w-3xl">
        <div className="flex justify-end mb-6 space-x-4">
          <Link href="/faq" className="text-sm text-neutral-500 hover:underline">EN 🇬🇧</Link>
          <Link href="/it/faq" className="text-sm text-neutral-500 hover:underline">IT 🇮🇹</Link>
          <Link href="/fr/faq" className="text-sm text-neutral-500 hover:underline">FR 🇫🇷</Link>
          <Link href="/es/faq" className="text-sm text-neutral-500 hover:underline">ES 🇪🇸</Link>
          <Link href="/de/faq" className="text-sm text-neutral-500 hover:underline font-bold">DE 🇩🇪</Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#fe6f41]">Häufig gestellte Fragen (FAQ)</h1>
        <p className="text-sm text-neutral-500 mb-10">Letzte Aktualisierung: 27. Dezember 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Was ist SushiCounter?</h2>
            <p>
              SushiCounter ist die ultimative App für All-you-can-eat‑Challenges! Erstelle Sessions mit Freunden, zähle die Stücke in Echtzeit und finde heraus, wer der wahre Sushi‑Champion ist.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Wie funktionieren die Sessions?</h2>
            <p>
              Erstelle eine neue Session oder tritt mit einem Code bei. Während des Essens zählt jeder Teilnehmer seine eigenen Stücke. Die Rangliste wird für alle in Echtzeit aktualisiert!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Was beinhaltet die kostenlose Version?</h2>
            <p>
              Du kannst Sessions mit bis zu 2 Teilnehmern erstellen, deine persönlichen Rekorde verfolgen und den Verlauf deiner Challenges einsehen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Was bietet SushiCounter Premium?</h2>
            <p>
              Mit Premium schaltest du Sessions mit bis zu 20 Teilnehmern frei – perfekt für große Gruppen und Partys. Ideal für epische Challenges!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Wie funktioniert der Session‑Code?</h2>
            <p>
              Wenn du eine Session erstellst, erhältst du einen eindeutigen alphanumerischen Code mit 6 Zeichen. Teile ihn mit deinen Freunden, damit sie sofort beitreten können.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Kann ich die Zählung korrigieren, wenn ich mich vertue?</h2>
            <p>
              Ja! Verwende die Schaltfläche „Rückgängig“, um die Zählung im Falle eines Fehlers zu verringern. Du kannst jederzeit während der Session korrigieren.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Was passiert, wenn ich eine Session beende?</h2>
            <p>
              Alle Daten werden automatisch im Verlauf jedes Teilnehmers gespeichert. Du kannst Ranglisten, Punkte und Statistiken jederzeit erneut ansehen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Wie funktioniert die globale Rangliste?</h2>
            <p>
              Tritt gegen Nutzer aus der ganzen Welt an! Die Rangliste zeigt die besten Sushi‑Esser nach persönlichem Rekord und Anzahl gewonnener Sessions an.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Kann ich mein Profil aus der Rangliste ausblenden?</h2>
            <p>
              Ja, gehe zu den Einstellungen und deaktiviere „In der Rangliste sichtbar“. Dein Profil bleibt privat und erscheint nicht in der globalen Rangliste.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Wie erhalte ich SushiCounter Premium?</h2>
            <p>
              Gehe zu deinem Profil und tippe auf die Schaltfläche Premium. Wähle das gewünschte Abo und schalte alle erweiterten Funktionen frei.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Wie kündige ich das Premium‑Abonnement?</h2>
            <p>
              <strong>iOS:</strong> Gehe zu Einstellungen → [Dein Name] → Abonnements → SushiCounter und verwalte oder kündige dort dein Abonnement.
            </p>
            <p className="mt-2">
              <strong>Android:</strong> Öffne den Google Play Store → Menü → Abonnements → SushiCounter und verwalte oder kündige dein Abonnement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Kann ich mein Konto löschen?</h2>
            <p>
              Gehe in den SushiCounter‑Einstellungen auf „Konto löschen“. Dadurch werden alle deine Daten entfernt und du kannst nicht mehr auf dein Profil zugreifen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Kann ich SushiCounter offline verwenden?</h2>
            <p>
              Das Erstellen oder Beitreten zu einer Session erfordert eine Internetverbindung, aber das Erhöhen des Punktestands in aktiven Sessions funktioniert auch offline. Wenn es in einem Restaurant kein Netz gibt, frage das Personal nach dem WLAN‑Zugang.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Sind meine Daten sicher?</h2>
            <p>
              Auf jeden Fall! Alle Verbindungen sind verschlüsselt. Lies die{" "}
              <a href="/privacy" className="text-[#fe6f41] underline font-semibold">Datenschutzerklärung</a> für weitere Details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Wie kann ich ein Problem oder einen Bug melden?</h2>
            <p>
              Gehe zu Einstellungen → Support und sende uns eine E‑Mail an{" "}
              <a href="mailto:sushicounterapp@gmail.com" className="text-[#fe6f41] underline font-semibold">sushicounterapp@gmail.com</a>. Wir antworten in der Regel innerhalb von 24–48 Stunden und helfen dir gerne weiter!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Kann ich SushiCounter auch für andere Arten von Essen verwenden?</h2>
            <p>
              Natürlich! Auch wenn die App für Sushi gedacht ist, kannst du sie für jede Art von kulinarischer Challenge nutzen: Dim Sum, Tapas, Buffetgerichte… Viel Spaß!
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/" className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition">
            ← Zur Startseite zurückkehren
          </Link>
        </div>
      </main>

      <footer className="text-xs text-neutral-400 mt-20 text-center">
        &copy; {new Date().getFullYear()} SushiCounter. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
