"use client"

import { useRef, useState } from "react"

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const message = messageRef.current?.value

    if (!name || !email || !message) {
      alert("Please fill in all fields.")
      return
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_PUBLIC_URL}/contact-query/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Name: name, Email: email, Message: message }),
      })

      if (response.ok) {
        setSent(true)
        if (nameRef.current) nameRef.current.value = ""
        if (emailRef.current) emailRef.current.value = ""
        if (messageRef.current) messageRef.current.value = ""
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
      alert("An error occurred. Please try again later.")
    }
  }

  return (
    <form
      className="mt-6 space-y-4 rounded-xl border bg-white p-5"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input required className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Your name" ref={nameRef} />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
          placeholder="you@example.com"
          ref={emailRef}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          rows={5}
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
          placeholder="How can we help?"
          ref={messageRef}
        />
      </div>
      <button type="submit" className="px-4 py-2 rounded-md bg-secondary text-white">
        Send
      </button>
      {sent && <p className="text-sm text-green-700 mt-2">Thanks! We received your message.</p>}
    </form>
  )
}
