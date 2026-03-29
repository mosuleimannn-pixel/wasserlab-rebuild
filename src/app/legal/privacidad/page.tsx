import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Wasserlab',
}

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-invert prose-cyan max-w-none space-y-8 text-white/70">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Responsable del tratamiento</h2>
              <p>Wasserlab S.L. es el responsable del tratamiento de los datos personales que nos proporcione a través de este sitio web.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-white">Dirección:</strong> Pol. Ind. Comarca II, Calle E, Nº3, 31191 Barbatáin, Navarra</li>
                <li><strong className="text-white">Email:</strong> info@wasserlab.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Finalidad del tratamiento</h2>
              <p>Sus datos personales serán tratados con las siguientes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Gestionar las consultas realizadas a través del formulario de contacto</li>
                <li>Enviar presupuestos y ofertas comerciales solicitadas</li>
                <li>Mantener la relación comercial y prestar el servicio contratado</li>
                <li>Enviar comunicaciones comerciales si ha dado su consentimiento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Legitimación</h2>
              <p>La base legal para el tratamiento de sus datos es:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>El consentimiento del interesado</li>
                <li>La ejecución de un contrato</li>
                <li>El interés legítimo del responsable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Derechos</h2>
              <p>Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad enviando un email a info@wasserlab.com o por correo postal a nuestra dirección.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Conservación de datos</h2>
              <p>Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y para determinar las posibles responsabilidades derivadas.</p>
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
