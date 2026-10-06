/** Native <details> accordion: keyboard and screen-reader friendly with no JS state. */
export function FaqList({ items, openFirst = false }) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details key={item.q} open={openFirst && i === 0}>
          <summary>
            {item.q} <i aria-hidden="true" />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  )
}
