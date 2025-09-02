import type React from "react"
export const metadata = { title: "Style Guide | Newvisionimmi" }

export default function StyleGuide() {
  return (
    <div className="section">
      <div className="container-balanced space-y-8">
        <h1 className="font-heading text-3xl font-semibold">Style Guide</h1>
        <section>
          <h2 className="font-heading text-xl font-semibold">Colors (5 total)</h2>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { name: "Brand", className: "bg-brand" },
              { name: "Accent", className: "bg-accent" },
              { name: "Secondary", className: "bg-secondary" },
              { name: "Ink", className: "", style: { backgroundColor: "var(--color-ink)" } as React.CSSProperties },
              { name: "Surface", className: "bg-surface text-ink border" },
            ].map((c) => (
              <div key={c.name} className={`rounded-lg p-4 text-white ${c.className || ""}`} style={c.style}>
                <div className="font-medium">{c.name}</div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold">Typography</h2>
          <p className="mt-2">
            <span className="font-heading font-bold">Headings:</span> Poppins (600–800)
          </p>
          <p>
            <span className="font-bold">Body:</span> Inter (400–500)
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold">Buttons</h2>
          <div className="mt-3 flex gap-3">
            <button className="px-4 py-2 rounded-md btn-gradient">Primary CTA</button>
            <button className="px-4 py-2 rounded-md bg-secondary text-white">Secondary</button>
            <button className="px-4 py-2 rounded-md border border-brand text-brand">Outline</button>
          </div>
        </section>
      </div>
    </div>
  )
}
