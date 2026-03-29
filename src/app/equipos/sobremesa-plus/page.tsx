import { Metadata } from 'next'
import CategoryPage from '@/components/CategoryPage'
import { categories } from '@/data/products'

export const metadata: Metadata = {
  title: 'Sobremesa Gama Plus | Wasserlab',
  description: 'Sistemas de alta capacidad para consumos medios de agua purificada',
}

export default function SobremesaPlusPage() {
  const category = categories.find(c => c.id === 'sobremesa-plus')
  
  return (
    <CategoryPage
      title="Sobremesa Gama Plus"
      description="Sistemas de alta capacidad para consumos medios de agua purificada. Mayor autonomía y funciones avanzadas de monitorización."
      products={category?.products || []}
    />
  )
}
