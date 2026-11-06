/** The Zunova mark: a "network Z" whose center node is the nova, inside a ring. Inherits color from its parent. */
export function Mark({ className, size }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="24" cy="24" r="21" strokeWidth="3" />
      <path d="M15 15 H33 L15 33 H33" strokeWidth="3.5" strokeLinejoin="round" />
      <g fill="currentColor" stroke="none">
        <circle cx="15" cy="15" r="3.5" />
        <circle cx="33" cy="33" r="3.5" />
        <circle cx="24" cy="24" r="3.2" />
      </g>
    </svg>
  )
}
