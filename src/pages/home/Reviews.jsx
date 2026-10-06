import { Reveal } from '@/components/ui/Reveal'
import { TESTIMONIALS } from '@/data/testimonials'

function Card({ name, rating, body, hidden }) {
  return (
    <article className="review" aria-hidden={hidden || undefined}>
      <blockquote>“{body}”</blockquote>
      <footer>
        <span>{name}</span>
        <span className="stars-5" role="img" aria-label={`${rating} stars`}>{'★'.repeat(rating)}</span>
      </footer>
    </article>
  )
}

export function Reviews() {
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1)
  return (
    <section className="sec" id="reviews">
      <Reveal className="sec-head wrap">
        <span className="mono">Google reviews · {avg}</span>
        <h2>What our clients say</h2>
      </Reveal>
      <div className="marquee">
        <div className="track">
          {TESTIMONIALS.map((t) => <Card key={t.name} {...t} />)}
          {TESTIMONIALS.map((t) => <Card key={`${t.name}-dup`} {...t} hidden />)}
        </div>
      </div>
    </section>
  )
}
