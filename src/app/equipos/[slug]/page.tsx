import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allProducts, categories, waterTypeLabels, companyInfo } from '@/data/products'
import ProductDetailClient from './ProductDetailClient'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = allProducts.find(p => p.slug === slug)
  
  if (!product) {
    return { title: 'Producto no encontrado' }
  }

  return {
    title: `${product.name} | ${companyInfo.name}`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = allProducts.find(p => p.slug === slug)

  if (!product) {
    notFound()
  }

  // Get related products (same category, excluding current)
  const category = categories.find(c => c.slug === product.categorySlug)
  const relatedProducts = category?.products
    .filter(p => p.id !== product.id)
    .slice(0, 3) || []

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />
}
