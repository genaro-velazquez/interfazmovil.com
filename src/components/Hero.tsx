import Link from 'next/link'
import { Button } from './ui'
import { ArrowRight } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Soluciones Web y Móviles
          <span className="block text-accent">a tu medida</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Desarrollo de aplicaciones web modernas y aplicaciones móviles de alto rendimiento.
          Transforma tu idea en realidad con tecnología de punta.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacto">
            <Button variant="secondary" size="lg" className="flex items-center justify-center gap-2">
              Comenzar proyecto <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/servicios">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Ver servicios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}