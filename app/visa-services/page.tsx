import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const countries = [
  { slug: "australia", label: "Australia" },
  { slug: "singapore", label: "Singapore" },
  { slug: "canada", label: "Canada" },
  { slug: "united-kingdom", label: "United Kingdom" },
  { slug: "cyprus", label: "Cyprus" },
]

export const metadata = {
  title: "Visa Services | Newvisionimmi",
  description: "Guided documentation for Tourist, Study, Family, and Work/Sponsor visas.",
}

export default function VisaServicesPage() {
  return (
    <div className="section">
      <div className="container-balanced">
        <h1 className="font-heading text-3xl">Visa Services</h1>
        <p className="mt-2 text-ink/70">Choose a destination to see categories, eligibility, and timelines.</p>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5 mt-6">
          {countries.map((c) => (
            <Card key={c.slug} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-brand">{c.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-ink/70">Tourist, Study, Family, Work/Sponsor</p>
                <Link className="underline text-brand mt-3 inline-block" href={`/visa-services/${c.slug}`}>
                  Open
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
