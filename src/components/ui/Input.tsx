'use client';

import { forwardRef, type InputHTMLAttributes, useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      variant = 'default',
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const generatedId = useId();
    const inputId = id || generatedId;
    const hasError = !!error;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <motion.label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-2 transition-colors duration-200',
              hasError 
                ? 'text-red-400' 
                : isFocused 
                  ? 'text-[var(--accent-primary)]' 
                  : 'text-[var(--text-secondary)]'
            )}
            animate={{ 
              color: hasError 
                ? '#f87171' 
                : isFocused 
                  ? 'var(--accent-primary)' 
                  : 'var(--text-secondary)' 
            }}
          >
            {label}
          </motion.label>
        )}

        {/* Input wrapper */}
        <div className="relative">
          {/* Left icon */}
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              // Base styles
              'w-full rounded-xl px-4 py-3',
              'text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50',
              'transition-all duration-300',
              'outline-none',
              // Variant styles
              variant === 'default' && [
                'bg-[var(--bg-secondary)]/80 backdrop-blur-sm',
                'border border-white/10',
              ],
              variant === 'filled' && [
                'bg-white/5',
                'border border-transparent',
              ],
              // Focus styles
              'focus:border-[var(--accent-primary)]/50',
              // Error styles
              hasError && 'border-red-500/50 focus:border-red-500',
              // Disabled styles
              disabled && 'opacity-50 cursor-not-allowed',
              // Icon padding
              leftIcon && 'pl-12',
              rightIcon && 'pr-12',
              className
            )}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />

          {/* Focus glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              boxShadow: hasError
                ? '0 0 0 0 rgba(239, 68, 68, 0)'
                : '0 0 0 0 rgba(0, 212, 255, 0)',
            }}
            animate={{
              boxShadow: isFocused
                ? hasError
                  ? '0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.1)'
                  : '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)'
                : '0 0 0 0 rgba(0, 212, 255, 0)',
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Right icon or error icon */}
          {(rightIcon || hasError) && (
            <div className={cn(
              'absolute right-4 top-1/2 -translate-y-1/2',
              hasError ? 'text-red-400' : 'text-[var(--text-secondary)]'
            )}>
              {hasError ? <AlertCircle className="w-5 h-5" /> : rightIcon}
            </div>
          )}
        </div>

        {/* Helper text or error message */}
        <AnimatePresence mode="wait">
          {(helperText || error) && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn(
                'mt-2 text-sm',
                hasError ? 'text-red-400' : 'text-[var(--text-secondary)]'
              )}
            >
              {error || helperText}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
