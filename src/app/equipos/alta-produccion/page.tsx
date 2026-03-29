import { Metadata } from 'next'
import CategoryPage from '@/components/CategoryPage'
import { categories } from '@/data/products'

export const metadata: Metadata = {
  title: 'Gama Alta Producción | Wasserlab',
  description: 'Sistemas industriales de alta capacidad para grandes volúmenes de agua purificada',
}

export default function AltaProduccionPage() {
  const category = categories.find(c => c.id === 'alta-produccion')
  
  return (
    <CategoryPage
      title="Gama Alta Producción"
      description="Sistemas industriales de alta capacidad para grandes volúmenes de agua purificada. Diseñados para hospitales, industria farmacéutica y grandes laboratorios."
      products={category?.products || []}
    />
  )
}
