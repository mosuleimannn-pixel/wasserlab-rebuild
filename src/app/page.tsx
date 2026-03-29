import Hero from '@/components/home/Hero'
import ProductShowcase from '@/components/home/ProductShowcase'
import SectorGrid from '@/components/home/SectorGrid'
import CTASection from '@/components/home/CTASection'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        {/* Hero Section - Full viewport */}
        <Hero />
        
        {/* Product Showcase */}
        <ProductShowcase />
        
        {/* Industry Sectors */}
        <SectorGrid />
        
        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
