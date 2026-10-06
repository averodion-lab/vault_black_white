import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { FaqList } from '@/components/sections/FaqList'
import { FAQ_MINI } from '@/data/site'

export function FaqMini() {
  return (
    <section className="sec wrap paper" id="faq">
      <div className="faq-grid">
        <Reveal>
          <span className="mono">FAQ</span>
          <h2 style={{ marginTop: 16 }}>Quick answers</h2>
          <div style={{ marginTop: 28 }}>
            <Link className="link-arrow" to="/faq">View all FAQs <span>→</span></Link>
          </div>
        </Reveal>
        <Reveal>
          <FaqList items={FAQ_MINI} openFirst />
        </Reveal>
      </div>
    </section>
  )
}
