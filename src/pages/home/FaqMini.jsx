import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'

const FAQS = [
  {
    q: 'How do we get started?',
    a: "Fill out the contact form or call us at 678-755-6900. We'll set up a free discovery call — no commitment required.",
  },
  {
    q: 'How much does a project cost?',
    a: 'Every project is custom-quoted. Simple sites are more affordable, complex platforms are priced by scope. Full quote before we start — no surprises.',
  },
  {
    q: 'How long does a website take?',
    a: 'Typically 2–4 weeks for a standard site, 6–12 weeks for complex apps. Clear timeline upfront, always.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. Monthly maintenance plans and always available for updates, questions, and improvements.',
  },
]

export function FaqMini() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-muted">FAQ</span>
          <h2 className="mt-2 font-display text-2xl text-ink">QUICK ANSWERS</h2>
        </Reveal>
        <div className="mt-8 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={item.q} delay={i * 60} className="border-b border-white/10 pb-3">
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left text-ink"
                >
                  <span>{item.q}</span>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                {isOpen && (
                  <p className="mt-2 text-lg text-muted [animation:fade-up-in_0.3s_ease-out_both]">{item.a}</p>
                )}
              </Reveal>
            )
          })}
        </div>
        <div className="mt-8 text-center">
          <Link to="/faq" className="text-sm text-glass-border3 transition-colors hover:text-glass-border1">
            View All FAQs →
          </Link>
        </div>
      </div>
    </section>
  )
}
