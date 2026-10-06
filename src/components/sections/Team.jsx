import { Reveal } from '@/components/ui/Reveal'
import { TEAM } from '@/data/site'

export function Team({ flush = false }) {
  return (
    <>
      <Reveal className={flush ? 'team-head flush' : 'team-head'} id="team">
        <span className="mono">The team</span>
        <h2>Who you&apos;ll work with</h2>
      </Reveal>
      <div className="team">
        {TEAM.map((m, i) => (
          <Reveal as="article" className="member" key={m.name} delay={i * 90}>
            <div className="frame">
              <div className="photo">
                <img src={m.photo} alt={m.name} loading="lazy" />
              </div>
              <div className="plate" aria-hidden="true">
                <b>No. {String(i + 1).padStart(2, '0')}</b>
                <span>{m.plate}</span>
              </div>
            </div>
            <div className="who">
              <h3>{m.name}</h3>
              <span className="mono">{m.title}</span>
            </div>
            <p>{m.bio}</p>
          </Reveal>
        ))}
      </div>
    </>
  )
}
