import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Wasserlab',
}

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-8">Términos y Condiciones</h1>
          
          <div className="prose prose-invert prose-cyan max-w-none space-y-8 text-white/70">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Condiciones generales</h2>
              <p>Las presentes condiciones generales regulan el uso del sitio web de Wasserlab S.L. y la contratación de productos y servicios a través del mismo.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Productos y servicios</h2>
              <p>Wasserlab S.L. se dedica al diseño, fabricación e instalación de equipos de purificación de agua para laboratorios, hospitales e industria. Los productos mostrados en el sitio web son orientativos y pueden variar en función de las especificaciones técnicas del cliente.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Presupuestos</h2>
              <p>Los presupuestos tienen una validez de 30 días desde su emisión, salvo que se indique otra cosa. Los precios no incluyen IVA ni gastos de instalación, salvo indicación expresa.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Garantía</h2>
              <p>Todos nuestros equipos cuentan con una garantía de 24 meses desde la fecha de instalación, que cubre defectos de fabricación. La garantía no cubre el desgaste normal de consumibles ni daños causados por mal uso.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Servicio técnico</h2>
              <p>Wasserlab S.L. ofrece servicio técnico en toda España. Los tiempos de respuesta y condiciones del servicio se especifican en el contrato de mantenimiento correspondiente.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Jurisdicción</h2>
              <p>Para cualquier controversia que pudiera derivarse, las partes se someten a los Juzgados y Tribunales de Pamplona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>
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
