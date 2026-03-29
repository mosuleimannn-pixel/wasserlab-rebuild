import { Variants, TargetAndTransition, Transition } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════════════════════
   WASSERLAB - ANIMATION LIBRARY
   Framer Motion Variants & Helpers
   ═══════════════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────────────────
// TRANSITION PRESETS
// ─────────────────────────────────────────────────────────────────────────────

export const transitions = {
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  } as Transition,
  
  springBouncy: {
    type: 'spring',
    stiffness: 400,
    damping: 25,
  } as Transition,
  
  springStiff: {
    type: 'spring',
    stiffness: 500,
    damping: 35,
  } as Transition,
  
  smooth: {
    type: 'tween',
    ease: [0.4, 0, 0.2, 1],
    duration: 0.5,
  } as Transition,
  
  smoothSlow: {
    type: 'tween',
    ease: [0.4, 0, 0.2, 1],
    duration: 0.8,
  } as Transition,
  
  expo: {
    type: 'tween',
    ease: [0.19, 1, 0.22, 1],
    duration: 0.8,
  } as Transition,
  
  expoSlow: {
    type: 'tween',
    ease: [0.19, 1, 0.22, 1],
    duration: 1.2,
  } as Transition,
}

// ─────────────────────────────────────────────────────────────────────────────
// FADE VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.smooth,
  },
}

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.expo,
  },
}

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.expo,
  },
}

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.expo,
  },
}

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.expo,
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// SCALE VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.spring,
  },
}

export const scaleInBouncy: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.springBouncy,
  },
}

export const scaleOnHover: TargetAndTransition = {
  scale: 1.05,
  transition: transitions.spring,
}

export const scaleOnTap: TargetAndTransition = {
  scale: 0.95,
  transition: { duration: 0.1 },
}

// ─────────────────────────────────────────────────────────────────────────────
// STAGGER VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.expo,
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE TRANSITIONS
// ─────────────────────────────────────────────────────────────────────────────

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
}

export const pageSlide: Variants = {
  initial: {
    opacity: 0,
    x: '100%',
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  exit: {
    opacity: 0,
    x: '-100%',
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
}

export const pageFade: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// TEXT REVEAL
// ─────────────────────────────────────────────────────────────────────────────

export const textRevealContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
}

export const textRevealChar: Variants = {
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
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
}

export const textRevealWord: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.expo,
  },
}

export const textRevealLine: Variants = {
  hidden: {
    opacity: 0,
    y: '100%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// GLOW ANIMATIONS
// ─────────────────────────────────────────────────────────────────────────────

export const glowPulse: Variants = {
  initial: {
    opacity: 0.5,
    scale: 1,
  },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

export const glowFloat: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// SCROLL-BASED HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Creates parallax transform values based on scroll progress
 */
export function createParallaxRange(
  scrollY: number,
  inputRange: [number, number],
  outputRange: [number, number]
): number {
  const [inputStart, inputEnd] = inputRange
  const [outputStart, outputEnd] = outputRange
  
  const progress = Math.max(0, Math.min(1, (scrollY - inputStart) / (inputEnd - inputStart)))
  
  return outputStart + progress * (outputEnd - outputStart)
}

/**
 * Viewport-based animation configuration for scroll trigger
 */
export const viewportConfig = {
  once: true,
  amount: 0.2,
  margin: '-100px',
}

export const viewportConfigEager = {
  once: true,
  amount: 0.1,
  margin: '-50px',
}

export const viewportConfigLazy = {
  once: true,
  amount: 0.3,
  margin: '-150px',
}

// ─────────────────────────────────────────────────────────────────────────────
// MAGNETIC HOVER EFFECT
// ─────────────────────────────────────────────────────────────────────────────

interface MagneticConfig {
  strength?: number
  radius?: number
}

/**
 * Calculate magnetic pull effect for an element
 */
export function calculateMagneticPosition(
  mouseX: number,
  mouseY: number,
  elementRect: DOMRect,
  config: MagneticConfig = {}
): { x: number; y: number } {
  const { strength = 0.3, radius = 150 } = config
  
  const centerX = elementRect.left + elementRect.width / 2
  const centerY = elementRect.top + elementRect.height / 2
  
  const distanceX = mouseX - centerX
  const distanceY = mouseY - centerY
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
  
  if (distance > radius) {
    return { x: 0, y: 0 }
  }
  
  const pull = 1 - distance / radius
  const pullStrength = pull * strength
  
  return {
    x: distanceX * pullStrength,
    y: distanceY * pullStrength,
  }
}

/**
 * React hook helper for magnetic effect
 */
export function getMagneticHandlers(
  setPosition: (pos: { x: number; y: number }) => void,
  config: MagneticConfig = {}
) {
  return {
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const position = calculateMagneticPosition(e.clientX, e.clientY, rect, config)
      setPosition(position)
    },
    onMouseLeave: () => {
      setPosition({ x: 0, y: 0 })
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// WATER/LIQUID EFFECTS
// ─────────────────────────────────────────────────────────────────────────────

export const waterFloat: Variants = {
  initial: {
    y: 0,
    x: 0,
    rotate: 0,
  },
  animate: {
    y: [0, -15, 0, -10, 0],
    x: [0, 5, 0, -5, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 8,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

export const bubbleRise: Variants = {
  initial: {
    y: 0,
    opacity: 0,
    scale: 0,
  },
  animate: {
    y: -200,
    opacity: [0, 0.8, 0.8, 0],
    scale: [0, 1, 1, 0.5],
    transition: {
      duration: 4,
      ease: 'easeOut',
      repeat: Infinity,
    },
  },
}

export const rippleExpand: Variants = {
  initial: {
    scale: 0,
    opacity: 1,
  },
  animate: {
    scale: 4,
    opacity: 0,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// HOVER LIFT EFFECT
// ─────────────────────────────────────────────────────────────────────────────

export const hoverLift: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 0 0 rgba(0, 212, 255, 0)',
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)',
    transition: transitions.spring,
  },
}

export const hoverGlow: Variants = {
  rest: {
    boxShadow: '0 0 0 rgba(0, 212, 255, 0)',
  },
  hover: {
    boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)',
    transition: { duration: 0.3 },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY: Create Custom Delay Variants
// ─────────────────────────────────────────────────────────────────────────────

export function createDelayedVariant(
  baseVariant: Variants,
  delay: number
): Variants {
  const result: Variants = {}
  
  for (const [key, value] of Object.entries(baseVariant)) {
    if (typeof value === 'object' && value !== null && 'transition' in value) {
      result[key] = {
        ...value,
        transition: {
          ...(value.transition as object),
          delay,
        },
      }
    } else {
      result[key] = value
    }
  }
  
  return result
}

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY: Scroll Progress to Animation Value
// ─────────────────────────────────────────────────────────────────────────────

export function scrollToValue(
  scrollProgress: number,
  outputRange: [number, number]
): number {
  const [start, end] = outputRange
  return start + scrollProgress * (end - start)
}

// ─────────────────────────────────────────────────────────────────────────────
// PRESETS FOR COMMON USE CASES
// ─────────────────────────────────────────────────────────────────────────────

export const presets = {
  // Section entrance
  sectionEntrance: {
    container: staggerContainer,
    item: fadeInUp,
  },
  
  // Product grid
  productGrid: {
    container: staggerContainerFast,
    item: scaleIn,
  },
  
  // Hero section
  hero: {
    title: fadeInUp,
    subtitle: createDelayedVariant(fadeInUp, 0.2),
    cta: createDelayedVariant(fadeInUp, 0.4),
  },
  
  // Card hover
  card: {
    initial: 'rest',
    whileHover: 'hover',
    variants: hoverLift,
  },
  
  // Button
  button: {
    whileHover: scaleOnHover,
    whileTap: scaleOnTap,
  },
}

export default {
  transitions,
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scaleInBouncy,
  scaleOnHover,
  scaleOnTap,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  staggerItem,
  pageTransition,
  pageSlide,
  pageFade,
  textRevealContainer,
  textRevealChar,
  textRevealWord,
  textRevealLine,
  glowPulse,
  glowFloat,
  waterFloat,
  bubbleRise,
  rippleExpand,
  hoverLift,
  hoverGlow,
  viewportConfig,
  presets,
}
