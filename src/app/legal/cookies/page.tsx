import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Política de Cookies | Wasserlab',
}

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-8">Política de Cookies</h1>
          
          <div className="prose prose-invert prose-cyan max-w-none space-y-8 text-white/70">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">¿Qué son las cookies?</h2>
              <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio recuerde sus acciones y preferencias durante un periodo de tiempo.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Tipos de cookies que utilizamos</h2>
              
              <div className="mt-4 space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Cookies técnicas (necesarias)</h3>
                  <p className="text-sm">Permiten la navegación y el uso de las funciones básicas del sitio web. Sin ellas, el sitio no funcionaría correctamente.</p>
                </div>

                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Cookies analíticas</h3>
                  <p className="text-sm">Nos ayudan a entender cómo los visitantes interactúan con el sitio web, proporcionando información sobre las áreas visitadas, el tiempo de visita y errores de navegación.</p>
                </div>

                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Cookies de preferencias</h3>
                  <p className="text-sm">Permiten recordar información para personalizar su experiencia, como el idioma preferido.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Gestión de cookies</h2>
              <p>Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envía una cookie. Sin embargo, si rechaza las cookies, es posible que algunas partes del sitio web no funcionen correctamente.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Más información</h2>
              <p>Para más información sobre cómo tratamos sus datos, consulte nuestra <a href="/wasserlab-rebuild/legal/privacidad" className="text-cyan-400 hover:underline">Política de Privacidad</a>.</p>
            </section>
          </div>

          <div className="mt-12 p-4 bg-white/5 rounded-xl text-white/40 text-sm">
            Última actualización: Marzo 2026
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
