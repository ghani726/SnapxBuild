'use client'

import { useEffect, useRef, useState } from 'react'
import { ServiceCard, serviceItems } from './Design'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'Now', label: 'Available now' },
  { key: 'Next', label: 'Coming next' },
] as const

export default function ServiceTabs() {
  const [filter, setFilter] = useState<(typeof filters)[number]['key']>('all')
  const [pill, setPill] = useState({ left: 5, width: 0 })
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const selected = tabsRef.current?.querySelector<HTMLButtonElement>('[aria-selected="true"]')
    if (selected) setPill({ left: selected.offsetLeft, width: selected.offsetWidth })
  }, [filter])

  const visible = serviceItems.filter((service) => filter === 'all' || service.status === filter)

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Filter services" ref={tabsRef}>
        <b className="pill" aria-hidden="true" style={{ left: pill.left, width: pill.width }} />
        {filters.map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={filter === item.key}
            className={filter === item.key ? 'on' : ''}
            key={item.key}
            onClick={() => setFilter(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid" role="tabpanel" aria-live="polite">
        {visible.map((service) => <ServiceCard key={service.title} service={service} tagged />)}
      </div>
    </>
  )
}
