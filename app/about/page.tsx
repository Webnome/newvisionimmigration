export const metadata = {
  title: "About Us | Newvisionimmi",
  description: "Our journey, team, and values: transparency, results, dedicated support.",
}

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-balanced space-y-10">
        <header>
          <h1 className="font-heading text-3xl font-semibold">About Us</h1>
          <p className="mt-2 text-ink/80">Helping Students & Families Move Forward.</p>
        </header>

        <section>
          <h2 className="font-heading text-2xl font-semibold">Our Journey</h2>
          <ol className="mt-3 space-y-2 text-sm">
            <li>
              <strong>2015</strong> — Founded with a focus on transparent guidance.
            </li>
            <li>
              <strong>2018</strong> — Introduced IELTS/PTE training.
            </li>
            <li>
              <strong>2022</strong> — Expanded to more destination countries.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold">Team</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border bg-white p-4 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/team-member.png?height=160&width=160&query=Team%20Member%20${i + 1}`}
                  alt={`Team Member ${i + 1}`}
                  className="mx-auto rounded-full"
                />
                <div className="mt-2 font-medium">Team Member {i + 1}</div>
                <div className="text-sm text-ink/70">Consultant</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold">Why Choose Us</h2>
          <ul className="mt-2 list-disc pl-5 text-ink/80">
            <li>Transparency</li>
            <li>Results-driven approach</li>
            <li>Dedicated support</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
