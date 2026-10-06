import { Plasma } from '@/components/ui/Plasma'

/** Inner-page hero: the same liquid-edge plasma, a giant blend-mode title, and a lead line on the dark side. */
export function PageHero({ eyebrow, title, lead }) {
  return (
    <header className="page-hero">
      <Plasma edge={0.5} />
      <span className="eyebrow mono fade" style={{ '--d': '.5s' }}>{eyebrow}</span>
      {lead && <p className="lead fade" style={{ '--d': '.9s' }}>{lead}</p>}
      <div className="dx">
        <h1 className="fade" style={{ '--d': '.3s', pointerEvents: 'auto' }}>{title}</h1>
      </div>
    </header>
  )
}
