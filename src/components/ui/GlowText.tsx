'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export type GlowVariant = 'subtle' | 'intense' | 'rainbow';

export interface GlowTextProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  variant?: GlowVariant;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  gradient?: boolean;
  animated?: boolean;
  children: React.ReactNode;
}

const glowStyles: Record<GlowVariant, { textShadow: string; filter?: string }> = {
  subtle: {
    textShadow: '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)',
  },
  intense: {
    textShadow: '0 0 10px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.3), 0 0 100px rgba(0, 212, 255, 0.2)',
  },
  rainbow: {
    textShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 102, 255, 0.3), 0 0 60px rgba(0, 255, 170, 0.2)',
  },
};

const gradientStyles = {
  default: 'bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-glow)] bg-clip-text text-transparent',
  rainbow: 'bg-gradient-to-r from-[#00d4ff] via-[#0066ff] via-[#00ffaa] to-[#00d4ff] bg-clip-text text-transparent bg-[length:200%_auto]',
};

export const GlowText = forwardRef<HTMLSpanElement, GlowTextProps>(
  (
    {
      variant = 'subtle',
      as = 'span',
      gradient = false,
      animated = true,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const Component = motion[as] as typeof motion.span;
    const glowStyle = glowStyles[variant];

    // Animation variants
    const glowAnimation = animated
      ? {
          textShadow: [
            glowStyle.textShadow,
            glowStyle.textShadow.replace(/0\.\d+/g, (match) => String(parseFloat(match) * 1.5)),
            glowStyle.textShadow,
          ],
        }
      : undefined;

    const rainbowAnimation = variant === 'rainbow' && gradient && animated
      ? {
          backgroundPosition: ['0% center', '200% center'],
        }
      : undefined;

    return (
      <Component
        ref={ref}
        className={cn(
          'relative inline-block',
          gradient && (variant === 'rainbow' ? gradientStyles.rainbow : gradientStyles.default),
          className
        )}
        style={{
          ...(!gradient && { color: 'var(--text-primary)' }),
          textShadow: !gradient ? glowStyle.textShadow : undefined,
          ...style,
        }}
        animate={{
          ...glowAnimation,
          ...rainbowAnimation,
        }}
        transition={{
          duration: variant === 'rainbow' ? 3 : 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        {...(props as HTMLMotionProps<'span'>)}
      >
        {children}
        
        {/* Blur glow layer behind text */}
        {variant === 'intense' && !gradient && (
          <motion.span
            className="absolute inset-0 -z-10 blur-lg opacity-50"
            style={{ color: 'var(--accent-primary)' }}
            aria-hidden="true"
          >
            {children}
          </motion.span>
        )}
      </Component>
    );
  }
);

GlowText.displayName = 'GlowText';

// Preset components for common use cases
export const GlowHeading = forwardRef<HTMLSpanElement, Omit<GlowTextProps, 'as'>>(
  ({ variant = 'intense', gradient = true, ...props }, ref) => (
    <GlowText ref={ref} as="h1" variant={variant} gradient={gradient} {...props} />
  )
);
GlowHeading.displayName = 'GlowHeading';

export const GlowAccent = forwardRef<HTMLSpanElement, Omit<GlowTextProps, 'as'>>(
  ({ variant = 'subtle', ...props }, ref) => (
    <GlowText ref={ref} as="span" variant={variant} {...props} />
  )
);
GlowAccent.displayName = 'GlowAccent';

export default GlowText;
