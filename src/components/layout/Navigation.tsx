'use client';

import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown, Droplets, FlaskConical, Building2, Beaker } from 'lucide-react';

export interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    icon?: React.ReactNode;
  }[];
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Empresa', href: '/empresa' },
  {
    label: 'Equipos',
    href: '/equipos',
    children: [
      {
        label: 'Sobremesa Gama Básica',
        href: '/equipos/sobremesa-basica',
        description: 'Equipos compactos para uso general',
        icon: <Droplets className="w-5 h-5" />,
      },
      {
        label: 'Sobremesa Gama Plus',
        href: '/equipos/sobremesa-plus',
        description: 'Equipos avanzados de alta pureza',
        icon: <FlaskConical className="w-5 h-5" />,
      },
      {
        label: 'Alimentación Analizadores',
        href: '/equipos/analizadores',
        description: 'Para analizadores clínicos',
        icon: <Beaker className="w-5 h-5" />,
      },
      {
        label: 'Gama Alta Producción',
        href: '/equipos/alta-produccion',
        description: 'Sistemas industriales de gran capacidad',
        icon: <Building2 className="w-5 h-5" />,
      },
    ],
  },
  { label: 'Sectores', href: '/sectores' },
  { label: 'Contacto', href: '/contacto' },
];

export const Navigation = forwardRef<HTMLElement, NavigationProps>(
  ({ mobile = false, onClose }, ref) => {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const isActive = (href: string) => {
      if (href === '/') return pathname === '/';
      return pathname.startsWith(href);
    };

    // Mobile Navigation
    if (mobile) {
      return (
        <nav ref={ref} className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.children ? (
                <div>
                  <button
                    className={cn(
                      'w-full flex items-center justify-between py-3 px-4 rounded-xl',
                      'text-lg font-medium transition-colors duration-200',
                      openDropdown === item.href
                        ? 'text-[var(--accent-primary)] bg-white/5'
                        : 'text-[var(--text-secondary)] hover:text-white hover:bg-white/5'
                    )}
                    onClick={() => setOpenDropdown(
                      openDropdown === item.href ? null : item.href
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn(
                      'w-5 h-5 transition-transform duration-200',
                      openDropdown === item.href && 'rotate-180'
                    )} />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.href && (
                      <motion.div
                        className="mt-2 ml-4 space-y-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className={cn(
                              'flex items-start gap-3 py-3 px-4 rounded-xl',
                              'transition-colors duration-200',
                              isActive(child.href)
                                ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
                                : 'text-[var(--text-secondary)] hover:text-white hover:bg-white/5'
                            )}
                          >
                            <span className="text-[var(--accent-primary)] mt-0.5">
                              {child.icon}
                            </span>
                            <div>
                              <div className="font-medium">{child.label}</div>
                              {child.description && (
                                <div className="text-sm opacity-60">{child.description}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'block py-3 px-4 rounded-xl',
                    'text-lg font-medium transition-colors duration-200',
                    isActive(item.href)
                      ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
                      : 'text-[var(--text-secondary)] hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>
      );
    }

    // Desktop Navigation
    return (
      <nav ref={ref} className="flex items-center gap-1">
        {navItems.map((item) => (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => item.children && setOpenDropdown(item.href)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.children ? (
              <>
                <button
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 rounded-lg',
                    'text-sm font-medium transition-all duration-200',
                    openDropdown === item.href || isActive(item.href)
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-white'
                  )}
                >
                  {item.label}
                  <ChevronDown className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    openDropdown === item.href && 'rotate-180'
                  )} />
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {openDropdown === item.href && (
                    <motion.div
                      className={cn(
                        'absolute top-full left-1/2 -translate-x-1/2 pt-4',
                        'w-[480px]'
                      )}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className={cn(
                          'bg-[var(--bg-secondary)]/95 backdrop-blur-xl',
                          'border border-white/10 rounded-2xl',
                          'shadow-2xl shadow-black/50',
                          'p-4 grid grid-cols-2 gap-2'
                        )}
                      >
                        {item.children.map((child, index) => (
                          <Link
                            key={child.href}
                            href={child.href}
                          >
                            <motion.div
                              className={cn(
                                'flex items-start gap-3 p-4 rounded-xl',
                                'transition-colors duration-200',
                                'hover:bg-white/5 group'
                              )}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <span className={cn(
                                'p-2 rounded-lg',
                                'bg-[var(--accent-primary)]/10',
                                'text-[var(--accent-primary)]',
                                'group-hover:bg-[var(--accent-primary)]/20',
                                'transition-colors duration-200'
                              )}>
                                {child.icon}
                              </span>
                              <div>
                                <div className="font-medium text-white group-hover:text-[var(--accent-primary)] transition-colors">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-sm text-[var(--text-secondary)] mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          </Link>
                        ))}

                        {/* View All Link */}
                        <Link
                          href={item.href}
                          className={cn(
                            'col-span-2 flex items-center justify-center gap-2',
                            'p-3 mt-2 rounded-xl',
                            'border border-white/10 hover:border-[var(--accent-primary)]/50',
                            'text-[var(--text-secondary)] hover:text-[var(--accent-primary)]',
                            'transition-colors duration-200'
                          )}
                        >
                          Ver todos los equipos
                          <ChevronDown className="w-4 h-4 -rotate-90" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link href={item.href}>
                <motion.span
                  className={cn(
                    'relative px-4 py-2 rounded-lg',
                    'text-sm font-medium transition-colors duration-200',
                    'block',
                    isActive(item.href)
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-white'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                  
                  {/* Active indicator */}
                  {isActive(item.href) && (
                    <motion.span
                      className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[var(--accent-primary)] rounded-full"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', damping: 30, stiffness: 500 }}
                    />
                  )}
                </motion.span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';

export default Navigation;
