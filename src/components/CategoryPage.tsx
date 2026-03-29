'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Droplets } from 'lucide-react'
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
      <main className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-cyan-400 text-sm font-medium">Categoría</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-white/60 text-lg max-w-2xl">{description}</p>
          </motion.div>

          {/* Products grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
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
          </div>

          {products.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/40">No hay productos en esta categoría.</p>
              <Link
                href="/wasserlab-rebuild/equipos"
                className="inline-block mt-4 text-cyan-400 hover:underline"
              >
                Ver todos los equipos
              </Link>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
