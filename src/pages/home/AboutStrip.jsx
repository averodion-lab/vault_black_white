import { useState } from 'react'
import { GradientButton } from '@/components/ui/GradientButton'
import { Reveal } from '@/components/ui/Reveal'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function AboutStrip() {
  const [reducedMotion] = useState(prefersReducedMotion)

  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <Reveal className="overflow-hidden rounded-xl transition-transform duration-500 hover:scale-[1.02]">
          {reducedMotion ? (
            <video controls muted loop playsInline className="w-full rounded-xl">
              <source src="/assets/media/Car_Pulls_Up_To_Plane.mp4" type="video/mp4" />
            </video>
          ) : (
            <video autoPlay muted loop playsInline className="w-full rounded-xl">
              <source src="/assets/media/Car_Pulls_Up_To_Plane.mp4" type="video/mp4" />
            </video>
          )}
        </Reveal>
        <Reveal delay={150}>
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Who We Are</span>
          <h2 className="mt-3 font-display text-3xl text-ink">
            BUILT <span className="text-glass-border2">DIFFERENT.</span>
            <br />
            BUILT FOR YOU.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Vault Development is a web design and AI technology company built to help businesses compete and grow
            online. We&apos;re not a template shop — everything we build is custom, intentional, and designed to get
            results.
          </p>
          <p className="mt-3 text-lg text-muted">
            Based in Middle Georgia, we work with businesses of all sizes nationwide — from local shops to commercial
            enterprises.
          </p>
          <div className="mt-6">
            <GradientButton to="/about">Learn About Us →</GradientButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
