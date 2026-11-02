import { ActionLink, Badge, Icon, PageFrame } from '@/components/Design'

const steps = [
  { icon: 'search', title: 'Discover', text: 'We learn your goals, users and budget.' },
  { icon: 'palette', title: 'Design', text: 'You approve clear interfaces before we build.' },
  { icon: 'code', title: 'Build', text: 'Tested on real devices and browsers.' },
  { icon: 'trend', title: 'Automate and grow', text: 'AI workflows, support and updates.' },
]

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="fr sp w-full">
        <Badge icon="sparkles" className="rv">Creative approach</Badge>
        <div className="two w-full">
          <h1>Creative solutions that drive engagement.</h1>
          <div className="rv">
            <p>We are a web and AI agency. We care about speed, clean design and software that saves our clients time.</p>
            <ActionLink href="/contact">Get a project in minutes</ActionLink>
          </div>
        </div>
        <strong>We create digital products:</strong>
        <div className="chips flex items-center flex-wrap gap-2.5">
          <span>Websites</span><span>Web apps</span><span>AI automation</span><span>Chatbots</span>
          <span>E-commerce</span><span>Mobile app</span><span>SEO</span><span>Responsive design</span>
        </div>
        <div className="big rv w-full" aria-hidden="true" />
      </section>
      <div className="hd w-full flex flex-col items-center justify-center text-center">
        <Badge icon="users" className="rv">How we work</Badge>
        <h2>From idea to launch</h2>
      </div>
      <div className="grid w-full">
        {steps.map((step) => (
          <div className="card sp rv" key={step.title}>
            <div className="ic grid place-items-center"><Icon name={step.icon} /></div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
      <section className="cc w-full flex flex-col items-center justify-center text-center">
        <Badge icon="rocket" className="rv">Let&apos;s build something</Badge>
        <h2>Your next idea starts here.</h2>
        <p>Tell us what you&apos;re working on and we&apos;ll help plan the next step.</p>
        <div className="cta flex items-center justify-center">
          <ActionLink href="/contact">Talk to our team</ActionLink>
        </div>
      </section>
    </PageFrame>
  )
}
