"use client"

import { useState } from "react"

const faqs = [
  {
    q: "How long does a visa process take?",
    a: "Timelines vary by country and category. We provide an indicative timeline after assessing your profile.",
  },
  {
    q: "Is Spoken English only in-person?",
    a: "Yes. We run classroom batches for Beginner, Intermediate, and Advanced levels.",
  },
  {
    q: "Do you guarantee approvals?",
    a: "We provide documentation guidance; final decisions rest with immigration authorities.",
  },
{
    q: "What services do you offer?",
    a: "We specialize in documentation assistance for various government services, including IELTS/PTE and spoken support, Indian Police Clearance Certificate (PCC), Indian Passport Renewal, OCI (Overseas Citizen of India) Card, and Indian E-visa.",
  },
  {
    q: "Do you help with IELTS/PTE and spoken support?",
    a: "Yes, we assist with documentation and guidance related to IELTS/PTE and spoken preparation.",
  },
  {
    q: "Can you assist with Indian Police Clearance Certificate (PCC)?",
    a: "We guide you through the documentation process for obtaining an Indian PCC.",
  },
  {
    q: "Do you provide help with Indian Passport Renewal?",
    a: "Yes, we assist in preparing and organizing the documents required for Indian Passport Renewal.",
  },
  {
    q: "Can you help with OCI (Overseas Citizen of India) Card applications?",
    a: "We provide documentation support and guidance for OCI card applications.",
  },
  {
    q: "Do you assist with Indian E-visa applications?",
    a: "Yes, we guide applicants through the required documentation for Indian E-visa applications.",
  },
]

export function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="section">
      <div className="container-balanced">
        <h3 className="font-heading text-2xl font-semibold text-center">FAQs</h3>
        <div className="mt-6 divide-y border rounded-xl bg-white">
          {faqs.map((f, idx) => (
            <button
              key={f.q}
              className="w-full text-left p-4 focus:outline-none focus-visible:ring-2"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <div className="font-medium">{f.q}</div>
              {open === idx && <p className="mt-2 text-ink/80">{f.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
