'use client'

import { motion } from 'framer-motion'

interface Spec {
  label: string
  value: string
}

interface SpecsTableProps {
  specs: Spec[]
  title?: string
}

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut'
    }
  })
}

export default function SpecsTable({ specs, title = 'Especificaciones Técnicas' }: SpecsTableProps) {
  return (
    <div className="w-full">
      {title && (
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-white mb-6 flex items-center gap-2"
        >
          <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
          {title}
        </motion.h3>
      )}
      
      <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
        {specs.map((spec, index) => (
          <motion.div
            key={spec.label}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rowVariants}
            className={`
              grid grid-cols-2 gap-4 px-6 py-4
              ${index !== specs.length - 1 ? 'border-b border-white/5' : ''}
              hover:bg-white/5 transition-colors duration-300
            `}
          >
            <span className="text-white/60 font-medium">
              {spec.label}
            </span>
            <span className="text-white font-semibold text-right">
              {spec.value}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Compact version for product cards
export function SpecsCompact({ specs }: { specs: Spec[] }) {
  return (
    <div className="space-y-2">
      {specs.slice(0, 3).map((spec) => (
        <div 
          key={spec.label}
          className="flex justify-between text-sm"
        >
          <span className="text-white/50">{spec.label}</span>
          <span className="text-cyan-400 font-mono">{spec.value}</span>
        </div>
      ))}
    </div>
  )
}
