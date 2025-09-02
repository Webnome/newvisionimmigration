import type { Metadata } from "next"

const visaTypes = [
  { title: "Tourist", desc: "Short stays for tourism and visits." },
  { title: "Study", desc: "Enroll in recognized institutions." },
  { title: "Family", desc: "Join or accompany eligible family members." },
  { title: "Work/Sponsor", desc: "Employer-sponsored or skilled work categories." },
]

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const name = params.country
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ")
  return {
    title: `${name} Visa Services | Newvisionimmi`,
    description: `Eligibility, documents, timelines and guidance for ${name} visas.`,
  }
}

export default function CountryPage({ params }: { params: { country: string } }) {
  const name = params.country
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ")
  return (
    <div className="section">
      <div className="container-balanced">
        <h1 className="font-heading text-3xl font-semibold">{name} Visa Services</h1>
        <p className="mt-2 text-ink/80">
          Overview of visa types with eligibility, required documents, and indicative timelines.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {visaTypes.map((v) => (
            <div key={v.title} className="rounded-xl border p-5 bg-white">
              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-sm text-ink/80 mt-1">{v.desc}</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-ink/80 space-y-1">
                <li>Eligibility: profile-based evaluation</li>
                <li>Docs: passports, photos, proofs</li>
                <li>Timelines: subject to authority workload</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <a href="/start-application" className="px-3 py-2 rounded-md bg-brand text-white">
                  Check Eligibility
                </a>
                <a href="/start-application" className="px-3 py-2 rounded-md border border-brand text-brand">
                  Start Application
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/70">
          Compliance: We provide documentation guidance; final decisions rest with immigration authorities.
        </p>
      </div>
    </div>
  )
}
