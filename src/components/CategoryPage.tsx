'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Droplets, Sparkles } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ProductCard from '@/components/products/ProductCard'
import { Product } from '@/data/products'

interface CategoryPageProps {
  title: string
  description: string
  products: Product[]
}

export default function CategoryPage({ title, description, products }: CategoryPageProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] 
                         bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] 
                         bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/wasserlab-rebuild/equipos"
              className="inline-flex items-center gap-2 text-white/50 hover:text-cyan-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Todos los equipos
            </Link>
          </motion.div>

          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 relative"
          >
            {/* Decorative line */}
            <div className="absolute left-0 top-0 w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
            
            <div className="pt-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6"
              >
                <Droplets className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">Categoría</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {title.split(' ').map((word, i) => (
                  <span key={i}>
                    {i === title.split(' ').length - 1 ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        {word}
                      </span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                ))}
              </h1>

              <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
                {description}
              </p>

              {/* Stats bar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-8 mt-8 pt-8 border-t border-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{products.length}</div>
                    <div className="text-white/40 text-sm">Productos</div>
                  </div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="text-white/40 text-sm">
                  Fabricados en España • Garantía 24 meses
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Products grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  slug={product.slug}
                  image={product.image}
                  waterType={product.waterTypes[0]}
                  shortDescription={product.description}
                  specs={[{ label: 'Capacidad', value: product.capacity }]}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {products.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <Droplets className="w-10 h-10 text-white/20" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No hay productos disponibles
              </h3>
              <p className="text-white/40 mb-6">
                Esta categoría se actualizará próximamente.
              </p>
              <Link
                href="/wasserlab-rebuild/equipos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 hover:bg-cyan-500/20 transition-colors"
              >
                Ver todos los equipos
              </Link>
            </motion.div>
          )}

          {/* CTA Section */}
          {products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-500/20 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿Necesita asesoramiento?
                </h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">
                  Nuestro equipo técnico le ayudará a elegir el equipo perfecto para sus necesidades.
                </p>
                <Link
                  href="/wasserlab-rebuild/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all"
                >
                  Solicitar asesoramiento
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
