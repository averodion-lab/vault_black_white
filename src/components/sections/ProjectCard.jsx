import { Reveal } from '@/components/ui/Reveal'

export function ProjectCard({ project, short = false, delay = 0 }) {
  const { img, alt, cat, title, body, href } = project
  const shot = (
    <div className="shot">
      <img src={img} alt={alt} loading="lazy" />
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
        <span className="mono">{cat}</span>
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
