'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { 
  FlaskConical, 
  Microscope, 
  GitBranch, 
  Sparkles, 
  Thermometer, 
  Zap, 
  Heart, 
  Factory,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical,
  Microscope,
  GitBranch,
  Sparkles,
  Thermometer,
  Zap,
  Heart,
  Factory,
}

const sectors = [
  {
    id: 'laboratorios',
    name: 'Laboratorios',
    icon: 'FlaskConical',
    color: 'cyan',
    description: 'Equipos de purificación de agua para laboratorios de investigación, control de calidad y análisis.',
    applications: [
      'Preparación de reactivos',
      'Análisis químicos',
      'Cromatografía HPLC',
      'Espectroscopia'
    ],
    waterTypes: ['Tipo I', 'Tipo II']
  },
  {
    id: 'analisis-clinicos',
    name: 'Análisis Clínicos',
    icon: 'Microscope',
    color: 'pink',
    description: 'Sistemas diseñados para alimentar analizadores clínicos y equipos de diagnóstico.',
    applications: [
      'Analizadores bioquímicos',
      'Inmunoanálisis',
      'Hematología',
      'Microbiología'
    ],
    waterTypes: ['Tipo II', 'Tipo III']
  },
  {
    id: 'lazos-distribucion',
    name: 'Lazos de Distribución',
    icon: 'GitBranch',
    color: 'blue',
    description: 'Sistemas de distribución de agua purificada para múltiples puntos de uso.',
    applications: [
      'Hospitales',
      'Centros de investigación',
      'Plantas farmacéuticas',
      'Laboratorios centrales'
    ],
    waterTypes: ['Tipo I', 'Tipo II', 'Tipo III']
  },
  {
    id: 'industria-cosmetica',
    name: 'Industria Cosmética',
    icon: 'Sparkles',
    color: 'purple',
    description: 'Agua purificada de alta calidad para la fabricación de productos cosméticos.',
    applications: [
      'Formulación de cremas',
      'Fabricación de perfumes',
      'Productos de higiene',
      'Control de calidad'
    ],
    waterTypes: ['Tipo II', 'Tipo III']
  },
  {
    id: 'camaras-ensayo',
    name: 'Cámaras de Ensayo',
    icon: 'Thermometer',
    color: 'orange',
    description: 'Agua desmineralizada para cámaras climáticas y de ensayo.',
    applications: [
      'Ensayos climáticos',
      'Test de humedad',
      'Simulación ambiental',
      'Control de temperatura'
    ],
    waterTypes: ['Tipo III']
  },
  {
    id: 'electroerosion',
    name: 'Electroerosión - Mecanizado',
    icon: 'Zap',
    color: 'yellow',
    description: 'Agua desionizada para procesos de electroerosión y mecanizado CNC.',
    applications: [
      'Electroerosión por hilo',
      'Electroerosión por penetración',
      'Rectificado de precisión',
      'Mecanizado de piezas'
    ],
    waterTypes: ['Tipo III']
  },
  {
    id: 'inseminacion',
    name: 'Inseminación Artificial',
    icon: 'Heart',
    color: 'red',
    description: 'Agua ultrapura para centros de reproducción asistida y veterinaria.',
    applications: [
      'Preparación de medios',
      'Lavado de gametos',
      'Cultivo embrionario',
      'Criopreservación'
    ],
    waterTypes: ['Tipo I']
  },
  {
    id: 'otras-industrias',
    name: 'Otras Industrias',
    icon: 'Factory',
    color: 'green',
    description: 'Soluciones adaptadas a las necesidades específicas de cada sector industrial.',
    applications: [
      'Industria alimentaria',
      'Fabricación de baterías',
      'Industria electrónica',
      'Producción de vidrio'
    ],
    waterTypes: ['Tipo II', 'Tipo III']
  },
]

const colorClasses: Record<string, string> = {
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  red: 'bg-red-500/10 text-red-400 border-red-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
}

export default function SectoresPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-950 pt-20">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge variant="outline" className="mb-6">
                <Factory className="w-4 h-4 mr-2" />
                Sectores
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Soluciones para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  cada industria
                </span>
              </h1>
              <p className="text-lg text-gray-400">
                Más de 25 años adaptando nuestros sistemas a las necesidades específicas de cada sector. 
                Desde laboratorios hasta industria pesada.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {sectors.map((sector, index) => {
                const Icon = iconMap[sector.icon] || Factory
                return (
                  <motion.div
                    key={sector.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-dark-800/50 border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl border ${colorClasses[sector.color]}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {sector.name}
                        </h3>
                        <p className="text-gray-400 mb-4">{sector.description}</p>
                        
                        <div className="mb-4">
                          <p className="text-sm text-gray-500 mb-2">Aplicaciones:</p>
                          <div className="grid grid-cols-2 gap-2">
                            {sector.applications.map((app) => (
                              <div key={app} className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                                {app}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Tipos de agua:</span>
                          {sector.waterTypes.map((type) => (
                            <span key={type} className="text-xs px-2 py-1 bg-dark-700 text-gray-300 rounded">
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿No encuentras tu sector?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Diseñamos soluciones a medida para cualquier aplicación. 
                Contacta con nuestro equipo técnico.
              </p>
              <Link href="/contacto">
                <Button>
                  Solicitar información
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
