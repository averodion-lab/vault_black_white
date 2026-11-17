import { Plasma } from '@/components/ui/Plasma'

/** Inner-page hero: the same liquid-edge plasma, a giant blend-mode title, and a lead line on the dark side. */
export function PageHero({ eyebrow, title, lead }) {
  // A word longer than ten characters would overflow a phone screen at the default size
  const long = title.split(/\s+/).some((w) => w.length > 10)
  return (
    <header className={long ? 'page-hero long' : 'page-hero'}>
      <Plasma edge={0.5} />
      <span className="eyebrow mono fade" style={{ '--d': '.5s' }}>{eyebrow}</span>
      {lead && <p className="lead fade" style={{ '--d': '.9s' }}>{lead}</p>}
      <div className="dx">
        <h1 className="fade" style={{ '--d': '.3s', pointerEvents: 'auto' }}>{title}</h1>
      </div>
    </header>
  )
}
