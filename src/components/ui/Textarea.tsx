'use client';

import { forwardRef, type TextareaHTMLAttributes, useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: 'default' | 'filled';
  showCharCount?: boolean;
  maxLength?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      variant = 'default',
      showCharCount = false,
      maxLength,
      className,
      id,
      disabled,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [charCount, setCharCount] = useState(String(value || '').length);
    const generatedId = useId();
    const textareaId = id || generatedId;
    const hasError = !!error;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <motion.label
            htmlFor={textareaId}
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

        {/* Textarea wrapper */}
        <div className="relative">
          {/* Textarea */}
          <textarea
            ref={ref}
            id={textareaId}
            disabled={disabled}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
            className={cn(
              // Base styles
              'w-full rounded-xl px-4 py-3',
              'text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50',
              'transition-all duration-300',
              'outline-none resize-none',
              'min-h-[120px]',
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

          {/* Error icon */}
          {hasError && (
            <div className="absolute right-4 top-4 text-red-400">
              <AlertCircle className="w-5 h-5" />
            </div>
          )}
        </div>

        {/* Footer: Helper text, error, and character count */}
        <div className="flex justify-between mt-2">
          <AnimatePresence mode="wait">
            {(helperText || error) && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={cn(
                  'text-sm',
                  hasError ? 'text-red-400' : 'text-[var(--text-secondary)]'
                )}
              >
                {error || helperText}
              </motion.p>
            )}
          </AnimatePresence>

          {showCharCount && maxLength && (
            <motion.span
              className={cn(
                'text-sm ml-auto',
                charCount >= maxLength 
                  ? 'text-red-400' 
                  : charCount >= maxLength * 0.9 
                    ? 'text-amber-400' 
                    : 'text-[var(--text-secondary)]'
              )}
              animate={{
                scale: charCount >= maxLength * 0.9 ? [1, 1.1, 1] : 1,
              }}
            >
              {charCount}/{maxLength}
            </motion.span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
