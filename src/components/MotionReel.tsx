'use client'

import { useEffect, useState } from 'react'
import { Icon } from './Design'

const scenes = [
  { title: 'Discover', caption: 'We learn your goals, users and budget.' },
  { title: 'Design', caption: 'Interfaces you approve before we build.' },
  { title: 'Automate', caption: 'AI that keeps working after you log off.' },
  { title: 'Launch', caption: 'Live, fast and ready to grow.' },
]

export default function MotionReel() {
  const [scene, setScene] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setScene((current) => (current + 1) % scenes.length), 4000)
    return () => window.clearInterval(timer)
  }, [paused])

  const current = scenes[scene]
  return (
    <div className="reel rv">
      <div className={`stage stage-${scene}`} key={scene} aria-live="polite">
        <div className="sc">
          {scene === 0 && <div className="rings" aria-hidden="true"><i /><i /><i /></div>}
          {scene === 1 && <div className="mk" aria-hidden="true"><b /><div className="mr"><i /><i /><i /></div><u /><u /></div>}
          {scene === 2 && <div className="cb" aria-hidden="true"><span>Hi, what do you offer?</span><span className="r">Web apps, AI automation and more.</span><span>Can you book a call?</span><span className="r">Booked. Talk soon.</span></div>}
          {scene === 3 && <div className="cnt" aria-hidden="true">100%</div>}
          <h3>{current.title}</h3>
          <p>{String(scene + 1).padStart(2, '0')} · {current.caption}</p>
        </div>
      </div>
      <div className="rc">
        <button className="ib" type="button" aria-label={paused ? 'Play motion reel' : 'Pause motion reel'} onClick={() => setPaused((value) => !value)}>{paused ? '▶' : 'Ⅱ'}</button>
        <button className="ib" type="button" aria-label="Next scene" onClick={() => setScene((value) => (value + 1) % scenes.length)}>›</button>
        <div className="pbar"><u className={paused ? 'paused' : ''} key={`${scene}-${paused}`} /></div>
        <span>{String(scene + 1).padStart(2, '0')} / 04</span>
      </div>
    </div>
  )
}
