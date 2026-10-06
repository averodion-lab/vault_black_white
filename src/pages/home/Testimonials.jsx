import { Star } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { TESTIMONIALS } from '@/data/testimonials'

function TestimonialCard({ name, rating, body, hidden }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="w-[300px] shrink-0 rounded-xl border border-white/10 bg-[#0b0c16] p-6 transition-colors duration-300 hover:border-glass-border1/40 sm:w-[340px]"
    >
      <div className="flex items-center gap-1 text-glass-border2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-3 text-lg text-muted">{body}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink">{name}</span>
        <span className="text-xs text-muted">Google Review</span>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16">
      <Reveal className="px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-muted">Client Reviews</span>
        <h2 className="mt-2 font-display text-2xl text-ink">WHAT OUR CLIENTS SAY</h2>
      </Reveal>
      <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max gap-5 motion-reduce:animate-none [animation:marquee-x_48s_linear_infinite]">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={`${t.name}-dup`} {...t} hidden />
          ))}
        </div>
      </div>
    </section>
  )
}
