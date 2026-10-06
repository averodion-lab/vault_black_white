import { Reveal } from '@/components/ui/Reveal'
import { StatCounter } from '@/components/ui/StatCounter'

const STATS = [
  { n: '100%', l: 'Custom Built' },
  { n: '24H', l: 'Response Time' },
  { n: '50+', l: 'Customers Helped' },
  { n: '100%', l: 'Customer Satisfaction' },
]

export function Stats() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 text-center md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={`${s.l}-${i}`} delay={i * 80}>
            <StatCounter value={s.n} className="font-display text-3xl text-ink" />
            <div className="mt-1 text-xs uppercase tracking-widest text-muted">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
