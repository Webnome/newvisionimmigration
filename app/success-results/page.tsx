"use client"

import { useMemo, useState } from "react"
import Image from "next/image"

type Item = {
  id: string
  category: "Visas" | "IELTS/PTE"
  caption: string
  src: string
}

const items: Item[] = [
  { id: "1", category: "Visas", caption: "Canada Study Visa Approved", src: "/canada-study-visa-approval.png" },
  { id: "2", category: "Visas", caption: "UK Family Visa Approved", src: "/uk-family-visa-approval.png" },
  { id: "3", category: "IELTS/PTE", caption: "IELTS Band 8 Achieved", src: "/ielts-band-8-scorecard.png" },
  { id: "4", category: "IELTS/PTE", caption: "PTE 79+ Achieved", src: "/pte-79-scorecard.png" },
]

export default function SuccessResultsPage() {
  const [filter, setFilter] = useState<"All" | "Visas" | "IELTS/PTE">("All")
  const [active, setActive] = useState<Item | null>(null)

  const filtered = useMemo(() => (filter === "All" ? items : items.filter((i) => i.category === filter)), [filter])

  const counts = useMemo(() => {
    return {
      visas: items.filter((i) => i.category === "Visas").length,
      exams: items.filter((i) => i.category === "IELTS/PTE").length,
    }
  }, [])

  return (
    <div className="section">
      <div className="container-balanced">
        <header className="mb-6">
          <h1 className="font-heading text-3xl font-semibold">Success Results</h1>
          <p className="text-ink/80 mt-2">Real approvals and scorecards from our clients.</p>
          <div className="mt-3 text-sm text-ink/70">
            {counts.visas} Visas Approved • {counts.exams} IELTS/PTE Achievers
          </div>
        </header>

        <div className="flex gap-2">
          {(["All", "Visas", "IELTS/PTE"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-md text-sm border ${filter === f ? "bg-brand text-white border-brand" : "hover:bg-brand/5 border-brand/30"}`}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((it) => (
            <button
              key={it.id}
              className="group relative overflow-hidden rounded-xl border bg-white"
              onClick={() => setActive(it)}
              aria-label={`Open ${it.caption}`}
            >
              <Image
                src={it.src || "/placeholder.svg"}
                alt={it.caption}
                width={900}
                height={600}
                className="w-full h-auto transition-transform group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-ink/70 text-white text-sm p-2">{it.caption}</div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {active && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/80 grid place-items-center p-4"
            onClick={() => setActive(null)}
          >
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={active.src || "/placeholder.svg"}
                alt={active.caption}
                width={1600}
                height={1000}
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-3 flex items-center justify-between text-white">
                <div className="text-sm">{active.caption}</div>
                <button
                  onClick={() => setActive(null)}
                  className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
