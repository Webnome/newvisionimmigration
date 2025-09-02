export const metadata = {
  title: "Testimonials | Newvisionimmi",
  description: "Client reviews with ratings and stories.",
}

const items = Array.from({ length: 8 }).map((_, i) => ({
  name: `Client ${i + 1}`,
  country: ["Canada", "UK", "Australia", "Singapore"][i % 4],
  rating: 5,
  text: "Professional team and clear guidance throughout my journey.",
}))

export default function TestimonialsPage() {
  return (
    <div className="section">
      <div className="container-balanced">
        <h1 className="font-heading text-3xl font-semibold">Testimonials</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((t, idx) => (
            <div key={idx} className="rounded-xl border bg-white p-5">
              <div className="text-accent" aria-hidden>
                ★★★★★
              </div>
              <p className="mt-2">{t.text}</p>
              <div className="mt-2 text-sm text-ink/70">
                {t.name} — {t.country}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
