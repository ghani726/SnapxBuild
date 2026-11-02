import { Badge, PageFrame } from '@/components/Design'
import ServiceTabs from '@/components/ServiceTabs'

export default function ServicesPage() {
  return (
    <PageFrame>
      <div className="hd w-full flex flex-col items-center justify-center text-center" style={{ marginTop: 40 }}>
        <Badge icon="briefcase" className="rv">Services now and next</Badge>
        <h1>What we offer</h1>
        <p>Everything web, plus AI automation. Available services are ready today. Coming next is where we&apos;re investing.</p>
      </div>
      <div className="w-full">
        <ServiceTabs />
      </div>
    </PageFrame>
  )
}
