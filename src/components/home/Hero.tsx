'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { ChevronDown, Droplets, Beaker } from 'lucide-react'

// Typewriter effect hook with proper cleanup
function useTypewriter(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let delayTimeout: NodeJS.Timeout
    let isMounted = true
    
    // Reset state when text changes
    setDisplayText('')
    setIsComplete(false)
    
    const startTyping = () => {
      let i = 0
      const type = () => {
        if (!isMounted) return
        
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1))
          i++
          timeout = setTimeout(type, speed)
        } else {
          setIsComplete(true)
        }
      }
      type()
    }

    delayTimeout = setTimeout(startTyping, delay)
    
    return () => {
      isMounted = false
      clearTimeout(delayTimeout)
      clearTimeout(timeout)
    }
  }, [text, speed, delay])

  return { displayText, isComplete }
}

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

// Animated water molecule
function WaterMolecule({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative">
        <div className="w-4 h-4 bg-cyan-400/20 rounded-full blur-sm" />
        <div className="absolute -top-2 -left-3 w-2 h-2 bg-blue-400/20 rounded-full blur-sm" />
        <div className="absolute -top-2 -right-3 w-2 h-2 bg-blue-400/20 rounded-full blur-sm" />
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const subtitle = "Diseñamos y fabricamos sistemas de agua purificada en España desde hace más de 25 años"
  const { displayText, isComplete } = useTypewriter(subtitle, 25, 1000)

  // Text reveal animation variants
  const headlineWords = "Equipos de Purificación de Agua para Laboratorio".split(" ")
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  }

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        {/* Primary glow */}
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/20 via-blue-600/10 to-transparent rounded-full blur-3xl"
        />
        
        {/* Secondary glow */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-blue-500/15 via-purple-600/5 to-transparent rounded-full blur-3xl"
        />

        {/* Accent glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-gradient-radial from-emerald-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Water molecules decoration */}
      <WaterMolecule className="top-1/4 left-[15%]" />
      <WaterMolecule className="top-1/3 right-[20%]" />
      <WaterMolecule className="bottom-1/3 left-[25%]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Main content */}
      <motion.div 
        style={{ y }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-cyan-500/20"
        >
          <Droplets className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-300/80 font-medium tracking-wide">
            25+ años de excelencia
          </span>
        </motion.div>

        {/* Main headline with word-by-word reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-outfit font-bold tracking-tight mb-8 perspective-1000"
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={`inline-block mr-[0.25em] ${
                word === "Purificación" || word === "Agua" 
                  ? "text-gradient glow-text" 
                  : "text-white"
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle with typewriter effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light"
        >
          {displayText}
          {!isComplete && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-[3px] h-6 bg-cyan-400 ml-1 align-middle"
            />
          )}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <motion.a
            href="/presupuesto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 min-h-[52px] rounded-full font-semibold text-lg overflow-hidden touch-target"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full opacity-100 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 text-white">
              <Beaker className="w-5 h-5" />
              Solicitar Presupuesto
            </span>
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="/equipos"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 min-h-[52px] rounded-full font-semibold text-lg glass border border-white/10 hover:border-cyan-500/50 transition-all duration-300 touch-target"
          >
            <span className="relative z-10 text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
              Ver Equipos
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-12 border-t border-white/5"
        >
          {[
            { value: "25+", label: "Años de experiencia" },
            { value: "3", label: "Tipos de agua" },
            { value: "ISO", label: "Certificados 9001 & 14001" },
            { value: "100%", label: "Fabricado en España" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#productos"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest">Descubrir</span>
          <div className="w-6 h-10 rounded-full border-2 border-current p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-current rounded-full mx-auto"
            />
          </div>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </motion.section>
  )
}
