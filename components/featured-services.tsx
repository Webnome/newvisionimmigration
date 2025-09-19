import Link from "next/link"
import { IndianServices } from "./indian-services"
import { CoachingSupport } from "./coaching-support"

const visaCats = ["Tourist", "Study", "Family", "Work/Sponsor"]

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
        <IndianServices />

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
        <CoachingSupport />
      </div>
    </section>
  )
}
