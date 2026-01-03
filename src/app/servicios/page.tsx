import { Card } from '@/components/ui'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

export default function Servicios() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg text-gray-200">
            Soluciones completas para llevar tu negocio al siguiente nivel digital
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card>
              <h3 className="text-2xl font-bold text-primary mb-4">Desarrollo Web</h3>
              <p className="text-text-secondary mb-6">
                Creamos aplicaciones web modernas, rápidas y escalables utilizando tecnologías de punta como Next.js, React y Tailwind CSS.
              </p>
              <ul className="space-y-2 text-text-secondary mb-6">
                <li>✓ Sitios web responsivos</li>
                <li>✓ SPA y aplicaciones complejas</li>
                <li>✓ Optimización SEO</li>
                <li>✓ Integración con bases de datos</li>
              </ul>
              <Link href="/contacto">
                <Button variant="secondary">Solicitar presupuesto</Button>
              </Link>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-primary mb-4">Aplicaciones Móviles</h3>
              <p className="text-text-secondary mb-6">
                Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android con excelente experiencia de usuario.
              </p>
              <ul className="space-y-2 text-text-secondary mb-6">
                <li>✓ Apps nativas iOS/Android</li>
                <li>✓ Aplicaciones multiplataforma</li>
                <li>✓ Integración con APIs</li>
                <li>✓ Push notifications</li>
              </ul>
              <Link href="/contacto">
                <Button variant="secondary">Solicitar presupuesto</Button>
              </Link>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-secondary to-blue-600 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="mb-6 text-blue-100">
              Contacta con nosotros para discutir tu idea y recibir una propuesta personalizada.
            </p>
            <Link href="/contacto">
              <Button variant="secondary" className="flex items-center gap-2">
                Empezar ahora <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  )
}