'use client';

import { forwardRef, useState, useCallback, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  glowOnHover?: boolean;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]
    text-white font-semibold
    shadow-lg shadow-[var(--accent-primary)]/25
    hover:shadow-xl hover:shadow-[var(--accent-primary)]/40
    border-0
  `,
  secondary: `
    bg-[var(--bg-secondary)] 
    text-[var(--text-primary)]
    border border-white/10
    hover:bg-white/10 hover:border-white/20
  `,
  ghost: `
    bg-transparent
    text-[var(--text-secondary)]
    hover:text-[var(--text-primary)]
    hover:bg-white/5
    border-0
  `,
  outline: `
    bg-transparent
    text-[var(--accent-primary)]
    border border-[var(--accent-primary)]/50
    hover:bg-[var(--accent-primary)]/10
    hover:border-[var(--accent-primary)]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5 rounded-lg',
  md: 'px-5 py-2.5 text-base gap-2 rounded-xl',
  lg: 'px-8 py-4 text-lg gap-3 rounded-2xl',
};

const iconSizes: Record<ButtonSize, string> = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

interface RippleType {
  x: number;
  y: number;
  id: number;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      glowOnHover = true,
      children,
      className,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = useState<RippleType[]>([]);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || isLoading) return;

        // Create ripple effect
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();

        setRipples((prev) => [...prev, { x, y, id }]);

        // Remove ripple after animation
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 600);

        onClick?.(e);
      },
      [disabled, isLoading, onClick]
    );

    const isDisabled = disabled || isLoading;

    return (
      <motion.button
        ref={ref}
        className={cn(
          // Base styles
          'relative inline-flex items-center justify-center',
          'font-medium transition-all duration-300',
          'overflow-hidden cursor-pointer',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          // Focus styles
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]',
          // Variant & Size
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={isDisabled}
        onClick={handleClick}
        whileHover={!isDisabled ? { scale: 1.02 } : undefined}
        whileTap={!isDisabled ? { scale: 0.98 } : undefined}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {/* Glow effect on hover */}
        {glowOnHover && variant === 'primary' && (
          <motion.div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.5 }}
          />
        )}

        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
            initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.5 }}
            animate={{
              width: 300,
              height: 300,
              x: -150,
              y: -150,
              opacity: 0,
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-inherit">
          {isLoading ? (
            <>
              <Loader2 className={cn('animate-spin', iconSizes[size])} />
              {loadingText && <span>{loadingText}</span>}
            </>
          ) : (
            <>
              {leftIcon && <span className={iconSizes[size]}>{leftIcon}</span>}
              {children}
              {rightIcon && <span className={iconSizes[size]}>{rightIcon}</span>}
            </>
          )}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
