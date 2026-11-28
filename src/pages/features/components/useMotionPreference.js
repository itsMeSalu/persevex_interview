import { useSyncExternalStore } from 'react'

const query = '(prefers-reduced-motion: reduce)'

function subscribe(onChange) {
  const preference = window.matchMedia(query)
  preference.addEventListener('change', onChange)
  return () => preference.removeEventListener('change', onChange)
}

export function useMotionPreference() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false)
}
