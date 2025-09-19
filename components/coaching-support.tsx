import Link from "next/link"

const coaching = [
  { title: "IELTS Academic", href: "/coaching#ielts-academic" },
  { title: "IELTS General", href: "/coaching#ielts-general" },
  { title: "PTE Academic", href: "/coaching#pte" },
  { title: "Spoken English (In-person)", href: "/coaching#spoken" },
]

export function CoachingSupport() {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      {/* Left side → Image */}
      <div className="flex justify-center items-start">
        <img
          src="/ielts-score-8-0.png"
          alt="Coaching illustration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right side → List */}
      <div>
        <h3
          className="font-heading text-xl md:text-2xl font-semibold"
          style={{ color: "#1E2E5A" }}
        >
          Coaching
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-3">
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
    </div>
  )
}
