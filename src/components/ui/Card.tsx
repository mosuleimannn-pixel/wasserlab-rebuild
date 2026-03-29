'use client';

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export type CardVariant = 'default' | 'glow' | 'gradient-border';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  variant?: CardVariant;
  header?: ReactNode;
  footer?: ReactNode;
  noPadding?: boolean;
  hoverEffect?: boolean;
  children: ReactNode;
}

const baseStyles = `
  relative rounded-2xl
  bg-[var(--bg-secondary)]/80
  backdrop-blur-xl
  border border-white/5
  overflow-hidden
`;

const variantStyles: Record<CardVariant, string> = {
  default: '',
  glow: `
    shadow-lg shadow-[var(--accent-primary)]/10
    hover:shadow-xl hover:shadow-[var(--accent-primary)]/20
  `,
  'gradient-border': '',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      header,
      footer,
      noPadding = false,
      hoverEffect = true,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {/* Gradient border overlay for gradient-border variant */}
        {variant === 'gradient-border' && (
          <div
            className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--accent-glow) 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
        )}

        {/* Glow effect for glow variant */}
        {variant === 'glow' && (
          <motion.div
            className="absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
              filter: 'blur(8px)',
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.3 }}
          />
        )}

        {/* Header */}
        {header && (
          <div className="px-6 py-4 border-b border-white/5">
            {header}
          </div>
        )}

        {/* Content */}
        <div className={cn('relative z-10', !noPadding && 'p-6')}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-white/5 bg-black/20">
            {footer}
          </div>
        )}
      </>
    );

    if (hoverEffect) {
      return (
        <motion.div
          ref={ref}
          className={cn(baseStyles, variantStyles[variant], className)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          whileHover={{ 
            y: -4,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.5 }}
          {...(props as HTMLMotionProps<'div'>)}
        >
          {content}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {content}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Sub-components for flexible composition
export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-xl font-semibold text-[var(--text-primary)] tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-[var(--text-secondary)]', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export default Card;
