'use client'

import { useState } from 'react'
import { Input, Button } from '@/components/ui'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage({ type: 'success', text: '¡Mensaje enviado exitosamente!' })
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
      } else {
        setMessage({ type: 'error', text: 'Error al enviar el mensaje. Intenta más tarde.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error al conectar con el servidor.' })
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-gray-200">
            Déjanos tu mensaje y nos pondremos en contacto pronto
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Email</h3>
              <p className="text-text-secondary">hello@iterfazmovil.com</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Teléfono</h3>
              <p className="text-text-secondary">+52 (123) 456-7890</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Ubicación</h3>
              <p className="text-text-secondary">Nuevo León, México</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Envíame un mensaje</h2>

            {message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nombre"
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />

              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />

              <Input
                label="Asunto"
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                placeholder="Asunto del mensaje"
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Tu mensaje..."
                  rows={6}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}