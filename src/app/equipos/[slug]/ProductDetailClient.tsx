'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  CheckCircle2, 
  Droplets,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react'
import { Product, waterTypeLabels, companyInfo } from '@/data/products'
import ProductGallery from '@/components/products/ProductGallery'
import SpecsTable from '@/components/products/SpecsTable'
import WaterTypeBadge from '@/components/products/WaterTypeBadge'
import ProductCard from '@/components/products/ProductCard'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

interface ProductDetailClientProps {
  product: Product
  relatedProducts: Product[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  // Generate specs from product data
  const specs = [
    { label: 'Capacidad', value: product.capacity },
    { label: 'Categoría', value: product.category },
    { label: 'Tipos de agua', value: product.waterTypes.map(t => waterTypeLabels[t].name).join(', ') },
    { label: 'Modelo', value: product.name },
  ]

  // Mock downloads (would come from CMS in production)
  const downloads = [
    { name: 'Ficha Técnica', type: 'PDF', size: '2.4 MB', url: '#' },
    { name: 'Manual de Usuario', type: 'PDF', size: '5.1 MB', url: '#' },
    { name: 'Certificaciones', type: 'PDF', size: '1.2 MB', url: '#' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] 
                       bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] 
                       bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Breadcrumb */}
      <div className="relative px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp}>
            <Link 
              href="/equipos"
              className="inline-flex items-center gap-2 text-white/50 
                        hover:text-cyan-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver a equipos
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProductGallery 
                images={[product.image]} 
                productName={product.name} 
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 
                             bg-white/5 border border-white/10 
                             rounded-full text-white/60 text-sm">
                <Droplets className="w-4 h-4 text-cyan-400" />
                {product.category}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {product.name}
              </h1>

              {/* Water Types */}
              <div className="flex flex-wrap gap-3">
                {product.waterTypes.map(type => (
                  <WaterTypeBadge 
                    key={type} 
                    type={type} 
                    size="lg" 
                    showDescription 
                  />
                ))}
              </div>

              {/* Description */}
              <p className="text-white/70 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Capacity Highlight */}
              <div className="flex items-center gap-4 p-4 
                             bg-gradient-to-r from-cyan-500/10 to-transparent
                             border-l-2 border-cyan-500 rounded-r-lg">
                <span className="text-white/60">Capacidad de producción:</span>
                <span className="text-2xl font-bold text-cyan-400 font-mono">
                  {product.capacity}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contacto"
                  className="flex items-center gap-2 px-8 py-4
                            bg-gradient-to-r from-cyan-500 to-blue-600
                            rounded-xl text-white font-semibold
                            hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]
                            transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Solicitar presupuesto
                </Link>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 px-8 py-4
                            bg-white/5 border border-white/20
                            rounded-xl text-white font-semibold
                            hover:bg-white/10 hover:border-cyan-500/30
                            transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="relative px-6 py-20 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
                Características principales
              </h2>
              
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 
                              bg-white/5 rounded-xl border border-white/5
                              hover:border-cyan-500/20 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Specs Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <SpecsTable specs={specs} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
              Documentación
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {downloads.map((doc, index) => (
                <motion.a
                  key={doc.name}
                  href={doc.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-4 p-5
                            bg-white/5 rounded-xl border border-white/10
                            hover:border-cyan-500/30 hover:bg-white/10
                            transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 
                                flex items-center justify-center
                                group-hover:bg-cyan-500/20 transition-colors">
                    <FileText className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold group-hover:text-cyan-400 
                                  transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-white/40 text-sm">
                      {doc.type} • {doc.size}
                    </p>
                  </div>
                  <Download className="w-5 h-5 text-white/30 group-hover:text-cyan-400 
                                      transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="relative px-6 py-20 bg-gradient-to-t from-cyan-500/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
                Productos relacionados
              </h2>
              <Link
                href="/equipos"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300
                          transition-colors group"
              >
                Ver todos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard 
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  slug={relatedProduct.slug}
                  image={relatedProduct.image}
                  waterType={relatedProduct.waterTypes[0]}
                  shortDescription={relatedProduct.description}
                  specs={[
                    { label: 'Capacidad', value: relatedProduct.capacity }
                  ]}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden
                       bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent
                       border border-cyan-500/20 p-12 text-center"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(0,212,255,0.3)_360deg)]
                             animate-[spin_4s_linear_infinite]" />
              <div className="absolute inset-[1px] rounded-3xl bg-[#0a0a0f]" />
            </div>
            
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 mx-auto mb-6 rounded-full 
                          bg-gradient-to-br from-cyan-500/20 to-blue-500/20
                          flex items-center justify-center"
              >
                <Droplets className="w-10 h-10 text-cyan-400" />
              </motion.div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Interesado en el {product.name}?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Contacta con nuestro equipo técnico para recibir asesoramiento 
                personalizado y un presupuesto sin compromiso.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 
                          bg-gradient-to-r from-cyan-500 to-blue-600
                          rounded-xl text-white font-semibold
                          hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]
                          transition-shadow duration-300"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
