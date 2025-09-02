import Link from "next/link"

const countries = [
  { name: "Australia", slug: "australia" },
  { name: "Singapore", slug: "singapore" },
  { name: "Canada", slug: "canada" },
  { name: "United Kingdom", slug: "united-kingdom" },
  { name: "Cyprus", slug: "cyprus" },
]

export const metadata = {
  title: "Visa Services | Newvisionimmi",
  description: "Overview of visa services by country including Tourist, Study, Family, and Work/Sponsor.",
}

export default function VisaLanding() {
  return (
    <div className="section">
      <div className="container-balanced">
        <h1 className="font-heading text-3xl font-semibold">Visa Services</h1>
        <p className="mt-2 text-ink/80">
          Explore visa options and documentation guidance. Final decisions rest with respective authorities.
        </p>
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {countries.map((c) => (
            <Link
              key={c.slug}
              href={`/visa/${c.slug}`}
              className="rounded-xl border p-5 hover:border-brand transition-colors"
            >
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-ink/70 mt-1">Tourist • Study • Family • Work/Sponsor</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
