'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Droplets, FlaskConical, Factory, Microscope } from 'lucide-react'

const products = [
  {
    id: 1,
    title: "Sobremesa Gama Básica",
    description: "Sistemas compactos de purificación para laboratorios pequeños y medianos.",
    icon: Droplets,
    waterTypes: ["Tipo II", "Tipo III"],
    image: "/images/products/original/micromatic.jpg",
    color: "from-cyan-500/20 to-blue-500/20",
    glowColor: "cyan",
    count: 3,
  },
  {
    id: 2,
    title: "Sobremesa Gama Plus",
    description: "Equipos avanzados con mayor capacidad y funciones adicionales.",
    icon: FlaskConical,
    waterTypes: ["Tipo I", "Tipo II", "Tipo III"],
    image: "/images/products/original/autwomatic-plus.jpg",
    color: "from-blue-500/20 to-indigo-500/20",
    glowColor: "blue",
    count: 7,
  },
  {
    id: 3,
    title: "Alimentación Analizadores",
    description: "Sistemas específicos para analizadores clínicos y equipos médicos.",
    icon: Microscope,
    waterTypes: ["Tipo I", "Tipo II"],
    image: "/images/products/original/clinical-edi.jpg",
    color: "from-violet-500/20 to-purple-500/20",
    glowColor: "violet",
    count: 3,
  },
  {
    id: 4,
    title: "Gama Alta Producción",
    description: "Sistemas industriales de alta capacidad para grandes volúmenes.",
    icon: Factory,
    waterTypes: ["Tipo I", "Tipo II", "Tipo III"],
    image: "/images/products/original/process-60.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
    glowColor: "emerald",
    count: 4,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
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

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="productos" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"
      />

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
            Nuestros Equipos
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold mb-6">
            Gamas de{' '}
            <span className="text-gradient">Purificación</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Soluciones adaptadas a cada necesidad: desde laboratorios compactos hasta instalaciones industriales.
          </p>
        </motion.div>

        {/* Product grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href={`/equipos/${product.id}`}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full rounded-3xl overflow-hidden glass border border-white/5 hover:border-white/10 transition-all duration-500">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-radial from-${product.glowColor}-500/20 via-transparent to-transparent`} />

                {/* Content */}
                <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <product.icon className="w-7 h-7 text-cyan-400" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-outfit font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Water types badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.waterTypes.map((type) => (
                      <span
                        key={type}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-cyan-300/80"
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-sm text-slate-500">
                      {product.count} productos
                    </span>
                    <motion.span
                      className="flex items-center gap-2 text-cyan-400 text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Ver gama
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.span>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/equipos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/10 hover:border-cyan-500/30 text-white hover:text-cyan-300 transition-all duration-300"
          >
            <span className="font-semibold">Ver todos los equipos</span>
            <span className="text-2xl">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
