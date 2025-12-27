import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 px-6 py-16 sm:py-20 font-mono">
      <main className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-10 text-blue-600 hover:underline text-sm"
        >
          ← Torna alla Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          Informativa sulla Privacy
        </h1>
        <p className="mb-6 text-sm text-neutral-500">
          Ultimo aggiornamento: 27 dicembre 2025
        </p>

        <p className="mb-6">
          La presente Informativa sulla Privacy descrive come vengono gestiti i
          dati personali degli utenti dell’app <strong>SushiCounter</strong>.
          Utilizzando l’app, accetti le pratiche qui descritte.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          1. Raccolta dei Dati
        </h2>
        <p className="mb-6">
          SushiCounter non raccoglie né conserva dati personali sensibili. Tutti
          i dati inseriti dagli utenti (come nome, statistiche di gioco o sessioni)
          vengono gestiti tramite <strong>Firebase</strong> in modo sicuro e sono
          utilizzati esclusivamente per il funzionamento dell’applicazione.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          2. Servizi Utilizzati
        </h2>
        <p className="mb-6">
          L’app utilizza i seguenti servizi di terze parti per fornire le proprie
          funzionalità:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>
            <strong>Firebase Core</strong>: per la configurazione e l’integrazione
            dei servizi Firebase.
          </li>
          <li>
            <strong>Firebase Firestore</strong>: per archiviare in modo sicuro dati
            essenziali come sessioni, statistiche e informazioni sulle partite.
          </li>
          <li>
            <strong>Firebase Authentication</strong>: per consentire l’accesso e la
            gestione dell’account utente.
          </li>
          <li>
            <strong>Accesso con Apple</strong>: utilizzato solo per autenticare
            l’utente. Non vengono condivise ulteriori informazioni personali.
          </li>
          <li>
            <strong>Accesso con Google</strong>: utilizzato unicamente per
            l’autenticazione. Nessun dato aggiuntivo (come nome o email) viene
            usato per scopi di marketing o analisi.
          </li>
          <li>
            <strong>Registrazione manuale (email e password)</strong>: le credenziali
            inserite vengono gestite da Firebase Authentication in modo sicuro. Non
            memorizziamo le password in chiaro.
          </li>
          <li>
            <strong>RevenueCat</strong>: utilizzato per gestire gli abbonamenti
            e gli acquisti in-app. Non vengono raccolte o salvate informazioni
            di pagamento; tutte le transazioni avvengono tramite Apple.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          3. Pubblicità e Analisi
        </h2>
        <p className="mb-6">
          SushiCounter non utilizza alcun sistema pubblicitario (come Google AdMob)
          e non implementa strumenti di analisi o tracciamento (come Google Analytics
          o Firebase Analytics). L’app è completamente priva di annunci e non monitora
          il comportamento degli utenti.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          4. Dati Conservati
        </h2>
        <p className="mb-6">
          I dati eventualmente conservati includono:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>ID utente generato in modo univoco (UID) tramite Firebase</li>
          <li>Nome utente o alias scelto dall’utente</li>
          <li>Statistiche di gioco (es. sessioni vinte, pezzi contati, record)</li>
          <li>Dati delle sessioni multigiocatore create o a cui si partecipa</li>
        </ul>
        <p className="mb-6">
          Queste informazioni sono necessarie esclusivamente per permettere il corretto
          funzionamento dell’app e non vengono utilizzate per altri scopi.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          5. Eliminazione dei Dati e dell’Account
        </h2>
        <p className="mb-6">
          È possibile eliminare in qualsiasi momento il proprio account e tutti i dati
          associati direttamente dall’app, accedendo a{" "}
          <strong>Impostazioni &gt; Elimina Account</strong>. Questo comporta la
          rimozione definitiva dei dati da Firebase (Firestore e Authentication). 
          Inoltre, disinstallando l’app vengono rimossi eventuali dati locali presenti
          sul dispositivo.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          6. Conservazione dei Dati
        </h2>
        <p className="mb-6">
          I dati vengono conservati soltanto per il tempo necessario a fornire i servizi
          dell’app. Una volta eliminato l’account, i dati vengono definitivamente rimossi
          dai server. SushiCounter non conserva copie o backup esterni.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          7. Condivisione dei Dati
        </h2>
        <p className="mb-6">
          I dati degli utenti non vengono condivisi, venduti o ceduti a terze parti per
          alcun motivo. Non vengono trasmessi dati a fini di marketing o pubblicità.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">8. Sicurezza</h2>
        <p className="mb-6">
          SushiCounter si avvale di <strong>Firebase Security</strong> e di protocolli
          di sicurezza avanzati per proteggere i dati memorizzati. Tutte le connessioni
          avvengono tramite HTTPS e le informazioni sensibili sono gestite secondo le
          pratiche di sicurezza di Google e RevenueCat.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          9. Minori
        </h2>
        <p className="mb-6">
          L’app non è destinata a utenti di età inferiore a 13 anni. Non raccogliamo
          intenzionalmente alcun dato personale da minori.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          10. Modifiche a Questa Informativa
        </h2>
        <p className="mb-6">
          La presente Informativa sulla Privacy potrà essere aggiornata nel tempo per
          riflettere modifiche tecniche o normative. In caso di aggiornamenti
          significativi, verrà mostrata una notifica direttamente in-app.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          11. Contatti
        </h2>
        <p className="mb-6">
          Per qualsiasi domanda o richiesta relativa a questa informativa puoi scrivere a:{" "}
          <a
            href="mailto:sushicounterapp@gmail.com"
            className="text-blue-600 underline"
          >
            sushicounterapp@gmail.com
          </a>.
        </p>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition"
          >
            ← Torna alla Home
          </Link>
        </div>
      </main>
    </div>
  );
}
