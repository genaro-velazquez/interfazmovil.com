import type { Metadata } from 'next'
import { Header, Footer } from '@/components'
import './globals.css'

export const metadata: Metadata = {
  title: 'interfazmóvil - Desarrollo Web y Móvil',
  description:
    'Soluciones de desarrollo web y aplicaciones móviles de alta calidad.',
  keywords: ['desarrollo web', 'aplicaciones móviles', 'Next.js', 'React'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-background">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}