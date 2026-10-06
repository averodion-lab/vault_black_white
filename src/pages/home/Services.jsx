import { Reveal } from '@/components/ui/Reveal'
import { SERVICES } from '@/data/site'

export function Services() {
  return (
    <section className="sec wrap paper" id="services">
      <Reveal className="sec-head">
        <span className="mono">Tailored services</span>
        <h2>Custom services for your business</h2>
      </Reveal>
      <div className="svc">
        {SERVICES.map((s) => (
          <Reveal className="svc-row" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <span className="mono">{s.tag}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
