"use client"

import type React from "react"

import { useState } from "react"

export default function ServiceInquiryForm({ service }: { service?: string }) {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service") || service || "",
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      })
      if (!res.ok) throw new Error("Failed to send inquiry")
      setSent(true)
      form.reset()
    } catch (err: any) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm font-medium text-[#1E2E5A]">
          Full name
        </label>
        <input id="name" name="name" required className="h-10 rounded-md border bg-white px-3 text-sm" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium text-[#1E2E5A]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-10 rounded-md border bg-white px-3 text-sm"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="phone" className="text-sm font-medium text-[#1E2E5A]">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            inputMode="tel"
            required
            className="h-10 rounded-md border bg-white px-3 text-sm"
          />
        </div>
      </div>
      <div className="grid gap-1">
        <label htmlFor="service" className="text-sm font-medium text-[#1E2E5A]">
          Service
        </label>
        <select
          id="service"
          name="service"
          defaultValue={service || ""}
          className="h-10 rounded-md border bg-white px-3 text-sm"
        >
          <option value="">{service ? `Selected: ${service}` : "Select a service"}</option>
          <option>PCC (Police Clearance Certificate)</option>
          <option>Indian Passport</option>
          <option>OCI Card</option>
          <option>Other Indian Services</option>
        </select>
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm font-medium text-[#1E2E5A]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="rounded-md border bg-white px-3 py-2 text-sm"
          placeholder="Tell us about your case (country, timeline, etc.)"
        />
      </div>
      <div aria-live="polite" className="text-sm">
        {error ? <p className="text-red-600">{error}</p> : null}
        {sent ? <p className="text-green-700">Thanks! We’ll get back to you shortly.</p> : null}
      </div>
      <div className="flex flex-wrap gap-3 pt-1">
        <button
          type="submit"
          disabled={loading}
          className="h-10 rounded-md bg-[#0061FF] hover:bg-[#1E90FF] text-white px-4 text-sm disabled:opacity-60"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
        <a
          href="/start-application?service=indian"
          className="h-10 rounded-md border px-4 text-sm text-[#1E2E5A] hover:text-[#0061FF]"
        >
          Start Application
        </a>
      </div>
    </form>
  )
}
