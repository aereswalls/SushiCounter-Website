"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("Invio in corso...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "bda2ae8e-e052-4fad-9e9f-1a627b647134");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Messaggio inviato con successo! Ti risponderemo presto.");
        event.currentTarget.reset();
      } else {
        setResult("❌ Si è verificato un errore. Riprova più tardi.");
      }
    } catch (error) {
      setResult("❌ Errore di connessione. Riprova più tardi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-orange-50/30 text-neutral-900 font-mono">
      
      {/* Header */}
      <header className="w-full border-b border-neutral-200/50 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300">
            <Image src="/sushicounter-logo.png" alt="SushiCounter" width={40} height={40} />
            <span className="font-bold text-lg" style={{ color: '#fe6f40' }}>SushiCounter</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center px-6 py-12 sm:py-20">
        <div className="w-full max-w-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4" style={{ color: '#fe6f40' }}>
              Contattaci
            </h1>
            <p className="text-neutral-600">
              Hai domande o suggerimenti? Scrivici e ti risponderemo entro 24-48 ore!
            </p>
          </div>

          {/* Form */}
          <form 
            onSubmit={onSubmit} 
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200 shadow-lg space-y-6"
          >
            {/* Honeypot Field - Hidden from users but visible to bots */}
            <input 
              type="checkbox" 
              name="botcheck" 
              className="hidden" 
              style={{ display: 'none' }}
            />

            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={loading}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-[#fe6f40] focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Il tuo nome"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={loading}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-[#fe6f40] focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="tua@email.com"
              />
            </div>

            {/* Oggetto */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Oggetto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                disabled={loading}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-[#fe6f40] focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Di cosa vuoi parlare?"
              />
            </div>

            {/* Messaggio */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Messaggio *
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={loading}
                rows={6}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-[#fe6f40] focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Scrivi qui il tuo messaggio..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, #ff5300, #fe6f40)',
              }}
            >
              {loading ? "Invio in corso..." : "Invia Messaggio 📧"}
            </button>

            {/* Result Message */}
            {result && (
              <div className={`p-4 rounded-lg text-center font-semibold ${
                result.includes('✅') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : result.includes('❌')
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}>
                {result}
              </div>
            )}
          </form>

          {/* Alternative Contact */}
          <div className="mt-8 text-center text-sm text-neutral-600">
            <p>Oppure scrivici direttamente a:</p>
            <a 
              href="mailto:sushicounterapp@gmail.com" 
              className="font-semibold hover:underline"
              style={{ color: '#fe6f40' }}
            >
              sushicounterapp@gmail.com
            </a>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-block text-sm px-6 py-3 rounded-full border-2 hover:bg-neutral-50 transition-all"
              style={{ borderColor: '#fe6f40', color: '#fe6f40' }}
            >
              ← Torna alla Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-200 bg-white/80 backdrop-blur-sm mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <div className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} SushiCounter. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}
