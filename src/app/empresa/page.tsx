'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Award, Users, Factory, Globe, CheckCircle, ArrowRight } from 'lucide-react'

const stats = [
  { value: '25+', label: 'Años de experiencia', icon: Award },
  { value: '1000+', label: 'Instalaciones', icon: Factory },
  { value: '30+', label: 'Países', icon: Globe },
  { value: '50+', label: 'Empleados', icon: Users },
]

const timeline = [
  { year: '1998', title: 'Fundación', description: 'Wasserlab nace en Navarra con el objetivo de fabricar equipos de purificación de agua de alta calidad.' },
  { year: '2005', title: 'Certificación ISO', description: 'Obtenemos las certificaciones ISO 9001 e ISO 14001, consolidando nuestro compromiso con la calidad.' },
  { year: '2012', title: 'Expansión Internacional', description: 'Comenzamos nuestra expansión internacional, llegando a más de 20 países.' },
  { year: '2020', title: 'Innovación Continua', description: 'Lanzamiento de la nueva gama de equipos con tecnología EDI y monitorización remota.' },
]

const values = [
  { title: 'Calidad', description: 'Fabricamos equipos con los más altos estándares de calidad, certificados ISO 9001.' },
  { title: 'Innovación', description: 'Investigamos y desarrollamos constantemente nuevas tecnologías de purificación.' },
  { title: 'Sostenibilidad', description: 'Comprometidos con el medio ambiente, certificados ISO 14001.' },
  { title: 'Servicio', description: 'Soporte técnico especializado y servicio postventa de excelencia.' },
]

export default function EmpresaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-950 pt-20">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge variant="outline" className="mb-6">
                <Factory className="w-4 h-4 mr-2" />
                Sobre Nosotros
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Más de 25 años{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  purificando agua
                </span>
              </h1>
              <p className="text-lg text-gray-400">
                Somos fabricantes españoles de equipos de purificación de agua para laboratorios, 
                hospitales e industria. Diseñamos y producimos en Navarra con la más alta calidad.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Nuestra Historia</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Un recorrido de más de dos décadas dedicados a la excelencia en purificación de agua.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 mb-8"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-cyan-400 font-bold">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-px bg-gradient-to-b from-cyan-400 to-blue-500 relative">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-cyan-400" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-dark-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Nuestros Valores</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Los principios que guían todo lo que hacemos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-800/50 border border-white/5 rounded-xl p-6 hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Quieres conocernos mejor?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Visítanos en nuestras instalaciones en Navarra o contacta con nosotros para más información.
              </p>
              <Link href="/contacto">
                <Button>
                  Contactar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
