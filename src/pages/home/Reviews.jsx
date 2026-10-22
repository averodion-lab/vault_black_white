import { Reveal } from '@/components/ui/Reveal'
import { GOOGLE_RATING, TESTIMONIALS } from '@/data/testimonials'

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
  const { score, count } = GOOGLE_RATING
  return (
    <section className="sec" id="reviews">
      <Reveal className="sec-head wrap">
        <div className="rating" aria-label={`Rated ${score} out of 5 on Google from ${count} reviews`}>
          <span className="mono">Google reviews</span>
          <b aria-hidden="true">{score.toFixed(1)}<small>/5</small></b>
          <span className="stars-5" aria-hidden="true">★★★★★</span>
          <span className="mono muted" aria-hidden="true">{count} reviews</span>
        </div>
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
