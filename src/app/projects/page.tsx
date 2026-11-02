import { Badge, PageFrame, ProjectCard, projects } from '@/components/Design'

export default function ProjectsPage() {
  return (
    <PageFrame>
      <div className="hd w-full flex flex-col items-center justify-center text-center" style={{ marginTop: 40 }}>
        <Badge icon="folder" className="rv">Our work</Badge>
        <h1>Selected projects</h1>
        <p>A few examples of web apps, AI experiences and commerce workflows built for ambitious teams.</p>
      </div>
      <div className="grid w-full">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </PageFrame>
  )
}
