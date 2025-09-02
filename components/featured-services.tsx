import Link from "next/link"

const visaCats = ["Tourist", "Study", "Family", "Work/Sponsor"]
const coaching = [
  { title: "IELTS Academic", href: "/coaching#ielts-academic" },
  { title: "IELTS General", href: "/coaching#ielts-general" },
  { title: "PTE Academic", href: "/coaching#pte" },
  { title: "Spoken English (In-person)", href: "/coaching#spoken" },
]

export function FeaturedServices() {
  return (
    <section id="featured-services" className="section bg-[#F5F7FA]">
      <div className="container-balanced grid gap-10 md:grid-cols-2">
        {/* Intro */}
        <div className="md:col-span-2 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#606F85" }}>
            Featured Services
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: "#1E2E5A" }}>
            End‑to‑End Visa & Coaching Support
          </h2>
          <p className="mt-2 text-base md:text-lg" style={{ color: "#606F85" }}>
            New Vision Immigration helps you choose the right visa pathway (Tourist, Study, Family, Work/Sponsor) and
            prepares you with expert IELTS, PTE, and Spoken English coaching—so your next move is simple and
            stress‑free.
          </p>
        </div>

        {/* Indian Services */}
        <div className="md:col-span-2 order-first md:order-first md:-mt-2" id="indian-services-home">
          <h3 className="font-heading text-xl md:text-2xl font-semibold" style={{ color: "#1E2E5A" }}>
            Indian Services
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border p-5 bg-white">
              <h4 className="font-semibold text-[#1E2E5A]">Indian Police Clearance Certificate (PCC)</h4>
              <p className="mt-2 text-sm text-[#606F85]">
                Who needs it, required documents, timelines, and our end‑to‑end guidance.
              </p>
              <Link href="/services/india/pcc" className="mt-3 inline-flex text-[#0061FF] hover:underline">
                Learn more →
              </Link>
            </div>
            <div className="rounded-xl border p-5 bg-white">
              <h4 className="font-semibold text-[#1E2E5A]">Indian Passport</h4>
              <p className="mt-2 text-sm text-[#606F85]">
                Adult, Minor, New Born, Surrender, Lost/Damaged — what to prepare and how we assist.
              </p>
              <Link href="/services/india/passport" className="mt-3 inline-flex text-[#0061FF] hover:underline">
                Learn more →
              </Link>
            </div>
            <div className="rounded-xl border p-5 bg-white">
              <h4 className="font-semibold text-[#1E2E5A]">OCI Card</h4>
              <p className="mt-2 text-sm text-[#606F85]">
                New OCI, lost/damaged replacement, and address/occupation updates with proper specs.
              </p>
              <Link href="/services/india/oci" className="mt-3 inline-flex text-[#0061FF] hover:underline">
                Learn more →
              </Link>
            </div>
            <div className="rounded-xl border p-5 bg-white">
              <h4 className="font-semibold text-[#1E2E5A]">Other Indian Services</h4>
              <p className="mt-2 text-sm text-[#606F85]">
                Power of Attorney, Affidavits, Certificates, and Driver License Verification guidance.
              </p>
              <Link href="/services/india/other" className="mt-3 inline-flex text-[#0061FF] hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        {/* Visa Categories */}
        <div>
          <h3 className="font-heading text-xl md:text-2xl font-semibold" style={{ color: "#1E2E5A" }}>
            Visa Categories
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {visaCats.map((v) => (
              <div key={v} className="rounded-xl border p-4 hover:border-[#0061FF] transition-colors bg-white">
                {v}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/visa" className="text-[#0061FF] font-medium hover:underline">
              Explore Visa Services →
            </Link>
          </div>
        </div>

        {/* Coaching */}
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
      </div>
    </section>
  )
}
