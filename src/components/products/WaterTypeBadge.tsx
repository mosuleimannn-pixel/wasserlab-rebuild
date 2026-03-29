'use client'

import { motion } from 'framer-motion'
import { WaterType, waterTypeLabels } from '@/data/products'

interface WaterTypeBadgeProps {
  type: WaterType
  size?: 'sm' | 'md' | 'lg'
  showDescription?: boolean
}

const typeStyles: Record<WaterType, { bg: string; glowHover: string; border: string }> = {
  'tipo-1': {
    bg: 'bg-cyan-500/10',
    glowHover: 'hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]',
    border: 'border-cyan-400/50'
  },
  'tipo-2': {
    bg: 'bg-blue-500/10',
    glowHover: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]',
    border: 'border-blue-400/50'
  },
  'tipo-3': {
    bg: 'bg-teal-500/10',
    glowHover: 'hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]',
    border: 'border-teal-400/50'
  }
}

const textColors: Record<WaterType, string> = {
  'tipo-1': 'text-cyan-400',
  'tipo-2': 'text-blue-400',
  'tipo-3': 'text-teal-400'
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base'
}

export default function WaterTypeBadge({ 
  type, 
  size = 'md',
  showDescription = false 
}: WaterTypeBadgeProps) {
  const label = waterTypeLabels[type]
  const styles = typeStyles[type]
  const textColor = textColors[type]
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`
        inline-flex flex-col items-start gap-0.5
        ${styles.bg} ${styles.border} border
        backdrop-blur-sm rounded-lg
        ${sizeClasses[size]}
        transition-shadow duration-300
        ${styles.glowHover}
      `}
    >
      <span className={`font-semibold ${textColor}`}>
        {type.replace('-', ' ').toUpperCase()}
      </span>
      {showDescription && (
        <span className="text-white/60 text-xs">
          {label.name}
        </span>
      )}
    </motion.div>
  )
}

// Multiple badges in a row
export function WaterTypeBadges({ 
  types, 
  size = 'sm' 
}: { 
  types: WaterType[]
  size?: 'sm' | 'md' | 'lg' 
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {types.map((type) => (
        <WaterTypeBadge key={type} type={type} size={size} />
      ))}
    </div>
  )
}
