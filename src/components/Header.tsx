'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import { Icon } from './Design'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

type Bubble = { left: number; top: number; width: number; height: number }

export default function Header() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [bubble, setBubble] = useState<Bubble | null>(null)

  function moveBubble(target: HTMLAnchorElement) {
    const nav = navRef.current
    if (!nav || window.matchMedia('(max-width: 900px)').matches) return
    const link = target.getBoundingClientRect()
    const bounds = nav.getBoundingClientRect()
    setBubble({
      left: link.left - bounds.left - 4,
      top: link.top - bounds.top - 2,
      width: link.width + 8,
      height: link.height + 4,
    })
  }

  function closeMenu() {
    setMenuOpen(false)
    setBubble(null)
  }

  return (
    <header className="w-full flex justify-center">
      <div className="bar max-w-7xl w-full mx-auto flex items-center justify-between">
        <Link className="logo flex items-center" href="/" onClick={closeMenu}>
          <i aria-hidden="true" />Your Agency
        </Link>
        <nav
          ref={navRef}
          id="nav"
          className={`flex items-center${menuOpen ? ' open' : ''}`}
          aria-label="Main navigation"
          onPointerOver={(event) => {
            const link = (event.target as HTMLElement).closest('a')
            if (link instanceof HTMLAnchorElement) moveBubble(link)
          }}
          onPointerLeave={() => setBubble(null)}
          onFocusCapture={(event) => {
            const link = (event.target as HTMLElement).closest('a')
            if (link instanceof HTMLAnchorElement) moveBubble(link)
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setBubble(null)
          }}
        >
          <b className="pill" aria-hidden="true" />
          <b
            className="bub"
            aria-hidden="true"
            style={bubble ? {
              width: bubble.width,
              height: bubble.height,
              transform: `translate(${bubble.left}px, ${bubble.top}px)`,
              opacity: 1,
            } : undefined}
          />
          {navigation.map(({ label, href }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                href={href}
                key={href}
                className={active ? 'on' : undefined}
                aria-current={active ? 'page' : undefined}
                onClick={closeMenu}
              >
                {label}
              </Link>
            )
          })}
        </nav>
        <div className="tools flex items-center gap-2">
          <Link className="btn lt sm mag fcta" href="/contact">Free Consultation<i className="ar"><Icon name="arrow" /></i></Link>
          <button
            className="ib bgr"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
