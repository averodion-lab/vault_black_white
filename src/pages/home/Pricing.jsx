import { Check } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientButton } from '@/components/ui/GradientButton'
import { Reveal } from '@/components/ui/Reveal'

const TIERS = [
  {
    name: 'Starter',
    sub: 'For new & local businesses',
    items: ['1–3 page custom website', 'Mobile responsive design', 'Contact form setup', 'Basic SEO optimization', '1 month support included'],
    featured: false,
  },
  {
    name: 'Professional',
    sub: 'For growing businesses',
    items: ['5–8 page custom website', 'Full custom design & branding', 'AI chatbot or automation', 'Full SEO optimization', '3 months support included'],
    featured: true,
  },
  {
    name: 'Enterprise',
    sub: 'For complex needs',
    items: ['Full custom web platform', 'Advanced AI integrations', 'App or software development', 'Ongoing retainer support', 'Priority response time'],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="px-6 py-16">
      <Reveal className="mx-auto max-w-6xl text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-muted">Investment</span>
        <h2 className="mt-2 font-display text-2xl text-ink">PRICING OVERVIEW</h2>
        <p className="mx-auto mt-2 max-w-xl text-lg text-muted">
          Every project is custom-quoted. Here&apos;s a general idea — contact us for an accurate estimate.
        </p>
      </Reveal>
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-3">
        {TIERS.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 100}>
            <GlassCard className={tier.featured ? 'ring-1 ring-glass-border2' : undefined}>
              {tier.featured && (
                <span className="mb-2 inline-block rounded-full bg-glass-border2/20 px-3 py-1 text-xs text-glass-border2 motion-reduce:animate-none [animation:pulse-glow_2.5s_ease-in-out_infinite]">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl text-ink">{tier.name}</h3>
              <p className="mt-1 text-lg text-muted">{tier.sub}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-lg text-muted">
                    <Check size={14} className="mt-0.5 shrink-0 text-glass-border3" />
                    {item}
                  </li>
                ))}
              </ul>
              <GradientButton to="/contact" className="mt-6">
                Get a Quote →
              </GradientButton>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
