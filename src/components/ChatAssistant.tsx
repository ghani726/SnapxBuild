'use client'

import { FormEvent, useState } from 'react'
import { Icon } from './Design'

type Message = { from: 'assistant' | 'you'; text: string }

const suggestions = ['Services', 'AI automation', 'Pricing', 'Timeline', 'Talk to the team']

function replyTo(message: string) {
  const text = message.toLowerCase()
  if (/price|quote|cost|budget|pricing/i.test(text)) return 'Every project is scoped individually, so we don\'t quote a flat price. Share your idea and the team will send a clear estimate.'
  if (/service|offer|ai|automation|web/i.test(text)) return 'We build web apps, e-commerce stores, AI automations, chatbots, and custom integrations. Autonomous agents and voice AI are coming next.'
  if (/start|contact|talk|call|team|human/i.test(text)) return 'The easiest next step is a free consultation. Share a few details and our team will get back to you within one business day.'
  if (/time|long|deliver|days|weeks|deadline|timeline/i.test(text)) return 'Timelines depend on scope. After a short discovery call, we give you a clear schedule with milestones.'
  return 'Thanks for reaching out. Tell us a little about your project, or contact the team for a free consultation.'
}

/* Fox SVG inline — matches the original design's #fox symbol */
function FoxIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M6 32 9 5l17 13z" fill="#D85E18" />
      <path d="M58 32 55 5 38 18z" fill="#D85E18" />
      <ellipse cx="32" cy="36" rx="26" ry="22" fill="#F58A2B" />
      <path d="M8 42q24 26 48 0-7 14-24 14T8 42z" fill="#FFF3DF" />
      <circle cx="22" cy="33" r="3.6" fill="#1B1009" />
      <circle cx="42" cy="33" r="3.6" fill="#1B1009" />
      <ellipse cx="32" cy="43" rx="4" ry="3" fill="#2A1810" />
    </svg>
  )
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { from: 'assistant', text: 'Hi! I\'m Foxy, the assistant for this agency. I can tell you about our services, AI automation, timelines and more.' },
  ])

  function send(text: string) {
    const clean = text.trim()
    if (!clean) return
    setMessages((current) => [...current, { from: 'you', text: clean }, { from: 'assistant', text: replyTo(clean) }])
    setInput('')
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    send(input)
  }

  function toggle(value: boolean) {
    setOpen(value)
  }

  return (
    <>
      {/* Floating "Ask Foxy" pill button — matches original design exactly */}
      <button
        id="av"
        className="bt"
        type="button"
        aria-label="Chat with our assistant"
        aria-expanded={open}
        aria-controls="chat"
        onClick={() => toggle(true)}
        style={{ display: open ? 'none' : undefined }}
      >
        <span className="avf"><FoxIcon /></span>
        <span className="avt"><b>Ask Foxy</b><small><u />Online now</small></span>
      </button>

      {/* Chat panel */}
      <aside id="chat" className={open ? 'open' : ''} role="dialog" aria-label="Chat assistant" aria-hidden={!open}>
        <div className="ch">
          <FoxIcon className="cav" />
          <div><strong>Foxy, your assistant</strong><small>Online, replies instantly</small></div>
          <button type="button" id="x" aria-label="Close chat" onClick={() => toggle(false)}><Icon name="x" /></button>
        </div>
        <div id="msgs" aria-live="polite">
          {messages.map((message, index) => (
            <div className={`msg ${message.from === 'you' ? 'um' : 'bm'}`} key={`${index}-${message.from}`}>{message.text}</div>
          ))}
        </div>
        <div className="qr">
          {suggestions.map((suggestion) => (
            <button type="button" key={suggestion} onClick={() => send(suggestion)}>{suggestion}</button>
          ))}
        </div>
        <form className="cin" onSubmit={submit}>
          <input id="ci" aria-label="Message" placeholder="Type your question…" value={input} onChange={(event) => setInput(event.target.value)} />
          <button type="submit" id="cs" aria-label="Send"><Icon name="send" /></button>
        </form>
      </aside>
    </>
  )
}
