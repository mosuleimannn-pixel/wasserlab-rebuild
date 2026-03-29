'use client'

import React, { useEffect, useRef, useCallback, useMemo } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════════════════════
   WASSERLAB - PARTICLE BACKGROUND
   Floating water molecule particles with mouse interaction
   ═══════════════════════════════════════════════════════════════════════════ */

interface ParticleConfig {
  count: number
  color: string
  opacity: number
  size: { min: number; max: number }
  speed: { min: number; max: number }
  glow: boolean
  mouseInteraction: boolean
  mouseRadius: number
}

const intensityPresets: Record<string, Partial<ParticleConfig>> = {
  hero: {
    count: 60,
    opacity: 0.6,
    size: { min: 2, max: 6 },
    speed: { min: 0.3, max: 0.8 },
    glow: true,
    mouseInteraction: true,
    mouseRadius: 150,
  },
  section: {
    count: 30,
    opacity: 0.4,
    size: { min: 1, max: 4 },
    speed: { min: 0.2, max: 0.5 },
    glow: true,
    mouseInteraction: true,
    mouseRadius: 100,
  },
  subtle: {
    count: 20,
    opacity: 0.3,
    size: { min: 1, max: 3 },
    speed: { min: 0.1, max: 0.3 },
    glow: false,
    mouseInteraction: false,
    mouseRadius: 0,
  },
  dense: {
    count: 100,
    opacity: 0.5,
    size: { min: 1, max: 4 },
    speed: { min: 0.2, max: 0.6 },
    glow: true,
    mouseInteraction: true,
    mouseRadius: 120,
  },
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  pulse: number
  pulseSpeed: number
}

interface ParticleBackgroundProps {
  intensity?: 'hero' | 'section' | 'subtle' | 'dense'
  color?: string
  className?: string
  zIndex?: number
}

export default function ParticleBackground({
  intensity = 'section',
  color = '#00d4ff',
  className = '',
  zIndex = 0,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  
  // Smooth mouse position for natural feel
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  
  // Merge preset with defaults
  const config = useMemo<ParticleConfig>(() => ({
    count: 30,
    color,
    opacity: 0.4,
    size: { min: 1, max: 4 },
    speed: { min: 0.2, max: 0.5 },
    glow: true,
    mouseInteraction: true,
    mouseRadius: 100,
    ...intensityPresets[intensity],
  }), [intensity, color])
  
  // Parse color to RGB
  const parseColor = useCallback((hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : { r: 0, g: 212, b: 255 }
  }, [])
  
  const rgb = useMemo(() => parseColor(config.color), [config.color, parseColor])
  
  // Initialize particles
  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    for (let i = 0; i < config.count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: config.size.min + Math.random() * (config.size.max - config.size.min),
        speedX: (Math.random() - 0.5) * (config.speed.max - config.speed.min) + config.speed.min * (Math.random() > 0.5 ? 1 : -1),
        speedY: (Math.random() - 0.5) * (config.speed.max - config.speed.min) + config.speed.min * (Math.random() > 0.5 ? 1 : -1),
        opacity: 0.3 + Math.random() * 0.7,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      })
    }
    particlesRef.current = particles
  }, [config])
  
  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)
    
    const mouseXVal = smoothMouseX.get()
    const mouseYVal = smoothMouseY.get()
    
    particlesRef.current.forEach((particle) => {
      // Update pulse
      particle.pulse += particle.pulseSpeed
      const pulseFactor = 0.7 + Math.sin(particle.pulse) * 0.3
      
      // Mouse interaction
      if (config.mouseInteraction) {
        const dx = mouseXVal - particle.x
        const dy = mouseYVal - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < config.mouseRadius) {
          const force = (config.mouseRadius - distance) / config.mouseRadius
          const angle = Math.atan2(dy, dx)
          particle.x -= Math.cos(angle) * force * 2
          particle.y -= Math.sin(angle) * force * 2
        }
      }
      
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY
      
      // Wrap around edges
      if (particle.x < -particle.size) particle.x = width + particle.size
      if (particle.x > width + particle.size) particle.x = -particle.size
      if (particle.y < -particle.size) particle.y = height + particle.size
      if (particle.y > height + particle.size) particle.y = -particle.size
      
      // Draw particle
      const currentOpacity = config.opacity * particle.opacity * pulseFactor
      const currentSize = particle.size * (0.8 + pulseFactor * 0.2)
      
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)
      
      if (config.glow) {
        // Glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize * 3
        )
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${currentOpacity})`)
        gradient.addColorStop(0.4, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${currentOpacity * 0.5})`)
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`)
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, currentSize * 3, 0, Math.PI * 2)
      } else {
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${currentOpacity})`
      }
      
      ctx.fill()
      
      // Draw core
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, currentSize * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${currentOpacity * 1.5})`
      ctx.fill()
    })
    
    // Draw connections
    ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`
    ctx.lineWidth = 0.5
    
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p1 = particlesRef.current[i]
        const p2 = particlesRef.current[j]
        const distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        )
        
        const maxDistance = 120
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.2
          ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }, [config, rgb, smoothMouseX, smoothMouseY])
  
  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const { clientWidth, clientHeight } = canvas.parentElement || canvas
    const dpr = window.devicePixelRatio || 1
    
    canvas.width = clientWidth * dpr
    canvas.height = clientHeight * dpr
    canvas.style.width = `${clientWidth}px`
    canvas.style.height = `${clientHeight}px`
    
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr)
    }
    
    initParticles(clientWidth, clientHeight)
  }, [initParticles])
  
  // Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const rect = canvas.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }, [mouseX, mouseY])
  
  const handleMouseLeave = useCallback(() => {
    mouseX.set(-1000)
    mouseY.set(-1000)
    mouseRef.current = { x: -1000, y: -1000 }
  }, [mouseX, mouseY])
  
  // Setup and cleanup
  useEffect(() => {
    handleResize()
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [handleResize, handleMouseMove, handleMouseLeave, animate])
  
  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CSS PARTICLE BACKGROUND (Alternative - No Canvas)
   Lighter weight, CSS-based particles for simpler use cases
   ═══════════════════════════════════════════════════════════════════════════ */

interface CSSParticle {
  id: number
  x: string
  y: string
  size: number
  duration: number
  delay: number
}

interface CSSParticleBackgroundProps {
  count?: number
  color?: string
  className?: string
}

export function CSSParticleBackground({
  count = 20,
  color = '#00d4ff',
  className = '',
}: CSSParticleBackgroundProps) {
  const [particles, setParticles] = React.useState<CSSParticle[]>([])
  const [mounted, setMounted] = React.useState(false)
  
  // Generate particles only on client to avoid hydration mismatch
  React.useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 4,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 10,
      }))
    )
    setMounted(true)
  }, [count])
  
  if (!mounted) return null
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            boxShadow: `0 0 ${particle.size * 3}px ${color}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   WATER MOLECULE PARTICLE
   H2O style molecule with connected atoms
   ═══════════════════════════════════════════════════════════════════════════ */

interface MoleculeProps {
  x: string
  y: string
  scale?: number
  rotation?: number
  delay?: number
}

export function WaterMolecule({
  x,
  y,
  scale = 1,
  rotation = 0,
  delay = 0,
}: MoleculeProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.2, 0.4, 0.2],
        scale: [scale * 0.9, scale * 1.1, scale * 0.9],
        rotate: [rotation, rotation + 10, rotation - 10, rotation],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width={40 * scale}
        height={30 * scale}
        viewBox="0 0 40 30"
        className="drop-shadow-glow"
      >
        {/* Oxygen (center) */}
        <circle
          cx="20"
          cy="15"
          r="8"
          fill="rgba(0, 212, 255, 0.6)"
          filter="url(#glow)"
        />
        {/* Hydrogen 1 (left) */}
        <circle cx="6" cy="10" r="5" fill="rgba(0, 212, 255, 0.4)" />
        {/* Hydrogen 2 (right) */}
        <circle cx="34" cy="10" r="5" fill="rgba(0, 212, 255, 0.4)" />
        {/* Bonds */}
        <line
          x1="13"
          y1="12"
          x2="10"
          y2="10"
          stroke="rgba(0, 212, 255, 0.3)"
          strokeWidth="2"
        />
        <line
          x1="27"
          y1="12"
          x2="30"
          y2="10"
          stroke="rgba(0, 212, 255, 0.3)"
          strokeWidth="2"
        />
        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   FLOATING MOLECULES BACKGROUND
   Multiple water molecules floating
   ═══════════════════════════════════════════════════════════════════════════ */

interface FloatingMoleculesProps {
  count?: number
  className?: string
}

export function FloatingMolecules({
  count = 8,
  className = '',
}: FloatingMoleculesProps) {
  const [molecules, setMolecules] = React.useState<Array<{
    id: number
    x: string
    y: string
    scale: number
    rotation: number
    delay: number
  }>>([])
  const [mounted, setMounted] = React.useState(false)
  
  // Generate molecules only on client to avoid hydration mismatch
  React.useEffect(() => {
    setMolecules(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: `${10 + Math.random() * 80}%`,
        y: `${10 + Math.random() * 80}%`,
        scale: 0.5 + Math.random() * 0.8,
        rotation: Math.random() * 360,
        delay: Math.random() * 5,
      }))
    )
    setMounted(true)
  }, [count])
  
  if (!mounted) return null
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {molecules.map((mol) => (
        <WaterMolecule
          key={mol.id}
          x={mol.x}
          y={mol.y}
          scale={mol.scale}
          rotation={mol.rotation}
          delay={mol.delay}
        />
      ))}
    </div>
  )
}
