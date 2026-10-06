import { useState } from 'react'

/** A contact value shown as a link plus a Copy button, since mailto/tel links don't open for every visitor. */
export function CopyLine({ value, href }) {
  const [label, setLabel] = useState('Copy')

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setLabel('Copied')
    } catch {
      setLabel('Press ⌘C')
    }
    setTimeout(() => setLabel('Copy'), 1600)
  }

  return (
    <span className="copy-line">
      <a href={href}>{value}</a>
      <button type="button" onClick={copy} aria-label={`Copy ${value}`}>
        {label}
      </button>
    </span>
  )
}
