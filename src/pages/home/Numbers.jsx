import { Reveal } from '@/components/ui/Reveal'
import { Bars, DataTable, Donut, DotGrid } from '@/components/ui/Charts'
import { useTip } from '@/hooks/useTip'
import { BAR, STAY } from '@/components/ui/chartColors'
import { NUMBERS } from '@/data/site'

/** "By the numbers". While the data is marked as example it never ships in a production build. */
export function Numbers({ force = false }) {
  const tip = useTip()
  if (NUMBERS.isExample && import.meta.env.PROD && !force) return null
  const { byService, byYear, clients } = NUMBERS

  return (
    <section className="sec wrap paper" id="numbers">
      <Reveal className="sec-head">
        <div>
          <span className="mono">By the numbers</span>
          {NUMBERS.isExample && (
            <>
              <br />
              <span className="example-tag">Example numbers · replace before launch</span>
            </>
          )}
        </div>
        <h2>What we&apos;ve built so far</h2>
      </Reveal>
      <div className="charts">
        <Reveal className="chart">
          <h3>Projects by service</h3>
          <span className="rule" style={{ '--rule': BAR }} />
          <div className="plot"><Donut data={byService} tip={tip} /></div>
          <p className="foot">Each project is counted under its main service.</p>
          <DataTable head={['Service', 'Projects']} rows={byService} />
        </Reveal>
        <Reveal className="chart" delay={90}>
          <h3>Projects launched</h3>
          <span className="rule" style={{ '--rule': BAR }} />
          <div className="plot"><Bars data={byYear} tip={tip} /></div>
          <p className="foot">
            Sites, apps and systems shipped to production each year.
            {byYear.some((y) => y[2]) && ` *${byYear.find((y) => y[2])[0]} ${byYear.find((y) => y[2])[2]}.`}
          </p>
          <DataTable head={['Year', 'Projects']} rows={byYear.map((y) => [y[0] + (y[2] ? ` (${y[2]})` : ''), y[1]])} />
        </Reveal>
        <Reveal className="chart" delay={180}>
          <h3>Clients who stay</h3>
          <span className="rule" style={{ '--rule': STAY }} />
          <div className="plot"><DotGrid total={clients.total} staying={clients.staying} tip={tip} /></div>
          <p className="foot">Each dot is one business we&apos;ve built for. Green dots are still on a maintenance plan.</p>
          <DataTable
            head={['Clients', 'Count']}
            rows={[['Still on a maintenance plan', clients.staying], ['Delivered', clients.total - clients.staying], ['Total', clients.total]]}
          />
        </Reveal>
      </div>
      {tip.node}
    </section>
  )
}
