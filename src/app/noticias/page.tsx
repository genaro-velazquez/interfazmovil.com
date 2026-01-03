import { Card } from '@/components/ui'
import { Calendar, User } from 'lucide-react'

const noticias = [
  {
    id: 1,
    title: 'Los mejores frameworks de desarrollo web en 2025',
    date: '3 de enero de 2025',
    author: 'Admin',
    excerpt:
      'Descubre cuáles son los frameworks más populares y productivos para desarrollar aplicaciones web modernas en 2025.',
    category: 'Desarrollo',
  },
  {
    id: 2,
    title: 'Tendencias en desarrollo de aplicaciones móviles',
    date: '1 de enero de 2025',
    author: 'Admin',
    excerpt:
      'Las nuevas tecnologías y prácticas que están transformando el desarrollo de aplicaciones móviles este año.',
    category: 'Móvil',
  },
  {
    id: 3,
    title: 'Optimización de rendimiento en React',
    date: '28 de diciembre de 2024',
    author: 'Admin',
    excerpt:
      'Estrategias efectivas para mejorar el rendimiento de tus aplicaciones React y proporcionar una mejor UX.',
    category: 'Rendimiento',
  },
]

export default function Noticias() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias de TI</h1>
          <p className="text-lg text-gray-200">
            Mantente actualizado con las últimas novedades en desarrollo web y móvil
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {noticias.map((noticia) => (
              <Card key={noticia.id} className="flex flex-col">
                <div className="mb-4">
                  <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {noticia.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{noticia.title}</h3>
                <p className="text-text-secondary mb-6 flex-grow">{noticia.excerpt}</p>
                <div className="flex gap-4 text-sm text-text-secondary border-t pt-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {noticia.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {noticia.author}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}