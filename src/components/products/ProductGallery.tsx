'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  // Fallback wenn nur ein Bild existiert
  const galleryImages = images.length > 0 ? images : ['/images/products/placeholder.svg']
  
  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length)
  }
  
  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-square rounded-2xl overflow-hidden 
                     bg-gradient-to-br from-white/5 to-white/10 
                     border border-white/10 backdrop-blur-sm
                     group cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={galleryImages[selectedIndex]}
            alt={productName}
            fill
            className="object-contain p-8 transition-transform duration-500 
                       group-hover:scale-110"
            priority
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 
                          transition-colors duration-300 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                <ZoomIn className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                          transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
          </div>
        </motion.div>
        
        {/* Thumbnails */}
        {galleryImages.length > 1 && (
          <div className="flex gap-3 justify-center">
            {galleryImages.map((img, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative w-20 h-20 rounded-lg overflow-hidden
                  border-2 transition-all duration-300
                  ${selectedIndex === index 
                    ? 'border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.3)]' 
                    : 'border-white/10 hover:border-white/30'}
                `}
              >
                <Image
                  src={img}
                  alt={`${productName} ${index + 1}`}
                  fill
                  className="object-contain p-2 bg-white/5"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl 
                       flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 
                         hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Navigation */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage() }}
                  className="absolute left-6 p-3 rounded-full bg-white/10 
                             hover:bg-white/20 transition-colors z-10"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage() }}
                  className="absolute right-6 p-3 rounded-full bg-white/10 
                             hover:bg-white/20 transition-colors z-10"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              </>
            )}
            
            {/* Main Lightbox Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: isZoomed ? 1.5 : 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-[80vw] h-[80vh] cursor-zoom-in"
              onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed) }}
            >
              <Image
                src={galleryImages[selectedIndex]}
                alt={productName}
                fill
                className="object-contain"
              />
            </motion.div>
            
            {/* Image Counter */}
            {galleryImages.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 
                              px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm
                              text-white/80 text-sm font-mono">
                {selectedIndex + 1} / {galleryImages.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
