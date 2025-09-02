"use client"

import { useState } from "react"

const items = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=600&width=900&query=Success%20Item%20${i + 1}`,
  caption: `Result ${i + 1}`,
  tag: i % 3 === 0 ? "Visas" : i % 3 === 1 ? "IELTS/PTE" : "Spoken English",
}))

export function Gallery() {
  const [filter, setFilter] = useState<"All" | "Visas" | "IELTS/PTE" | "Spoken English">("All")
  const [active, setActive] = useState<number | null>(null)

  const filtered = items.filter((it) => filter === "All" || it.tag === filter)
  const a = active != null ? filtered[active] : null

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", "Visas", "IELTS/PTE", "Spoken English"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`rounded-full border px-3 py-1 text-sm ${filter === t ? "bg-brand text-white border-brand" : "hover:border-brand"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-3">
        {filtered.map((it, idx) => (
          <button key={it.id} onClick={() => setActive(idx)} className="rounded-lg overflow-hidden border bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.src || "/placeholder.svg"} alt={it.caption} className="w-full h-40 object-cover" />
            <div className="p-2 text-sm">{it.caption}</div>
          </button>
        ))}
      </div>

      {a && (
        <div className="fixed inset-0 z-50 bg-black/60 grid place-items-center p-4" onClick={() => setActive(null)}>
          <div className="max-w-3xl w-full bg-white rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.src || "/placeholder.svg"} alt={a.caption} className="w-full object-contain max-h-[70vh]" />
            <div className="p-3 flex items-center justify-between">
              <div className="text-sm">{a.caption}</div>
              <button onClick={() => setActive(null)} className="px-3 py-1 rounded-md border">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
