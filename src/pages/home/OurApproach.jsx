import { Reveal } from '@/components/ui/Reveal'
import { ProcessTimeline } from '@/components/ui/ProcessTimeline'

const STEPS = [
  {
    n: '01',
    title: 'We Analyze',
    body: 'We dig into your business, competitors, and goals to figure out exactly what will move the needle for you.',
  },
  {
    n: '02',
    title: 'We Design',
    body: 'Every layout, color, and interaction is crafted deliberately for your brand — nothing generic, nothing templated.',
  },
  {
    n: '03',
    title: 'We Implement',
    body: 'Clean, tested code shipped to production — then supported long after launch.',
  },
]

export function OurApproach() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-muted">How We Work</span>
          <h2 className="mt-2 font-display text-2xl text-ink">OUR APPROACH</h2>
          <p className="mx-auto mt-2 max-w-xl text-lg text-muted">
            Every project follows the same disciplined process — from first conversation to launch day.
          </p>
        </Reveal>
        <ProcessTimeline steps={STEPS} alternate className="mt-14" />
      </div>
    </section>
  )
}
