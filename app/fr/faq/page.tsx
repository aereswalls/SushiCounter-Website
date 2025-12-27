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

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Foire Aux Questions (FAQ)</h1>
        <p className="text-sm text-neutral-500 mb-10">Dernière mise à jour : 14 juillet 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">Qu'est-ce que GarTrack ?</h2>
            <p>
              GarTrack est une application mobile conçue pour vous aider à gérer tous les aspects de vos véhicules, y compris les pleins de carburant, l'entretien, les dépenses, les documents, les check-lists et les rappels, le tout au même endroit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Qu'est-ce que GarTrack PRO ?</h2>
            <p>
              GarTrack PRO est une version premium qui débloque des fonctionnalités supplémentaires comme la gestion illimitée des véhicules (les utilisateurs gratuits sont limités à un seul), la sauvegarde et la restauration iCloud, et une expérience sans publicité.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Comment sont gérées mes données personnelles et mes documents téléchargés ?</h2>
            <p>
              Toutes les données que vous saisissez ou téléchargez (y compris les documents, photos et notes) sont stockées localement sur votre appareil. Si vous êtes utilisateur PRO et activez la sauvegarde iCloud, ces données sont enregistrées en toute sécurité dans votre compte personnel iCloud. Chez GarTrack, nous n'accédons pas à vos données, ne les stockons pas et ne les traitons pas sur nos serveurs. Votre vie privée et la sécurité de vos données sont notre priorité absolue.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Accédez-vous à mes données ou les vendez-vous ?</h2>
            <p>
              Non. Nous n'accédons pas à vos données, ne les vendons pas et ne les partageons pas. Les données stockées dans iCloud restent sous votre contrôle et sont protégées par les mesures de sécurité et de confidentialité d'Apple. Nous ne monétisons pas les données des utilisateurs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Comment fonctionne la sauvegarde iCloud ?</h2>
            <p>
              Pour les utilisateurs PRO, la sauvegarde iCloud enregistre en toute sécurité vos données GarTrack, y compris les véhicules, pleins de carburant, entretiens, dépenses, documents et rappels. La restauration depuis iCloud n'est possible que sur des appareils connectés avec le même identifiant Apple.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Pourquoi vois-je des publicités dans l'application ?</h2>
            <p>
              Les utilisateurs gratuits voient des publicités fournies par Google AdMob. Ces publicités aident à soutenir le développement et la maintenance de GarTrack. Vous pouvez supprimer les publicités à tout moment en passant à GarTrack PRO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Quels modes de paiement sont acceptés pour GarTrack PRO ?</h2>
            <p>
              Les paiements pour PRO sont gérés via l'App Store d'Apple. Nous ne collectons ni ne stockons les informations de paiement. Vous pouvez choisir des abonnements mensuels, annuels ou à vie, et gérer ou annuler vos abonnements directement dans les paramètres de votre compte Apple ID.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Que se passe-t-il si je supprime l'application ?</h2>
            <p>
              Supprimer l'application efface toutes les données stockées localement. Si vous êtes utilisateur PRO avec la sauvegarde iCloud activée, vous pouvez restaurer vos données après avoir réinstallé l'application, à condition d'être connecté avec le même identifiant Apple et de restaurer depuis iCloud.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Utilisez-vous ma localisation ?</h2>
            <p>
              Nous demandons l'accès à la localisation uniquement si vous utilisez des fonctionnalités comme la carte des bornes de recharge électrique. Vos données de localisation sont utilisées uniquement à cette fin et ne sont jamais stockées ni partagées avec des tiers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">J'ai des problèmes ou j'ai trouvé un bug. Que dois-je faire ?</h2>
            <p>
              Nous sommes désolés de l'apprendre ! Veuillez nous écrire à{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> en détaillant le problème, le modèle de votre appareil et la version d’iOS. Nous ferons de notre mieux pour vous aider et améliorer l'application.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Comment demander la suppression de mes données ou exercer mes droits GDPR ?</h2>
            <p>
              Vous pouvez nous contacter à{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> pour demander l'accès, la correction ou la suppression de vos données. Nous respectons tous les droits des utilisateurs conformément au GDPR et aux réglementations similaires.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Puis-je transférer mon abonnement sur un autre appareil ?</h2>
            <p>
              Oui. Votre abonnement PRO est lié à votre identifiant Apple, vous pouvez donc restaurer votre achat sur n'importe quel appareil connecté au même compte Apple en appuyant sur « Restaurer l'achat » dans les paramètres de l'application.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">À quelle fréquence mettez-vous à jour GarTrack ?</h2>
            <p>
              Nous développons activement GarTrack, en publiant régulièrement des mises à jour avec de nouvelles fonctionnalités, des améliorations et des corrections de bugs. Vous pouvez consulter l'App Store pour voir les dernières mises à jour.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/" className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition">
            ← Retour à l'accueil
          </Link>
        </div>
      </main>

      <footer className="text-xs text-neutral-400 mt-20 text-center">
        &copy; {new Date().getFullYear()} GarTrack. Tous droits réservés.
      </footer>
    </div>
  );
}
