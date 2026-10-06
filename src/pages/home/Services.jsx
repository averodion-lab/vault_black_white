import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { SERVICES } from '@/data/site'

export function Services() {
  return (
    <section className="sec wrap paper" id="services">
      <Reveal className="sec-head">
        <span className="mono">Tailored services</span>
        <h2>Custom services for your business</h2>
      </Reveal>
      <ol className="svc-list">
        {SERVICES.map((s, i) => (
          <Reveal as="li" className={i % 2 ? 'svc-block flip' : 'svc-block'} key={s.title}>
            <div className="svc-num">
              <span className="mono">/{String(i + 1).padStart(2, '0')}</span>
              <span className="mono">{s.tag}</span>
            </div>
            <div className="svc-main">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
            <div className="svc-side">
              <ul className="chips" aria-label={`${s.title} includes`}>
                {s.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              {s.projects.length > 0 && (
                <p className="built-for">
                  <span className="mono">Built for</span>
                  <Link to="/portfolio">
                    {s.projects.slice(0, 3).join(', ')}
                    {s.projects.length > 3 && ` + ${s.projects.length - 3} more`}
                  </Link>
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
