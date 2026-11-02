import { Badge, PageFrame } from '@/components/Design'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="fr two sp">
        <div><Badge icon="chat" className="rv">Free consultation</Badge><h1>Let’s talk.</h1><p>Tell us about your project. We’ll reply with next steps.</p><p><strong><a href="mailto:hello@youragency.com">hello@youragency.com</a></strong><br />+92 000 0000000</p></div>
        <div className="rv"><ContactForm /></div>
      </section>
    </PageFrame>
  )
}
