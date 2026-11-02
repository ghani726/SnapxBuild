import type { ReactNode } from 'react'
import Link from 'next/link'

const iconPaths: Record<string, string> = {
  arrow: 'M5 12h14M13 6l6 6-6 6',
  award: 'M12 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM8.5 14 7 22l5-3 5 3-1.5-8',
  box: 'm12 2 9 5v10l-9 5-9-5V7l9-5Zm-9 5 9 5 9-5m-9 5v10',
  bot: 'M12 8V4m-3 9v2m6-2v2M7 8h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Z',
  briefcase: 'M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11H3V8Zm6-2V4h6v2m-12 6h18m-11-2v4h4v-4',
  buoy: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6.4-.4 3.6 3.6m8.8 5.8-3.6-3.6m3.6-5.8-3.6 3.6m-5.2 2.2-3.6 3.6',
  chat: 'M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-.9L3 21l1.8-4.4a8 8 0 1 1 16.2-5.1Z',
  cart: 'M2 3h3l3 12h10l3-9H6m3 14h.01M18 20h.01',
  check: 'm4 12 5 5L20 6',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-14-4 20',
  cpu: 'M5 5h14v14H5zM9 9h6v6H9zm3-7v3m0 14v3M2 9h3m14 0h3M2 15h3m14 0h3',
  globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-10-10h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z',
  folder: 'M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z',
  news: 'M5 3h14a2 2 0 0 1 2 2v16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 5h8m-8 4h8m-8 4h5',
  palette: 'M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.5-3.3 1.8 1.8 0 0 1 1.4-3h.8A4.3 4.3 0 0 0 21 10.4 7.4 7.4 0 0 0 12 3ZM7.5 10h.01M10 7h.01m5 1h.01m1.5 4h.01',
  phone: 'M6 2h12v20H6zM10 18h4',
  plug: 'M9 3v5m6-5v5M6 8h12v4a6 6 0 0 1-12 0V8Zm6 10v3',
  rocket: 'M13 2 4 13h7l-1 9 10-12h-7l1-8Z',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm6-2 4 4',
  sparkles: 'm12 3 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Zm7 12 1.2 3.8L24 20l-3.8 1.2L19 25l-1.2-3.8L14 20l3.8-1.2L19 15Z',
  trend: 'm3 17 6-6 4 4 8-8m-6 0h6v6',
  users: 'M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.9m-1-12a4 4 0 0 1 0 7.8',
  zap: 'm13 2-9 12h7l-1 8 10-12h-7l1-8Z',
  send: 'm22 2-7 20-4-9-9-4ZM22 2 11 13',
  x: 'M6 6l12 12M18 6 6 18',
  up: 'M12 19V5M5 12l7-7 7 7',
  mic: 'M9 2h6v12a3 3 0 0 1-6 0V2ZM5 11a7 7 0 0 0 14 0M12 18v4',
  ln: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  gh: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.3-.4 6.8-1.6 6.8-7.3A5.7 5.7 0 0 0 21.3 4.8 5.3 5.3 0 0 0 21.2 1S20 .6 17 2.6a13.4 13.4 0 0 0-7 0C7 .6 5.8 1 5.8 1a5.3 5.3 0 0 0-.1 3.8A5.7 5.7 0 0 0 4.2 8.8c0 5.7 3.5 6.9 6.8 7.3a3.4 3.4 0 0 0-1 2.6V22',
  ig: 'M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5 4a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm9.5-5.5h.01',
  xx: 'M4 4l16 16M20 4 4 20',
}

export function Icon({ name, className = 'i' }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={iconPaths[name] ?? iconPaths.sparkles} />
    </svg>
  )
}

export function Badge({ icon, children, className = '' }: { icon: string; children: ReactNode; className?: string }) {
  return <span className={`bdg ${className}`}><b><Icon name={icon} /></b>{children}</span>
}

export function ActionLink({ href, children, light = false, className = '' }: { href: string; children: ReactNode; light?: boolean; className?: string }) {
  return <Link className={`btn mag${light ? ' lt' : ''}${className ? ` ${className}` : ''}`} href={href}>{children}<i className="ar"><Icon name="arrow" /></i></Link>
}

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <main id="top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <section className="page flex flex-col items-center w-full">
        <div className="w-full">{children}</div>
      </section>
    </main>
  )
}

export const serviceItems = [
  { icon: 'globe', title: 'Custom Web Applications', description: 'Dashboards, portals, SaaS and internal tools built end to end.', status: 'Now' },
  { icon: 'palette', title: 'UI/UX Design', description: 'Research, wireframes and polished interfaces that convert.', status: 'Now' },
  { icon: 'cart', title: 'E-commerce', description: 'Stores, payments and inventory, built for speed.', status: 'Now' },
  { icon: 'bot', title: 'AI Automation', description: 'Workflows that handle leads, emails, reports and data entry.', status: 'Now' },
  { icon: 'chat', title: 'AI Chatbots & Agents', description: 'Assistants trained on your content, live on web and WhatsApp.', status: 'Now' },
  { icon: 'plug', title: 'APIs & Integrations', description: 'Connect CRMs, payment gateways and third-party tools.', status: 'Now' },
  { icon: 'globe', title: 'Mobile & PWA', description: 'Installable apps that feel native on any phone.', status: 'Now' },
  { icon: 'rocket', title: 'SEO & Performance', description: 'Core Web Vitals, hosting, security and maintenance.', status: 'Now' },
  { icon: 'zap', title: 'Autonomous AI Agents', description: 'Agents that plan and complete multi-step business tasks.', status: 'Next' },
  { icon: 'chat', title: 'Voice AI', description: 'Call and voice assistants for support and sales.', status: 'Next' },
  { icon: 'sparkles', title: 'Personalised Websites', description: 'Pages that adapt content to each visitor in real time.', status: 'Next' },
  { icon: 'box', title: '3D & Immersive Web', description: 'Interactive 3D product views and WebXR experiences.', status: 'Next' },
] as const

export const projects = [
  { id: 'saas', title: 'SaaS Analytics Dashboard', shortTitle: 'SaaS analytics dashboard', tag: 'Web app · Analytics', type: 'Web app', category: 'Dashboard', description: 'Role-based access, live charts and exports.', subtitle: 'One dashboard, many roles, and every number had to be trustworthy and live.', sector: 'SaaS', engagement: 'Web app build', status: 'Live', theme: '', challenge: 'The client’s team tracked sales and usage across spreadsheets and three separate tools. Managers needed one view, finance needed exports, and support staff needed to see only their own accounts. A generic admin template would have been slow with live data and impossible to lock down by role.', technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Vercel'], built: [['Role-based access', 'Admins, managers and agents each see only what they need, enforced on the server.'], ['Live charts', 'Data refreshes in the background so numbers are current without reloading the page.'], ['One-click exports', 'Reports download as CSV or PDF with the filters already applied.'], ['Built to scale', 'Paginated queries and caching keep the dashboard fast as the data grows.']] },
  { id: 'ai', title: 'AI Support Agent', shortTitle: 'AI support agent', tag: 'AI · Chatbot', type: 'AI', category: 'Chatbot', description: 'Answers customer questions from the client’s own documents.', subtitle: 'An assistant that answers from the client’s own documents, in the customer’s language.', sector: 'Customer support', engagement: 'AI agent build', status: 'Live', theme: 'b', challenge: 'Support staff were answering the same questions all day, and a basic FAQ bot kept giving wrong or invented answers. The assistant had to stick to the company’s own content, admit when it didn’t know, and hand over to a human without losing the conversation.', technologies: ['OpenAI', 'Python', 'LangChain', 'Pinecone', 'WhatsApp API', 'React'], built: [['Answers from your content', 'Documents are indexed so replies come from the client’s own material, not guesses.'], ['Human handover', 'When confidence is low, the chat passes to a team member with the full history.'], ['Web and WhatsApp', 'The same assistant runs on the website and on WhatsApp.'], ['Lead capture', 'Name, email and need are collected and sent straight to the CRM.']] },
  { id: 'store', title: 'Online Store', shortTitle: 'Online store', tag: 'E-commerce · Automation', type: 'E-commerce', category: 'Automation', description: 'Fast storefront with automated order flows.', subtitle: 'A fast storefront where every order moves on its own.', sector: 'Retail', engagement: 'Store build', status: 'Live', theme: 'c', challenge: 'The shop had products on social media but no way to take payments or track stock, so orders arrived by message and were copied by hand. The store had to load quickly on mobile, accept local and card payments, and stop overselling items.', technologies: ['Shopify', 'Liquid', 'Stripe', 'Zapier', 'Google Analytics'], built: [['Mobile-first storefront', 'Lightweight pages and clear product filters that work well on a phone.'], ['Payments wired in', 'Card and local payment options, with confirmation emails sent automatically.'], ['Live inventory', 'Stock updates after every sale so sold-out items can’t be ordered.'], ['Automated order flow', 'New orders trigger invoices, courier details and customer updates without manual work.']] },
] as const

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link className="card sp rv" href={`/projects/${project.id}`}>
      <div className={`th${project.theme ? ` ${project.theme}` : ''}`} />
      <div className="row"><span className="pl">{project.type}</span><span className="pl">{project.category}</span></div>
      <h3>{project.shortTitle}</h3>
      <p>{project.description}</p>
      <span className="more">View case study <Icon name="arrow" /></span>
    </Link>
  )
}

export function ServiceCard({ service, tagged = false }: { service: (typeof serviceItems)[number]; tagged?: boolean }) {
  return (
    <div className="card sp rv">
      {tagged && <span className={`tag${service.status === 'Next' ? ' n' : ''}`}>{service.status === 'Now' ? 'Available' : 'Coming next'}</span>}
      <div className="ic"><Icon name={service.icon} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  )
}
