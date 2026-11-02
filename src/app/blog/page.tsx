import { ActionLink, Badge, PageFrame } from '@/components/Design'

const articles = [
  { title: 'How AI automation saves hours every week', description: 'Practical workflows any business can adopt.', date: 'Field notes', read: '5 min read', theme: '', initials: 'YA' },
  { title: 'Why website speed decides conversions', description: 'Simple fixes that make pages feel instant.', date: 'Web performance', read: '4 min read', theme: 'b', initials: 'YA' },
  { title: 'AI agents vs. chatbots', description: 'What each can do for your customers.', date: 'Artificial intelligence', read: '6 min read', theme: 'c', initials: 'YA' },
]

export default function BlogPage() {
  return (
    <PageFrame>
      <div className="hd w-full flex flex-col items-center justify-center text-center" style={{ marginTop: 40 }}>
        <Badge icon="news" className="rv">Articles and resources</Badge>
        <h1>Interesting articles</h1>
        <p>Ideas and practical notes about better websites, useful automation and building for the web.</p>
      </div>
      <div className="grid w-full">
        {articles.map((article) => (
          <article className="card sp rv" key={article.title}>
            <div className={`th${article.theme ? ` ${article.theme}` : ''}`} />
            <div className="row flex items-center flex-wrap gap-2">
              <span className="pl">{article.date}</span>
              <span className="pl">{article.read}</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <div className="au flex items-center gap-2.5">
              <b className="grid place-items-center">{article.initials}</b>
              <span>Your Agency<br /><small>Studio notes</small></span>
            </div>
          </article>
        ))}
      </div>
      <section className="cc w-full flex flex-col items-center justify-center text-center">
        <Badge icon="sparkles" className="rv">Have a question?</Badge>
        <h2>Let&apos;s talk through your idea.</h2>
        <p>We&apos;re happy to help you find a useful next step.</p>
        <div className="cta flex items-center justify-center">
          <ActionLink href="/contact">Contact the team</ActionLink>
        </div>
      </section>
    </PageFrame>
  )
}
