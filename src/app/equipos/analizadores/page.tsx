import { Metadata } from 'next'
import CategoryPage from '@/components/CategoryPage'
import { categories } from '@/data/products'

export const metadata: Metadata = {
  title: 'Alimentación Analizadores | Wasserlab',
  description: 'Sistemas diseñados específicamente para alimentar analizadores de laboratorio',
}

export default function AnalizadoresPage() {
  const category = categories.find(c => c.id === 'analizadores')
  
  return (
    <CategoryPage
      title="Alimentación Analizadores"
      description="Sistemas diseñados específicamente para alimentar analizadores de laboratorio. Conexión directa y suministro continuo de agua purificada."
      products={category?.products || []}
    />
  )
}
