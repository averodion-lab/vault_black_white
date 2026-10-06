import { GradientButton } from '@/components/ui/GradientButton'
import { Typewriter } from '@/components/ui/Typewriter'
import { TypewriterHeadline } from '@/components/ui/TypewriterHeadline'
import { PlasmaBackground } from '@/components/ui/PlasmaBackground'

const SHIMMER =
  'bg-[length:250%_100%] bg-gradient-to-r from-glass-border1 via-glass-border2 to-glass-border3 bg-clip-text text-transparent [animation:shimmer-text_4s_linear_infinite]'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 text-center">
      <PlasmaBackground className="pointer-events-none absolute inset-0 h-full w-full" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,7,12,0.05)_0%,rgba(7,7,12,0.55)_85%)]"
      />
      <div className="relative z-10 [animation:fade-up-in_0.9s_ease-out_both]">
        <Typewriter text="Web & Software Agency" className="font-body text-xs uppercase tracking-[0.3em] text-muted" />
        <TypewriterHeadline
          as="h1"
          className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-6xl"
          segments={[
            { text: 'WEB & ' },
            { text: 'SOFTWARE', className: SHIMMER },
            { break: true },
            { text: 'DEVELOPMENT' },
            { break: true },
            { text: 'AGENCY' },
          ]}
        />
        <p className="mx-auto mt-6 max-w-xl font-body text-lg text-muted">
          Upgrade your business with tailored custom website development, elite-level design, and AI implementations
          built for businesses everywhere.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <GradientButton to="/contact">Submit Inquiry</GradientButton>
          <GradientButton href="#services" className="border border-white/20 bg-none bg-transparent text-ink">
            View Services
          </GradientButton>
        </div>
        <div className="mt-6 flex justify-center gap-3 text-xs text-muted">
          <span>Serving Nationwide</span>
          <span>·</span>
          <span>100% Custom Built</span>
        </div>
      </div>
    </section>
  )
}
