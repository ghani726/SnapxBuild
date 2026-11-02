'use client'

/**
 * BackgroundOrbs — The holographic gradient overlay and ambient orbs
 * Matches the original .holo element: a fixed conic gradient that slowly spins,
 * plus two blurred orb elements for ambient lighting.
 */
export default function BackgroundOrbs() {
  return (
    <>
      {/* Holographic rotating background glow */}
      <i className="holo" aria-hidden="true" />
    </>
  )
}
