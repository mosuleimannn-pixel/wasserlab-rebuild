'use client';

import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Droplets, Zap, Gauge } from 'lucide-react';
import { Badge, TipoBadge } from '../ui/Badge';
import { Button } from '../ui/Button';

import { WaterType } from '@/data/products';

export interface ProductSpec {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  waterType: WaterType;
  shortDescription: string;
  specs: ProductSpec[];
  featured?: boolean;
  className?: string;
}

const defaultSpecs: Record<string, React.ReactNode> = {
  'Producción': <Droplets className="w-4 h-4" />,
  'Resistividad': <Zap className="w-4 h-4" />,
  'Capacidad': <Gauge className="w-4 h-4" />,
};

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      id,
      name,
      slug,
      image,
      waterType,
      shortDescription,
      specs,
      featured = false,
      className,
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        ref={ref}
        className={cn(
          'group relative',
          'rounded-2xl overflow-hidden',
          'bg-[var(--bg-secondary)]/80 backdrop-blur-xl',
          'border border-white/5',
          featured && 'lg:col-span-2 lg:row-span-2',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 212, 255, 0.1), transparent 40%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: '0 0 0 1px rgba(0, 212, 255, 0)',
          }}
          animate={{
            boxShadow: isHovered 
              ? '0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)' 
              : '0 0 0 1px rgba(0, 212, 255, 0)',
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Image Container */}
        <div className={cn(
          'relative overflow-hidden',
          featured ? 'h-72 lg:h-96' : 'h-56'
        )}>
          {/* Background gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-secondary)]"
            style={{ zIndex: 1 }}
          />

          {/* Product Image */}
          <motion.div
            className="relative w-full h-full"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-center"
              sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
            />
          </motion.div>

          {/* Type Badge - Top Right */}
          <div className="absolute top-4 right-4 z-10">
            <TipoBadge tipo={waterType} glow />
          </div>

          {/* Featured badge */}
          {featured && (
            <div className="absolute top-4 left-4 z-10">
              <Badge variant="default" glow pulse>
                ⭐ Destacado
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Product Name */}
          <h3 className={cn(
            'font-bold text-white mb-2',
            'group-hover:text-[var(--accent-primary)] transition-colors duration-300',
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          )}>
            {name}
          </h3>

          {/* Short Description */}
          <p className={cn(
            'text-[var(--text-secondary)] mb-4',
            featured ? 'text-base' : 'text-sm',
            'line-clamp-2'
          )}>
            {shortDescription}
          </p>

          {/* Specs Preview */}
          <div className={cn(
            'grid gap-3 mb-6',
            featured ? 'grid-cols-3' : 'grid-cols-2'
          )}>
            {specs.slice(0, featured ? 3 : 2).map((spec) => (
              <div 
                key={spec.label}
                className="flex items-center gap-2 text-sm"
              >
                <span className="text-[var(--accent-primary)]">
                  {spec.icon || defaultSpecs[spec.label] || <Droplets className="w-4 h-4" />}
                </span>
                <div>
                  <div className="text-[var(--text-secondary)] text-xs">
                    {spec.label}
                  </div>
                  <div className="text-white font-medium">
                    {spec.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href={`/equipos/${slug}`} className="block">
            <Button
              variant="outline"
              size={featured ? 'lg' : 'md'}
              className="w-full group/btn"
              rightIcon={
                <motion.span
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              }
            >
              Ver Detalles
            </Button>
          </Link>
        </div>

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 50%, var(--accent-primary) 50%)',
            opacity: 0,
          }}
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  }
);

ProductCard.displayName = 'ProductCard';

// Skeleton loader for ProductCard
export const ProductCardSkeleton = () => (
  <div className="rounded-2xl overflow-hidden bg-[var(--bg-secondary)]/80 border border-white/5 animate-pulse">
    <div className="h-56 bg-white/5" />
    <div className="p-6 space-y-4">
      <div className="h-6 bg-white/5 rounded w-3/4" />
      <div className="h-4 bg-white/5 rounded w-full" />
      <div className="h-4 bg-white/5 rounded w-2/3" />
      <div className="grid grid-cols-2 gap-3">
        <div className="h-12 bg-white/5 rounded" />
        <div className="h-12 bg-white/5 rounded" />
      </div>
      <div className="h-10 bg-white/5 rounded" />
    </div>
  </div>
);

export default ProductCard;
