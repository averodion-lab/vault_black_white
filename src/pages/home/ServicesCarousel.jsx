import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Megaphone, Share2, Sparkles, Smartphone, Wrench, ShieldCheck } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'

const SERVICES = [
  {
    icon: Megaphone,
    num: '01',
    tag: 'Marketing',
    title: 'Digital Marketing',
    body: 'SEO, paid advertising, and content strategy that put your business in front of the customers actively searching for what you offer.',
  },
  {
    icon: Share2,
    num: '02',
    tag: 'Development',
    title: 'Web Development',
    body: 'Clean, fast, and scalable code for any project — from simple landing pages to full multi-page platforms. Built right the first time.',
  },
  {
    icon: Sparkles,
    num: '03',
    tag: 'AI',
    title: 'AI Implementation',
    body: 'Intelligent chatbots, workflow automation, and AI tools integrated directly into your business to save time and boost revenue.',
  },
  {
    icon: Smartphone,
    num: '04',
    tag: 'Mobile',
    title: 'App Development',
    body: 'iOS and Android apps built with React Native — one codebase, two platforms, and real results delivered for your growing business.',
  },
  {
    icon: Wrench,
    num: '05',
    tag: 'Software',
    title: 'Software Development',
    body: 'Custom software tools, internal dashboards, and business automation systems built exactly for the way your team actually works.',
  },
  {
    icon: ShieldCheck,
    num: '06',
    tag: 'Support',
    title: 'Maintenance & Support',
    body: 'Ongoing care for your site — security patches, regular updates, backups, and fast support so you can focus on running your business.',
  },
]

const PER_SLIDE = 2

export function ServicesCarousel() {
  const [slide, setSlide] = useState(0)
  const totalSlides = Math.ceil(SERVICES.length / PER_SLIDE)
  const visible = SERVICES.slice(slide * PER_SLIDE, slide * PER_SLIDE + PER_SLIDE)

  function next() {
    setSlide((s) => (s + 1) % totalSlides)
  }
  function prev() {
    setSlide((s) => (s - 1 + totalSlides) % totalSlides)
  }

  return (
    <section id="services" className="scroll-mt-20 px-6 py-16">
      <Reveal className="mx-auto max-w-6xl text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-muted">Tailored Services</span>
        <h2 className="mt-2 font-display text-2xl text-ink">CUSTOM SERVICES FOR YOUR BUSINESS</h2>
      </Reveal>
      <div className="mx-auto mt-8 flex max-w-6xl items-center gap-4">
        <button
          aria-label="Previous"
          onClick={prev}
          className="rounded-full border border-white/20 p-2 text-ink transition-colors hover:border-glass-border3 hover:text-glass-border3"
        >
          ←
        </button>
        <div key={slide} className="grid flex-1 gap-6 [animation:fade-up-in_0.5s_ease-out_both] sm:grid-cols-2">
          {visible.map((svc) => {
            const Icon = svc.icon
            return (
              <GlassCard key={svc.num}>
                <div className="flex items-center justify-between">
                  <Icon className="text-glass-border3" />
                  <span className="text-xs text-muted">{svc.num}</span>
                </div>
                <span className="mt-4 block text-xs uppercase tracking-widest text-glass-border2">{svc.tag}</span>
                <h3 className="mt-1 font-display text-lg text-ink">{svc.title}</h3>
                <p className="mt-2 text-lg text-muted">{svc.body}</p>
                <Link to="/contact" className="mt-4 inline-block text-sm text-glass-border3">
                  Learn More →
                </Link>
              </GlassCard>
            )
          })}
        </div>
        <button
          aria-label="Next"
          onClick={next}
          className="rounded-full border border-white/20 p-2 text-ink transition-colors hover:border-glass-border3 hover:text-glass-border3"
        >
          →
        </button>
      </div>
      <div className="mt-6 flex justify-center">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setSlide(i)}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`h-2 w-2 rounded-full transition-colors ${i === slide ? 'bg-glass-border3' : 'bg-white/20 hover:bg-white/40'}`}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
