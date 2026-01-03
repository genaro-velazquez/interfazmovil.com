import { Card } from './ui'
import { Globe, Smartphone, Zap } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web',
    description:
      'Aplicaciones web modernas, rápidas y escalables con las tecnologías más actuales del mercado.',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description:
      'Apps nativas y multiplataforma con experiencia de usuario excepcional en iOS y Android.',
  },
  {
    icon: Zap,
    title: 'Optimización',
    description:
      'Mejoras en rendimiento, SEO y experiencia de usuario para maximizar el potencial de tu negocio.',
  },
]

export const Servicios: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-text-secondary">
            Soluciones completas para tu transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index}>
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}