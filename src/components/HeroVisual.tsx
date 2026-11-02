import { Icon } from './Design'

/**
 * HeroVisual — The floating card stack on the right side of the hero section.
 * Contains the browser window preview with chart, the 24/7 stats card,
 * the "Decided Quality" badge, and the "New lead qualified" pill.
 * All elements float via CSS keyframes (.fl class) with staggered delays.
 */
export default function HeroVisual() {
  return (
    <div className="vis">
      {/* Browser window mockup with chart */}
      <div className="win rv">
        <div className="dots"><s /><s /><s /></div>
        <div className="wb">
          <div className="ln" />
          <svg viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 60C30 50 40 20 70 30S120 70 150 35 190 10 200 15L200 80L0 80Z" />
            <path
              className="dr"
              pathLength={1}
              d="M0 60C30 50 40 20 70 30S120 70 150 35 190 10 200 15"
              fill="none"
              strokeWidth="3"
            />
          </svg>
          <div className="tl"><i /><i /></div>
        </div>
      </div>

      {/* Floating 24/7 stats card */}
      <div className="fl st rv">
        <b>24/7</b>
        <span>AI assistant always on for your visitors</span>
        <div className="bars">
          <u style={{ height: '35%' }} />
          <u style={{ height: '60%' }} />
          <u style={{ height: '45%' }} />
          <u style={{ height: '85%' }} />
          <u style={{ height: '70%' }} />
        </div>
      </div>

      {/* Floating quality badge */}
      <div className="fl qc rv">
        <i><Icon name="check" /></i>
        <span>Decided<br />Quality</span>
      </div>

      {/* Floating lead notification pill */}
      <div className="fl bb rv">
        <Icon name="bot" />New lead qualified
      </div>
    </div>
  )
}
