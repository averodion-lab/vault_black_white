/** The Vault dial mark. Inherits color from its parent. */
export function Mark({ className, size }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="24" cy="24" r="20" strokeWidth="4" />
      <circle cx="24" cy="24" r="7" fill="currentColor" stroke="none" />
      <path d="M24 4v8M24 36v8M4 24h8M36 24h8" strokeWidth="3" />
    </svg>
  )
}
