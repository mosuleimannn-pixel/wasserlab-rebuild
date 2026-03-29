import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Aviso Legal | Wasserlab',
}

export default function AvisoLegalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-8">Aviso Legal</h1>
          
          <div className="prose prose-invert prose-cyan max-w-none space-y-8 text-white/70">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Datos identificativos</h2>
              <p>En cumplimiento del deber de información estipulado en el artículo 10 de la Ley 34/2002 de 11 de julio de Servicios de la Sociedad de la Información y de Comercio Electrónico, se facilitan los siguientes datos:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-white">Denominación social:</strong> Wasserlab S.L.</li>
                <li><strong className="text-white">Domicilio:</strong> Pol. Ind. Comarca II, Calle E, Nº3, 31191 Barbatáin, Navarra</li>
                <li><strong className="text-white">Teléfono:</strong> +34 948 186 141</li>
                <li><strong className="text-white">Email:</strong> info@wasserlab.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Objeto</h2>
              <p>El presente aviso legal regula el uso del sitio web wasserlab.com. La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena de las disposiciones incluidas en este aviso legal.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Propiedad intelectual</h2>
              <p>Los derechos de propiedad intelectual de este sitio web, su código fuente, diseño, estructura de navegación y los distintos elementos en él contenidos son titularidad de Wasserlab S.L., a quien corresponde el ejercicio exclusivo de los derechos de explotación de los mismos.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Responsabilidad</h2>
              <p>Wasserlab S.L. no se hace responsable de los daños y perjuicios que pudieran derivarse del uso de la información contenida en este sitio web. La información puede contener errores tipográficos o inexactitudes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Ley aplicable</h2>
              <p>Las presentes condiciones se rigen por la legislación española. Cualquier controversia será sometida a los Juzgados y Tribunales de Pamplona.</p>
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
