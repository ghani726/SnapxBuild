/**
 * Shared animation utilities, easing curves, and motion helpers.
 * All timing and physics values are extracted from the original design's
 * Motion library and CSS keyframes to ensure frame-rate parity.
 */

/* ─── Easing Curves ─────────────────────────────────────────────── */

/** The design's primary ease-out curve: cubic-bezier(.22,1,.36,1) */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Spring-like ease for reveals */
export const EASE_SPRING: [number, number, number, number] = [0.2, 0.8, 0.2, 1]

/** Linear ease */
export const EASE_LINEAR = 'linear'

/* ─── Duration Constants (seconds) ──────────────────────────────── */
export const DURATION_REVEAL = 0.65
export const DURATION_SCENE_ENTER = 0.6
export const DURATION_SHIMMER = 2.6
export const DURATION_LOGO_SPIN = 6
export const DURATION_FLOAT = 5
export const DURATION_BORDER_ROTATE = 4
export const DURATION_REEL_SLIDE = 4
export const DURATION_HOLO = 50
export const DURATION_MARQUEE = 24

/* ─── Stagger Values ────────────────────────────────────────────── */
export const STAGGER_CARD = 0.07
export const STAGGER_WORD = 0.055
export const STAGGER_PIN = 0.09

/* ─── IntersectionObserver Helper ────────────────────────────────── */
export function observeReveal(
  root: Element,
  selector: string,
  callback: (el: HTMLElement) => void,
  options?: IntersectionObserverInit
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.14, ...options }
  )
  root.querySelectorAll<HTMLElement>(selector).forEach((el) => observer.observe(el))
  return observer
}

/* ─── Spotlight Pointer Tracking ─────────────────────────────────── */
export function setupSpotlight() {
  if (typeof window === 'undefined') return () => {}

  function handler(e: PointerEvent) {
    const target = (e.target as HTMLElement)?.closest?.('.sp')
    if (target instanceof HTMLElement) {
      const rect = target.getBoundingClientRect()
      target.style.setProperty('--x', `${e.clientX - rect.left}px`)
      target.style.setProperty('--y', `${e.clientY - rect.top}px`)
    }
  }

  window.addEventListener('pointermove', handler, { passive: true })
  return () => window.removeEventListener('pointermove', handler)
}

/* ─── Magnetic Button Effect ─────────────────────────────────────── */
export function setupMagnetic() {
  if (typeof window === 'undefined') return () => {}
  const fine = window.matchMedia('(pointer:fine)').matches
  if (!fine) return () => {}

  const controllers: AbortController[] = []

  document.querySelectorAll<HTMLElement>('.mag').forEach((btn) => {
    const controller = new AbortController()
    controllers.push(controller)
    const signal = controller.signal

    btn.addEventListener(
      'pointermove',
      (e) => {
        const rect = btn.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3
        btn.style.transform = `translate(${x}px, ${y}px)`
      },
      { passive: true, signal }
    )
    btn.addEventListener(
      'pointerleave',
      () => {
        btn.style.transform = ''
      },
      { signal }
    )
  })

  return () => controllers.forEach((c) => c.abort())
}

/* ─── 3D Card Tilt ───────────────────────────────────────────────── */
export function setupCardTilt() {
  if (typeof window === 'undefined') return () => {}
  const fine = window.matchMedia('(pointer:fine)').matches
  if (!fine) return () => {}

  let currentTilt: HTMLElement | null = null

  function handler(e: PointerEvent) {
    const card = (e.target as HTMLElement)?.closest?.('.sp.card')
    if (card instanceof HTMLElement) {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      card.style.transform = `perspective(800px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg)`
      currentTilt = card
    } else if (currentTilt) {
      currentTilt.style.transform = ''
      currentTilt = null
    }
  }

  window.addEventListener('pointermove', handler, { passive: true })
  return () => window.removeEventListener('pointermove', handler)
}

/* ─── Reduced Motion Check ───────────────────────────────────────── */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
