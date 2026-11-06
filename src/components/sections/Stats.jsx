import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { STATS } from '@/data/site'

/** Key numbers, set plainly on the background. */
export function Stats() {
  return (
    <div className="stats">
      {STATS.map((s, i) => (
        <Reveal className="stat" key={`${s.l}-${i}`} delay={i * 80}>
          <CountUp value={s.n} delay={i * 150} />
          <span className="mono muted">{s.l}</span>
        </Reveal>
      ))}
    </div>
  )
}
