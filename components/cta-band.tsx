import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-balanced rounded-2xl bg-brand text-white p-8 md:p-12 text-center">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold">Ready to begin?</h3>
        <p className="mt-2 text-white/90">Start your application today.</p>
        <div className="mt-5">
          <Link
            href="/start-application"
            className="px-6 py-3 rounded-md bg-white text-brand font-medium hover:opacity-90"
          >
            Start Application
          </Link>
        </div>
      </div>
    </section>
  )
}
