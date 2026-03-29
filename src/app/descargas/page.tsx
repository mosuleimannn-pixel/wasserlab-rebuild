'use client'

import { motion } from 'framer-motion'
import { Download, FileText, BookOpen, Award } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const downloads = [
  {
    category: 'Fichas Técnicas',
    icon: FileText,
    items: [
      { name: 'Micromatic', size: '2.4 MB' },
      { name: 'Ecomatic', size: '2.8 MB' },
      { name: 'Ultramatic GR', size: '3.1 MB' },
      { name: 'Hydromatic', size: '2.6 MB' },
    ]
  },
  {
    category: 'Manuales de Usuario',
    icon: BookOpen,
    items: [
      { name: 'Manual Gama Básica', size: '5.2 MB' },
      { name: 'Manual Gama Plus', size: '6.1 MB' },
      { name: 'Manual Alta Producción', size: '8.4 MB' },
    ]
  },
  {
    category: 'Certificaciones',
    icon: Award,
    items: [
      { name: 'Certificado ISO 9001', size: '1.2 MB' },
      { name: 'Certificado ISO 14001', size: '1.1 MB' },
      { name: 'Declaración CE', size: '0.8 MB' },
    ]
  },
]

export default function DescargasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
              Centro de Documentación
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Área de <span className="text-cyan-400">Descargas</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Acceda a toda la documentación técnica, manuales y certificaciones de nuestros equipos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {downloads.map((section, idx) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h2 className="text-lg font-semibold text-white">{section.category}</h2>
                </div>

                <div className="space-y-3">
                  {section.items.map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-white/80 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm">{item.size}</span>
                        <Download className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl text-center"
          >
            <p className="text-white/60">
              ¿Necesita documentación adicional? <a href="/wasserlab-rebuild/contacto" className="text-cyan-400 hover:underline">Contáctenos</a>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
