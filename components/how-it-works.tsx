const steps = [
  { n: "1", title: "Tell us your goal" },
  { n: "2", title: "We prepare & guide" },
  { n: "3", title: "You succeed" },
]

export function HowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-[#F5F7FA]">
      <div className="container-balanced">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1E2E5A] text-center">How It Works</h2>

        <div className="mt-6 md:mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border bg-white p-5 md:p-6 shadow-sm transition hover:shadow-md">
              <div className="text-[#0061FF] text-2xl md:text-3xl font-bold">{s.n}</div>
              <div className="mt-2 font-medium text-[#1E2E5A]">{s.title}</div>
              <p className="mt-1 text-sm text-[#606F85]">
                Clear steps with guided support at every stage—fast, transparent, and reliable.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
