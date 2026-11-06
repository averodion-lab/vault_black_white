import { useEffect, useLayoutEffect } from 'react'

/** useLayoutEffect in the browser, useEffect during build-time prerendering (where layout effects can't run). */
export const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
