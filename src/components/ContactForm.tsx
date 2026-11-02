'use client'

import { FormEvent, useState } from 'react'
import { Icon } from './Design'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const message = String(form.get('message') ?? '')
    const subject = encodeURIComponent(`Project inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:hello@youragency.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Your name" aria-label="Your name" autoComplete="name" required />
      <input name="email" type="email" placeholder="Email" aria-label="Email" autoComplete="email" required />
      <textarea name="message" rows={5} placeholder="What do you want to build?" aria-label="Message" required />
      <button className="btn mag" type="submit">Send message<i className="ar"><Icon name="arrow" /></i></button>
      {sent && <p role="status">Your email app is opening with your message. You can also write to hello@youragency.com.</p>}
    </form>
  )
}
