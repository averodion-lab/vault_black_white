import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { PROJECTS } from '@/data/site'

export function Work() {
  return (
    <section className="sec wrap" id="work">
      <Reveal className="sec-head">
        <span className="mono">Selected work</span>
        <h2>Built for real businesses</h2>
      </Reveal>
      <div className="work teaser">
        {PROJECTS.slice(0, 3).map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 90} />
        ))}
      </div>
      <div style={{ marginTop: 48 }}>
        <Link className="link-arrow" to="/portfolio">View all work <span>→</span></Link>
      </div>
    </section>
  )
}
