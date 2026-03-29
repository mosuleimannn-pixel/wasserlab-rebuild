'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Microscope, 
  Building2, 
  Pill, 
  Leaf, 
  Factory, 
  GraduationCap,
  Heart,
  Atom
} from 'lucide-react'

const sectors = [
  {
    id: 1,
    title: "Laboratorios",
    description: "Agua ultrapura para investigación científica y análisis de precisión en laboratorios.",
    icon: Microscope,
    color: "from-cyan-500 to-blue-600",
    size: "large", // spans 2 columns
  },
  {
    id: 2,
    title: "Análisis Clínicos",
    description: "Sistemas certificados para analizadores clínicos y equipos de diagnóstico.",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    size: "normal",
  },
  {
    id: 3,
    title: "Lazos de Distribución",
    description: "Sistemas de distribución de agua purificada para múltiples puntos de uso.",
    icon: Atom,
    color: "from-violet-500 to-purple-600",
    size: "normal",
  },
  {
    id: 4,
    title: "Industria Cosmética",
    description: "Agua purificada de alta calidad para producción cosmética.",
    icon: Leaf,
    color: "from-amber-500 to-orange-600",
    size: "normal",
  },
  {
    id: 5,
    title: "Cámaras de Ensayo",
    description: "Agua de alimentación para cámaras climáticas y de ensayo.",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-600",
    size: "normal",
  },
  {
    id: 6,
    title: "Electroerosión - Mecanizado",
    description: "Agua desmineralizada para procesos de electroerosión y mecanizado CNC.",
    icon: Factory,
    color: "from-slate-500 to-zinc-600",
    size: "large", // spans 2 columns
  },
  {
    id: 7,
    title: "Inseminación Artificial",
    description: "Agua ultrapura para técnicas de inseminación animal artificial.",
    icon: Pill,
    color: "from-pink-500 to-rose-600",
    size: "normal",
  },
  {
    id: 8,
    title: "Otras Industrias",
    description: "Soluciones adaptadas a las necesidades específicas de cada sector industrial.",
    icon: Building2,
    color: "from-blue-500 to-indigo-600",
    size: "normal",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    }
  }
}

export default function SectorGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d14] to-transparent" />
      
      {/* Accent orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block text-sm uppercase tracking-[0.3em] text-cyan-400/80 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sectores
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold mb-6">
            Soluciones para cada{' '}
            <span className="text-gradient">Industria</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Más de 25 años adaptando nuestros sistemas a las necesidades específicas de cada sector.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {sectors.map((sector) => (
            <motion.a
              key={sector.id}
              href={`/sectores/${sector.id}`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(sector.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-2xl overflow-hidden ${
                sector.size === 'large' ? 'md:col-span-2' : ''
              }`}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-[#12121a] border border-white/5 group-hover:border-white/10 rounded-2xl transition-all duration-500" />
              
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === sector.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-10`}
              />

              {/* Content */}
              <div className={`relative z-10 p-6 lg:p-8 ${sector.size === 'large' ? 'min-h-[200px]' : 'min-h-[180px]'} flex flex-col`}>
                {/* Icon with gradient background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <sector.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-outfit font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {sector.title}
                </h3>

                {/* Description - reveals on hover */}
                <motion.p
                  initial={{ opacity: 0.5, height: 0 }}
                  animate={{ 
                    opacity: hoveredId === sector.id ? 1 : 0.5,
                    height: 'auto'
                  }}
                  className="text-sm text-slate-400 flex-grow"
                >
                  {sector.description}
                </motion.p>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ 
                    x: hoveredId === sector.id ? 0 : -10,
                    opacity: hoveredId === sector.id ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 text-cyan-400 flex items-center gap-2 text-sm font-medium"
                >
                  Ver soluciones
                  <span>→</span>
                </motion.div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
        />
      </div>
    </section>
  )
}
