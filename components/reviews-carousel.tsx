"use client"

import { useEffect, useState } from "react"

// const reviews = [
//   { name: "Aarav (Canada)", rating: 5, text: "Smooth documentation and timely updates. Highly recommended!" },
//   { name: "Meera (IELTS 7.5)", rating: 5, text: "Great strategies and practice plans. Scored beyond my target." },
//   // { name: "Dylan (UK)", rating: 5, text: "Clear guidance for my work visa process." },
// ]

const reviews = [
  { name: "Rahul Sharma (IELTS 8, Canada)", rating: 5, text: "Got 8 bands in IELTS with their coaching. Canada study visa approved easily. Highly recommended!" },
  { name: "Priya Gupta (PTE 79+, Canada)", rating: 5, text: "Best PTE training institute. Achieved 79+ score and Canada visa. Thanks!" },
  { name: "Karan Singh (IELTS 7.5, Canada)", rating: 5, text: "IELTS coaching was excellent. 7.5 bands achieved and Canada college visa approved." },
  { name: "Simran Kaur (PTE, Canada)", rating: 5, text: "PTE guidance helped me score well. Canada study visa in first attempt. Great institute!" },
  { name: "Rohit Kumar (IELTS 8, Canada)", rating: 5, text: "IELTS coaching made it easy. 8 bands and Canada study permit approved." },
  { name: "Neha Sharma (PTE, Canada)", rating: 5, text: "Canada student visa after PTE coaching. Institute is very supportive." },
  { name: "Aman Goyal (IELTS 8, Canada)", rating: 5, text: "IELTS 8 bands with their help. Canada study visa in 2 weeks. Amazing!" },
  { name: "Gurleen Kaur (PTE, Canada)", rating: 5, text: "PTE training was excellent. Canada college visa approved quickly. Thanks!" },
  { name: "Vikram Singh (IELTS, Canada)", rating: 5, text: "Canada study visa after IELTS coaching. Institute has best trainers." },
  { name: "Jaspreet Kaur (IELTS, Canada)", rating: 5, text: "Best IELTS institute ever. Canada university visa approved easily. Recommended!" },
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
