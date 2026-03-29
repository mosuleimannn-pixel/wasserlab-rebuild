'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
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
  ChevronRight,
  Droplets
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
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'cyan',
    description: 'Equipos de purificación de agua para laboratorios de investigación, control de calidad y análisis.',
    applications: ['Preparación de reactivos', 'Análisis químicos', 'Cromatografía HPLC', 'Espectroscopia'],
    waterTypes: ['Tipo I', 'Tipo II']
  },
  {
    id: 'analisis-clinicos',
    name: 'Análisis Clínicos',
    icon: 'Microscope',
    gradient: 'from-pink-500 to-rose-600',
    glow: 'pink',
    description: 'Sistemas diseñados para alimentar analizadores clínicos y equipos de diagnóstico.',
    applications: ['Analizadores bioquímicos', 'Inmunoanálisis', 'Hematología', 'Microbiología'],
    waterTypes: ['Tipo II', 'Tipo III']
  },
  {
    id: 'lazos-distribucion',
    name: 'Lazos de Distribución',
    icon: 'GitBranch',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'blue',
    description: 'Sistemas de distribución de agua purificada para múltiples puntos de uso.',
    applications: ['Hospitales', 'Centros de investigación', 'Plantas farmacéuticas', 'Laboratorios centrales'],
    waterTypes: ['Tipo I', 'Tipo II', 'Tipo III']
  },
  {
    id: 'industria-cosmetica',
    name: 'Industria Cosmética',
    icon: 'Sparkles',
    gradient: 'from-purple-500 to-violet-600',
    glow: 'purple',
    description: 'Agua purificada de alta calidad para la fabricación de productos cosméticos.',
    applications: ['Formulación de cremas', 'Fabricación de perfumes', 'Productos de higiene', 'Control de calidad'],
    waterTypes: ['Tipo II', 'Tipo III']
  },
  {
    id: 'camaras-ensayo',
    name: 'Cámaras de Ensayo',
    icon: 'Thermometer',
    gradient: 'from-orange-500 to-amber-600',
    glow: 'orange',
    description: 'Agua desmineralizada para cámaras climáticas y de ensayo.',
    applications: ['Ensayos climáticos', 'Test de humedad', 'Simulación ambiental', 'Control de temperatura'],
    waterTypes: ['Tipo III']
  },
  {
    id: 'electroerosion',
    name: 'Electroerosión',
    icon: 'Zap',
    gradient: 'from-yellow-500 to-orange-600',
    glow: 'yellow',
    description: 'Agua desionizada para procesos de electroerosión y mecanizado CNC.',
    applications: ['Electroerosión por hilo', 'Electroerosión por penetración', 'Rectificado de precisión', 'Mecanizado'],
    waterTypes: ['Tipo III']
  },
  {
    id: 'inseminacion',
    name: 'Reproducción Asistida',
    icon: 'Heart',
    gradient: 'from-red-500 to-pink-600',
    glow: 'red',
    description: 'Agua ultrapura para centros de reproducción asistida y veterinaria.',
    applications: ['Preparación de medios', 'Lavado de gametos', 'Cultivo embrionario', 'Criopreservación'],
    waterTypes: ['Tipo I']
  },
  {
    id: 'otras-industrias',
    name: 'Otras Industrias',
    icon: 'Factory',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'green',
    description: 'Soluciones adaptadas a las necesidades específicas de cada sector industrial.',
    applications: ['Industria alimentaria', 'Fabricación de baterías', 'Industria electrónica', 'Producción de vidrio'],
    waterTypes: ['Tipo II', 'Tipo III']
  },
]

const glowColors: Record<string, string> = {
  cyan: 'rgba(6, 182, 212, 0.5)',
  pink: 'rgba(236, 72, 153, 0.5)',
  blue: 'rgba(59, 130, 246, 0.5)',
  purple: 'rgba(168, 85, 247, 0.5)',
  orange: 'rgba(249, 115, 22, 0.5)',
  yellow: 'rgba(234, 179, 8, 0.5)',
  red: 'rgba(239, 68, 68, 0.5)',
  green: 'rgba(16, 185, 129, 0.5)',
}

export default function SectoresPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8"
            >
              <Droplets className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Sectores</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Soluciones para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                cada industria
              </span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
              Más de 25 años adaptando nuestros sistemas a las necesidades específicas de cada sector. 
              Desde laboratorios hasta industria pesada.
            </p>
          </motion.div>

          {/* Sectors Grid - Bento Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => {
              const Icon = iconMap[sector.icon] || Factory
              const isHovered = hoveredId === sector.id
              
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredId(sector.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`
                    relative group cursor-pointer
                    ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                  `}
                >
                  <div className={`
                    relative h-full p-6 rounded-2xl overflow-hidden
                    bg-white/[0.03] backdrop-blur-sm
                    border border-white/10
                    transition-all duration-500
                    ${isHovered ? 'border-white/20 bg-white/[0.05]' : ''}
                  `}>
                    {/* Glow Effect */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: `radial-gradient(400px circle at 50% 0%, ${glowColors[sector.glow]}, transparent 60%)`,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        animate={{ 
                          scale: isHovered ? 1.1 : 1,
                          rotate: isHovered ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className={`
                          w-14 h-14 rounded-xl mb-5
                          bg-gradient-to-br ${sector.gradient}
                          flex items-center justify-center
                          shadow-lg
                        `}
                        style={{
                          boxShadow: isHovered 
                            ? `0 10px 40px ${glowColors[sector.glow]}`
                            : 'none'
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className={`
                        text-xl font-bold mb-3 transition-colors duration-300
                        ${isHovered ? 'text-white' : 'text-white/90'}
                      `}>
                        {sector.name}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 text-sm mb-5 leading-relaxed">
                        {sector.description}
                      </p>

                      {/* Applications - Show on larger cards or hover */}
                      <div className={`
                        space-y-2 mb-5
                        ${index === 0 ? 'block' : 'hidden group-hover:block'}
                      `}>
                        <p className="text-white/30 text-xs uppercase tracking-wider mb-2">
                          Aplicaciones
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {sector.applications.slice(0, index === 0 ? 4 : 2).map((app) => (
                            <span
                              key={app}
                              className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/60"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Water Types */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {sector.waterTypes.map((type) => (
                            <span
                              key={type}
                              className={`
                                text-xs px-2 py-1 rounded-md font-medium
                                bg-gradient-to-r ${sector.gradient} bg-opacity-20
                                text-white/80
                              `}
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                        
                        {/* Arrow */}
                        <motion.div
                          animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0.5 }}
                          className="text-white/50"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div 
                      className={`
                        absolute top-0 right-0 w-20 h-20
                        bg-gradient-to-br ${sector.gradient}
                        opacity-0 group-hover:opacity-10
                        transition-opacity duration-500
                        rounded-bl-[40px]
                      `}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿No encuentras tu sector?
                </h2>
                <p className="text-white/50 mb-8 max-w-md mx-auto">
                  Diseñamos soluciones a medida para cualquier aplicación industrial.
                </p>
                <Link
                  href="/wasserlab-rebuild/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all"
                >
                  Solicitar información
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
