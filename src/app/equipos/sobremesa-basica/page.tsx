import { Metadata } from 'next'
import CategoryPage from '@/components/CategoryPage'
import { categories } from '@/data/products'

export const metadata: Metadata = {
  title: 'Sobremesa Gama Básica | Wasserlab',
  description: 'Sistemas compactos para bajos consumos de agua purificada (hasta 50 litros/día)',
}

export default function SobremesaBasicaPage() {
  const category = categories.find(c => c.id === 'sobremesa-basica')
  
  return (
    <CategoryPage
      title="Sobremesa Gama Básica"
      description="Sistemas compactos para bajos consumos de agua purificada (hasta 50 litros/día). Ideales para laboratorios pequeños y aplicaciones con demanda moderada."
      products={category?.products || []}
    />
  )
}
