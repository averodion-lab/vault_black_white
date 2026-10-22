import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plasma } from '@/components/ui/Plasma'
import { HERO_SERVICES } from '@/data/site'

function useCycle(length, ms) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((v) => (v + 1) % length), ms)
    return () => clearInterval(id)
  }, [length, ms])
  return [i, setI]
}

export function Hero() {
  const [active, setActive] = useCycle(HERO_SERVICES.length, 2400)

  return (
    <header className="hero">
      <Plasma edge={0.46} />

      {/* difference layer: reads black over the white plasma, white over the black */}
      <div className="dx">
        <p className="hero-note fade" style={{ '--d': '1s' }}>Reach out to start your project</p>
        <p className="hero-tagline fade" style={{ '--d': '1.25s' }}>Websites That Bring You Customers</p>
        <h1 className="wordmark" aria-label="Vault">
          {'Vault'.split('').map((ch, i) => (
            <span key={i} style={{ '--i': i }} aria-hidden="true">{ch}</span>
          ))}
        </h1>
        <svg className="sparkle" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
          <circle cx="24" cy="24" r="6" />
          <path d="M24 0v48M0 24h48" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="hero-solid">
        <p className="hero-sub fade" style={{ '--d': '1.4s' }}>
          Web &amp; Software
          <br />
          Development Agency
        </p>
        <ul className="hero-svc fade" style={{ '--d': '1.2s' }} aria-label="What we build">
          {HERO_SERVICES.map((s, i) => (
            <li key={s} className={i === active ? 'on' : undefined} onMouseEnter={() => setActive(i)}>
              {s}
            </li>
          ))}
        </ul>
        <Link className="hero-cta fade" to="/contact" style={{ '--d': '1.35s' }}>
          Get a free quote <b aria-hidden="true">→</b>
        </Link>
      </div>
    </header>
  )
}
