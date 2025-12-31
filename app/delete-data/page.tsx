import Link from "next/link";

export default function DeleteDataPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 px-6 py-16 sm:py-20 font-mono">
      <main className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-10 text-blue-600 hover:underline text-sm"
        >
          ← Torna alla Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#fe6f40] mb-4">
          Eliminazione Account e Dati
        </h1>
        <p className="mb-8 text-sm text-neutral-500">
          Ultimo aggiornamento: 31 dicembre 2025
        </p>

        <p className="mb-8 text-lg">
          Con <strong className="text-[#fe6f40]">SushiCounter</strong> hai il
          pieno controllo dei tuoi dati. Puoi eliminare il tuo account e tutti
          i dati associati in qualsiasi momento, in modo semplice e definitivo.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#fe6f40]">
          Eliminazione Diretta dall'App
        </h2>
        <p className="mb-4">
          Il modo più semplice e veloce per eliminare il tuo account è farlo
          direttamente dall'app. Segui questi passaggi:
        </p>
        <ol className="list-decimal pl-6 my-6 space-y-3 text-lg">
          <li>
            Apri l'app <strong>SushiCounter</strong> sul tuo dispositivo
          </li>
          <li>
            Vai nella sezione <strong className="text-[#fe6f40]">Profilo</strong>
          </li>
          <li>
            Seleziona <strong className="text-[#fe6f40]">Impostazioni</strong>
          </li>
          <li>
            Tocca <strong className="text-[#fe6f40]">Elimina Account</strong>
          </li>
        </ol>
        <p className="mb-8">
          L'eliminazione è <strong>immediata e definitiva</strong>. Una volta
          confermata, tutti i tuoi dati verranno rimossi permanentemente dai
          nostri server.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#fe6f40]">
          Richiesta via Email
        </h2>
        <p className="mb-4">
          Se non riesci ad accedere all'app o preferisci richiedere l'eliminazione
          tramite email, puoi contattare il nostro supporto a:
        </p>
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 my-6">
          <a
            href="mailto:sushicounterapp@gmail.com"
            className="text-lg text-blue-600 hover:underline font-semibold"
          >
            sushicounterapp@gmail.com
          </a>
        </div>
        <p className="mb-8">
          Nella tua richiesta, includi l'indirizzo email associato al tuo account
          o altre informazioni che ci aiutino a identificarlo. Procederemo
          all'eliminazione entro <strong>7 giorni lavorativi</strong> dalla
          ricezione della richiesta e ti invieremo una conferma.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#fe6f40]">
          Quali Dati Vengono Eliminati
        </h2>
        <p className="mb-4">
          Quando elimini il tuo account, vengono rimossi definitivamente:
        </p>
        <ul className="list-disc pl-6 my-6 space-y-2">
          <li>ID utente univoco (UID) generato da Firebase</li>
          <li>Nome utente o alias scelto</li>
          <li>Tutte le statistiche di gioco (sessioni vinte, pezzi contati, record)</li>
          <li>Dati delle sessioni multigiocatore create o a cui hai partecipato</li>
          <li>Credenziali di autenticazione (email e password, se utilizzate)</li>
          <li>Tutti i dati salvati su Firebase Firestore e Authentication</li>
        </ul>
        <p className="mb-8">
          L'eliminazione è <strong className="text-[#fe6f40]">irreversibile</strong>.
          Non conserviamo copie o backup dei dati eliminati.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#fe6f40]">
          Periodo di Conservazione
        </h2>
        <p className="mb-8">
          Non applichiamo alcun periodo di conservazione aggiuntivo. Una volta
          completata l'eliminazione, i tuoi dati vengono rimossi immediatamente
          e in modo permanente dai nostri server. Se hai effettuato acquisti
          in-app, le informazioni sulle transazioni potrebbero essere conservate
          da Apple o Google secondo le loro politiche, ma noi non conserviamo
          alcun dato di pagamento.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#fe6f40]">
          Hai Domande?
        </h2>
        <p className="mb-8">
          Per qualsiasi dubbio o richiesta di assistenza riguardo all'eliminazione
          del tuo account o dei tuoi dati, contattaci a{" "}
          <a
            href="mailto:sushicounterapp@gmail.com"
            className="text-blue-600 underline"
          >
            sushicounterapp@gmail.com
          </a>
          . Siamo qui per aiutarti.
        </p>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 mb-4">
            Per maggiori informazioni sul trattamento dei dati, consulta la nostra{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              Informativa sulla Privacy
            </Link>.
          </p>
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
