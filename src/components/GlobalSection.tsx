import type { CSSProperties } from 'react'

/**
 * GlobalSection — "We serve globally" section with map, arc paths, pins,
 * rotating text badge, and squiggly SVG line. Matches the .gl/.gh/.gt
 * structure from the original design.
 */

const locations = [
  ['New York', 29, 35], ['Los Angeles', 20, 39], ['Mexico City', 27, 51],
  ['São Paulo', 42, 72], ['London', 48, 29], ['Lagos', 50, 53],
  ['Cairo', 55, 44], ['Dubai', 61, 48], ['Mumbai', 66, 52],
  ['Singapore', 71, 57], ['Beijing', 73, 37], ['Tokyo', 79, 39],
  ['Sydney', 83, 75], ['Toronto', 31, 31],
] as const

export default function GlobalSection() {
  return (
    <section className="gl rv">
      <h2 className="gh">We serve <span className="lm">globally</span></h2>
      <div className="gt">
        <div className="gtl">
          <svg className="sq" viewBox="0 0 24 90" aria-hidden="true">
            <path
              pathLength={1}
              d="M12 2C20 10 4 14 12 22S4 34 12 42S20 54 12 62S4 74 12 82"
              fill="none"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <p>
            <span className="ld">Our work has no borders.</span> From startups to
            established brands, we build websites, apps and AI automation for
            clients around the world, shaped to each market and language.
          </p>
        </div>
        <div className="gtr">
          <svg className="bd2" viewBox="0 0 100 100" role="img" aria-label="We are global">
            <defs>
              <path id="global-label" d="M50 50m-33 0a33 33 0 1 1 66 0a33 33 0 1 1-66 0" />
            </defs>
            <circle cx="50" cy="50" r="46" fill="none" stroke="var(--li)" strokeOpacity=".4" strokeWidth="2" strokeDasharray="2 2.6" />
            <g className="rng">
              <text fontSize="6" fill="currentColor" letterSpacing="3.4">
                <textPath href="#global-label">YOUR AGENCY · WORLDWIDE ·</textPath>
              </text>
            </g>
            <text className="anton" x="50" y="58" textAnchor="middle" fontSize="22" fill="var(--ac)" transform="rotate(-8 50 50)">WE ARE</text>
          </svg>
          <p>We don&apos;t just work locally.<br />We deliver worldwide.</p>
        </div>
      </div>

      {/* World map with arc connections and glowing pins */}
      <div className="map" aria-label="Our clients are based around the world">
        <svg className="arcs" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
          <path d="M480 155 Q370 60 290 185" />
          <path d="M480 155 Q550 50 690 160" />
          <path d="M480 155 Q590 240 720 220" />
          <path d="M290 185 Q360 300 420 390" />
          <path d="M690 160 Q740 310 820 390" />
        </svg>
        <div id="pins">
          {locations.map(([name, left, top], index) => (
            <i
              key={name}
              className="pin"
              title={name}
              style={{ left: `${left}%`, top: `${top}%`, '--d': `${index * 0.22}s` } as CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
