import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge, Icon, PageFrame, projects } from '@/components/Design'

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((item) => item.id === id)
  if (!project) notFound()

  return (
    <PageFrame>
      <article>
        <div className="rv"><span className="ctag">{project.tag}</span><h1 className="cs-h">{project.title}</h1><div className="crumb"><Link href="/">Home</Link> › <Link href="/projects">Projects</Link> › {project.title}</div><p className="csub">{project.subtitle}</p></div>
        <div className="meta rv"><div><small>Sector</small><b>{project.sector}</b></div><div><small>Engagement</small><b>{project.engagement}</b></div><div><small>Status</small><b>{project.status}</b></div></div>
        <div className={`th cimg rv${project.theme ? ` ${project.theme}` : ''}`} aria-label={`${project.title} preview`} />
        <div className="cgrid"><div className="rv"><h2 className="sec">The challenge</h2><p>{project.challenge}</p></div><aside>
          <div className="side rv"><small>Built with</small><div className="row">{project.technologies.map((technology) => <span className="pl" key={technology}>{technology}</span>)}</div></div>
          <div className="side rv"><strong>Something like this?</strong><p>Tell us what you’re building. We’ll reply within one business day.</p><Link className="btn" href="/contact">Start a project<i className="ar"><Icon name="arrow" /></i></Link></div>
        </aside></div>
        <h2 className="sec rv" style={{ marginTop: 50 }}>What we built</h2>
        <div className="bgrid">{project.built.map(([title, description]) => <div className="rv" key={title}><h3>{title}</h3><p>{description}</p></div>)}</div>
      </article>
      <div className="cc"><Link className="more" href="/projects">Back to selected projects <Icon name="arrow" /></Link></div>
    </PageFrame>
  )
}
