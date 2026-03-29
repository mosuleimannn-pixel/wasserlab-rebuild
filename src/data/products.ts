export type WaterType = 'tipo-1' | 'tipo-2' | 'tipo-3'

export interface Product {
  id: string
  name: string
  slug: string
  category: string
  categorySlug: string
  waterTypes: WaterType[]
  capacity: string
  description: string
  features: string[]
  image: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  products: Product[]
}

export const waterTypeLabels: Record<WaterType, { name: string; description: string }> = {
  'tipo-1': {
    name: 'Agua Ultrapura',
    description: 'Tipo I - Para análisis de alta precisión'
  },
  'tipo-2': {
    name: 'Agua Pura', 
    description: 'Tipo II - Para laboratorio estándar'
  },
  'tipo-3': {
    name: 'Agua Osmotizada',
    description: 'Tipo III - Agua de proceso'
  }
}

export const sectors = [
  { id: 'laboratorios', name: 'Laboratorios', icon: 'FlaskConical' },
  { id: 'analisis-clinicos', name: 'Análisis Clínicos', icon: 'Microscope' },
  { id: 'lazos-distribucion', name: 'Lazos de distribución', icon: 'GitBranch' },
  { id: 'industria-cosmetica', name: 'Industria Cosmética', icon: 'Sparkles' },
  { id: 'camaras-ensayo', name: 'Cámaras de ensayo', icon: 'Thermometer' },
  { id: 'electroerosion', name: 'Electroerosión', icon: 'Zap' },
  { id: 'inseminacion', name: 'Inseminación artificial', icon: 'Heart' },
  { id: 'otras-industrias', name: 'Otras Industrias', icon: 'Factory' },
]

export const categories: Category[] = [
  {
    id: 'sobremesa-basica',
    name: 'Sobremesa Gama Básica',
    slug: 'sobremesa-gama-basica',
    description: 'Sistemas compactos para bajos consumos de agua purificada (hasta 50 litros/día)',
    products: [
      {
        id: 'micromatic',
        name: 'Micromatic',
        slug: 'micromatic',
        category: 'Sobremesa Gama Básica',
        categorySlug: 'sobremesa-gama-basica',
        waterTypes: ['tipo-2'],
        capacity: '2,5 l/h',
        description: 'Modelo básico de producción de Agua Tipo II, para bajos consumos de agua purificada. Módulo de desionización basado en resinas de intercambio iónico.',
        features: [
          'Producción: 2,5 litros/hora',
          'Desionización por resinas',
          'Compacto y silencioso',
          'Fácil mantenimiento'
        ],
        image: '/wasserlab-rebuild/images/products/original/micromatic.jpg'
      },
      {
        id: 'ecomatic',
        name: 'Ecomatic',
        slug: 'ecomatic',
        category: 'Sobremesa Gama Básica',
        categorySlug: 'sobremesa-gama-basica',
        waterTypes: ['tipo-2', 'tipo-3'],
        capacity: '3-10 l/h',
        description: 'Sistema versátil que proporciona tanto Agua Pura Tipo II como Agua Osmotizada.',
        features: [
          'Producción: 3-10 litros/hora',
          'Doble salida: Tipo II y Tipo III',
          'Ósmosis inversa integrada',
          'Display digital'
        ],
        image: '/wasserlab-rebuild/images/products/original/ecomatic.jpg'
      },
      {
        id: 'ultramatic-gr',
        name: 'Ultramatic GR',
        slug: 'ultramatic-gr',
        category: 'Sobremesa Gama Básica',
        categorySlug: 'sobremesa-gama-basica',
        waterTypes: ['tipo-1'],
        capacity: '1,1 l/min',
        description: 'Equipo de producción de Agua Ultrapura Tipo I para aplicaciones de alta exigencia.',
        features: [
          'Producción: 1,1 litros/minuto',
          'Agua Ultrapura Tipo I',
          'Resistividad 18.2 MΩ·cm',
          'Filtro final 0.2 µm'
        ],
        image: '/wasserlab-rebuild/images/products/original/ultramatic-gr.jpg'
      }
    ]
  },
  {
    id: 'sobremesa-plus',
    name: 'Sobremesa Gama Plus',
    slug: 'sobremesa-gama-plus',
    description: 'Sistemas avanzados con mayor capacidad y funcionalidades premium',
    products: [
      {
        id: 'autwomatic-plus',
        name: 'Autwomatic Plus',
        slug: 'autwomatic-plus',
        category: 'Sobremesa Gama Plus',
        categorySlug: 'sobremesa-gama-plus',
        waterTypes: ['tipo-2'],
        capacity: '15 l/h',
        description: 'Sistema automático de producción de agua purificada con control avanzado.',
        features: [
          'Producción automática',
          'Control por microprocesador',
          'Alarmas integradas',
          'Conexión remota opcional'
        ],
        image: '/wasserlab-rebuild/images/products/original/autwomatic-plus.jpg'
      },
      {
        id: 'autwomatic-plus-edi',
        name: 'Autwomatic Plus EDI',
        slug: 'autwomatic-plus-edi',
        category: 'Sobremesa Gama Plus',
        categorySlug: 'sobremesa-gama-plus',
        waterTypes: ['tipo-1', 'tipo-2'],
        capacity: '15 l/h',
        description: 'Sistema con Electrodesionización para máxima pureza sin regeneración química.',
        features: [
          'Electrodesionización (EDI)',
          'Sin regeneración química',
          'Agua Tipo I disponible',
          'Bajo coste operativo'
        ],
        image: '/wasserlab-rebuild/images/products/original/autwomatic-plus-edi.jpg'
      },
      {
        id: 'ultramatic-plus',
        name: 'Ultramatic Plus',
        slug: 'ultramatic-plus',
        category: 'Sobremesa Gama Plus',
        categorySlug: 'sobremesa-gama-plus',
        waterTypes: ['tipo-1'],
        capacity: '2 l/min',
        description: 'Sistema premium de producción de Agua Ultrapura con las más altas especificaciones.',
        features: [
          'Máxima pureza',
          'TOC < 5 ppb',
          'Bacterias < 1 CFU/ml',
          'Partículas < 1/ml'
        ],
        image: '/wasserlab-rebuild/images/products/original/ultramatic-plus.jpg'
      }
    ]
  },
  {
    id: 'analizadores-clinicos',
    name: 'Alimentación Analizadores Clínicos',
    slug: 'analizadores-clinicos',
    description: 'Sistemas diseñados para alimentar analizadores de laboratorios clínicos',
    products: [
      {
        id: 'clinical-60-150',
        name: 'Clinical 60-150',
        slug: 'clinical-60-150',
        category: 'Alimentación Analizadores Clínicos',
        categorySlug: 'analizadores-clinicos',
        waterTypes: ['tipo-2'],
        capacity: '60-150 l/h',
        description: 'Sistema de capacidad media para alimentación de analizadores clínicos.',
        features: [
          'Capacidad: 60-150 l/h',
          'Depósito integrado',
          'Recirculación automática',
          'Compatible con todos los analizadores'
        ],
        image: '/wasserlab-rebuild/images/products/original/clinical-60.jpg'
      },
      {
        id: 'clinical-200-400',
        name: 'Clinical 200-400',
        slug: 'clinical-200-400',
        category: 'Alimentación Analizadores Clínicos',
        categorySlug: 'analizadores-clinicos',
        waterTypes: ['tipo-2'],
        capacity: '200-400 l/h',
        description: 'Sistema de alta capacidad para grandes laboratorios clínicos.',
        features: [
          'Capacidad: 200-400 l/h',
          'Para grandes laboratorios',
          'Múltiples puntos de uso',
          'Monitorización remota'
        ],
        image: '/wasserlab-rebuild/images/products/original/clinical-60.jpg'
      }
    ]
  },
  {
    id: 'alta-produccion',
    name: 'Gama Alta Producción',
    slug: 'alta-produccion',
    description: 'Sistemas industriales para grandes volúmenes de producción',
    products: [
      {
        id: 'process-60-150',
        name: 'Process 60-150',
        slug: 'process-60-150',
        category: 'Gama Alta Producción',
        categorySlug: 'alta-produccion',
        waterTypes: ['tipo-2'],
        capacity: '60-150 l/h',
        description: 'Sistema de proceso para aplicaciones industriales de media escala.',
        features: [
          'Diseño industrial',
          'Funcionamiento continuo',
          'Bajo mantenimiento',
          'Integración con sistemas existentes'
        ],
        image: '/wasserlab-rebuild/images/products/original/process-60.jpg'
      },
      {
        id: 'process-200-400',
        name: 'Process 200-400',
        slug: 'process-200-400',
        category: 'Gama Alta Producción',
        categorySlug: 'alta-produccion',
        waterTypes: ['tipo-2', 'tipo-3'],
        capacity: '200-400 l/h',
        description: 'Sistema de alta capacidad para producción industrial a gran escala.',
        features: [
          'Máxima capacidad',
          'Doble línea de producción',
          'Redundancia integrada',
          'Telemetría avanzada'
        ],
        image: '/wasserlab-rebuild/images/products/original/process-200.jpg'
      }
    ]
  }
]

export const allProducts = categories.flatMap(cat => cat.products)

export const companyInfo = {
  name: 'Wasserlab',
  legalName: 'NAVARRA TRATAMIENTO DEL AGUA, S.L.',
  tagline: 'Sistemas de Purificación de Agua',
  description: 'Diseñamos y fabricamos equipos de producción de agua purificada en España desde hace más de 25 años.',
  phone: '+34 948 186 141',
  email: 'info@wasserlab.com',
  address: {
    street: 'Pol.Ind Comarca II, Calle E, Nº3',
    postalCode: '31.191',
    city: 'Barbatáin',
    region: 'Navarra',
    country: 'Spain'
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/wasserlab/'
  },
  certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'TÜV Rheinland']
}
