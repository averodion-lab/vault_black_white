import { Reveal } from '@/components/ui/Reveal'
import { COMPARE } from '@/data/site'

const THEM = {
  no: <span className="no" role="img" aria-label="No">×</span>,
  maybe: <span className="no" role="img" aria-label="Sometimes">–</span>,
}

export function Compare() {
  return (
    <section className="sec wrap paper" id="compare">
      <Reveal className="sec-head">
        <span className="mono">Why Zunova</span>
        <h2>Zunova vs. the rest</h2>
      </Reveal>
      <Reveal className="cmp-wrap">
        <table className="cmp">
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col" className="us">Zunova</th>
              <th scope="col">Other agencies</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE.map((r) => (
              <tr key={r.feat}>
                <th scope="row">{r.feat}</th>
                <td data-label="Zunova"><span className="yes" role="img" aria-label="Yes">✓</span></td>
                <td data-label="Other agencies">{THEM[r.them]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  )
}
