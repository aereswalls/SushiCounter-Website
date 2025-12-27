"use client";

import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
      <main className="w-full max-w-3xl">
        <div className="flex justify-end mb-6 space-x-4">
          <Link href="/faq" className="text-sm text-neutral-500 hover:underline">EN 🇬🇧</Link>
          <Link href="/it/faq" className="text-sm text-neutral-500 hover:underline font-bold">IT 🇮🇹</Link>
          <Link href="/fr/faq" className="text-sm text-neutral-500 hover:underline">FR 🇫🇷</Link>
          <Link href="/es/faq" className="text-sm text-neutral-500 hover:underline">ES 🇪🇸</Link>
          <Link href="/de/faq" className="text-sm text-neutral-500 hover:underline">DE 🇩🇪</Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Domande Frequenti (FAQ)</h1>
        <p className="text-sm text-neutral-500 mb-10">Ultimo aggiornamento: 27 dicembre 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">Cos'è SushiCounter?</h2>
            <p>
              SushiCounter è l'app definitiva per le sfide all you can eat! Crea sessioni con amici, conta i pezzi in tempo reale e scopri chi è il vero campione di sushi.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Come funzionano le sessioni?</h2>
            <p>
              Crea una nuova sessione o unisciti con un codice. Durante il pasto, ogni partecipante conta i propri pezzi. La classifica si aggiorna in tempo reale per tutti!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cosa include la versione gratuita?</h2>
            <p>
              Puoi creare sessioni fino a 2 partecipanti, tenere traccia dei tuoi record personali e visualizzare lo storico delle tue sfide.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cosa offre SushiCounter Premium?</h2>
            <p>
              Con Premium sblocchi sessioni fino a 20 partecipanti, perfetto per grandi gruppi e feste. Ideale per sfide epiche!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Come funziona il codice sessione?</h2>
            <p>
              Quando crei una sessione, ricevi un codice alfanumerico univoco di 6 caratteri. Condividilo con gli amici che potranno unirsi istantaneamente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Posso modificare il conteggio se sbaglio?</h2>
            <p>
              Sì! Usa il pulsante 'Annulla' per decrementare il conteggio in caso di errore. Puoi correggere in qualsiasi momento durante la sessione.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cosa succede se termino una sessione?</h2>
            <p>
              Tutti i dati vengono salvati automaticamente nello storico di ogni partecipante. Potrai rivedere classifiche, punteggi e statistiche quando vuoi.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Come funziona la classifica globale?</h2>
            <p>
              Compete con utenti da tutto il mondo! La classifica mostra i migliori mangiatori di sushi per record personale e numero di sessioni vinte.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Posso nascondere il mio profilo dalla classifica?</h2>
            <p>
              Sì, vai in Impostazioni e disattiva 'Visibile nella Classifica'. Il tuo profilo resterà privato e non apparirà nella classifica globale.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Come ottengo SushiCounter Premium?</h2>
            <p>
              Vai nel tuo Profilo e tocca il pulsante Premium. Scegli il piano che preferisci e sblocca tutte le funzionalità avanzate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Come cancello l'abbonamento Premium?</h2>
            <p>
              <strong>iOS:</strong> Vai nelle Impostazioni → [Il tuo nome] → Abbonamenti → SushiCounter, e gestisci o cancella l'abbonamento da lì.
            </p>
            <p className="mt-2">
              <strong>Android:</strong> Apri Google Play Store → Menu → Abbonamenti → SushiCounter, e gestisci o cancella l'abbonamento.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Posso cancellare il mio account?</h2>
            <p>
              Sì. Vai nelle Impostazioni di SushiCounter e tocca "Elimina Account". Questo rimuoverà tutti i tuoi dati in modo permanente e non potrai più accedere al tuo profilo. Questa azione è irreversibile.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Posso usare SushiCounter offline?</h2>
            <p>
              La creazione di una sessione o la partecipazione a una sessione richiede una connessione Internet. L'incremento del punteggio nelle sessioni attive funziona anche offline e si sincronizza automaticamente quando torni online.
            </p>
            <p className="mt-2">
              <strong>Consiglio:</strong> In caso di assenza di segnale Internet in un locale, chiedi l'accesso Wi-Fi al personale del ristorante.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">I miei dati sono al sicuro?</h2>
            <p>
              Assolutamente sì! Utilizziamo Firebase Authentication per la gestione degli account e tutte le comunicazioni sono crittografate end-to-end. Non vendiamo né condividiamo i tuoi dati con terze parti. Leggi la nostra{" "}
              <a href="/it/privacy" className="text-[#fe6f41] underline">Privacy Policy</a> per maggiori dettagli.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Come segnalo un problema o un bug?</h2>
            <p>
              Ci dispiace per l'inconveniente! Vai in Impostazioni → Supporto e inviaci un'email a{" "}
              <a href="mailto:sushicounterapp@gmail.com" className="text-[#fe6f41] underline">sushicounterapp@gmail.com</a>. Rispondiamo entro 24-48 ore e siamo sempre felici di aiutarti!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Posso usare SushiCounter per altri tipi di cibo?</h2>
            <p>
              Certo! Anche se è pensata per il sushi, puoi usarla per qualsiasi sfida culinaria: dim sum, tapas, piatti in buffet, hot pot... Divertiti e che vinca il migliore!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Come posso richiedere la cancellazione dei dati o esercitare i miei diritti GDPR?</h2>
            <p>
              Puoi contattarci a{" "}
              <a href="mailto:sushicounterapp@gmail.com" className="text-[#fe6f41] underline">sushicounterapp@gmail.com</a> per richiedere accesso, correzione o cancellazione dei tuoi dati personali. Rispettiamo tutti i diritti degli utenti previsti dal GDPR e normative correlate. Riceverai risposta entro 30 giorni.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Posso trasferire l'abbonamento Premium su un altro dispositivo?</h2>
            <p>
              <strong>iOS:</strong> Sì, il tuo abbonamento Premium è legato al tuo ID Apple. Accedi con lo stesso Apple ID sul nuovo dispositivo e tocca "Ripristina Acquisto" nelle impostazioni dell'app.
            </p>
            <p className="mt-2">
              <strong>Android:</strong> Sì, l'abbonamento è legato al tuo account Google. Accedi con lo stesso account Google sul nuovo dispositivo e l'abbonamento si sincronizzerà automaticamente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Ogni quanto aggiornate SushiCounter?</h2>
            <p>
              Sviluppiamo attivamente SushiCounter e rilasciamo regolarmente aggiornamenti con nuove funzionalità, miglioramenti delle prestazioni e correzioni di bug. Controlla l'App Store (iOS) o Google Play Store (Android) per gli ultimi aggiornamenti.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/it" className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition">
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
