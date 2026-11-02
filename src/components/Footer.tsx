import Link from 'next/link'
import { Icon } from './Design'

const pages = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'],
  ['Projects', '/projects'], ['Blog', '/blog'], ['Contact', '/contact'],
] as const

export default function Footer() {
  return (
    <footer className="ft max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="fw flex flex-col items-center w-full">
        <div className="ftop flex items-center justify-between w-full flex-wrap gap-5">
          <div>
            <h3 className="fh">Have a project in mind?</h3>
            <p style={{ margin: 0 }}>Tell us what you&apos;re building. We&apos;ll reply within one business day.</p>
          </div>
          <Link className="btn lt mag" href="/contact">Start a project<i className="ar"><Icon name="arrow" /></i></Link>
        </div>
        <div className="fgrid w-full">
          <div className="fc fb">
            <Link className="logo flex items-center" href="/"><i aria-hidden="true" />Your Agency</Link>
            <p style={{ margin: '14px 0 0', maxWidth: '34ch' }}>Web apps and AI automation for businesses around the world.</p>
            <div className="soc flex items-center">
              <a href="https://www.linkedin.com/" aria-label="LinkedIn"><span>in</span></a>
              <a href="https://github.com/" aria-label="GitHub"><span>⌘</span></a>
              <a href="https://www.instagram.com/" aria-label="Instagram"><span>◎</span></a>
              <a href="https://x.com/" aria-label="X"><span>𝕏</span></a>
            </div>
          </div>
          <div className="fc"><h4>Pages</h4>{pages.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
          <div className="fc"><h4>Services</h4>
            <Link href="/services">Custom web apps</Link><Link href="/services">UI/UX design</Link>
            <Link href="/services">E-commerce</Link><Link href="/services">AI automation</Link><Link href="/services">AI chatbots</Link>
          </div>
          <div className="fc"><h4>Get in touch</h4>
            <a href="mailto:hello@youragency.com">hello@youragency.com</a><span>+92 000 0000000</span>
            <span className="stt flex items-center"><u />Open for new projects</span>
          </div>
        </div>
        <div className="fbig" aria-hidden="true">Your Agency</div>
        <div className="fbot flex items-center justify-between w-full flex-wrap">
          <span>© {new Date().getFullYear()} Your Agency. All rights reserved.</span>
          <span>Web apps &amp; AI automation</span>
          <a className="ib grid place-items-center" href="#top" aria-label="Back to top"><Icon name="arrow" /></a>
        </div>
      </div>
    </footer>
  )
}
