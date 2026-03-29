'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Youtube,
  ChevronRight,
  Droplets
} from 'lucide-react';

export interface FooterProps {
  className?: string;
}

const footerLinks = {
  productos: {
    title: 'Productos',
    links: [
      { label: 'Sobremesa Gama Básica', href: '/equipos/sobremesa-basica' },
      { label: 'Sobremesa Gama Plus', href: '/equipos/sobremesa-plus' },
      { label: 'Alimentación Analizadores', href: '/equipos/analizadores' },
      { label: 'Gama Alta Producción', href: '/equipos/alta-produccion' },
    ],
  },
  empresa: {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nosotros', href: '/empresa' },
      { label: 'Sectores', href: '/sectores' },
      { label: 'Certificaciones', href: '/empresa#certificaciones' },
      { label: 'Sostenibilidad', href: '/empresa#sostenibilidad' },
    ],
  },
  soporte: {
    title: 'Soporte',
    links: [
      { label: 'Contacto', href: '/contacto' },
      { label: 'Solicitar Presupuesto', href: '/presupuesto' },
      { label: 'Servicio Técnico', href: '/contacto#servicio-tecnico' },
      { label: 'Descargas', href: '/descargas' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Aviso Legal', href: '/legal/aviso-legal' },
      { label: 'Política de Privacidad', href: '/legal/privacidad' },
      { label: 'Política de Cookies', href: '/legal/cookies' },
      { label: 'Términos y Condiciones', href: '/legal/terminos' },
    ],
  },
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/wasserlab', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@wasserlab', label: 'YouTube' },
];

const contactInfo = [
  { icon: Phone, text: '+34 948 186 141', href: 'tel:+34948186141' },
  { icon: Mail, text: 'info@wasserlab.com', href: 'mailto:info@wasserlab.com' },
  { icon: MapPin, text: 'Pol.Ind Comarca II, Calle E, Nº3, 31191 Barbatáin, Navarra', href: 'https://maps.google.com/?q=Pol.Ind+Comarca+II+Calle+E+Barbatain+Navarra+Spain' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ className }, ref) => {
    const currentYear = new Date().getFullYear();

    return (
      <footer
        ref={ref}
        className={cn(
          'relative bg-[var(--bg-secondary)] border-t border-white/5',
          className
        )}
      >
        {/* Gradient line at top */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
          }}
        />

        <div className="container mx-auto px-4 lg:px-8">
          {/* Main Footer Content */}
          <motion.div
            className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Brand Column */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                    W
                  </span>
                </div>
                <div>
                  <span className="text-xl font-bold text-white tracking-tight">
                    Wasser
                  </span>
                  <span className="text-xl font-bold text-[var(--accent-primary)] tracking-tight">
                    lab
                  </span>
                </div>
              </Link>

              <p className="text-[var(--text-secondary)] mb-6 max-w-sm">
                Más de 25 años fabricando sistemas de purificación de agua 
                para laboratorios, hospitales e industria. Calidad certificada ISO.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.text}
                    href={info.href}
                    className={cn(
                      'flex items-center gap-3',
                      'text-[var(--text-secondary)] hover:text-[var(--accent-primary)]',
                      'transition-colors duration-200'
                    )}
                  >
                    <info.icon className="w-4 h-4" />
                    <span className="text-sm">{info.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'p-2.5 rounded-xl',
                      'bg-white/5 hover:bg-[var(--accent-primary)]/20',
                      'text-[var(--text-secondary)] hover:text-[var(--accent-primary)]',
                      'transition-colors duration-200'
                    )}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Link Columns */}
            {Object.values(footerLinks).map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'group flex items-center gap-1',
                          'text-sm text-[var(--text-secondary)]',
                          'hover:text-[var(--accent-primary)]',
                          'transition-colors duration-200',
                          'py-2 -mx-2 px-2 rounded-lg hover:bg-white/5',
                          'min-h-[40px] touch-target-sm'
                        )}
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[var(--text-secondary)]">
                © {currentYear} Wasserlab. Todos los derechos reservados.
              </p>
              
              {/* Certifications */}
              <div className="flex items-center gap-4">
                <span className="text-xs text-[var(--text-secondary)] opacity-50">
                  ISO 9001 · ISO 14001
                </span>
                <div className="flex items-center gap-1 text-[var(--accent-primary)]">
                  <Droplets className="w-4 h-4" />
                  <span className="text-xs font-medium">
                    Líder en purificación de agua
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, var(--accent-primary) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

export default Footer;
