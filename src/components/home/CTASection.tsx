'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Send, Phone, Mail, ArrowRight } from 'lucide-react'

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a1628] to-[#0a0a0f]" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/20 via-blue-600/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-indigo-600/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-cyan-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-sm text-cyan-300/80 font-medium">
              Respuesta en 24h
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold mb-6"
          >
            ¿Necesitas un{' '}
            <span className="text-gradient glow-text">presupuesto</span>
            {' '}personalizado?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12"
          >
            Nuestro equipo técnico analizará tus necesidades y te propondrá la solución más adecuada para tu laboratorio o empresa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            {/* Primary CTA */}
            <motion.a
              href="/presupuesto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 min-h-[56px] rounded-full font-semibold text-lg overflow-hidden touch-target"
            >
              {/* Animated gradient background */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] rounded-full"
              />
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              <span className="relative z-10 flex items-center gap-3 text-white">
                <Send className="w-5 h-5" />
                Solicitar Presupuesto
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/contacto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 min-h-[56px] rounded-full font-semibold text-lg glass border border-white/10 hover:border-cyan-500/50 transition-all duration-300 touch-target"
            >
              <span className="flex items-center gap-3 text-white group-hover:text-cyan-300 transition-colors">
                <Phone className="w-5 h-5" />
                Contactar
              </span>
            </motion.a>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {/* Phone */}
            <motion.a
              href="tel:+34948186141"
              whileHover={{ scale: 1.02, y: -2 }}
              className="group flex items-center gap-4 p-5 rounded-2xl glass border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Teléfono</div>
                <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">+34 948 186 141</div>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@wasserlab.com"
              whileHover={{ scale: 1.02, y: -2 }}
              className="group flex items-center gap-4 p-5 rounded-2xl glass border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</div>
                <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">info@wasserlab.com</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-16 pt-12 border-t border-white/5"
          >
            <p className="text-sm text-slate-500 mb-6">Certificaciones de calidad</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-white/50">ISO 9001</div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-2xl font-bold text-white/50">ISO 14001</div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-lg font-semibold text-white/50">Made in Spain 🇪🇸</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
