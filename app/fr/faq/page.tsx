"use client";

import Link from "next/link";

export default function FAQPageFR() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
      <main className="w-full max-w-3xl">
        <div className="flex justify-end mb-6 space-x-4">
          <Link href="/faq" className="text-sm text-neutral-500 hover:underline">EN 🇬🇧</Link>
          <Link href="/it/faq" className="text-sm text-neutral-500 hover:underline">IT 🇮🇹</Link>
          <Link href="/fr/faq" className="text-sm text-neutral-500 hover:underline font-bold">FR 🇫🇷</Link>
          <Link href="/es/faq" className="text-sm text-neutral-500 hover:underline">ES 🇪🇸</Link>
          <Link href="/de/faq" className="text-sm text-neutral-500 hover:underline">DE 🇩🇪</Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#fe6f41]">Questions fréquentes (FAQ)</h1>
        <p className="text-sm text-neutral-500 mb-10">Dernière mise à jour : 27 décembre 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Qu’est-ce que SushiCounter ?</h2>
            <p>
              SushiCounter est l’application ultime pour les défis à volonté ! Crée des sessions avec tes amis, compte les pièces en temps réel et découvre qui est le véritable champion de sushi.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Comment fonctionnent les sessions ?</h2>
            <p>
              Crée une nouvelle session ou rejoins-en une avec un code. Pendant le repas, chaque participant compte ses propres pièces. Le classement se met à jour en temps réel pour tout le monde !
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Que comprend la version gratuite ?</h2>
            <p>
              Tu peux créer des sessions jusqu’à 2 participants, suivre tes records personnels et consulter l’historique de tes défis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Que propose SushiCounter Premium ?</h2>
            <p>
              Avec Premium, tu débloques des sessions jusqu’à 20 participants, parfait pour les grands groupes et les soirées entre amis. Idéal pour des défis épiques !
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Comment fonctionne le code de session ?</h2>
            <p>
              Quand tu crées une session, tu reçois un code alphanumérique unique de 6 caractères. Partage-le avec tes amis, ils pourront rejoindre instantanément.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Puis-je modifier le comptage en cas d’erreur ?</h2>
            <p>
              Oui ! Utilise le bouton « Annuler » pour diminuer le comptage en cas d’erreur. Tu peux corriger à tout moment pendant la session.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Que se passe-t-il lorsque je termine une session ?</h2>
            <p>
              Toutes les données sont automatiquement enregistrées dans l’historique de chaque participant. Tu pourras revoir classements, scores et statistiques quand tu veux.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Comment fonctionne le classement global ?</h2>
            <p>
              Compète avec des utilisateurs du monde entier ! Le classement montre les meilleurs mangeurs de sushi selon leur record personnel et le nombre de sessions gagnées.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Puis-je masquer mon profil du classement ?</h2>
            <p>
              Oui, va dans les Réglages et désactive « Visible dans le classement ». Ton profil restera privé et n’apparaîtra pas dans le classement global.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Comment obtenir SushiCounter Premium ?</h2>
            <p>
              Va dans ton Profil et touche le bouton Premium. Choisis l’offre que tu préfères et débloque toutes les fonctionnalités avancées.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Comment annuler mon abonnement Premium ?</h2>
            <p>
              <strong>iOS :</strong> Va dans Réglages → [Ton nom] → Abonnements → SushiCounter, puis gère ou annule l’abonnement à partir de là.
            </p>
            <p className="mt-2">
              <strong>Android :</strong> Ouvre Google Play Store → Menu → Abonnements → SushiCounter, puis gère ou annule l’abonnement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Puis-je supprimer mon compte ?</h2>
            <p>
              Va dans les Réglages de SushiCounter et touche l’option Supprimer le compte. Cela supprimera toutes tes données et tu ne pourras plus accéder à ton profil.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Puis-je utiliser SushiCounter hors ligne ?</h2>
            <p>
              La création ou la participation à une session nécessite une connexion Internet, mais l’augmentation du score dans les sessions actives fonctionne aussi hors ligne. En cas d’absence de réseau dans un restaurant, demande l’accès Wi-Fi au personnel.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Mes données sont-elles en sécurité ?</h2>
            <p>
              Absolument ! Toutes les communications sont chiffrées. Lis la{" "}
              <a href="/privacy" className="text-[#fe6f41] underline font-semibold">Politique de confidentialité</a> pour plus de détails.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Comment signaler un problème ou un bug ?</h2>
            <p>
              Va dans Réglages → Support et envoie-nous un e-mail à{" "}
              <a href="mailto:sushicounterapp@gmail.com" className="text-[#fe6f41] underline font-semibold">sushicounterapp@gmail.com</a>. Nous répondons sous 24–48 heures et sommes toujours ravis de t’aider !
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">Puis-je utiliser SushiCounter pour d’autres types de nourriture ?</h2>
            <p>
              Bien sûr ! Même si l’app est pensée pour le sushi, tu peux l’utiliser pour tout type de défi culinaire : dim sum, tapas, buffets… Amuse-toi !
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/" className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition">
            ← Retour à l’accueil
          </Link>
        </div>
      </main>

      <footer className="text-xs text-neutral-400 mt-20 text-center">
        &copy; {new Date().getFullYear()} SushiCounter. Tous droits réservés.
      </footer>
    </div>
  );
}
