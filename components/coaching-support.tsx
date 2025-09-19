import Link from "next/link"

const coaching = [
  { title: "IELTS Academic", href: "/coaching#ielts-academic" },
  { title: "IELTS General", href: "/coaching#ielts-general" },
  { title: "PTE Academic", href: "/coaching#pte" },
  { title: "Spoken English (In-person)", href: "/coaching#spoken" },
]

export function CoachingSupport() {
  return (
    <div>
      <h3 className="font-heading text-xl md:text-2xl font-semibold" style={{ color: "#1E2E5A" }}>
        Coaching
      </h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {coaching.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-xl border p-4 hover:border-[#0061FF] transition-colors bg-white"
          >
            {c.title}
          </Link>
        ))}
      </div>
    </div>
  )
}