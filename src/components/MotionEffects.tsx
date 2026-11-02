'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { setupSpotlight, setupMagnetic, setupCardTilt, prefersReducedMotion } from '@/utils/animations'

/**
 * MotionEffects — Global client-side animation orchestrator.
 *
 * Sets up:
 * 1. IntersectionObserver reveal system (.rv → .is-visible)
 * 2. Spotlight pointer tracking on .sp elements
 * 3. Magnetic button effects on .mag elements
 * 4. 3D perspective tilt on .sp.card elements
 *
 * All effects respect prefers-reduced-motion.
 */
export default function MotionEffects() {
  const pathname = usePathname()

  useEffect(() => {
    const reducedMotion = prefersReducedMotion()
    if (!reducedMotion) {
      document.documentElement.classList.add('motion-ready')
    }

    /* ─── 1. Reveal Observer ──────────────────────────────────────── */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const node = entry.target as HTMLElement
          node.classList.add('is-visible')
          observer.unobserve(node)
        })
      },
      { threshold: 0.14 }
    )

    const reveal = (node: HTMLElement) => {
      if (reducedMotion) node.classList.add('is-visible')
      else observer.observe(node)
    }

    const observeTree = (element: Element) => {
      if (element.matches('.rv')) reveal(element as HTMLElement)
      element.querySelectorAll<HTMLElement>('.rv').forEach(reveal)
    }

    // Observe all existing .rv elements
    document.querySelectorAll<HTMLElement>('.rv').forEach(reveal)

    // Observe dynamically added .rv elements
    const mutations = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) observeTree(node)
        })
      )
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    /* ─── 2. Spotlight Tracking ───────────────────────────────────── */
    const cleanupSpotlight = setupSpotlight()

    /* ─── 3. Magnetic Buttons ─────────────────────────────────────── */
    const cleanupMagnetic = reducedMotion ? () => {} : setupMagnetic()

    /* ─── 4. 3D Card Tilt ─────────────────────────────────────────── */
    const cleanupTilt = reducedMotion ? () => {} : setupCardTilt()

    return () => {
      observer.disconnect()
      mutations.disconnect()
      cleanupSpotlight()
      cleanupMagnetic()
      cleanupTilt()
    }
  }, [pathname])

  return null
}
