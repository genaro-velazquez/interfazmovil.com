import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@iterfazmovil.com', label: 'Email' },
  ]

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              interfaz<span className="text-accent">móvil</span>
            </h3>
            <p className="text-gray-300">Soluciones web y móviles de calidad.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-accent transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-accent transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Sígueme</h4>
            <div className="flex gap-4">


{socialLinks.map((social) => {
  const Icon = social.icon
  return (
    <a
      key={social.label}
      href={social.href}
      aria-label={social.label}
      className="w-10 h-10 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
    >
      <Icon className="w-5 h-5" />
    </a>
  )
})}



            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} interfazmóvil. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}