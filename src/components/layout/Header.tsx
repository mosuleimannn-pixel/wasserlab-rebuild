'use client';

import { forwardRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import Navigation from './Navigation';

export interface HeaderProps {
  className?: string;
}

const languages = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
];

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className }, ref) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('es');
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    
    const { scrollY } = useScroll();
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll events
    useMotionValueEvent(scrollY, 'change', (latest) => {
      // Update blur state
      setIsScrolled(latest > 50);
      
      // Hide/show header on scroll direction
      if (latest > lastScrollY && latest > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(latest);
    });

    // Close mobile menu on resize
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = useCallback(() => {
      setIsMobileMenuOpen((prev) => !prev);
    }, []);

    return (
      <>
        <motion.header
          ref={ref}
          className={cn(
            'fixed top-0 left-0 right-0 z-50',
            'transition-all duration-300',
            className
          )}
          initial={{ y: 0 }}
          animate={{ 
            y: isVisible ? 0 : -100,
            backgroundColor: isScrolled 
              ? 'rgba(10, 10, 15, 0.85)' 
              : 'rgba(10, 10, 15, 0)',
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient border on scroll */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 0.5 : 0 }}
          />

          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="relative z-10">
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Logo Icon */}
                  <div className="relative w-10 h-10">
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(0, 212, 255, 0.3)',
                          '0 0 30px rgba(0, 212, 255, 0.5)',
                          '0 0 20px rgba(0, 212, 255, 0.3)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                      W
                    </span>
                  </div>
                  {/* Logo Text */}
                  <div className="hidden sm:block">
                    <span className="text-xl font-bold text-white tracking-tight">
                      Wasser
                    </span>
                    <span className="text-xl font-bold text-[var(--accent-primary)] tracking-tight">
                      lab
                    </span>
                  </div>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                <Navigation />
              </div>

              {/* Right section */}
              <div className="flex items-center gap-4">
                {/* Language Switcher */}
                <div className="relative">
                  <motion.button
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 rounded-lg',
                      'text-[var(--text-secondary)] hover:text-white',
                      'bg-white/5 hover:bg-white/10',
                      'transition-colors duration-200'
                    )}
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      isLangMenuOpen && 'rotate-180'
                    )} />
                  </motion.button>

                  <AnimatePresence>
                    {isLangMenuOpen && (
                      <motion.div
                        className={cn(
                          'absolute top-full right-0 mt-2',
                          'bg-[var(--bg-secondary)]/95 backdrop-blur-xl',
                          'border border-white/10 rounded-xl',
                          'overflow-hidden shadow-2xl',
                          'min-w-[140px]'
                        )}
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            className={cn(
                              'w-full px-4 py-3 text-left',
                              'flex items-center justify-between',
                              'hover:bg-white/10 transition-colors',
                              currentLang === lang.code 
                                ? 'text-[var(--accent-primary)]' 
                                : 'text-[var(--text-secondary)]'
                            )}
                            onClick={() => {
                              setCurrentLang(lang.code);
                              setIsLangMenuOpen(false);
                            }}
                          >
                            <span>{lang.name}</span>
                            <span className="text-xs opacity-50">{lang.label}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA Button - Desktop */}
                <Link href="/presupuesto" className="hidden lg:block">
                  <motion.button
                    className={cn(
                      'px-5 py-2.5 rounded-xl',
                      'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]',
                      'text-white font-semibold text-sm',
                      'shadow-lg shadow-[var(--accent-primary)]/25',
                      'hover:shadow-xl hover:shadow-[var(--accent-primary)]/40',
                      'transition-shadow duration-300'
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar Presupuesto
                  </motion.button>
                </Link>

                {/* Mobile Menu Button */}
                <motion.button
                  className={cn(
                    'lg:hidden relative z-50 p-2',
                    'text-white hover:text-[var(--accent-primary)]',
                    'transition-colors duration-200'
                  )}
                  onClick={toggleMobileMenu}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                className={cn(
                  'absolute top-0 right-0 h-full w-full max-w-sm',
                  'bg-[var(--bg-primary)] border-l border-white/10',
                  'flex flex-col pt-24 px-6 pb-8'
                )}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <Navigation mobile onClose={() => setIsMobileMenuOpen(false)} />

                {/* Mobile CTA */}
                <div className="mt-auto pt-8">
                  <Link 
                    href="/presupuesto" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.button
                      className={cn(
                        'w-full px-5 py-4 rounded-xl',
                        'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]',
                        'text-white font-semibold',
                        'shadow-lg shadow-[var(--accent-primary)]/25'
                      )}
                      whileTap={{ scale: 0.98 }}
                    >
                      Solicitar Presupuesto
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
);

Header.displayName = 'Header';

export default Header;
