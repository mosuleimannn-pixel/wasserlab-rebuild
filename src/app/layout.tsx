import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wasserlab.com'),
  title: 'Wasserlab | Equipos de Purificación de Agua para Laboratorio',
  description: 'Diseñamos y fabricamos sistemas de agua purificada en España desde hace más de 25 años. Agua Tipo I, II y III para laboratorios, hospitales e industria.',
  keywords: ['agua purificada', 'purificación agua', 'laboratorio', 'agua ultrapura', 'osmosis inversa', 'España'],
  authors: [{ name: 'Wasserlab' }],
  creator: 'Wasserlab',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://wasserlab.com',
    siteName: 'Wasserlab',
    title: 'Wasserlab | Equipos de Purificación de Agua',
    description: 'Sistemas de agua purificada de alta calidad fabricados en España',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wasserlab - Purificación de Agua',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wasserlab | Equipos de Purificación de Agua',
    description: 'Sistemas de agua purificada de alta calidad fabricados en España',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-[#0a0a0f] text-white antialiased font-inter selection:bg-cyan-500/30 selection:text-white">
        {/* Ambient background gradient */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0f]" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  )
}
