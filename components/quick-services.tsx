import Link from "next/link"

const tiles = [
  { title: "IELTS", href: "/coaching#ielts-academic", color: "bg-brand" },
  { title: "PTE", href: "/coaching#pte", color: "bg-secondary" },
  { title: "Spoken English", href: "/coaching#spoken", color: "bg-accent" },
  { title: "Visa by Country", href: "/visa", color: "bg-brand" },
]

export function QuickServices() {
  return (
    <section className="section">
      <div className="container-balanced">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tiles.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className={`rounded-xl p-5 text-white shadow hover:scale-[1.01] transition-transform ${t.color}`}
            >
              <h3 className="font-heading font-semibold">{t.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
