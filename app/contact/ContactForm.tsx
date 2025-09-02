"use client"

import { useState } from "react"

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  return (
    <form
      className="mt-6 space-y-4 rounded-xl border bg-white p-5"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      aria-label="Contact form"
    >
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input required className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          rows={5}
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
          placeholder="How can we help?"
        />
      </div>
      <button type="submit" className="px-4 py-2 rounded-md bg-secondary text-white">
        Send
      </button>
      {sent && <p className="text-sm text-green-700 mt-2">Thanks! We received your message.</p>}
    </form>
  )
}
