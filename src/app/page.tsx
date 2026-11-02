import Link from 'next/link'
import ThreeScene from '@/components/ThreeScene'
import MotionReel from '@/components/MotionReel'
import HeroVisual from '@/components/HeroVisual'
import TechMarquee from '@/components/TechMarquee'
import DashboardPreview from '@/components/DashboardPreview'
import GlobalSection from '@/components/GlobalSection'
import { ActionLink, Badge, Icon, PageFrame, ProjectCard, ServiceCard, serviceItems, projects } from '@/components/Design'

const reasons = [
  { icon: 'zap', title: 'Fast delivery', text: 'Lightweight pages that load quickly on any device.' },
  { icon: 'code', title: 'Clean code', text: 'Maintainable work your team can build on.' },
  { icon: 'bot', title: 'AI first', text: 'Automation designed in from day one.' },
  { icon: 'buoy', title: 'Ongoing support', text: 'We stay with you after launch.' },
]

export default function HomePage() {
  return (
    <PageFrame>
      {/* ═══ Hero Section ═══ */}
      <section className="fr hero sp bt w-full">
        <div>
          <Badge icon="chat"><span className="shm">On demand, live support</span></Badge>
          <h1>Web apps &amp; AI that <span className="hl">grow</span> <span className="hl">your</span> <span className="hl">business</span></h1>
          <div className="cta flex items-center flex-wrap gap-3">
            <ActionLink href="/contact">Get started now</ActionLink>
            <ActionLink href="/services" light>Learn more</ActionLink>
          </div>
          <p className="smt">Websites, web apps and AI automation, built to turn visitors into customers and save your team hours every week.</p>
        </div>
        <HeroVisual />
      </section>

      {/* ═══ Tech Stack Marquee ═══ */}
      <div className="w-full flex justify-center">
        <TechMarquee />
      </div>

      {/* ═══ Dashboard Preview ═══ */}
      <div className="w-full flex flex-col items-center">
        <DashboardPreview />
      </div>

      {/* ═══ 3D Scene ═══ */}
      <section className="d3 fr sp rv w-full">
        <div>
          <Badge icon="box">3D &amp; interactive</Badge>
          <h2>Websites that feel alive.</h2>
          <p>Real-time 3D running right in the browser. Move your mouse over the scene and it follows you.</p>
          <ActionLink href="/contact">Add 3D to my site</ActionLink>
        </div>
        <ThreeScene />
      </section>

      {/* ═══ Motion Reel ═══ */}
      <div className="hd w-full flex flex-col items-center justify-center text-center">
        <Badge icon="sparkles" className="rv">Motion reel</Badge>
        <h2>See how we work, in motion.</h2>
      </div>
      <div className="w-full flex justify-center">
        <MotionReel />
      </div>

      {/* ═══ What We Offer ═══ */}
      <div className="hd w-full flex flex-col items-center justify-center text-center">
        <Badge icon="briefcase" className="rv">Business approach</Badge>
        <h2>What we offer</h2>
        <p>Everything your business needs on the web, from design and development to AI that works in the background.</p>
      </div>
      <div className="grid w-full" id="mini">
        {serviceItems.slice(0, 6).map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {/* ═══ Why Us ═══ */}
      <div className="hd w-full flex flex-col items-center justify-center text-center">
        <Badge icon="award" className="rv">Why us</Badge>
        <h2>Trusted company</h2>
        <p>We believe in clear communication, clean work and results you can measure.</p>
      </div>
      <div className="grid w-full">
        {reasons.map((reason, index) => (
          <div className="card sp rv" key={reason.title}>
            <div className="ic grid place-items-center"><Icon name={reason.icon} /></div>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
            <div className="nm">0{index + 1}</div>
          </div>
        ))}
      </div>

      {/* ═══ Global Section ═══ */}
      <div className="w-full">
        <GlobalSection />
      </div>

      {/* ═══ Dark Automation Panel ═══ */}
      <section className="dk w-full">
        <div>
          <h2>Better to see it once than hear about it a thousand times.</h2>
          <p>Here&apos;s the kind of work AI automation does for you every day, without anyone clicking a button.</p>
          <ActionLink href="/projects" light>See projects</ActionLink>
        </div>
        <div className="col">
          <div className="it flex items-center gap-3"><i className="grid place-items-center"><Icon name="check" /></i>Lead captured and added to CRM</div>
          <div className="it flex items-center gap-3"><i className="grid place-items-center"><Icon name="check" /></i>Customer question answered by AI</div>
          <div className="it flex items-center gap-3"><i className="grid place-items-center"><Icon name="check" /></i>Invoice sent automatically</div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cc w-full flex flex-col items-center justify-center text-center">
        <Badge icon="rocket" className="rv">Ready when you are</Badge>
        <h2>Get a project in minutes?</h2>
        <p>Tell us your idea. We&apos;ll reply with next steps.</p>
        <div className="cta flex items-center justify-center"><ActionLink href="/contact">Get started now</ActionLink></div>
      </section>

      {/* ═══ Selected Projects ═══ */}
      <div className="hd w-full flex flex-col items-center justify-center text-center">
        <Badge icon="folder" className="rv">Selected work</Badge>
        <h2>Projects built for growth.</h2>
        <p>Explore a few ways we help teams move faster.</p>
      </div>
      <div className="grid w-full">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <div className="cc w-full flex justify-center">
        <Link className="more flex items-center gap-1.5" href="/projects">View all projects <Icon name="arrow" /></Link>
      </div>
    </PageFrame>
  )
}
