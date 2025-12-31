import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Download() {
  return (
    <>
      <Head>
        <title>Scarica SushiCounter – Conta il sushi e sfida i tuoi amici</title>
        <meta
          name="description"
          content="Scarica subito SushiCounter per iOS e Android. L'app per contare i pezzi di sushi e competere con gli amici in tempo reale."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-white to-orange-50 text-neutral-900 font-mono">
        <main className="w-full max-w-md flex flex-col gap-8 text-center items-center">
          
          {/* Logo */}
          <Image 
            src="/sushicounter-logo.png" 
            alt="SushiCounter" 
            width={100} 
            height={100} 
            className="animate-bounce-slow"
          />

          {/* Titolo e descrizione */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: '#fe6f40' }}>
              SushiCounter
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Conta i pezzi di sushi in tempo reale e sfida i tuoi amici
            </p>
          </div>

          {/* Feature rapide */}
          <div className="flex gap-4 text-sm text-neutral-600">
            <div className="flex items-center gap-1">
              <span className="text-2xl">🍣</span>
              <span>Conta in tempo reale</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-2xl">🏆</span>
              <span>Sfida gli amici</span>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="w-full space-y-4 mt-6">
            <Link 
              href="https://apps.apple.com/app/sushicounter/YOURAPPID" 
              target="_blank"
              className="block transition-transform hover:scale-105 active:scale-95"
            >
              <Image 
                src="/appstore-badge.webp" 
                alt="Scarica su App Store" 
                width={200} 
                height={67} 
                className="mx-auto"
                priority
              />
            </Link>

            <Link 
              href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" 
              target="_blank"
              className="block transition-transform hover:scale-105 active:scale-95"
            >
              <Image 
                src="/google-play.webp" 
                alt="Scarica su Google Play" 
                width={200} 
                height={67} 
                className="mx-auto"
                priority
              />
            </Link>
          </div>

          {/* Call to action secondario */}
          <div className="mt-8 pt-8 border-t border-neutral-200 w-full">
            <p className="text-sm text-neutral-500 mb-3">
              Vuoi saperne di più?
            </p>
            <Link 
              href="/" 
              className="text-sm font-medium hover:underline"
              style={{ color: '#fe6f40' }}
            >
              Scopri tutte le funzionalità →
            </Link>
          </div>

        </main>

        {/* Footer minimale */}
        <footer className="text-xs text-neutral-400 mt-12 text-center">
          <div>&copy; {new Date().getFullYear()} SushiCounter</div>
        </footer>
      </div>
    </>
  );
}
