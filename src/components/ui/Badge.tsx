'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'outline' | 'tipo1' | 'tipo2' | 'tipo3' | 'success' | 'warning' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  glow?: boolean;
  pulse?: boolean;
  children?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string; glow: string; border: string }> = {
  default: {
    bg: 'bg-white/10',
    text: 'text-white',
    glow: 'rgba(255, 255, 255, 0.3)',
    border: 'border-white/20',
  },
  outline: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    glow: 'rgba(6, 182, 212, 0.3)',
    border: 'border-cyan-500/30',
  },
  tipo1: {
    // Tipo I - Ultrapure - Premium Gold/Purple
    bg: 'bg-gradient-to-r from-purple-500/20 to-amber-500/20',
    text: 'text-amber-300',
    glow: 'rgba(251, 191, 36, 0.5)',
    border: 'border-amber-400/30',
  },
  tipo2: {
    // Tipo II - Pure - Blue/Cyan
    bg: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20',
    text: 'text-cyan-300',
    glow: 'rgba(34, 211, 238, 0.5)',
    border: 'border-cyan-400/30',
  },
  tipo3: {
    // Tipo III - Osmosis - Green/Teal
    bg: 'bg-gradient-to-r from-teal-500/20 to-green-500/20',
    text: 'text-emerald-300',
    glow: 'rgba(52, 211, 153, 0.5)',
    border: 'border-emerald-400/30',
  },
  success: {
    bg: 'bg-emerald-500/20',
    text: 'text-emerald-300',
    glow: 'rgba(52, 211, 153, 0.5)',
    border: 'border-emerald-400/30',
  },
  warning: {
    bg: 'bg-amber-500/20',
    text: 'text-amber-300',
    glow: 'rgba(251, 191, 36, 0.5)',
    border: 'border-amber-400/30',
  },
  info: {
    bg: 'bg-blue-500/20',
    text: 'text-blue-300',
    glow: 'rgba(59, 130, 246, 0.5)',
    border: 'border-blue-400/30',
  },
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      glow = false,
      pulse = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const styles = variantStyles[variant] || variantStyles.default;

    return (
      <motion.span
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center',
          'font-medium rounded-full',
          'border backdrop-blur-sm',
          // Variant styles
          styles.bg,
          styles.text,
          styles.border,
          // Size styles
          sizeStyles[size],
          className
        )}
        style={{
          boxShadow: glow ? `0 0 15px ${styles.glow}, 0 0 30px ${styles.glow}` : undefined,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          boxShadow: pulse && glow 
            ? [
                `0 0 15px ${styles.glow}, 0 0 30px ${styles.glow}`,
                `0 0 25px ${styles.glow}, 0 0 50px ${styles.glow}`,
                `0 0 15px ${styles.glow}, 0 0 30px ${styles.glow}`,
              ]
            : undefined,
        }}
        transition={{
          duration: 0.3,
          boxShadow: pulse ? {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          } : undefined,
        }}
        {...(props as HTMLMotionProps<'span'>)}
      >
        {/* Pulse dot indicator */}
        {pulse && (
          <motion.span
            className="mr-1.5 h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: 'currentColor' }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
        {children}
      </motion.span>
    );
  }
);

Badge.displayName = 'Badge';

// Preset badges for water types
export const TipoBadge = forwardRef<
  HTMLSpanElement,
  Omit<BadgeProps, 'variant'> & { tipo: 'tipo-1' | 'tipo-2' | 'tipo-3' | 1 | 2 | 3 }
>(({ tipo, glow = true, ...props }, ref) => {
  const tipoNum = typeof tipo === 'string' ? parseInt(tipo.replace('tipo-', '')) : tipo;
  
  const labels: Record<number, string> = {
    1: 'Tipo I - Ultrapura',
    2: 'Tipo II - Pura',
    3: 'Tipo III - Osmotizada',
  };

  return (
    <Badge
      ref={ref}
      variant={`tipo${tipoNum}` as BadgeVariant}
      glow={glow}
      {...props}
    >
      {labels[tipoNum]}
    </Badge>
  );
});
TipoBadge.displayName = 'TipoBadge';

export default Badge;
