'use client'

import { motion } from 'framer-motion'
import { FileText, Phone, Mail, MapPin } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function PresupuestoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
              Presupuesto Personalizado
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solicitar <span className="text-cyan-400">Presupuesto</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Complete el formulario y nuestro equipo técnico le contactará en menos de 24 horas con una propuesta personalizada.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 text-sm mb-2">Nombre *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  placeholder="Su nombre"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Empresa</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  placeholder="Nombre de la empresa"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 text-sm mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  placeholder="email@empresa.com"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan-500/50 focus:outline-none transition-colors"
                  placeholder="+34 XXX XXX XXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Tipo de agua requerida</label>
              <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-cyan-500/50 focus:outline-none transition-colors">
                <option value="">Seleccione una opción</option>
                <option value="tipo-1">Agua Ultrapura (Tipo I)</option>
                <option value="tipo-2">Agua Pura (Tipo II)</option>
                <option value="tipo-3">Agua Osmotizada (Tipo III)</option>
                <option value="multiple">Varios tipos</option>
              </select>
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Mensaje</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                placeholder="Describa sus necesidades..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-shadow"
            >
              Enviar Solicitud
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <a href="tel:+34948186141" className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white/60 text-sm">Teléfono</div>
                <div className="text-white">+34 948 186 141</div>
              </div>
            </a>
            <a href="mailto:info@wasserlab.com" className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white/60 text-sm">Email</div>
                <div className="text-white">info@wasserlab.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white/60 text-sm">Ubicación</div>
                <div className="text-white">Navarra, España</div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
