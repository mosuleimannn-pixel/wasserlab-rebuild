'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X, Droplets, ChevronDown } from 'lucide-react'
import { categories, allProducts, waterTypeLabels, WaterType } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function EquiposPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedWaterType, setSelectedWaterType] = useState<WaterType | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const categoryMatch = !selectedCategory || product.categorySlug === selectedCategory
      const waterTypeMatch = !selectedWaterType || product.waterTypes.includes(selectedWaterType)
      return categoryMatch && waterTypeMatch
    })
  }, [selectedCategory, selectedWaterType])

  const clearFilters = () => {
    setSelectedCategory(null)
    setSelectedWaterType(null)
  }

  const hasFilters = selectedCategory || selectedWaterType

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 py-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 
                         bg-cyan-500/10 border border-cyan-500/20 
                         rounded-full text-cyan-400 text-sm"
            >
              <Droplets className="w-4 h-4" />
              Catálogo de Equipos
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Nuestros{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 
                             bg-clip-text text-transparent">
                Equipos
              </span>
            </h1>
            
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Descubre nuestra gama completa de sistemas de purificación de agua, 
              diseñados para laboratorios, hospitales e industria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center justify-between"
          >
            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 
                        bg-white/5 border border-white/10 rounded-xl
                        text-white hover:bg-white/10 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filtros
              <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Category Filters */}
            <div className={`
              flex flex-wrap gap-3 w-full md:w-auto
              ${isFilterOpen ? 'block' : 'hidden md:flex'}
            `}>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${!selectedCategory 
                    ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(0,212,255,0.3)]' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'}
                `}
              >
                Todos
              </button>
              {categories.map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    ${selectedCategory === cat.slug 
                      ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(0,212,255,0.3)]' 
                      : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'}
                  `}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Water Type Filters */}
            <div className={`
              flex flex-wrap gap-2 w-full md:w-auto
              ${isFilterOpen ? 'block' : 'hidden md:flex'}
            `}>
              {(Object.keys(waterTypeLabels) as WaterType[]).map(type => {
                const colors = {
                  'tipo-1': 'border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10',
                  'tipo-2': 'border-blue-400/50 text-blue-400 hover:bg-blue-400/10',
                  'tipo-3': 'border-teal-400/50 text-teal-400 hover:bg-teal-400/10'
                }
                const activeColors = {
                  'tipo-1': 'bg-cyan-500/20 border-cyan-400',
                  'tipo-2': 'bg-blue-500/20 border-blue-400',
                  'tipo-3': 'bg-teal-500/20 border-teal-400'
                }
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedWaterType(selectedWaterType === type ? null : type)}
                    className={`
                      px-3 py-1.5 rounded-lg text-xs font-medium border
                      transition-all duration-300
                      ${selectedWaterType === type 
                        ? activeColors[type] 
                        : `bg-transparent ${colors[type]}`}
                    `}
                  >
                    {waterTypeLabels[type].name}
                  </button>
                )
              })}
            </div>

            {/* Clear Filters */}
            <AnimatePresence>
              {hasFilters && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-3 py-1.5 
                            text-red-400 hover:text-red-300 text-sm
                            transition-colors"
                >
                  <X className="w-4 h-4" />
                  Limpiar filtros
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-white/40 text-sm"
          >
            Mostrando {filteredProducts.length} de {allProducts.length} equipos
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${selectedWaterType}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  slug={product.slug}
                  image={product.image}
                  waterType={product.waterTypes[0]}
                  shortDescription={product.description}
                  specs={[
                    { label: 'Capacidad', value: product.capacity }
                  ]}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 
                            flex items-center justify-center">
                <Droplets className="w-10 h-10 text-white/20" />
              </div>
              <h3 className="text-xl font-semibold text-white/80 mb-2">
                No se encontraron equipos
              </h3>
              <p className="text-white/40">
                Intenta cambiar los filtros para ver más resultados
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 px-6 py-2 bg-cyan-500/10 border border-cyan-500/30
                          rounded-xl text-cyan-400 hover:bg-cyan-500/20
                          transition-colors"
              >
                Ver todos los equipos
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden
                       bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent
                       border border-white/10 p-12 text-center"
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px 
                           bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesitas ayuda para elegir?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Nuestro equipo técnico te asesorará para encontrar 
              la solución perfecta para tu aplicación.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 
                        bg-gradient-to-r from-cyan-500 to-blue-600
                        rounded-xl text-white font-semibold
                        hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]
                        transition-shadow duration-300"
            >
              Contactar ahora
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
