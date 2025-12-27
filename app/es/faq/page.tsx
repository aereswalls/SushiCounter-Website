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

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Preguntas Frecuentes (FAQ)</h1>
        <p className="text-sm text-neutral-500 mb-10">Última actualización: 14 de julio de 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Qué es GarTrack?</h2>
            <p>
              GarTrack es una aplicación móvil diseñada para ayudarte a gestionar todos los aspectos de tus vehículos, incluyendo repostajes, mantenimientos, gastos, documentos, listas de verificación y recordatorios, todo en un solo lugar.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Qué es GarTrack PRO?</h2>
            <p>
              GarTrack PRO es una versión premium que desbloquea funciones adicionales como gestión ilimitada de vehículos (los usuarios gratuitos están limitados a uno), copia de seguridad y restauración en iCloud, y experiencia sin anuncios.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo se manejan mis datos personales y documentos subidos?</h2>
            <p>
              Todos los datos que introduces o subes (incluidos documentos, fotos y notas) se guardan localmente en tu dispositivo. Si eres usuario PRO y activas la copia de seguridad en iCloud, estos datos se almacenan de forma segura en tu cuenta personal de iCloud. Nosotros en GarTrack no accedemos, almacenamos ni procesamos tus datos en nuestros servidores. Tu privacidad y la seguridad de tus datos son nuestra máxima prioridad.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Acceden o venden mis datos?</h2>
            <p>
              No. No accedemos, vendemos ni compartimos tus datos. Cualquier dato guardado en iCloud permanece bajo tu control y está protegido por las medidas de seguridad y privacidad de Apple. No monetizamos los datos de los usuarios.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo funciona la copia de seguridad en iCloud?</h2>
            <p>
              Para usuarios PRO, la copia de seguridad en iCloud guarda de forma segura tus datos de GarTrack, incluidos vehículos, repostajes, mantenimientos, gastos, documentos y recordatorios. La restauración desde iCloud solo es posible en dispositivos conectados con el mismo ID de Apple.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Por qué veo anuncios en la app?</h2>
            <p>
              Los usuarios gratuitos ven anuncios proporcionados por Google AdMob. Estos anuncios ayudan a apoyar el desarrollo y mantenimiento de GarTrack. Puedes eliminar los anuncios en cualquier momento actualizando a GarTrack PRO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Qué métodos de pago se aceptan para GarTrack PRO?</h2>
            <p>
              Los pagos para PRO se gestionan a través de la App Store de Apple. No recopilamos ni almacenamos datos de pago. Puedes elegir entre planes mensuales, anuales o de por vida, y gestionar o cancelar suscripciones directamente en la configuración de tu cuenta de Apple ID.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Qué sucede si elimino la app?</h2>
            <p>
              Eliminar la app borra todos los datos almacenados localmente. Si eres usuario PRO con copia de seguridad en iCloud activada, puedes restaurar tus datos después de reinstalar la app, siempre que inicies sesión con el mismo ID de Apple y restaures desde iCloud.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Usan mi ubicación?</h2>
            <p>
              Solicitamos acceso a la ubicación solo si usas funciones como el mapa de estaciones de carga eléctrica. Tus datos de ubicación se usan únicamente para este propósito y nunca se almacenan ni se comparten con terceros.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tengo problemas o encontré un error. ¿Qué hago?</h2>
            <p>
              ¡Lamentamos escuchar eso! Por favor, escríbenos a{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> con los detalles del problema, el modelo de tu dispositivo y la versión de iOS. Haremos lo posible por ayudarte y mejorar la app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo solicito la eliminación de datos o ejerzo mis derechos GDPR?</h2>
            <p>
              Puedes contactarnos en{" "}
              <a href="mailto:info@gartrack.app" className="text-blue-600 underline">info@gartrack.app</a> para solicitar acceso, corrección o eliminación de tus datos. Respetamos todos los derechos de los usuarios según el GDPR y regulaciones similares.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Puedo transferir mi suscripción a otro dispositivo?</h2>
            <p>
              Sí. Tu suscripción PRO está vinculada a tu ID de Apple, por lo que puedes restaurar tu compra en cualquier dispositivo que use la misma cuenta de Apple tocando “Restaurar Compra” en la configuración de la app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">¿Con qué frecuencia actualizan GarTrack?</h2>
            <p>
              Desarrollamos activamente GarTrack, lanzando regularmente actualizaciones con nuevas funciones, mejoras y correcciones de errores. Puedes consultar la App Store para ver las últimas actualizaciones.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/" className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition">
            ← Volver a Inicio
          </Link>
        </div>
      </main>

      <footer className="text-xs text-neutral-400 mt-20 text-center">
        &copy; {new Date().getFullYear()} GarTrack. Todos los derechos reservados.
      </footer>
    </div>
  );
}
