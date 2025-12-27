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

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Domande Frequenti (FAQ)</h1>
        <p className="text-sm text-neutral-500 mb-10">Ultimo aggiornamento: 14 luglio 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">Cos’è GarTrack?</h2>
            <p>
              GarTrack è un'app mobile pensata per aiutarti a gestire tutti gli aspetti dei tuoi veicoli, inclusi rifornimenti, manutenzioni, spese, documenti, checklist e promemoria, tutto in un unico posto.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cos’è GarTrack PRO?</h2>
            <p>
              GarTrack PRO è un aggiornamento premium che sblocca funzionalità aggiuntive come la gestione illimitata dei veicoli (gli utenti free sono limitati a uno), backup e ripristino su iCloud, e un’esperienza senza pubblicità.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Come vengono gestiti i miei dati personali e i documenti caricati?</h2>
            <p>
              Tutti i dati inseriti o caricati (inclusi documenti, foto e note) sono salvati localmente sul tuo dispositivo. Se sei un utente PRO e abiliti il backup iCloud, questi dati vengono archiviati in modo sicuro nel tuo account iCloud personale. Noi di GarTrack non accediamo, memorizziamo o elaboriamo i tuoi dati sui nostri server. La tua privacy e la sicurezza dei tuoi dati sono la nostra priorità.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Accedete o vendete i miei dati?</h2>
            <p>
              No. Non accediamo, vendiamo o condividiamo i tuoi dati. Qualsiasi dato salvato su iCloud rimane sotto il tuo controllo ed è protetto dalle misure di sicurezza e privacy di Apple. Non monetizziamo i dati degli utenti.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Come funziona il backup iCloud?</h2>
            <p>
              Per gli utenti PRO, il backup iCloud salva in modo sicuro i tuoi dati GarTrack, inclusi veicoli, rifornimenti, manutenzioni, spese, documenti e promemoria. Il ripristino da iCloud è possibile solo su dispositivi collegati allo stesso ID Apple.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Perché vedo annunci nell'app?</h2>
            <p>
              Gli utenti free vedono annunci forniti da Google AdMob. Questi annunci aiutano a supportare lo sviluppo e la manutenzione di GarTrack. Puoi rimuovere gli annunci in qualsiasi momento passando a GarTrack PRO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Quali metodi di pagamento sono accettati per GarTrack PRO?</h2>
            <p>
              I pagamenti per PRO sono gestiti tramite l’App Store di Apple. Non raccogliamo né memorizziamo i dettagli di pagamento. Puoi scegliere piani mensili, annuali o a vita, e gestire o cancellare gli abbonamenti direttamente nelle impostazioni del tuo account Apple ID.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cosa succede se elimino l’app?</h2>
            <p>
              Eliminare l’app rimuove tutti i dati salvati localmente. Se sei un utente PRO con backup iCloud attivo, puoi ripristinare i tuoi dati dopo la reinstallazione, a condizione di essere connesso con lo stesso ID Apple e ripristinare da iCloud.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Utilizzate la mia posizione?</h2>
            <p>
              Richiediamo l’accesso alla posizione solo se utilizzi funzionalità come la mappa delle stazioni di ricarica elettrica. I tuoi dati di posizione vengono utilizzati esclusivamente a questo scopo e non vengono memorizzati né condivisi con terze parti.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cos’è GarTrackAI e come funziona?</h2>
            <p>
              GarTrackAI è il nostro assistente virtuale intelligente che ti aiuta con domande su manutenzione, consumi, sicurezza, normative e tutto ciò che riguarda i veicoli: auto, moto, camion e barche.
              Può darti consigli su controlli stagionali, documenti da preparare per un viaggio, spiegazioni su spie accese, normative locali o su quali pneumatici o oli sono compatibili.
            </p>
            <p className="mt-2">
            Le risposte sono generate da un modello AI basato su OpenAI. I messaggi che invii vengono elaborati in modo sicuro tramite API esterne, ma <strong>non vengono salvati né usati per il training</strong>. L’AI non accede ai tuoi dati personali e le risposte sono solo a scopo informativo.
            </p>
            <p className="mt-2">
            GarTrackAI non fornisce consigli su dove acquistare prodotti, non fa pubblicità e non sostituisce l’intervento di un esperto certificato. Per situazioni complesse o urgenti, rivolgiti sempre a un professionista qualificato.
            </p>
            </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Ho problemi o ho trovato un bug. Cosa devo fare?</h2>
            <p>
              Ci dispiace per l’inconveniente! Scrivici a{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> con i dettagli del problema, il modello del dispositivo e la versione di iOS. Faremo del nostro meglio per aiutarti e migliorare l’app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Come posso richiedere la cancellazione dei dati o esercitare i miei diritti GDPR?</h2>
            <p>
              Puoi contattarci a{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> per richiedere accesso, correzione o cancellazione dei tuoi dati. Rispettiamo tutti i diritti degli utenti previsti dal GDPR e normative correlate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Posso trasferire l’abbonamento su un altro dispositivo?</h2>
            <p>
              Sì. Il tuo abbonamento PRO è legato al tuo ID Apple, quindi puoi ripristinare l’acquisto su qualsiasi dispositivo collegato allo stesso account Apple toccando “Ripristina Acquisto” nelle impostazioni dell’app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Ogni quanto aggiornate GarTrack?</h2>
            <p>
              Sviluppiamo attivamente GarTrack e rilasciamo regolarmente aggiornamenti con nuove funzionalità, miglioramenti e correzioni di bug. Puoi controllare sull’App Store per gli ultimi aggiornamenti.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/" className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition">
            ← Torna alla Home
          </Link>
        </div>
      </main>

      <footer className="text-xs text-neutral-400 mt-20 text-center">
        &copy; {new Date().getFullYear()} GarTrack. Tutti i diritti riservati.
      </footer>
    </div>
  );
}
