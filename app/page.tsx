"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-orange-50/30 text-neutral-900 font-mono">
        
        {/* Header */}
        <header className="w-full border-b border-neutral-200/50 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
          <nav className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 transform hover:scale-105">
                <Image src="/sushicounter-logo.png" alt="SushiCounter" width={40} height={40} />
                <span className="font-bold text-lg" style={{ color: '#fe6f40' }}>SushiCounter</span>
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6 text-sm">
                <Link href="/download" className="font-semibold hover:underline transition-all" style={{ color: '#fe6f40' }}>
                  Download
                </Link>
                <Link href="/it/faq" className="hover:underline transition-all" style={{ color: '#fe6f40' }}>
                  FAQ
                </Link>
                <Link href="/privacy" className="hover:underline transition-all" style={{ color: '#fe6f40' }}>
                  Privacy
                </Link>
                <Link href="/terms" className="hover:underline transition-all" style={{ color: '#fe6f40' }}>
                  Termini
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 transition-transform duration-200 hover:scale-110"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="#fe6f40" 
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
              <div className="md:hidden pt-4 pb-2 flex flex-col gap-3 text-sm border-t border-neutral-200 mt-4 animate-fadeIn">
                <Link 
                  href="/download" 
                  className="font-semibold hover:underline py-2 transition-all" 
                  style={{ color: '#fe6f40' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Download
                </Link>
                <Link 
                  href="/it/faq" 
                  className="hover:underline py-2 transition-all" 
                  style={{ color: '#fe6f40' }}
                  onClick={() => setMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  href="/privacy" 
                  className="hover:underline py-2 transition-all" 
                  style={{ color: '#fe6f40' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Privacy
                </Link>
                <Link 
                  href="/terms" 
                  className="hover:underline py-2 transition-all" 
                  style={{ color: '#fe6f40' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Termini
                </Link>
              </div>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full flex flex-col items-center px-6 py-12 sm:py-20">
          <div className="w-full max-w-4xl flex flex-col gap-10 text-center items-center">
            
            {/* Hero Section */}
            <div className="flex flex-col items-center gap-6 animate-fadeInUp">
              <div className="relative">
                <div className="absolute inset-0 blur-2xl opacity-30 rounded-full" style={{ backgroundColor: '#fe6f40' }}></div>
                <Image 
                  src="/sushicounter-logo.png" 
                  alt="Logo SushiCounter" 
                  width={120} 
                  height={120} 
                  className="relative hover:scale-110 transition-transform duration-300" 
                />
              </div>

              <h1 
                className="text-4xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #ff5300, #fe6f40, #ff5300)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                SushiCounter
              </h1>
              
              <p className="text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed">
                L'app definitiva per contare i pezzi di sushi e sfidare i tuoi amici.
                Conta ogni pezzo, affronta il tuo gruppo e domina la classifica — tutto in tempo reale.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link 
                  href="/download"
                  className="px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ 
                    backgroundImage: 'linear-gradient(135deg, #ff5300, #fe6f40)',
                  }}
                >
                  Scarica Ora 🍣
                </Link>
                <Link 
                  href="#features"
                  className="px-8 py-4 rounded-full font-semibold border-2 hover:bg-neutral-50 transform hover:scale-105 transition-all duration-300"
                  style={{ borderColor: '#fe6f40', color: '#fe6f40' }}
                >
                  Scopri di più
                </Link>
              </div>
            </div>

            {/* Funzionalità */}
            <section id="features" className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left w-full max-w-2xl mt-12">
              <div className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">⚡</div>
                <h2 className="text-xl font-semibold mb-2 text-red-900">Sessioni in Tempo Reale</h2>
                <p className="text-sm text-red-800">Crea o unisciti a una sessione con un semplice codice e conta il sushi insieme in diretta.</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">🍣</div>
                <h2 className="text-xl font-semibold mb-2 text-orange-900">Conteggio Pezzi</h2>
                <p className="text-sm text-orange-800">Tocca per registrare ogni pezzo che mangi. Veloce, preciso e divertente.</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">📊</div>
                <h2 className="text-xl font-semibold mb-2 text-amber-900">Classifiche Live</h2>
                <p className="text-sm text-amber-800">Scopri chi sta vincendo in tempo reale grazie alle classifiche automatiche durante la sessione.</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">📈</div>
                <h2 className="text-xl font-semibold mb-2 text-emerald-900">Storico Sessioni</h2>
                <p className="text-sm text-emerald-800">Tieni traccia delle tue vittorie, dei pezzi totali mangiati, del tasso di vittoria e dei tuoi record personali.</p>
              </div>
              
              <div className="bg-gradient-to-br from-sky-50 to-sky-100/50 border-2 border-sky-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">🏆</div>
                <h2 className="text-xl font-semibold mb-2 text-sky-900">Classifica Globale</h2>
                <p className="text-sm text-sky-800">Sfida altri appassionati di sushi nel mondo e scala la classifica dei migliori mangiatori.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">📍</div>
                <h2 className="text-xl font-semibold mb-2 text-purple-900">Ristoranti e Dettagli</h2>
                <p className="text-sm text-purple-800">
                  Salva il nome del ristorante e la posizione di ogni sessione per ricordare dove hai conquistato le tue vittorie.
                </p>
              </div>
            </section>

            {/* Perché scegliere SushiCounter */}
            <section className="mt-10 max-w-2xl bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200 shadow-md">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span>✨</span>
                Perché scegliere SushiCounter?
              </h2>
              <ul className="space-y-4 text-sm text-neutral-700 text-left">
                <li className="flex items-start gap-3">
                  <span className="text-xl" style={{ color: '#fe6f40' }}>→</span>
                  <span>Sincronizzazione in tempo reale — tutti vedono i risultati istantaneamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl" style={{ color: '#fe6f40' }}>→</span>
                  <span>Interfaccia intuitiva: basta un tap per contare i pezzi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl" style={{ color: '#fe6f40' }}>→</span>
                  <span>Statistiche personali sempre aggiornate: partite giocate, vittorie, record e media.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl" style={{ color: '#fe6f40' }}>→</span>
                  <span>Design pulito e moderno, perfetto per ogni serata all-you-can-eat.</span>
                </li>
              </ul>
            </section>

            {/* Testimonianze */}
            <section className="mt-10 max-w-2xl space-y-4">
              <h2 className="text-2xl font-semibold mb-6">💬 Cosa dicono gli utenti</h2>
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-l-4 shadow-sm" style={{ borderColor: '#fe6f40' }}>
                <p className="text-sm italic text-neutral-700">"Finalmente sappiamo chi è il vero campione del sushi!"</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-l-4 shadow-sm" style={{ borderColor: '#fe6f40' }}>
                <p className="text-sm italic text-neutral-700">"Le cene all-you-can-eat non sono mai state così competitive!"</p>
              </div>
            </section>

            {/* App Store */}
            <div className="mt-16 flex flex-col items-center bg-white/70 backdrop-blur-sm rounded-2xl p-10 border border-neutral-200 shadow-lg">
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#fe6f40' }}>Scarica l'app oggi stesso!</h3>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Link href="https://apps.apple.com/app/sushicounter/YOURAPPID" target="_blank" className="transform hover:scale-105 transition-transform duration-300">
                  <Image src="/appstore-badge.webp" alt="Scarica su App Store" width={180} height={60} />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" target="_blank" className="transform hover:scale-105 transition-transform duration-300">
                  <Image src="/google-play.webp" alt="Scarica su Google Play" width={180} height={60} />
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-neutral-200 bg-white/80 backdrop-blur-sm mt-12">
          <div className="max-w-6xl mx-auto px-6 py-8">
            
            {/* Link navigation */}
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
              <Link href="/download" className="font-semibold hover:underline transition-all" style={{ color: '#fe6f40' }}>
                Download
              </Link>
              <Link href="/privacy" className="hover:underline transition-all" style={{ color: '#fe6f40' }}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline transition-all" style={{ color: '#fe6f40' }}>
                Termini e Condizioni
              </Link>
              <Link href="/it/faq" className="hover:underline transition-all" style={{ color: '#fe6f40' }}>
                FAQ
              </Link>
              <a href="mailto:sushicounterapp@gmail.com" className="hover:underline transition-all" style={{ color: '#fe6f40' }}>
                Contattaci
              </a>
            </div>

            {/* Social and copyright */}
            <div className="text-center space-y-4">
              <div>
                <a 
                  href="https://x.com/sushicounter" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center hover:opacity-70 transition-all duration-300 transform hover:scale-110"
                >
                  <Image src="/x-icon.svg" alt="Seguici su X" width={24} height={24} />
                </a>
              </div>
              <div className="text-xs text-neutral-400">
                &copy; {new Date().getFullYear()} SushiCounter. Tutti i diritti riservati.
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
