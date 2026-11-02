/**
 * TechMarquee — Infinite-scrolling tech stack logo strip.
 * Each logo is an inline SVG matching the original design exactly.
 * The marquee duplicates the set for seamless CSS animation loop.
 */

const logos = [
  { title: 'Next.js', svg: <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="21.5" fill="#000" stroke="#8a8a8a" strokeWidth="1.5"/><path d="M17.500 33V15.500L31 33M31 15.500v10" fill="none" stroke="#fff" strokeWidth="2.600" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'React', svg: <svg viewBox="-12 -12 24 24"><g fill="none" stroke="#61DAFB" strokeWidth="1"><ellipse rx="10" ry="4"/><ellipse rx="10" ry="4" transform="rotate(60)"/><ellipse rx="10" ry="4" transform="rotate(120)"/></g><circle r="1.900" fill="#61DAFB"/></svg> },
  { title: 'Node.js', svg: <svg viewBox="0 0 48 48"><path d="M24 3l18 10.500v21L24 45 6 34.500v-21z" fill="#5FA04E"/><text x="24" y="31" textAnchor="middle" fontSize="17" fontWeight="800" fill="#fff">JS</text></svg> },
  { title: 'Python', svg: <svg viewBox="0 0 48 48"><path d="M24 5c-8 0-7.500 3.500-7.500 3.500V12h8v1.200H13.500S6 12.500 6 24s6.500 11 6.500 11H16v-5c0-4 3.500-4 3.500-4h8.500s3.500.1 3.500-3.500V9S32 5 24 5z" fill="#3776AB"/><circle cx="19.500" cy="9.500" r="1.500" fill="#fff"/><g transform="rotate(180 24 24)"><path d="M24 5c-8 0-7.500 3.500-7.500 3.500V12h8v1.200H13.500S6 12.500 6 24s6.500 11 6.500 11H16v-5c0-4 3.500-4 3.500-4h8.500s3.500.1 3.500-3.500V9S32 5 24 5z" fill="#FFD43B"/><circle cx="19.500" cy="9.500" r="1.500" fill="#fff"/></g></svg> },
  { title: 'OpenAI', svg: <svg viewBox="0 0 48 48"><g fill="none" stroke="#10A37F" strokeWidth="3"><rect x="11" y="16.500" width="26" height="15" rx="7.500"/><rect x="11" y="16.500" width="26" height="15" rx="7.500" transform="rotate(60 24 24)"/><rect x="11" y="16.500" width="26" height="15" rx="7.500" transform="rotate(120 24 24)"/></g></svg> },
  { title: 'Shopify', svg: <svg viewBox="0 0 48 48"><path d="M10 14h28l-2 28H12z" fill="#95BF47"/><path d="M17 14a7 7 0 0 1 14 0" stroke="#5E8E3E" strokeWidth="3" fill="none"/><text x="24" y="36" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff">S</text></svg> },
  { title: 'WordPress', svg: <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#21759B"/><circle cx="24" cy="24" r="17.500" fill="none" stroke="#fff" strokeWidth="1.600"/><text x="24" y="32" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff">W</text></svg> },
]

export default function TechMarquee() {
  return (
    <div className="mq" aria-label="Technologies we work with">
      <div>
        {/* First set */}
        {logos.map((logo) => (
          <span key={`a-${logo.title}`} title={logo.title}>{logo.svg}</span>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo) => (
          <span key={`b-${logo.title}`} title={logo.title}>{logo.svg}</span>
        ))}
      </div>
    </div>
  )
}
