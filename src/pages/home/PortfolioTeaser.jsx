import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'

const PROJECTS = [
  { img: '/assets/images/ramzef-construction-website.webp', alt: 'Ramzef Construction', cat: 'Web Design', title: 'Ramzef Construction' },
  { img: '/assets/images/leadengine-ai-system.webp', alt: 'LeadEngine', cat: 'AI Implementation', title: 'LeadEngine' },
  { img: '/assets/images/tower-tigers-crew-website.webp', alt: 'Tower Tigers', cat: 'Web Design', title: 'Tower Tigers Crew' },
]

export function PortfolioTeaser() {
  return (
    <section className="px-6 py-16">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Our Work</span>
          <h2 className="mt-2 font-display text-2xl text-ink">SELECTED PROJECTS</h2>
        </div>
        <Link
          to="/portfolio"
          className="whitespace-nowrap text-sm text-glass-border3 transition-colors hover:text-glass-border1"
        >
          View All Work →
        </Link>
      </Reveal>
      <div className="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <Link to="/portfolio" className="group block overflow-hidden rounded-xl" aria-label={p.title}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <span className="text-xs uppercase tracking-widest text-glass-border2">{p.cat}</span>
                <h3 className="font-display text-lg text-ink">{p.title}</h3>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
