'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Building,
  User,
  MessageSquare
} from 'lucide-react'
import { companyInfo } from '@/data/products'

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s/g, '')}`
  },
  {
    icon: Mail,
    label: 'Email',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: `${companyInfo.address.street}, ${companyInfo.address.postalCode} ${companyInfo.address.city}`,
    href: 'https://maps.google.com/?q=Wasserlab+Barbatain+Navarra'
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun - Vie: 8:00 - 17:00',
    href: null
  },
]

const subjects = [
  'Solicitar presupuesto',
  'Información de productos',
  'Servicio técnico',
  'Recambios y consumibles',
  'Otros'
]

export default function ContactoPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
                <Mail className="w-4 h-4 mr-2" />
                Contacto
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Cómo podemos{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  ayudarte?
                </span>
              </h1>
              <p className="text-lg text-gray-400">
                Nuestro equipo técnico está disponible para asesorarte y encontrar 
                la mejor solución para tu laboratorio o industria.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <h2 className="text-2xl font-bold text-white mb-8">Información de contacto</h2>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-white hover:text-cyan-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="aspect-video bg-dark-800/50 rounded-xl border border-white/5 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.892047!2d-1.676!3d42.802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ4JzA3LjIiTiAxwrA0MCczMy42Ilc!5e0!3m2!1sen!2ses!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-dark-800/50 border border-white/5 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Envíanos un mensaje</h2>
                  <p className="text-gray-400 mb-8">
                    Responderemos en un plazo máximo de 24 horas laborables.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                      <p className="text-gray-400 mb-6">
                        Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                      </p>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                        Enviar otro mensaje
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Nombre completo *
                          </label>
                          <Input
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">
                            <Building className="w-4 h-4 inline mr-2" />
                            Empresa
                          </label>
                          <Input
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Teléfono
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+34 600 000 000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Asunto *
                        </label>
                        <select
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        >
                          <option value="">Selecciona un asunto</option>
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Mensaje *
                        </label>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="¿En qué podemos ayudarte?"
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin mr-2">⏳</span>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Enviar mensaje
                            </>
                          )}
                        </Button>
                        <p className="text-sm text-gray-500">
                          * Campos obligatorios
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
