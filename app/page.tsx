import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SushiCounter – L'app per contare il sushi e sfidare gli amici</title>
        <meta
          name="description"
          content="SushiCounter ti permette di contare i pezzi di sushi in tempo reale e sfidare i tuoi amici. Crea o unisciti a una sessione, conta ogni pezzo e scopri chi è il campione del sushi!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
        <main className="w-full max-w-4xl flex flex-col gap-10 text-center items-center">
          <Image src="/sushicounter-logo.png" alt="Logo SushiCounter" width={120} height={120} className="dark:invert" />

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">SushiCounter</h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-xl">
            L'app definitiva per contare i pezzi di sushi e sfidare i tuoi amici.
            Conta ogni pezzo, affronta il tuo gruppo e domina la classifica — tutto in tempo reale.
          </p>

          {/* Funzionalità */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left w-full max-w-2xl mt-4">
            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-red-900">Sessioni in Tempo Reale</h2>
              <p className="text-sm text-red-800">Crea o unisciti a una sessione con un semplice codice e conta il sushi insieme in diretta.</p>
            </div>
            <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-orange-900">Conteggio Pezzi</h2>
              <p className="text-sm text-orange-800">Tocca per registrare ogni pezzo che mangi. Veloce, preciso e divertente.</p>
            </div>
            <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-amber-900">Classifiche Live</h2>
              <p className="text-sm text-amber-800">Scopri chi sta vincendo in tempo reale grazie alle classifiche automatiche durante la sessione.</p>
            </div>
            <div className="bg-emerald-50 border-2 border-emerald-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-emerald-900">Storico Sessioni</h2>
              <p className="text-sm text-emerald-800">Tieni traccia delle tue vittorie, dei pezzi totali mangiati, del tasso di vittoria e dei tuoi record personali.</p>
            </div>
            <div className="bg-sky-50 border-2 border-sky-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-sky-900">Classifica Globale</h2>
              <p className="text-sm text-sky-800">Sfida altri appassionati di sushi nel mondo e scala la classifica dei migliori mangiatori.</p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2 text-purple-900">Ristoranti e Dettagli</h2>
              <p className="text-sm text-purple-800">
                Salva il nome del ristorante e la posizione di ogni sessione per ricordare dove hai conquistato le tue vittorie.
              </p>
            </div>
          </section>

          {/* Perché scegliere SushiCounter */}
          <section className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Perché scegliere SushiCounter?</h2>
            <ul className="list-disc list-inside text-sm text-neutral-600 space-y-2 text-left">
              <li>Sincronizzazione in tempo reale — tutti vedono i risultati istantaneamente.</li>
              <li>Interfaccia intuitiva: basta un tap per contare i pezzi.</li>
              <li>Statistiche personali sempre aggiornate: partite giocate, vittorie, record e media.</li>
              <li>Design pulito e moderno, perfetto per ogni serata all-you-can-eat.</li>
            </ul>
          </section>

          {/* Testimonianze */}
          <section className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Cosa dicono gli utenti</h2>
            <p className="text-sm italic text-neutral-600">"Finalmente sappiamo chi è il vero campione del sushi!"</p>
            <p className="text-sm italic text-neutral-600 mt-2">"Le cene all-you-can-eat non sono mai state così competitive!"</p>
          </section>

          {/* App Store */}
          <div className="mt-16 flex flex-col items-center">
            <p className="text-sm text-neutral-700 mb-4">Scarica per iOS</p>
            <Link href="https://apps.apple.com/app/sushicounter/YOURAPPID" target="_blank">
              <Image src="/appstore-badge.webp" alt="Scarica su App Store" width={180} height={60} />
            </Link>
            <p className="text-sm text-neutral-700 mt-6 mb-2">Scarica per Android</p>
            <div>
              <Image src="/google-play.webp" alt="Logo Google Play" width={180} height={60} />
            </div>
          </div>

          {/* Link legali e contatti */}
          <div className="mt-12 space-x-6 text-sm">
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-blue-600 hover:underline">Termini e Condizioni</Link>
            <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>
            <a href="mailto:sushicounterapp@gmail.com" className="text-blue-600 hover:underline">Contattaci</a>
          </div>
        </main>

        <footer className="text-xs text-neutral-400 mt-12 text-center flex flex-col items-center">
          <div className="mb-4">
            <a href="https://x.com/sushicounter" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center hover:text-neutral-600">
              <Image src="/x-icon.svg" alt="Seguici su X" width={24} height={24} />
            </a>
          </div>
          <div>&copy; {new Date().getFullYear()} SushiCounter. Tutti i diritti riservati.</div>
        </footer>
      </div>
    </>
  );
}
