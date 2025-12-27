"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
      <main className="w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Termini e Condizioni d’Uso</h1>
        <p className="text-sm text-neutral-500 mb-10">Ultimo aggiornamento: 27 dicembre 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Accettazione dei Termini</h2>
            <p>
              Utilizzando l’app <strong>SushiCounter</strong> o accedendo al sito web, accetti i presenti Termini e Condizioni. Se non sei d’accordo, ti invitiamo a non utilizzare l’applicazione.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Utilizzo dell’App</h2>
            <p>
              SushiCounter offre strumenti per contare i pezzi di sushi e partecipare a sfide con altri utenti. Sei responsabile dell’uso corretto dell’app e dei contenuti inseriti durante le sessioni.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Account e Autenticazione</h2>
            <p>
              Puoi accedere a SushiCounter tramite “Accedi con Apple”, “Accedi con Google” oppure registrandoti manualmente con email e password. Questi metodi vengono utilizzati esclusivamente a fini di autenticazione.
              Non raccogliamo né conserviamo credenziali di accesso Apple o Google. Le informazioni personali (come l’email) vengono conservate solo se necessario per l’accesso, come descritto nella nostra{" "}
              <Link href="/privacy" className="text-blue-600 underline">Informativa sulla Privacy</Link>.
              Non utilizziamo i tuoi dati per fini pubblicitari o di marketing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Acquisti In-App e Abbonamenti</h2>
            <p>
              Le funzioni opzionali PRO sono disponibili tramite acquisti in-app gestiti da <strong>Apple App Store</strong> e <strong>Google tramite Google Play</strong>. Le transazioni e la fatturazione sono regolate dalle politiche di Apple e Google.
              SushiCounter non gestisce né memorizza i dati di pagamento. Gli abbonamenti vengono elaborati e gestiti in modo sicuro da <strong>RevenueCat</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Conservazione dei Dati</h2>
            <p>
              I dati vengono gestiti tramite <strong>Firebase</strong> (Firestore, Authentication) e servono esclusivamente per permettere all’app di funzionare correttamente.
              Puoi richiedere l’eliminazione del tuo account e dei tuoi dati in qualsiasi momento come indicato nella{" "}
              <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Diritti degli Utenti e GDPR</h2>
            <p>
              Se risiedi nello Spazio Economico Europeo (SEE) o nel Regno Unito, SushiCounter tratta i tuoi dati conformemente al <strong>Regolamento Generale sulla Protezione dei Dati (GDPR)</strong>.
              Hai il diritto di accedere, correggere o eliminare i tuoi dati e di revocare il consenso in qualsiasi momento.
              Per esercitare i tuoi diritti puoi contattarci via email all’indirizzo{" "}
              <a href="mailto:sushicounterapp@gmail.com" className="text-blue-600 underline">sushicounterapp@gmail.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Proprietà Intellettuale</h2>
            <p>
              Tutti i contenuti, il design, il codice sorgente e i marchi legati a SushiCounter sono di proprietà dei rispettivi titolari del progetto.
              Non è consentito copiare, modificare, distribuire o decodificare il software senza autorizzazione scritta.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Limitazione di Responsabilità</h2>
            <p>
              SushiCounter è fornita “così com’è”, senza alcuna garanzia esplicita o implicita.
              Non garantiamo che l’app sia priva di errori o sempre disponibile e non siamo responsabili di eventuali perdite di dati o danni derivanti dall’uso dell’applicazione.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Assenza di Pubblicità e Servizi di Terze Parti</h2>
            <p>
              SushiCounter non contiene annunci pubblicitari e non utilizza strumenti di analisi o tracciamento (come Google Analytics).
              Le uniche integrazioni presenti sono quelle necessarie per l'autenticazione e la gestione degli abbonamenti.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. Eliminazione dell’Account</h2>
            <p>
              Puoi eliminare il tuo account in qualunque momento accedendo alle impostazioni dell’app e selezionando “Elimina Account”.
              Questa azione rimuoverà in modo permanente i tuoi dati dai nostri server Firebase e da ogni altro sistema connesso.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">11. Aggiornamenti ai Termini</h2>
            <p>
              Potremmo aggiornare periodicamente i presenti Termini e Condizioni.
              Le modifiche rilevanti saranno comunicate direttamente in-app o sul sito web ufficiale.
              L’uso continuato dell’app dopo tali modifiche implica l’accettazione dei nuovi Termini.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">12. Contatti</h2>
            <p>
              Per domande o segnalazioni relative a questi Termini e Condizioni, puoi scrivere a:{" "}
              <a href="mailto:sushicounterapp@gmail.com" className="text-blue-600 underline">sushicounterapp@gmail.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">13. Marchi Registrati</h2>
            <p>
              Tutti i marchi, loghi e nomi commerciali eventualmente mostrati in SushiCounter appartengono ai rispettivi proprietari.
              L’uso di tali marchi è puramente descrittivo e serve ad identificare caratteristiche o compatibilità del servizio.
              SushiCounter non è affiliata, sponsorizzata o approvata da nessun marchio esterno.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition"
          >
            ← Torna alla Home
          </Link>
        </div>
      </main>

      <footer className="text-xs text-neutral-400 mt-20 text-center">
        &copy; {new Date().getFullYear()} SushiCounter. Tutti i diritti riservati.
      </footer>
    </div>
  );
}
