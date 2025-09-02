import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const data = {
  australia: {
    title: "Australia",
    intro: "Explore Australian visa pathways with clear guidance and documentation support.",
  },
  singapore: {
    title: "Singapore",
    intro: "Business-friendly hub with efficient visa categories for work and study.",
  },
  canada: {
    title: "Canada",
    intro: "Study and immigration pathways with high approval prospects when well-prepared.",
  },
  "united-kingdom": {
    title: "United Kingdom",
    intro: "UK visas for study, tourism, and sponsorship routes.",
  },
  cyprus: {
    title: "Cyprus",
    intro: "Tourist and study visas with streamlined documentation.",
  },
} as const

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const c = data[params.country as keyof typeof data]
  if (!c) return { title: "Visa Services | Newvisionimmi" }
  return { title: `${c.title} Visa Services | Newvisionimmi`, description: c.intro }
}

export default function CountryPage({ params }: { params: { country: string } }) {
  const c = data[params.country as keyof typeof data]
  if (!c) return notFound()

  const visaTypes = [
    { name: "Tourist", desc: "Short-term travel with clear itinerary and financials." },
    { name: "Study", desc: "University/college admission, funds, and SOP guidance." },
    { name: "Family", desc: "Visit or join family with relationship proofs." },
    { name: "Work/Sponsor", desc: "Employer sponsorship and skill-based pathways." },
  ]

  return (
    <div className="section">
      <div className="container-balanced">
        <h1 className="font-heading text-3xl">{c.title} – Visa Services</h1>
        <p className="mt-2 text-ink/70">{c.intro}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {visaTypes.map((v) => (
            <div className="rounded-xl border p-5" key={v.name}>
              <h3 className="font-medium text-brand">{v.name}</h3>
              <p className="text-sm text-ink/70 mt-1">{v.desc}</p>
              <ul className="list-disc pl-5 mt-3 text-sm text-ink/80">
                <li>Eligibility: Age, intent, funding, ties.</li>
                <li>Documents: Passport, photos, financials, forms.</li>
                <li>Timelines: Vary by season and workload.</li>
              </ul>
              <div className="mt-3 flex gap-2">
                <Button asChild variant="outline">
                  <Link href="/start-application">Check Eligibility</Link>
                </Button>
                <Button asChild className="btn-gradient">
                  <Link href="/start-application">Start Application</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="font-heading text-2xl">FAQs</h2>
          <Accordion type="single" collapsible className="mt-2">
            <AccordionItem value="1">
              <AccordionTrigger>Do you guarantee approvals?</AccordionTrigger>
              <AccordionContent>
                We provide documentation guidance; final decisions rest with immigration authorities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>How long is the process?</AccordionTrigger>
              <AccordionContent>
                It depends on category and time of year. We share an indicative timeline after profile assessment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="text-xs text-ink/60 mt-3">
            Compliance: We provide documentation guidance; final decisions rest with immigration authorities.
          </p>
        </div>
      </div>
    </div>
  )
}
