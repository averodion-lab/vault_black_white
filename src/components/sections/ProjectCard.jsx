import { Reveal } from '@/components/ui/Reveal'

export function ProjectCard({ project, short = false, delay = 0 }) {
  const { num, img, alt, cat, title, body, href } = project
  // Same gallery frame as the team photos: white mat, engraved plate, viewfinder corners.
  const shot = (
    <div className="frame">
      <div className="photo wide">
        <img src={img} alt={alt} loading="lazy" />
      </div>
      <div className="plate" aria-hidden="true">
        <b>No. {num}</b>
        <span>{cat}</span>
      </div>
    </div>
  )
  return (
    <Reveal as="article" className="proj" delay={delay}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title} (opens in a new tab)`}>
          {shot}
        </a>
      ) : (
        shot
      )}
      <div className="cap">
        <h3>{title}</h3>
      </div>
      {!short && <p>{body}</p>}
      {!short && href && (
        <a className="link-arrow" href={href} target="_blank" rel="noopener noreferrer">
          Visit site <span>↗</span>
        </a>
      )}
    </Reveal>
  )
}
