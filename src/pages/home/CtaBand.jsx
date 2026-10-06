import { GradientButton } from '@/components/ui/GradientButton'
import { Reveal } from '@/components/ui/Reveal'

export function CtaBand() {
  return (
    <section className="px-6 py-16 text-center">
      <Reveal>
        <h2 className="font-display text-2xl text-ink">Ready to grow your business online?</h2>
        <p className="mt-2 text-lg text-muted">Free consultation, no commitment. Let&apos;s build something great.</p>
        <div className="mt-6">
          <GradientButton to="/contact">Start Your Project →</GradientButton>
        </div>
      </Reveal>
    </section>
  )
}
