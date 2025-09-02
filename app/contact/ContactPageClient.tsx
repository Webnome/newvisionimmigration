"use client"

import { useState } from "react"

export default function ContactPageClient() {
  const [sent, setSent] = useState(false)
  return (
    <div className="section">
      <div className="container-balanced grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="font-heading text-3xl font-semibold">Contact</h1>
          <p className="mt-2 text-ink/80">We usually respond within one business day.</p>
          <form
            className="mt-6 space-y-4 rounded-xl border bg-white p-5"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
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
          <div className="mt-6 text-sm space-y-2">
            <div>Email: hello@newvisionimmi.com</div>
            <div>Phone: +91 90000 00000</div>
            <div className="flex gap-3">
              <a className="text-brand hover:underline" href="https://wa.me/919000000000">
                WhatsApp
              </a>
              <a className="text-brand hover:underline" href="#">
                Instagram
              </a>
              <a className="text-brand hover:underline" href="#">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-xl border bg-white overflow-hidden">
            {/* Map placeholder */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/office-map.png" alt="Office map placeholder" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
