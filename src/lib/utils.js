import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Prefix a public-folder path with the deploy base (e.g. GitHub Pages subpath)
export function asset(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
