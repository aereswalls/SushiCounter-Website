"use client";

import Link from "next/link";

export default function FAQPageES() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-20 bg-white text-neutral-900 font-mono">
      <main className="w-full max-w-3xl">
        <div className="flex justify-end mb-6 space-x-4">
          <Link href="/faq" className="text-sm text-neutral-500 hover:underline">EN 🇬🇧</Link>
          <Link href="/it/faq" className="text-sm text-neutral-500 hover:underline">IT 🇮🇹</Link>
          <Link href="/fr/faq" className="text-sm text-neutral-500 hover:underline">FR 🇫🇷</Link>
          <Link href="/es/faq" className="text-sm text-neutral-500 hover:underline font-bold">ES 🇪🇸</Link>
          <Link href="/de/faq" className="text-sm text-neutral-500 hover:underline">DE 🇩🇪</Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#fe6f41]">Preguntas frecuentes (FAQ)</h1>
        <p className="text-sm text-neutral-500 mb-10">Última actualización: 27 de diciembre de 2025</p>

        <section className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Qué es SushiCounter?</h2>
            <p>
              SushiCounter es la app definitiva para los retos all you can eat. Crea sesiones con tus amigos, cuenta las piezas en tiempo real y descubre quién es el verdadero campeón del sushi.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Cómo funcionan las sesiones?</h2>
            <p>
              Crea una nueva sesión o únete con un código. Durante la comida, cada participante cuenta sus propias piezas. ¡El ranking se actualiza en tiempo real para todos!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Qué incluye la versión gratuita?</h2>
            <p>
              Puedes crear sesiones de hasta 2 participantes, hacer seguimiento de tus récords personales y ver el historial de tus desafíos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Qué ofrece SushiCounter Premium?</h2>
            <p>
              Con Premium desbloqueas sesiones de hasta 20 participantes, perfecto para grupos grandes y fiestas. ¡Ideal para retos épicos!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Cómo funciona el código de sesión?</h2>
            <p>
              Cuando creas una sesión, recibes un código alfanumérico único de 6 caracteres. Compártelo con tus amigos para que puedan unirse al instante.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Puedo corregir el conteo si me equivoco?</h2>
            <p>
              ¡Sí! Usa el botón «Deshacer» para disminuir el conteo en caso de error. Puedes corregir en cualquier momento durante la sesión.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Qué ocurre cuando termino una sesión?</h2>
            <p>
              Todos los datos se guardan automáticamente en el historial de cada participante. Podrás revisar rankings, puntuaciones y estadísticas cuando quieras.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Cómo funciona el ranking global?</h2>
            <p>
              ¡Compite con usuarios de todo el mundo! El ranking muestra a los mejores comedores de sushi según su récord personal y el número de sesiones ganadas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Puedo ocultar mi perfil del ranking?</h2>
            <p>
              Sí, ve a Ajustes y desactiva «Visible en el ranking». Tu perfil quedará privado y no aparecerá en el ranking global.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Cómo consigo SushiCounter Premium?</h2>
            <p>
              Ve a tu Perfil y toca el botón Premium. Elige el plan que prefieras y desbloquea todas las funciones avanzadas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Cómo cancelo la suscripción Premium?</h2>
            <p>
              <strong>iOS:</strong> Ve a Ajustes → [Tu nombre] → Suscripciones → SushiCounter, y gestiona o cancela la suscripción desde ahí.
            </p>
            <p className="mt-2">
              <strong>Android:</strong> Abre Google Play Store → Menú → Suscripciones → SushiCounter, y gestiona o cancela la suscripción.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Puedo eliminar mi cuenta?</h2>
            <p>
              Ve a Ajustes de SushiCounter y toca la opción Eliminar cuenta. Esto eliminará todos tus datos y ya no podrás acceder a tu perfil.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Puedo usar SushiCounter sin conexión?</h2>
            <p>
              Crear o unirse a una sesión requiere conexión a Internet, pero el incremento de la puntuación en las sesiones activas también funciona sin conexión. Si no hay cobertura en un local, pide acceso Wi‑Fi al personal del restaurante.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Mis datos están seguros?</h2>
            <p>
              ¡Por supuesto! Todas las comunicaciones están cifradas. Lee la{" "}
              <a href="/privacy" className="text-[#fe6f41] underline font-semibold">Política de privacidad</a> para más detalles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Cómo puedo informar de un problema o un bug?</h2>
            <p>
              Ve a Ajustes → Soporte y envíanos un correo a{" "}
              <a href="mailto:sushicounterapp@gmail.com" className="text-[#fe6f41] underline font-semibold">sushicounterapp@gmail.com</a>. Respondemos en un plazo de 24–48 horas y siempre estamos encantados de ayudarte.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#fe6f41]">¿Puedo usar SushiCounter para otros tipos de comida?</h2>
            <p>
              ¡Claro! Aunque está pensada para el sushi, puedes usarla para cualquier reto gastronómico: dim sum, tapas, buffet libre… ¡Diviértete!
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/" className="inline-block text-sm px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition">
            ← Volver a la página principal
          </Link>
        </div>
      </main>

      <footer className="text-xs text-neutral-400 mt-20 text-center">
        &copy; {new Date().getFullYear()} SushiCounter. Todos los derechos reservados.
      </footer>
    </div>
  );
}
