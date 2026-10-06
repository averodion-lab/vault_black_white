import { Check, X, Minus } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const ROWS = [
  { feat: '100% Custom Design — No Templates', us: 'yes', them: 'no' },
  { feat: 'AI Integration & Automation', us: 'yes', them: 'no' },
  { feat: 'Transparent Pricing — Full Quote Upfront', us: 'yes', them: 'no' },
  { feat: '24-Hour Response Time', us: 'yes', them: 'maybe' },
  { feat: 'Mobile, App & Software Development', us: 'yes', them: 'no' },
  { feat: 'Post-Launch Support & Maintenance', us: 'yes', them: 'maybe' },
  { feat: 'Built for Results — Not Just Looks', us: 'yes', them: 'no' },
  { feat: 'Direct Access to Your Developer', us: 'yes', them: 'no' },
]

function Icon({ status }) {
  if (status === 'yes') return <Check aria-label="Yes" className="mx-auto text-glass-border3" size={18} />
  if (status === 'no') return <X aria-label="No" className="mx-auto text-muted" size={18} />
  return <Minus aria-label="Partial" className="mx-auto text-muted" size={18} />
}

export function ComparisonTable() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Why Vault</span>
          <h2 className="mt-2 font-display text-2xl text-ink">VAULT VS. THE REST</h2>
          <p className="mt-2 text-lg text-muted">See exactly what separates us from generic agencies and template shops.</p>
        </Reveal>
        <table className="mt-8 w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th scope="col" className="py-3 text-left font-normal text-muted"></th>
              <th scope="col" className="py-3 text-center font-display text-ink">VAULT DIGITAL</th>
              <th scope="col" className="py-3 text-center text-muted">Other Agencies</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => {
              const direction = i % 2 === 0 ? 'left' : 'right'
              const delay = i * 70
              return (
                <tr key={row.feat} className="border-b border-white/5 transition-colors hover:bg-white/[0.03]">
                  <th scope="row" className="py-3 text-left font-normal text-ink">
                    <Reveal direction={direction} delay={delay}>
                      {row.feat}
                    </Reveal>
                  </th>
                  <td className="py-3 text-center">
                    <Reveal direction={direction} delay={delay}>
                      <Icon status={row.us} />
                    </Reveal>
                  </td>
                  <td className="py-3 text-center">
                    <Reveal direction={direction} delay={delay}>
                      <Icon status={row.them} />
                    </Reveal>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
