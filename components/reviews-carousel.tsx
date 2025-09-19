"use client"

import { useEffect, useState } from "react"

const reviews = [
  { name: "Aarav (Canada)", rating: 5, text: "Smooth documentation and timely updates. Highly recommended!" },
  { name: "Meera (IELTS 7.5)", rating: 5, text: "Great strategies and practice plans. Scored beyond my target." },
  { name: "Dylan (UK)", rating: 5, text: "Clear guidance for my work visa process." },
]

export function ReviewsCarousel() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 3500)
    return () => clearInterval(t)
  }, [])

  const r = reviews[i]

  return (
    <section className="section bg-brand">
      <div className="container-balanced">
        <h3 className="font-heading text-2xl font-semibold text-center text-white">What Clients Say</h3>
        <div className="mt-6 mx-auto max-w-2xl rounded-xl border p-6 text-center bg-white shadow-lg">
          <div className="text-accent mb-1" aria-label={`${r.rating} star rating`}>
            {"★★★★★".slice(0, r.rating)}
          </div>
          <p className="leading-relaxed">{r.text}</p>
          <div className="mt-3 text-sm text-ink/70">{r.name}</div>
        </div>
      </div>
    </section>
  )
}
